<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          v-show="item.show"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        fixed: false,
        items: [
          {
            icon: 'mdi-home',
            title: '홈',
            to: '/',
            show: true
          },
          {
            icon: 'mdi-help',
            title: '누구?',
            to: '/about',
            show: false
          },
          {
            icon: 'mdi-chart-bubble',
            title: '족보',
            to: '/family-tree',
            show: false
          },
          {
            icon: 'mdi-file-document',
            title: '이력서',
            to: '/resume',
            show: true
          },
          {
            icon: 'mdi-chart-bubble',
            title: '포트폴리오',
            to: '/portfolio',
            show: false
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    },
    mounted() {
      this.setMobile();
      this.setDrawer();
    },
    methods: {
      setMobile() {
        this.$store.commit('setMobile', {
          mobile: window.innerWidth < 600
        });
      },
      setDrawer() {
        this.drawer = !this.$store.state.mobile;
      }
    }
  }
</script>
