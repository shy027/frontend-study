<!--
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-15 08:09:46
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-15 10:25:52
 * @FilePath: \vue3-router\src\views\ArticleList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <h2>
            文章列表
        </h2>
        <!-- <div style="height: 2000px;">
            <p>很长</p>
        </div> -->
        <ul>
            <li v-for="article in articles" :key="article.id">
                <router-link :to="`/articles/${article.id}`">{{ article.title }}</router-link>
                
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const articles = [
    {
        id: 1,
        title: "如何学习 vue3",
    },
    {
        id: 2,
        title: "理解 vue router",
    }
]
</script>

<script lang="ts">
export default {
    beforeRouteEnter: (to,from,next) => {
        console.log(to,from);
        console.log("进入该页面前的检查");
        next();
    },
}
</script>
