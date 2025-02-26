alert('Проверка на негипотенузное число')

let c = Number(prompt('Введите натуральное число'))
if (Number.isNaN(c) || c < 1){
    alert('Неверное число.')
}
else{
    if (hyp(c)){
        alert(`${c} - гипотенузное число`)
    }
    else{
        alert(`${c} - негипотенузное число`)
    }
}
alert(`${apples} + ${oranges} = ${apples + oranges}`); 


function hyp(c){
    const cSquared = c*c
    for(let a = 1; a < c; a++){
        let aSquared = a * a
        let bSquared = cSquared - aSquared // b*b = c*c - a*a

        let b = Math.sqrt(bSquared) // b = b**(0.5)
        if (Number.isInteger(b)){ 
            return true // c - гипотенузное число (если b - целое)
        }
    }
    return false // с - негипотенузное число
}