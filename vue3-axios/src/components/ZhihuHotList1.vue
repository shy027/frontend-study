<!--
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-29 08:51:10
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-29 09:37:18
 * @FilePath: \vue3-axios\src\components\ZhihuHotList1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEadd
-->
<template>
    <div>
      <h2>知乎热榜</h2>
      <button @click="addNewHotItem">添加热榜数据</button>
      <ul>
        <li v-for="item in pageHotList" :key="item.id">
          <img :src="item.image" alt="image" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.excerpt }}</p>
          <p>热度：{{ item.hotIndex }}</p>
          <!-- <a :href="item.url" target="_blank">查看详情</a> -->
           <button @click="updateOldHotItem(item.id)">更新</button>
           <button @click="removeHotItem(item.id)">删除</button>
           <hr>
        </li>
      </ul>
      <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { HotItem } from '../types/zhihu';
  import { computed, onMounted, ref } from 'vue';
  import { fetchHotList,addHotItem,updateHotItem,deleteHotItem } from '../api/ZhihuApi';
  
  const hotList = ref<HotItem[]>([]);
  const currentPage = ref(1);
  const pageSize = ref(2)
  
  const fetchList = async () => {
    const res = await fetchHotList();
    hotList.value = res.data.data;
  }

  const addNewHotItem = async () => {
    const newItem = {
      title: '新的热榜数据',
      excerpt: "这是一个新添加的热榜项"
    }
    const res = await addHotItem(newItem)
    console.log(res.data.message);
    hotList.value.unshift(res.data.data)
    
  }
  const updateOldHotItem = async (id:number) => {
    const updatedItem = {
      title: '更新后的热榜标题',
      excerpt: "更新后的热榜简介"
    }
    const res = await updateHotItem(id,updatedItem)
    console.log(res.data.message);
    const itemIndex = hotList.value.findIndex((item) => item.id === id);
    if(itemIndex !== -1){
      hotList.value[itemIndex].title = updatedItem.title;
      hotList.value[itemIndex].excerpt = updatedItem.excerpt;
    }
  }

  const removeHotItem = async (id:number) => {
    const res = await deleteHotItem(id)
    console.log(res.data.message);
    hotList.value = hotList.value.filter((item) => item.id !==id)
    
  }
  const pageHotList = computed(() => 
    hotList.value.slice(
      (currentPage.value - 1) * pageSize.value,
      currentPage.value * pageSize.value
    )
  )

  const totalPages = computed(() => 
    Math.ceil(hotList.value.length / pageSize.value)
  )
  const nextPage = () => {
    if(currentPage.value < totalPages.value) {
      currentPage.value += 1;
    }
  }
  const prevPage = () => {
    if(currentPage.value > 1){
      currentPage.value -= 1;
    }
  }
  onMounted(fetchList);
  </script>
  
  <style scoped></style>