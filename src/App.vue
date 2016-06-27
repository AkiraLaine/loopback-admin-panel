<style>
  @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons';

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body { font-family: 'Roboto', sans-serif; }

  .main-container {
    margin-left: 300px;
    width: calc(100% - 300px);
  }
</style>

<template>
  <side-bar v-if="$route.path !== '/login'"></side-bar>
  <div :class="{ 'main-container': $route.path !== '/login' }">
    <router-view></router-view>
  </div>
</template>

<script>
  import SideBar from './components/SideBar'

  export default {
    components: { SideBar }
  }
</script>
