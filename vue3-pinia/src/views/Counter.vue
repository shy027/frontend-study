<!--
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-22 08:23:27
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-22 08:23:34
 * @FilePath: \vue3-pinia\src\components\Counter.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <h2>计数器：{{counterStore.count}}</h2>
        <h2>双倍计数器：{{counterStore.doubleCount}}</h2>
        <button @click="counterStore.increment">增加</button>
        <button @click="counterStore.decrement">减少</button>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/useCounter';

const counterStore = useCounterStore();
</script>

<style scoped>

</style>