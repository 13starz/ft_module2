function sortShell(students) {
    let n = students.length;
  
    let gap = Math.floor(n / 2);
  
    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = students[i];
    
            let j = i;
            while (j >= gap && students[j - gap].averageGrade < temp.averageGrade) {
            students[j] = students[j - gap];
            j -= gap;
            }
    
            students[j] = temp;
        }

        gap = Math.floor(gap / 2);
    }
  
    return students;
}
  
  
const students = [
    { name: "Иван", surname: "Иванов", averageGrade: 4.2 },
    { name: "Сергей", surname: "Сергеев", averageGrade: 3.8 },
    { name: "Михаил", surname: "Михайлов", averageGrade: 4.5 },
    { name: "Алексей", surname: "Алексеев", averageGrade: 4.0 }
]

sortShell(students);
for(let i = 0; i < students.length; i++){
    console.log(students[i])
}