<!--
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-15 19:21:55
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-15 21:33:55
 * @FilePath: \vue3-book\src\views\UserSetting.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="settings-container">
        <h3>用户信息设置</h3>
        <button class="logout-button" @click="handleLogin">退出登录</button>
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
.settings-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    text-align: center;
}

h3 {
    margin-bottom: 20px;
    color: #333;
}

.logout-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #E91E63;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 16px;
}

.logout-button:hover {
    background-color: #ad1457;
}
</style>