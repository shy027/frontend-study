/*
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-22 14:15:19
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-22 14:53:31
 * @FilePath: \vue3-pinia\src\stores\useUser.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

interface User {
    id: number;
    phone: string;
    avatar: string;
    nickname: string;
    bonus: number;
}

interface UserStore {
    user: User | null;
    fetchUser: () => Promise<void>;
    clearUser: () => void;
}

export const useUserStore = defineStore("user", (): UserStore => {
    const user = ref<User | null>(null);

    // 从本地存储加载用户信息
    const loadUserFromLocalStorage = (): void => {
        const userData = localStorage.getItem("user");
        if (userData) {
            user.value = JSON.parse(userData);
        }
    };

    // 获取用户信息
    const fetchUser = async (): Promise<void> => {
        try {
            const response = await axios.get("https://localhost:8080/user/info", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`, // 确保正确设置 Authorization 头
                },
            });
            console.log(response.data.data);

            user.value = response.data.data;
            localStorage.setItem("user", JSON.stringify(user.value));
        } catch (error) {
            console.error("获取用户信息失败：", error);
        }
    };

    // 清除用户信息
    const clearUser = (): void => {
        user.value = null;
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    // 初始化时加载用户信息
    loadUserFromLocalStorage();

    return {
        user: user.value,
        fetchUser,
        clearUser,
    };
});