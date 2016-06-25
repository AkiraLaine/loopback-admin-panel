<style scoped>
  aside {
    color: white;
    background-color: rgb(34, 39, 50);
    height: 100%;
    position: fixed;
    width: 300px;
    z-index: 10;
  }

  li {
    cursor: pointer;
    overflow: hidden;
    transition: all 100ms ease-in-out;
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

  li:hover {
    background-color: rgb(56, 61, 72);
  }

  li:hover .material-icons {
    margin-right: 16px;
    transform: rotate(0deg);
  }

  li:hover span { color: white; }

  .logo {
    font-size: 18px;
    margin: 36px 36px 24px;
  }
</style>

<template>
  <aside>
    <p class="logo">Loopback Admin Panel</p>
    <ul>
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
