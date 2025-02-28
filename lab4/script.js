class Figure {
    #x;
    #y;
    constructor(x, y) {
      this.#x = x; 
      this.#y = y;
    }

    square() {
      return undefined;
    }

    center(){
        return `Координаты центра:
        x: ${this.#x}
        y: ${this.#y}`
    }
  }
  
  class Circle extends Figure {
    #r;
    constructor(x, y, r) {
      super(x, y); 
      this.#r = r;
    }
  
    square() {
      return Math.PI * this.#r * this.#r;
    }
  }
  
  class Rectangle extends Figure {
    #h;
    #w;
    constructor(x, y, h, w) {
      super(x, y);
      this.#h = h;
      this.#w = w;
    }
  
    square() {
      return this.#h * this.#w;
    }
  }
  
const circle = new Circle(1, 2, 15);
console.log(`Площадь круга: ${circle.square()}`);
console.log(circle.center());

const rectangle = new Rectangle(5, 6, 10, 15);
console.log(`Площадь прямоугольника: ${rectangle.square()}`);
console.log(rectangle.center());