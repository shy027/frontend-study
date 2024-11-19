<template>
  <nav>
    <router-link to="/counter">计数器</router-link>
    <router-link to="/todo">待办清单</router-link>
    <router-link to="/bill">记账</router-link>
    <router-link to="/login">登录</router-link>
    <router-link to="/profile">个人中心</router-link>
  </nav>

  <router-view />
</template>

<script setup lang="ts">

</script>

<style scoped>
a {
  margin: 10px;
  text-decoration: none;
  color: aqua;
  padding: 5px 10px;
}

.router-link-active{
  background-color: aqua;
  color: white;
  font-weight: bold;
}
</style>