
<template>
    <div class="book-container">
        <img :src="getAssetsImages(book.img)" class="book-cover">
        <div class="book-info">
        <p class="book-title">书名：{{book.title}}</p>
        <p class="book-author">作者：{{book.author}}</p>
        <p class="book-price">价格：{{book.price}}</p>
        <p class="book-content">简介：{{book.content}}</p>
        <!-- <div class="cart-actions">
        <button @click="bugging" class="cart-button">添加至购物车</button>
        <button v-if="book.buy > 0" @click="remove" class="cart-button">移出购物车</button>
        <p v-if="book.buy > 0" class="cart-quantity">已在购物车中（数量：{{book.buy}})</p>
    </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
import {reactive} from 'vue'
const route  = useRoute();
const bookId = route.params.id;
const books = reactive([
    {
    id: 1,
    title: "火影忍者",
    author: "岸本齐史",
    content: "《火影忍者》是一部描绘忍者世界和其主人公鸣人成长历程的漫画。故事讲述了鸣人为了实现成为火影的梦想，不断努力，克服重重困难，最终成为一名伟大的忍者。",
    price: 29.99,
    img: "1.webp",
    buy: 0
},
{
    id: 2,
    title: "哈利·波特与魔法石",
    author: "J.K.罗琳",
    content: "《哈利·波特与魔法石》是哈利波特系列的第一部作品，讲述了哈利波特在霍格沃茨魔法学校的冒险经历，以及他与朋友们一起对抗邪恶的伏地魔的故事。",
    price: 19.99,
    img: "2.webp",
    buy: 0
},
{
    id: 3,
    title: "百年孤独",
    author: "加西亚·马尔克斯",
    content: "《百年孤独》是魔幻现实主义文学的代表作，讲述了布恩迪亚家族七代人的故事，反映了拉丁美洲一个世纪以来的社会变迁和历史沧桑。",
    price: 24.99,
    img: "3.webp",
    buy: 0
},
{
    id: 4,
    title: "三体",
    author: "刘慈欣",
    content: "《三体》是中国科幻文学的里程碑之作，讲述了地球文明与三体文明的首次接触，以及随后发生的一系列宇宙战争和文明冲突，探讨了人类文明的未来和宇宙的命运。",
    price: 22.99,
    img: "4.webp",
    buy: 0
},
{
    id: 5,
    title: "解忧杂货店",
    author: "东野圭吾",
    content: "《解忧杂货店》是一部温馨治愈的小说，通过一家神秘的杂货店，串联起几个不同人物的故事，展现了人与人之间的善意和温暖，以及面对困境时的坚持和勇气。",
    price: 18.99,
    img: "5.webp",
    buy: 0
},
{
    id: 6,
    title: "追风筝的人",
    author: "卡勒德·胡赛尼",
    content: "《追风筝的人》是一部描绘阿富汗历史变迁的小说，讲述了主人公阿米尔与仆人哈桑之间复杂的友情，以及阿米尔为了救赎自己而踏上的艰难旅程。",
    price: 16.99,
    img: "6.webp",
    buy: 0
},
{
    id: 7,
    title: "小王子",
    author: "安托万·德·圣埃克苏佩里",
    content: "《小王子》是一部充满哲理的童话，通过小王子的星际旅行，探讨了爱、责任、成长等主题，展现了人性的纯真和世界的多样性。",
    price: 12.99,
    img: "7.webp",
    buy: 0
},
{
    id: 8,
    title: "围城",
    author: "钱钟书",
    content: "《围城》是一部讽刺小说，通过主人公方鸿渐的求学、求职、求爱经历，揭示了人性的弱点和社会的荒诞，展现了中国传统文化与现代文明的冲突。",
    price: 15.99,
    img: "8.webp",
    buy: 0
},
{
    id: 9,
    title: "挪威的森林",
    author: "村上春树",
    content: "《挪威的森林》是一部青春成长小说，讲述了主人公渡边与直子、绿子之间的爱情纠葛，以及他在面对生与死、爱与孤独时的心路历程。",
    price: 20.99,
    img: "9.webp",
    buy: 0
},
{
    id: 10,
    title: "霍乱时期的爱情",
    author: "加西亚·马尔克斯",
    content: "《霍乱时期的爱情》是一部跨越半个多世纪的爱情史诗，讲述了费尔米娜与弗洛伦蒂诺之间忠贞不渝的爱情故事，展现了爱情的坚韧和生命的脆弱。",
    price: 21.99,
    img: "10.webp",
    buy: 0
}
])
const book = books.find((a) => a.id === Number(bookId))
const getAssetsImages = (name: any)=> {
    return new URL(`../assets/${name}`, import.meta.url).href;
}
const bugging = () =>{
    book.buy++
    
}
const remove = () =>{
    book.buy = 0
}

</script>

<style scoped>
.book-container {
    max-width: 800px;
    margin: 50px auto;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    display: flex;
    gap: 30px;
    align-items: center;
    background-color: #f9f9f9;
}

.book-cover {
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.book-info {
    flex-grow: 1;
}

.book-title {
    margin: 0 0 20px 0;
    font-size: 32px;
    color: #333;
}

.book-author, .book-price, .book-content {
    margin: 15px 0;
    font-size: 18px;
    color: #666;
}

.book-price {
    color: #E91E63;
    font-size: 24px;
}

.book-content {
    font-size: 16px;
    color: #555;
}
.cart-actions {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
}

.cart-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.cart-button:hover {
    background-color: #0056b3;
}

.cart-quantity {
    font-size: 16px;
    color: #333;
}
</style>