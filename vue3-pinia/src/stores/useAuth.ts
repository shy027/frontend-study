/*
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-22 13:55:02
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-22 17:25:05
 * @FilePath: \vue3-pinia\src\stores\useAuth.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import axios from 'axios';

interface AuthStore {
    sendCode: (phone: string) => Promise<void>;
    login: (phone: string, code: string) => Promise<void>;
}

export const useAuthStore = defineStore("auth", (): AuthStore => {
    const sendCode = async (phone: string): Promise<void> => {
        try {
            const response = await axios.post(`http://localhost:8080/sms/send`, null, {
                params: { phone } // 使用 params 传递 URL 参数
            });
            console.log("验证码发送成功");
        } catch (error) {
            console.error("发送验证码失败：", error);
        }
    }

    // const login = async (phone: string, code: string): Promise<void> => {
    //     console.log(phone,code);
    //     try {
    //         const response = await axios.post(`http://localhost:8080/user/login`, {
    //             phone,
    //             code
    //         }, {
    //             headers: {
    //                 'Content-Type': 'application/json' // 确保 Content-Type 正确
    //             }
    //         });
    //         console.log("登录成功");
    //         console.log(response);
    //         localStorage.setItem("token", response.data.data.accessToken);
    //     } catch (error) {
    //         console.error("登录失败：", error);
    //     }
    // };
    const login = async (phone: string,code: string): Promise<void> =>{
        try{
            const res = await axios.post(
                `http://localhost:8080/user/login?phone=${phone}&code=${code}`
            );
            console.log("登录成功");
            localStorage.setItem("token",res.data.data.accessToken);
        }catch (error){
            console.error("登录失败：",error);
            
        }

    }

    return {
        sendCode,
        login
    }
})