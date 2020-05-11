/* eslint-disable */
import Vue from 'vue';
import Auth0Lock from 'auth0-lock';
import ConnectionOptions from '../local-connection.json';

export const getParams = (url) => {
  var params = {};
  var parser = document.createElement('a');
  parser.href = url;
  var query = parser.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
}

/** Calls mvb to authenticate and set cookie */
export const loginMvb = async (instance, state) => {
  const formBody = {
    access_token: await instance.getTokenSilently(),
    id_token: (await instance.getIdTokenClaims()).__raw,
    scope: instance.auth0Client.options.scope,
    /** ID Token Expiration in seconds, defined in Auth0 Application Management */
    expires_in: 36000,
    token_type: instance.auth0Client.options.redirect_uri ? 'code' : 'token',
    state
  };
  const body = Object.keys(formBody).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(formBody[key]);
  }).join('&');
  
  try {
    let response = await(await fetch(`${ConnectionOptions.mvbUrl}/milevision/authenticate`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      mode: 'cors',
      body
    })).json();
    return response;
  } catch (e) {
    return e;
  }
}

const logoutMvb = async () => {
  let response = await(await fetch(`${ConnectionOptions.mvbUrl}/milevision/logout`,
  {
    method: 'GET',
    mode: 'no-cors',
  })).json();
  return response;
}

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
        auth0Client: null,
        popupOpen: false,
        error: null,
      };
    },
    methods: {
      /** Authenticates the user using a popup window */
      // async loginWithPopup(o) {
      //   this.popupOpen = true;

      //   try {
      //     await this.auth0Client.loginWithPopup(o);
      //   } catch (e) {
      //     // eslint-disable-next-line
      //     console.error(e);
      //   } finally {
      //     this.popupOpen = false;
      //   }

      //   this.user = await this.auth0Client.getUser();
      //   this.isAuthenticated = true;
      // },
      /** Handles the callback when logging in using a redirect */
      // async handleRedirectCallback() {
      //   this.loading = true;
      //   try {
      //     await this.auth0Client.handleRedirectCallback();
      //     this.user = await this.auth0Client.getUser();
      //     this.isAuthenticated = true;
      //   } catch (e) {
      //     this.error = e;
      //   } finally {
      //     this.loading = false;
      //   }
      // },
      /** Authenticates the user using the redirect method */
      // loginWithRedirect(o) {
      //   return this.auth0Client.loginWithRedirect(o);
      // },
      /** Returns all the claims present in the ID token */
      // getIdTokenClaims(o) {
      //   return this.auth0Client.getIdTokenClaims(o);
      // },
      /** Returns the access token. If the token is invalid or missing, a new one is retrieved */
      // getTokenSilently(o) {
      //   return this.auth0Client.getTokenSilently(o);
      // },
      /** Gets the access token using a popup window */
      // getTokenWithPopup(o) {
      //   return this.auth0Client.getTokenWithPopup(o);
      // },
      /** Logs the user out and removes their session on the authorization server */
      async logout(o) {
        // await logoutMvb();
        return this.auth0Client.logout(o);
      },
    },
    /** Use this lifecycle method to instantiate the SDK client */
    async created() {
      // Create a new instance of the SDK client using members of the given options object
      // this.auth0Client = await createAuth0Client({
      //   domain: options.domain,
      //   client_id: options.clientId,
      //   audience: options.audience,
      //   redirect_uri: redirectUri,
      //   scope: options.scope,
      // });
      this.auth0Client = instance || new Auth0Lock(AuthOptions.clientId, AuthOptions.domain, AuthOptions.options);
      if (!this.isAuthenticated) this.auth0Client.show();
      this.auth0Client.on("authenticated", (authResult) => {
        this.auth0Client.getUserInfo(authResult.accessToken, (error, userProfile) => {
          if (error) return error;
          this.auth0Client.hide();
          this.user = userProfile;
          this.isAuthenticated = true;
          this.loading = false;
          AuthOptions.onRedirectCallback(appState);
        });
      });
      // try {
        // If the user is returning to the app after authentication...
        // handle the redirect and retrieve tokens
        // const { appState } = await this.auth0Client.handleRedirectCallback();
        // Notify subscribers that the redirect callback has happened, passing the appState
        // (useful for retrieving any pre-authentication state)
      // } catch (e) {
      //   this.error = e;
      // } finally {
      //   // Initialize our internal authentication state
      //   this.isAuthenticated = await this.auth0Client.isAuthenticated();
      //   this.user = await this.auth0Client.getUser();
      //   this.loading = false;
      // }
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
