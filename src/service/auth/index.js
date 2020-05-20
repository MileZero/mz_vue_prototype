/* eslint-disable */
import Vue from 'vue';
import store from '@/store/store';
import Auth0Lock from 'auth0-lock';
import { loginMvb, logoutMvb, getOrg } from '@/service/auth/mvbAuth';

let instance;

/** Returns the current instance of the SDK */
export const getInstance = () => instance;

/** Creates an instance of the Auth0 SDK.
  *  If one has already been created, it returns that instance
 */
export const useAuth0 = ({
  redirectUri = window.location.origin,
  ...AuthOptions
}) => {
  if (instance) return instance;

  // The 'instance' is simply a Vue object
  instance = new Vue({
    data() {
      return {
        loading: true,
        isAuthenticated: false,
        user: {},
        org: {},
        authToken: '',
        auth0Client: null,
        popupOpen: false,
        error: null,
      };
    },
    methods: {
      /** Logs the user out and removes their session on the authorization server */
      async logout(o) {
        await logoutMvb();
        return this.auth0Client.logout(o);
      },
    },
    /** Use this lifecycle method to instantiate the SDK client */
    async created() {
      // Create a new instance of the SDK client using members of the given options object
      this.auth0Client = instance || new Auth0Lock(AuthOptions.clientId, AuthOptions.domain, AuthOptions.options);
      if (!this.isAuthenticated) this.auth0Client.show();
      this.auth0Client.on("authenticated", (authResult) => {
        this.authToken = `Bearer ${authResult.idToken}`;
        this.auth0Client.getUserInfo(authResult.accessToken, async (error, userProfile) => {
          if (error) return error;
          this.user = userProfile;
          await loginMvb(
            authResult.accessToken,
            authResult.idToken,
            authResult.scope,
            authResult.tokenType,
            authResult.state
          );
          this.org = await getOrg(userProfile.organization.Alabo.orgId);
          if (this.org.org) {
            this.isAuthenticated = true;
            store.commit('Hub/setHub', this.org.facilities[0]);
          }
          this.loading = false;
          this.auth0Client.hide();
        });
      });
    },
  });

  return instance;
};

// Create a simple Vue plugin to expose the wrapper object throughout the application
export const Auth0Plugin = {
  install(Vue, AuthOptions) {
    Vue.prototype.$auth = useAuth0(AuthOptions);
  },
};
