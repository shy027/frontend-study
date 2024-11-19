<!--
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-15 19:21:08
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-15 21:36:29
 * @FilePath: \vue3-book\src\views\Logging.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="login-container">
        <h3>用户登录</h3>
        <div class="login-form">
            <div class="form-group">
                <label for="username">用户名：</label>
                <input type="text" id="username" v-model="user.name" placeholder="请输入用户名">
            </div>
            <div class="form-group">
                <label for="password">密码：</label>
                <input type="password" id="password" v-model="user.password" placeholder="请输入密码">
            </div>
            <button @click="handleLogin" class="login-button">登录</button>
        </div>
    </div>
</template>

<script lang="ts" setup>

import {useRouter} from "vue-router"
const user = {
    name: null,
    password: null,
}
const router = useRouter()
const handleLogin  = () => {
    if(user.name == "shy" && user.password == 123456){
        localStorage.setItem("token","hello123")
        router.push("/setting")
    }else{
        alert("用户名或密码错误")
    }
};

</script>

<style scoped>
.login-container {
    max-width: 300px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

h3 {
    text-align: center;
    margin-bottom: 20px;
}

.login-form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.login-button {
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.login-button:hover {
    background-color: #0056b3;
}
</style>