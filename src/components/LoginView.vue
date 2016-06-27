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
</style>

<template>
  <div class="bg"></div>
  <div class="login">
    <p class="title">Loopback Admin Panel</p>
    <div class="notif" v-for="err in errs">
      {{ err }}
      <i class="material-icons close" @click="removeErr(err)">close</i>
    </div>
    <p class="subtitle">Login</p>
    <div class="input">
      <label for="Email">Email</label>
      <input id="Email" type="email" v-model="email" placeholder="youremail@host.com" @keyup.enter="login">
      <label for="Password">Password</label>
      <input id="Password" type="password" v-model="password" placeholder="●●●●●●●●" @keyup.enter="login">
      <button class="primary" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        password: '',
        email: '',
        errs: []
      }
    },
    methods: {
      isValid () {
        if (this.email === '') {
          this.errs.push('Email cannot be blank.')
          return false
        }

        if (this.password === '') {
          this.errs.push('Password cannot be blank.')
          return false
        }

        return true
      },
      error () {
        this.errs.push('Email/Password is incorrect.')
      },
      login () {
        this.errs.length = 0
        if (this.isValid()) this.success({})
      },
      removeErr (err) {
        this.errs.$remove(err)
      },
      success (user) {
        this.$user = user
        this.$router.go({ path: '/' })
      }
    }
  }
</script>
