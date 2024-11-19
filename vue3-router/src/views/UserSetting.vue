<template>
    <div>
        <h3>用户信息设置</h3>
        <button @click="handleLogin">退出登录</button>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
const router = useRouter();
const handleLogin = () => {
    localStorage.removeItem("token");
    router.push("/login")
}
</script>

<style scoped>

</style>