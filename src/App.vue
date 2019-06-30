<!-- 第一部分 -->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>1. {{msg}}</h1>

    <!-- 组件第三步 -->
    <hr>
    <h2>2. handsome boy 组件</h2>
    <handsomeboy></handsomeboy>

    <!-- 路由 -->
    <hr>
    <h2>3. 路由</h2>
    <div class="nav-box">
      <p class="nav-list">
        <router-link class="nav-item" to="/helloworld">helloworld</router-link>
        <router-link class="nav-item" to="/beautifulgirl">beautifulgirl</router-link>
      </p>
    </div>
    <div>
      <router-view></router-view>
    </div>

  </div>
</template>

<!-- 第二部分 -->
<script>
// 组件第一步
import handsomeboy from './components/HandSomeBoy.vue'

export default {
  data () {
    return {
      msg: 'First Vue Code Test.'
    }
  },
  // 组件第二步
  components: { handsomeboy }
}
</script>

<!-- 第三部分 -->
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
