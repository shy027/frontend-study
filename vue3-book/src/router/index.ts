/*
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-15 14:52:03
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-15 19:40:39
 * @FilePath: \vue3-book\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {createRouter,createWebHistory} from 'vue-router'

import Layout from '../views/Layout.vue'

const routes = [{
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/books",
    children: [
        {
            path: "/books",
            name: "BookList",
            component: () => import('../views/BookList.vue')
        },
        {
            path: "/books/:id",
            name: "BookDetail",
            component: () => import('../views/BookDetail.vue')
        },
        {
            path: "/shopping",
            name: "Shopping",
            component: () => import('../views/Shopping.vue')
        },
        {
            path: "/setting",
            name: "UserSetting",
            component: () => import('../views/UserSetting.vue')
        },
        {
            path: "/login",
            name: "Logging",
            component: () => import('../views/Logging.vue')
        }
    ]
}];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to,from,savedPosition) {
        if(savedPosition){
            return savedPosition;
        }else{
            return {top: 0};
        }
    }
});

router.beforeEach((to,from,next) => {
if((to.path.startsWith("/setting") || to.path.startsWith("/shopping"))&& !localStorage.getItem("token")) {
    alert("请先登录");
    next("/login")
}else{
    next();
}
})


export default router
