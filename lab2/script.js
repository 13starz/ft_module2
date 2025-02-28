//1
function multMax(a,b,c){
    let min = Math.min(a,b,c)
    return (a*b*c/min)
}
alert(`Задание 1: Произведение двух макс.чисел из [55,99,77] = ${multMax(55,99,77)}`)

//2
function military(name, rank = "Рядовой"){
    return (`${rank} ${name}`)
}

alert(`Задание 2:Задано имя Иван. Итог: ${military("Иван")}
Задано имя Иван и звание Генерал. Итог: ${military("Иван", "Генерал")}`)

//3 
const half = function(x){
    return x/2
}

function test(h, y){
    return half(y)
}

alert(`Задание 3: дана цифра 88. Результат функции с параметром, являющимся функц. выражением: ${test(half,88)}`)

//4
// function even(x){
//     let result
//     if(x % 2 == 0){
//         result = (x) => x**2
//     }
//     else{
//         result = (x) => x**3
//     }
//     return result
// }
// console.log(even(5))
// console.log(even(6))

//5

function factorial(n){
    if (n !== 0){
        return n * factorial(n-1) 
    }
    else{
        return 1
    }
}
alert(`Задание 5: Факториал от 20 = ${factorial(20)}`)