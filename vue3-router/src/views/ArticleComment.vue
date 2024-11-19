<!--
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-15 10:05:59
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-15 11:11:16
 * @FilePath: \vue3-router\src\views\ArticleComment.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <ul>
            <li v-for="comment in article.comments" :key="comment.id">
                {{ comment.content }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'

const route = useRoute();
const articleId = route.params.id;
const articles = [
    {
        id: 1,
        title: "如何学习 vue3",
        content: "如何学习 vue3 如何学习 vue3 如何学习 vue3 如何学习 vue3",
        comments: [
            {
                id: 1,
                content: "vue3 语法很简洁"
            },
            {
                id: 2,
                content: "vue3 功能很强大"
            },
            {
                id: 3,
                content: "vue3 的组合式函数很棒"
            },
            {
                id: 4,
                content: "vue3 的生态很好"
            },
        ]
    },
    {
        id: 2,
        title: "理解 vue router",
        content: "理解 vue router 理解 vue router 理解 vue router",
        comments: [
            {
                id: 1,
                content: "vue3 语法很简洁"
            },
            {
                id: 2,
                content: "vue3 功能很强大"
            },
            {
                id: 3,
                content: "vue3 的组合式函数很棒"
            },
            {
                id: 4,
                content: "vue3 的生态很好"
            },
        ]
    }
]


const article = articles.find((a) => a.id === Number(articleId));
</script>

<style scoped>

</style>