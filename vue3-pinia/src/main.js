/*
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-10-22 08:09:45
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-10-22 09:34:10
 * @FilePath: \vue3-pinia\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from 'pinia'
const pinia = createPinia();
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

pinia.use(piniaPluginPersistedState)
import router from './router'
createApp(App).use(pinia).use(router).mount('#app')
