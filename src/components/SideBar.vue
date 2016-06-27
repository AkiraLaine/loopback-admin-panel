<style scoped>
  aside {
    color: white;
    background-color: rgb(34, 39, 50);
    height: 100%;
    left: 0;
    overflow-y: auto;
    position: fixed;
    top: 0;
    width: 300px;
    z-index: 10;
  }

  aside::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: transparent;
  }

  aside::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  aside::-webkit-scrollbar-thumb { background-color: rgb(248, 57, 126); }

  li {
    cursor: pointer;
    overflow: hidden;
    transition: all 100ms ease-in-out;
  }

  li.active {
    background-color: rgb(248, 57, 126);
  }

  li span {
    color: rgb(114, 119, 130);
    display: inline-block;
    font-weight: 300;
    margin: 0 36px;
    padding: 18px 0;
  }

  li .material-icons {
    float: right;
    margin-right: -24px;
    margin-top: 16px;
    transform: rotate(100deg);
    transition: all 280ms cubic-bezier(0.4, 0, 0.36, 0.85);
  }

  li:hover:not(.active) {
    background-color: rgb(56, 61, 72);
  }

  li:hover .material-icons,
  li.active .material-icons {
    margin-right: 16px;
    transform: rotate(0deg);
  }

  li:hover span,
  li.active span {
    color: white;
    font-weight: 500;
  }

  .logo {
    font-size: 18px;
    margin: 36px 36px 24px;
  }
</style>

<template>
  <aside>
    <p class="logo">Loopback Admin Panel</p>
    <ul>
      <li class="active">
        <span>Open Donations</span>
        <i class="material-icons">add</i>
      </li>
      <li>
        <span>Open Donations</span>
        <i class="material-icons">add</i>
      </li>
      <li>
        <span>Open Donations</span>
        <i class="material-icons">add</i>
      </li>
      <li>
        <span>Open Donations</span>
        <i class="material-icons">add</i>
      </li>
      <li>
        <span>Open Donations</span>
        <i class="material-icons">add</i>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>
