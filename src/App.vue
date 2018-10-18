<template>
  <div id="app">
      <router-link :to="{name:'/login',path:'/login'}" exact>登录</router-link>
      <router-link :to="{name:'/registration',path:'/registration'}" exact>注册</router-link>
      <router-view></router-view>
  </div>
</template>
<script>
    import Registration from './Login_registration/registration'
    export default {
        components:{
            Registration
        }
    }
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
