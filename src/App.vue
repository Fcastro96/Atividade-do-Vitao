<template>
  <div id="app">
    <div id="nav">
      <li v-for="item in navbars" v-bind:key="item.id">
        <router-link :to="{ path: item.router }">{{ item.names }}</router-link>
      </li>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      navbars: [
        { names: "home", router: "/home", id: 1 },
        { names: "home2", router: "/home2", id: 2 },
        { names: "home3", router: "/home3", id: 3 },
        { names: "home4", router: "/home4", id: 4 },
        { names: "home5", router: "/home5", id: 5 },
      ],
    };
  },
};
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
