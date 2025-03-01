//1
function findCommonElements(array1, array2) {
    const commonElements = new Set();
    const set1 = new Set(array1);
    
    for (let i = 0; i < array2.length; i++) {
        const element = array2[i];
    
        if (set1.has(element)) {
            commonElements.add(element);
        }
    }
    
    return commonElements;
}
  
const array1 = [555, 1, 2, 3, 666];
const array2 = [4, 555, 5, 666, 6];
  
console.log(findCommonElements(array1, array2));


//2
function countElements(array) {
    const counts = new Map();
  
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
    
        if (counts.has(element)) {
            counts.set(element, counts.get(element) + 1);
        } 
        else {
            counts.set(element, 1);
        }
    }
  
    return counts;
  }
  
let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  
console.log(countElements(array));

//3
class Student {
    constructor(name, group) {
        this.name = name;
        this.group = group;
    }
}
  
function maxSize(students) {
    const groupSizes = new Map();
  
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const group = student.group;
    
        if (groupSizes.has(group)) {
            groupSizes.set(group, groupSizes.get(group) + 1);
        } 
        else {
            groupSizes.set(group, 1);
        }
    }
  
    let maxSize = 0;
    for (let size of groupSizes.values()) {
        if (size > maxSize) {
            maxSize = size;
        }
    }
  
    return maxSize;
}
  
const students = [
    new Student("Иван", "А"),
    new Student("Николай", "А"),
    new Student("Пётр", "А"),
    new Student("Сергей", "А"),
    new Student("Андрей", "Б"),
    new Student("Анна", "Б"),
    new Student("Виктория", "Б"),
    new Student("Кристина", "В"),
    new Student("София", "В"),
    new Student("Алина", "В"),
]

console.log(maxSize(students));