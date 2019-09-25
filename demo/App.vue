<template>
  <div
    id="demo"
    :class="[{'collapsed' : collapsed}]"
  >
    <div class="demo">
      <div class="container">
        <hr style="margin: 50px 0px;border: 1px solid #e3e3e3;">
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
          icon: 'fa fa-barchart',
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
      ],
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
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  background-color: #f2f4f7;
  color: #262626;
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

pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #fff;
  border-radius: 2px;
  font-size: 13px;
  padding: 5px;
  overflow: auto;
}
</style>