<template>
  <div
    id="demo" class="collapsed main-navbar-section dropdown"
  >
    <div class="demo">
      <div class="container">
        <!-- <vue-navigation-bar
          :options="navbarOptions"
          
          @vnb-item-clicked="vnbItemClicked"
          
        >
        </vue-navigation-bar> -->
        
        <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()"></a>
            <router-link :to="{name: Dashboard}">Dashboard
            </router-link>
            <!-- <router-link :to="{name: 'RouteMap'}">RouteMap</router-link>
            <router-link :to="{name: 'DriverStatus' }">DriverStatus</router-link> --> 
            <!-- <router-link :to="{name: "Dasboard"}" -->
      
        <router-view />
      </div>
      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
      />
      <p align="right">
      <dropdown
      @setSelectedOption="setCurrentSelectedOption"
      />
      </p>
    </div>
  </div>
</template>

<script>
const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}
export default {
  name: 'App',
  data () {
    return {
      menu: [
        {
          header: true,
          title: 'MileZero',
          icon: '',
          hiddenOnCollapse: false
        },
        {
          href: '/',
          title: 'Monitor',
          icon: 'fa fa-map-marker',
          child: [
            {
              href: '/Monitor/Dashboard',
              title: 'Dashboard'
            },
            {
              href: '/Monitor/Route-Map',
              title: 'Route-Map'
            },
            {
              href: '/Monitor/Driver-status',
              title: 'Driver-Status'
            }
          ]
        },
        {
          href: '/Manage',
          title: 'Manage',
          icon: 'fa fa-meetup',
          child: [
            {
              href: '/Manage/Metrics',
              title: 'Metrics'
            },
            {
              href: '/Manage/Orders',
              title: 'Orders'
            },
            {
              href: '/Manage/Sortation',
              title: 'Sortation'
            },
            {
              href: '/Manage/Routes',
              title: 'Routes'
            },   
            {
              href: '/Manage/Dispatch',
              title: 'Dispatch'
            },
            {
              href: '/Manage/Manifests',
              title: 'Manifests'
            }    
          ]
        },
        {
          href: '/Review',
          title: 'Review',
          icon: 'fa fa-bar-chart',
          child: [
            {
              href: '/Review/Analytics',
              title: 'Analytics'
            },
            {
              href: '/Review/Loadscans',
              title: 'Loadscans'
            },
            {
              href: '/Review/Undeliverables',
              title: 'Undeliverables'
            },
            {
              href: '/Review/POD',
              title: 'POD'
            },   
            {
              href: '/Review/History',
              title: 'History'
            },
            {
              href: '/Review/Messages',
              title: 'Messages'
            },
            {
              href: '/Review/Tasks',
              title: 'Tasks'
            }
          ]
        },
        {
          href: '/Configure',
          title: 'Configure',
          icon: 'fa fa-database',
          child: [
            {
              href: '/Configure/Workforce',
              title: 'Workforce'
            },
            {
              href: '/Configure/Fleet',
              title: 'Fleet'
            },
            {
              href: '/Configure/Warehouse',
              title: 'Warehouse'
            }
          ]
        },
        {
          href: '/',
          title: 'Search',
          icon: 'fa fa-search'
      },            
      ],
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        tooltipAnimationType: "shift-away",
        menuOptionsRight: [
          {
            type: "link",
            // text: "NodeNames",
          subMenuOptions: [
              {
                isLinkAction: true,
                type: "link",
                text: "Albany(7585)",
                path: "?node=7585",
                name: "7585"
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Cincinnati(3941)",
                path: "?node=3941",
                name: "3941"
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Cleveland(8211)",
                path: "?node=8211",
                name: "8211"
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Columbus(3886)",
                path: "?node=3886",
                name: "3886"
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "DC(8190)",
                path: "?node=8190",
                name: "8190"
              }
            ]
          }
          ],

          },
      collapsed: false,
      themes: [
        {
          name: 'Blue theme',
          input: 'Blue-theme'
        }
      ],
      selectedTheme: 'Blue-theme'
    }
  },
  methods: {
    onToggleCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item) { 
      console.log('onItemClick')
    },
    vnbItemClicked (event, item) {
      console.log('vnbItemClicked')
    },
    setCurrentSelectedOption(option) {
    //     this.$emit("setCurrentSelectedOption", option)
    //     this.$emit("setSelectedOption", option);
     console.log(option)
		},
    navigate() {
      router.go(-1);
    }
  }
}
</script>

<style lang="scss">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,
html {
  margin: 0;
  padding: 0;
}

a{
  margin: 0 10px;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  background-color: #f7f5f5;
  color: #272727;
}

#demo {
  padding-left: 350px;
}
#demo.collapsed {
  padding-left: 50px;
}

.demo {
  padding: 50px;
}

.container {
  max-width: 600px;
}
.main-navbar-section {
  background: #ffffff;
}
pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #ffffff;
  border-radius: 2px;
  font-size: 13px;
  padding: 5px;
  overflow: auto;
}

.vnb {
  font-family: "Montserrat", sans-serif;
.custom-section-content {
    width: 100%;
}
}

</style>