/*
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-15 08:07:52
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-15 11:20:03
 * @FilePath: \vue3-router\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEm
 */
import {createRouter,createWebHistory} from 'vue-router'

import Layout from "../views/Layout.vue"
// import ArticleList from "../views/ArticleList.vue"
// import ArticleDetail from '../views/ArticleDetail.vue';
// import UserDashboard from '../views/UserDashboard.vue';
// import UserProfile from '../views/UserProfile.vue';
// import UserSetting from '../views/UserSetting.vue';
// import Login from '../views/Login.vue';

const routes = [
    {
        path: "/",
        name: "Layout",
        component: Layout,
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "Home",
                component: () => import('../views/Home.vue'),
            },
            {
                path: "/login",
                name: "Login",
                component: () => import('../views/Login.vue'),
            },
            {
                path: "/articles",
                name: "ArticleList",
                component: () => import('../views/ArticleList.vue'),
            },
            {
                path: "/user",
                component: () => import('../views/UserDashboard.vue'),
                redirect: "/user/profile",
                children: [
                    {
                        path: "profile",
                        name: "UserProfile",
                        component: () => import('../views/UserProfile.vue'),
                    },
                    {
                        path: "setting",
                        name: "UserSetting",
                        component: () => import('../views/UserSetting.vue'),
                    }
                    
                ]
            },
            {
                path: "/articles/:id",
                name: "ArticleDetail",
                component: () => import('../views/ArticleDetail.vue'),
                children: [
                    {
                        path: "comments",
                        name: "ArticleComment",
                        component: () => import('../views/ArticleComment.vue')
                    }
                ],
            },
        ]
    },
    
    
    
];

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
if(to.path.startsWith("/user") && !localStorage.getItem("token")) {
    alert("请先登录");
    next("/login")
}else{
    next();
}
})

export default router
