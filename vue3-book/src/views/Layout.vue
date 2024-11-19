<!--
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-15 16:03:51
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-15 16:05:41
 * @FilePath: \vue3-book\src\views\Layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nav class="navbar">
        <router-link to="/books" class="nav-link">书库</router-link>
        <router-link to="/shopping" class="nav-link">购物车</router-link>
        <router-link to="/setting" class="nav-link">个人中心</router-link>
    </nav>
    <router-view v-slot="{Component}">
        <Transition name="fade" mode="out-in">
            <component :is="Component" />
        </Transition>
    </router-view>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active{
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
</style>
<style scoped>
.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    padding: 10px 0;
}

.nav-link {
    margin: 0 15px;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #ddd;
}

.nav-link.router-link-exact-active {
    color: #f44336; /* 高亮当前激活的链接 */
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

/* 响应式设计 */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }

    .nav-link {
        margin: 10px 0;
    }
}
</style>