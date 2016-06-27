<style scoped>
  .bg {
    background-color: rgb(34, 39, 50);
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .login {
    background-color: white;
    border-radius: 3px;
    max-width: 360px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .input {
    margin-top: 8px;
    padding: 0 20px 20px;
  }

  .input input:not([type="checkbox"]),
  .input textarea {
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 2px;
    font-weight: 300;
    max-width: 320px;
    outline: none;
    padding: 12px;
    width: 320px;
  }

  .input input:not([type="checkbox"]):hover {
    border-color: rgba(0, 0, 0, .25);
  }

  .input input:not([type="checkbox"]):focus,
  .input textarea:focus {
    border-color: rgb(0, 133, 255);
  }

  .input label:not(.checkbox-text) {
    display: block;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 4px;
    margin-top: 12px;
    text-transform: uppercase;
  }

  .input input[type="checkbox"] { vertical-align: baseline; }

  p { padding: 20px; }

  p.title {
    background-color: rgba(0, 0, 0, .2);
    border-radius: 3px 3px 0 0;
    font-size: 18px;
  }

  p.subtitle {
    font-size: 16px;
    padding-bottom: 0;
  }

  .input button {
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 2px;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    margin-top: 14px;
    padding: 12px 16px;
    text-transform: uppercase;
  }

  .input button.primary {
    background-color: rgb(248, 57, 126);
    color: white;
  }
</style>

<template>
  <div class="bg"></div>
  <div class="login">
    <p class="title">Loopback Admin Panel</p>
    <p class="subtitle">Login</p>
    <div class="input">
      <label for="Email">Email</label>
      <input id="Email" type="text" placeholder="youremail@host.com">
      <label for="Password">Password</label>
      <input id="Password" type="password" placeholder="●●●●●●●●">
      <button class="primary">Login</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>
