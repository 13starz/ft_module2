const studentJSON = `{
    "surname": "Васильев",
    "name": "Василий",
    "marks": [
        {"subject": "Русский язык", "mark":5},
        {"subject": "Алгебра", "mark":4},
        {"subject": "Геометрия", "mark":5},
        {"subject": "География", "mark":4},
        {"subject": "Химия", "mark":3}
    ]
}`

function printStudent(studentJSON) {
    const student = JSON.parse(studentJSON);
    console.log(`Фамилия: ${student.surname}`);
    console.log(`Имя: ${student.name}`);
    console.log("Оценки:");
  
    for (let i = 0; i < student.marks.length; i++) {
      const mark = student.marks[i];
      console.log(`${mark.subject}: ${mark.mark}`);
    }
}

printStudent(studentJSON);
console.log("-------------------------------------------------------------------");





class Mark{
    constructor(subject,mark){
        this.subject = subject;
        this.mark = mark;
    }
}

class Student{
    constructor(surname, name, marks = []) {
        this.surname = surname;
        this.name = name;
        this.marks = marks;
      }

    getAverageMark(){
        if (this.marks.length === 0){
            return 0
        }

        let sum = 0;
        for(let i = 0; i < this.marks.length; i++){
            const mark = this.marks[i];
            sum += mark.mark
        }

        return sum / this.marks.length
    }

    getMarksBySubject(subject) {
        let subjectMarks = [];
    
        for (let i = 0; i < this.marks.length; i++) {
          if (this.marks[i].subject === subject) {
            subjectMarks.push(this.marks[i].mark);
          }
        }
    
        return subjectMarks;
      }

    addMark(subject, mark) {
        this.marks.push(new Mark(subject, mark));
    }

    removeMarksBySubject(subject) {
        let newMarks = [];
    
        for (let i = 0; i < this.marks.length; i++) {
          if (this.marks[i].subject !== subject) {
            newMarks.push(this.marks[i]);
          }
        }
    
        this.marks = newMarks;
    }

    getStudentInfo() {
        let info = `Студент: ${this.surname} ${this.name}\n`;
    
        if (this.marks.length > 0) {
          info += "Оценки:\n";
          for (let i = 0; i < this.marks.length; i++) {
            info += `${this.marks[i].subject}: ${this.marks[i].mark}\n`;
          }
        } else {
          info += "Оценок нет.\n"; 
        }
    
        return info;
      }
}


const student1 = new Student("Иванов", "Иван");

console.log(student1.getStudentInfo());
console.log("Добавляем 4 оценки по разным предметам");
student1.addMark("Физика", 4);
student1.addMark("Физика", 3);
student1.addMark("Химия", 5);
student1.addMark("Математика", 5);
console.log(student1.getStudentInfo());
console.log("Средняя оценка:", student1.getAverageMark());

console.log("Оценки по физике:", student1.getMarksBySubject("Физика"));

console.log("Удалим все оценки по физике");
student1.removeMarksBySubject("Физика");
console.log(student1.getStudentInfo());