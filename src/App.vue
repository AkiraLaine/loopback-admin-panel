<style>
  @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons';

  body { font-family: 'Roboto', sans-serif; }

  .main-container {
    margin-left: 300px;
    width: calc(100% - 300px);
  }
</style>

<template>
  <side-bar></side-bar>
  <div class="main-container">
    <router-view></router-view>
  </div>
</template>

<script>
  import SideBar from './components/SideBar'

  export default {
    components: { SideBar }
  }
</script>
