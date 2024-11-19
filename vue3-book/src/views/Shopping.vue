<!--
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-15 19:19:28
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-15 21:32:17
 * @FilePath: \vue3-book\src\views\Shopping.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="book-list-container">
        <ul class="books-grid">
            <li v-for="book in books" :key="book.id" class="book-item">
                <div class="book-cover">
                    <img :src="getAssetsImages(book.img)" alt="">
                    <div class="book-info">
                        书名：{{ book.title }}
                        价格：{{ book.price }}
                        <div class="cart-actions">
                            <button @click="book.buy++;pri+=book.price" class="cart-button">添加至购物车</button>
                            <button v-if="book.buy > 0" @click="pri-=book.price*book.buy;book.buy=0" class="cart-button">移出购物车</button>
                            <p v-if="book.buy > 0" class="cart-quantity">已在购物车中（数量：{{book.buy}})</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div style="text-align: center;">
            <p style="font-size: 30px">总价：{{pri}}</p>
            <button @click="clear" class="cart-button">购买</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive,ref } from 'vue';

let pri = ref<number>(0);
const books = reactive([
    {
    id: 1,
    title: "火影忍者",
    author: "岸本齐史",
    content: "《火影忍者》是一部描绘忍者世界和其主人公鸣人成长历程的漫画。故事讲述了鸣人为了实现成为火影的梦想，不断努力，克服重重困难，最终成为一名伟大的忍者。",
    price: 30,
    img: "1.webp",
    buy: 0
},
{
    id: 2,
    title: "哈利·波特与魔法石",
    author: "J.K.罗琳",
    content: "《哈利·波特与魔法石》是哈利波特系列的第一部作品，讲述了哈利波特在霍格沃茨魔法学校的冒险经历，以及他与朋友们一起对抗邪恶的伏地魔的故事。",
    price: 19,
    img: "2.webp",
    buy: 0
},
{
    id: 3,
    title: "百年孤独",
    author: "加西亚·马尔克斯",
    content: "《百年孤独》是魔幻现实主义文学的代表作，讲述了布恩迪亚家族七代人的故事，反映了拉丁美洲一个世纪以来的社会变迁和历史沧桑。",
    price: 24,
    img: "3.webp",
    buy: 0
},
{
    id: 4,
    title: "三体",
    author: "刘慈欣",
    content: "《三体》是中国科幻文学的里程碑之作，讲述了地球文明与三体文明的首次接触，以及随后发生的一系列宇宙战争和文明冲突，探讨了人类文明的未来和宇宙的命运。",
    price: 22,
    img: "4.webp",
    buy: 0
},
{
    id: 5,
    title: "解忧杂货店",
    author: "东野圭吾",
    content: "《解忧杂货店》是一部温馨治愈的小说，通过一家神秘的杂货店，串联起几个不同人物的故事，展现了人与人之间的善意和温暖，以及面对困境时的坚持和勇气。",
    price: 18,
    img: "5.webp",
    buy: 0
},
{
    id: 6,
    title: "追风筝的人",
    author: "卡勒德·胡赛尼",
    content: "《追风筝的人》是一部描绘阿富汗历史变迁的小说，讲述了主人公阿米尔与仆人哈桑之间复杂的友情，以及阿米尔为了救赎自己而踏上的艰难旅程。",
    price: 16,
    img: "6.webp",
    buy: 0
},
{
    id: 7,
    title: "小王子",
    author: "安托万·德·圣埃克苏佩里",
    content: "《小王子》是一部充满哲理的童话，通过小王子的星际旅行，探讨了爱、责任、成长等主题，展现了人性的纯真和世界的多样性。",
    price: 12,
    img: "7.webp",
    buy: 0
},
{
    id: 8,
    title: "围城",
    author: "钱钟书",
    content: "《围城》是一部讽刺小说，通过主人公方鸿渐的求学、求职、求爱经历，揭示了人性的弱点和社会的荒诞，展现了中国传统文化与现代文明的冲突。",
    price: 15,
    img: "8.webp",
    buy: 0
},
{
    id: 9,
    title: "挪威的森林",
    author: "村上春树",
    content: "《挪威的森林》是一部青春成长小说，讲述了主人公渡边与直子、绿子之间的爱情纠葛，以及他在面对生与死、爱与孤独时的心路历程。",
    price: 20,
    img: "9.webp",
    buy: 0
},
{
    id: 10,
    title: "霍乱时期的爱情",
    author: "加西亚·马尔克斯",
    content: "《霍乱时期的爱情》是一部跨越半个多世纪的爱情史诗，讲述了费尔米娜与弗洛伦蒂诺之间忠贞不渝的爱情故事，展现了爱情的坚韧和生命的脆弱。",
    price: 21,
    img: "10.webp",
    buy: 0
}
])
const getAssetsImages = (name: any)=> {
    return new URL(`../assets/${name}`, import.meta.url).href;
}
const clear = () =>{
    for (let index = 0; index < books.length; index++) {
        books[index].buy = 0
    }
    pri = ref<number>(0);
}
</script>

<style scoped>
.books-grid {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 创建5列 */
    gap: 30px; /* 增加间距 */
    justify-content: center; /* 居中显示 */
}
.book-list-container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
}

.book-item {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 20px;
    background-color: white;
}

.book-cover {
    flex-shrink: 0;
    margin-right: 20px;
}

.book-cover img {
    width: 100px;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
}

.book-info {
    flex-grow: 1;
}

.book-title {
    margin: 0 0 10px 0;
    font-size: 20px;
    color: #333;
}

.book-author, .book-price {
    margin-bottom: 10px;
    font-size: 16px;
    color: #666;
}

.cart-actions {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
}

.cart-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 16px;
}
.cart-button:hover {
    background-color: #0056b3;
}

.add-to-cart {
    background-color: #28a745;
}

.add-to-cart:hover {
    background-color: #218838;
}

.remove-from-cart {
    background-color: #dc3545;
}

.remove-from-cart:hover {
    background-color: #c82333;
}

.cart-quantity {
    margin-left: 10px;
    font-size: 16px;
    color: #333;
}

.total-price-container {
    text-align: right;
    margin-top: 20px;
}

.purchase-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 16px;
    margin-top: 10px;
}

.purchase-button:hover {
    background-color: #0056b3;
}
</style>