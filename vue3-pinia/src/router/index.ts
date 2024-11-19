/*
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-22 09:23:26
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-22 14:08:18
 * @FilePath: \vue3-pinia\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter,createWebHistory } from "vue-router";
import Counter from "../views/Counter.vue";
const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/counter'
    },
    {
        path: '/counter',
        name: 'Counter',
        component: Counter,
    },
    {
        path: '/todo',
        name: 'Todo',
        component: () => import('../views/Todo.vue'),
    },
    {
        path: '/bill',
        name: 'Bill',
        component: () => import('../views/Bill.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;