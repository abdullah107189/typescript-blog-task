function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}
const problem1 = formatString("Hello", true);
// console.log(problem1);

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const arrayFilter = items.filter((item) => item.rating >= 4);
  return arrayFilter;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const problem2 = filterByRating(books);
// console.log(problem2);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result = arrays.reduce((prev, curr) => prev.concat(curr));
  return result;
}
const problem3 = concatenateArrays(["a", "b"], ["c"], ["3"], ["asdf"], ["sd"]);
// console.log(problem3);

class Vehicle {
  constructor(private make: string, private year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }
  getModel(): string {
    return `Model: ${this.model}`;
  }
}
const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel());

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}
// console.log(processValue(10));

interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  return products.reduce((prev, curr) => {
    if (curr.price > prev.price) {
      return curr;
    } else {
      return prev;
    }
  });
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

// console.log(getMostExpensiveProduct(products));
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === 6 || day === 5) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}
// console.log(getDayType(Day.Monday));


