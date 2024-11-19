
import { defineStore } from "pinia";
import { ref } from "vue";

interface Bill{
    id: number;
    text: string;
    money: number;
    completed: boolean;
}

export const useBillStore = defineStore("bill",() =>{
    const bills = ref<Bill[]>([]);
    const increment = (billText: string,billMoney: number) =>{
        const newBill: Bill = {
            id: Date.now(),
            text: billText,
            money: billMoney,
            completed: true
        };
        bills.value.push(newBill)
    }

    const decrement = (billText: string,billMoney: number) =>{
        const newBill: Bill = {
            id: Date.now(),
            text: billText,
            money: billMoney,
            completed: false
        };
        bills.value.push(newBill)
    }

    

    const removeBill = (index:number) =>{
        bills.value.splice(index,1)
    }
    return {
        bills,increment,decrement,removeBill
    }
},
{
    persist: {
        key: 'my-bill-store',
        storage: localStorage,
    }
})