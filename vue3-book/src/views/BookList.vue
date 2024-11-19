<!--
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-15 14:55:03
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-15 20:45:03
 * @FilePath: \vue3-book\src\views\BookList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="books-container">
        <h2>所有书籍</h2>
        <ul class="books-grid">
            <li v-for="book in books" :key="book.id" class="book-item">
                <router-link :to="`/books/${book.id}`" class="book-link">
                    <div class="book-cover">
                        <img :src="getAssetsImages(book.imgPath)" alt="">
                        <div class="book-info">
                            书名：{{ book.title }}<br>
                            作者：{{ book.author }}
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    
    </div>
</template>

<script setup lang="ts">
const books = [
    {    
        id: 1,
        title: "火影忍者",
        author: "岸本齐史",
        imgPath: "1.webp"
    },
    {
       id: 2,
       title: "哈利·波特与魔法石",
       author: "J.K.罗琳",
       imgPath: "2.webp"
},
{
    id: 3,
    title: "百年孤独",
    author: "加西亚·马尔克斯",
    imgPath: "3.webp"
},
{
    id: 4,
    title: "三体",
    author: "刘慈欣",
    imgPath: "4.webp"
},
{
    id: 5,
    title: "解忧杂货店",
    author: "东野圭吾",
    imgPath: "5.webp"
},
{
    id: 6,
    title: "追风筝的人",
    author: "卡勒德·胡赛尼",
    imgPath: "6.webp"
},
{
    id: 7,
    title: "小王子",
    author: "安托万·德·圣埃克苏佩里",
    imgPath: "7.webp"
},
{
    id: 8,
    title: "围城",
    author: "钱钟书",
    imgPath: "8.webp"
},
{
    id: 9,
    title: "挪威的森林",
    author: "村上春树",
    imgPath: "9.webp"
},
{
    id: 10,
    title: "霍乱时期的爱情",
    author: "加西亚·马尔克斯",
    imgPath: "10.webp"
}

]
const getAssetsImages = (name: any)=> {
    return new URL(`../assets/${name}`, import.meta.url).href;
}
</script>

<style scoped>
body {
    background-color: #ffffffb9;
}

.books-container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    background-color: #ddddddcc; /* 容器背景色为白色 */
    border-radius: 8px; /* 圆角边框 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}

.books-grid {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* 创建5列 */
    gap: 30px; /* 增加间距 */
    justify-content: center; /* 居中显示 */
}

.book-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
}

.book-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
}

.book-cover img {
    width: 100%;
    height: 300px; /* 设置统一高度 */
    object-fit: cover; /* 保持图片比例 */
}

.book-info {
    padding: 15px;
    text-align: center;
}

.book-title {
    margin: 10px 0;
    font-size: 1.4em;
    font-weight: 500; /* 加粗字体 */
    color: #333;
}

.book-author {
    margin: 0;
    font-size: 1.1em;
    font-style: italic; /* 斜体字体 */
    color: #666;
}

/* 美化标题 */
h2 {
    text-align: center;
    font-size: 2em;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
}
</style>