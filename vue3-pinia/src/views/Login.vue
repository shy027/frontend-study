<!--
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-22 14:07:51
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-22 16:41:44
 * @FilePath: \vue3-pinia\src\views\Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <h2>登录</h2>
        <input v-model="phone" placeholder="请输入手机号" />
        <button @click="sendCode">发送验证码</button>
        <input v-model="code" placeholder="请输入验证码" />
        <button @click="login">登录</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../stores/useAuth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const phone = ref<string>("15861512427")
const code = ref<string>("")

const sendCode = async () => {
    await authStore.sendCode(phone.value)
}

const login = async () => {
    await authStore.login(phone.value,code.value)
    router.push("/profile")
}
</script>

<style scoped>

</style>