/*
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-09-03 09:26:47
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-09-03 09:26:58
 * @FilePath: \frontend-study\ES6\数组的扩展\数组的过滤.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let arrs = [
    {name:'aaa', color:'红色'},
    {name:'bbb', color:'绿色'},
    {name:'ccc', color:'红色'},
    {name:'ddd', color:'绿色'},
]

let result = arrs.filter((obj) => obj.color === '绿色')
console.log(result);
