// var foods = {
//     best: "小龙虾",
//     good: "火锅",
//     nomal: "快餐",
//     bad: "方便面",
// }

//获取foods 中的best和bad
// var best = foods.best
// var bad = foods.bad

//解构赋值
// var { best,bad } = foods


// var {best: best1, bad: bad1} = foods
// console.log(best1)
// console.log(bad1)

const address = {
    city:{
        name: "南京市",
        area:{
            name: "栖霞区",
            school:{
                name:"南工",
            },
        },
    },
}
//传统写法取出属性
// console.log(address.city.name);
// console.log(address.city.area.name);

//嵌套的解构赋值
let{
    city:{
        name:cityName,
        area:{
            name:areaName,
            school:{
                name:schoolName,
            },
        },
    },
} = address
console.log(cityName);
console.log(areaName);
console.log(schoolName);

