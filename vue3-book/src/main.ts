/*
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-15 14:50:41
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-15 14:54:09
 * @FilePath: \vue3-book\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// createApp(App).mount('#app')

const app = createApp(App)
app.use(router)
app.mount("#app")