<template>
    <div>
        <h2>{{article.title}}</h2>
        <p>{{article.content}}</p>
        <router-link :to="`/articles/${article.id}/comments`">查看评论</router-link>
        <router-view></router-view>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
const route = useRoute();
const articleId = route.params.id;
const articles = [
    {
        id: 1,
        title: "如何学习 vue3",
        content: "如何学习 vue3 如何学习 vue3 如何学习 vue3 如何学习 vue3"
    },
    {
        id: 2,
        title: "理解 vue router",
        content: "理解 vue router 理解 vue router 理解 vue router"
    }
]


const article = articles.find((a) => a.id === Number(articleId));
</script>