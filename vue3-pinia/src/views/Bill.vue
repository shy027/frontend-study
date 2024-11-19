<!--
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-22 10:17:18
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-22 11:19:24
 * @FilePath: \vue3-pinia\src\views\Bill.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="container">
        <div>
            <h2>记账应用</h2>
            <input type="text" v-model="newBillText" placeholder="描述">
            <input type="text" v-model="newBillMoney" placeholder="金额">
            <select v-model="selectedOption"> 
                <option value="in">收入</option>
                <option value="out">支出</option>
            </select>
            <button v-if="selectedOption == 'in'" @click="myIncrement">添加记录</button>
            <button v-if="selectedOption == 'out'" @click="myDecrement">添加记录</button>
        </div>
        <h3>交易记录</h3>
        <ul>
            <li v-for="(bill,index) in myBills" :key="bill.id">
                {{ bill.text }}——{{bill.money}}
                <p v-if="bill.completed == true">(income)</p>
                <p v-if="bill.completed == false">(expense)</p>
                <button @click="myRemoveBill(index)">删除</button>
            </li>
        </ul>
        <h3>统计信息</h3>
        <p>总收入：{{income}}</p>
        <p>总支出：{{expense}}</p>
        <p>当前余额：{{all}}</p>
    </div>
</template>

<script setup lang="ts">
import { useBillStore } from '../stores/useBill';
import { ref } from 'vue';

const billStore = useBillStore();
const newBillText = ref('')
const newBillMoney = ref(0)
const selectedOption = ref('in')
const myBills = billStore.bills
    let all = ref<number>(0);
    let income = ref<number>(0);
    let expense = ref<number>(0);
const myIncrement = () =>{
    if(newBillText.value.trim()){
        billStore.increment(newBillText.value,newBillMoney.value)
        newBillText.value = ''
        newBillMoney.value = 0
    }
    allMoney();
}

const myDecrement = () =>{
    if(newBillText.value.trim()){
        billStore.decrement(newBillText.value,newBillMoney.value)
        newBillText.value = ''
        newBillMoney.value = 0
    }
    allMoney();
}

const myRemoveBill = (index: number) =>{
    billStore.removeBill(index);
    allMoney();
}

const allMoney = () =>{
     all = ref<number>(0);
     income = ref<number>(0);
     expense = ref<number>(0);
        for (let index = 0; index < myBills.length; index++) {
            if(myBills[index].completed == true){
                income.value += Number(myBills[index].money)
            }else{
                expense.value += Number(myBills[index].money)
            }
        }
        all.value = income.value - expense.value;
    }
</script>

<style scoped>
body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.container {
    width: 80%;
    max-width: 600px; /* 限制最大宽度 */
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    text-align: center;
}

h2 {
    color: #5c67f2;
    font-size: 24px;
}

h3 {
    color: #333;
    font-size: 18px;
    margin-top: 20px;
}

input[type="text"],
select {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%; /* 使输入框和选择框宽度为100% */
}

button {
    padding: 10px 20px;
    background-color: #5c67f2;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 10px 0;
    width: 100%; /* 使按钮宽度为100% */
}

button:hover {
    background-color: #4a54e1;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background-color: white;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

li button {
    background-color: #f59e0b;
    margin-left: 10px;
    margin-top: 10px;
}

li button:hover {
    background-color: #d97706;
}
</style>