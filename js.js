let numbers = [5, 8, 15];

numbers[1] = 10;

console.log(numbers);


let fruits = ["Яблуко", "Банан", "Груша"];

fruits.push("Апельсин");

console.log(fruits);


let numbers1 = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < numbers1.length; i++) {
  sum = sum + numbers1[i];
}

console.log(sum);



let numbers2 = [2, 4, 6, 8, 10];

for (let i = 0; i < numbers2.length; i++) {
  console.log(numbers2[i]);
}


let words = ["Кіт", "Програміст", "Привіт", "Дім", "Телефон"];

for (let i = 0; i < words.length; i++) {
  if (words[i].length > 5) {
    console.log(words[i]);
  }
}


let numbers3 = [12, 45, 7, 89, 23, 56, 3, 67, 34, 10];

let max = numbers3[0];

for (let i = 1; i < numbers3.length; i++) {
  if (numbers3[i] > max) {
    max = numbers3[i];
  }
}

console.log(max);


let numbers = [3, 8, 12, 7, 15, 20, 9, 4, 11, 6];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}