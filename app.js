// 2-task
// Massiv ichidagi har bir objectga isMarried nomli property qo’shilsin. Agar object yoshi 25 dan kichi bo’lsa isMarried ga false, aks holda true qiymat o’zlashtirilsin.

// function isMarried(arr) {
//   for (let people of arr) {
//     people.isMarried = people.age >= 25;
//   }
//   return arr;
// }

// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// console.log(isMarried(people));

// 3-task
// Quyidagi objectlardan tuzilgan massiv ichidagi yoshi eng katta va yoshi eng kichik bo’lgan insonning ismlarini qaytaruvchi getNameMaxMinAge(arr) nomli funksiya yozing. (for)

// 	Output: ["Temur", "Sardor"]

// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// function getNameMaxMinAge(arr) {
//   let max = arr[0];
//   let min = arr[1];
//   for (let item of arr) {
//     if (item.age > max.age) {
//       max = item;
//     } else if (item.age < min.age) {
//       min = item;
//     }
//   }
//   return [max.name, min.name];
// }

// console.log(getNameMaxMinAge(people));

// Objectda turli xil kalitlar bir xil qiymatlarga ega, kalitlari o'sha qiymatlardan iborat shunday object tuzingki, bu objectning qiymatlari massiv ko'rinishidagi eski objectning kalitlarlaridan iborat bo'lsin.

// Input: {1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20}
// Output: {20: [1, 3, 8], 30: [2, 5], 40: [4, 7]: 50: [6]}

// const numbers = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };

// const result = {}

// 5-task
// Ikkita object berilgan ularning ba'zi kalitlari bir xil. Bir xil kalitlaridan iborat bo'lmagan yangi object hosil qiling.

// Input: obj1 = { a: 3, b: 10, c: 5, d: 7 };
// obj2 = { a: 10, d: 4, e: 6, f: 15 };
// Output: obj = {b: 10, c: 5, e: 6, f: 15};

// const obj1 = { a: 3, b: 10, c: 5, d: 7 };
// const obj2 = { a: 10, d: 4, e: 6, f: 15 };
// const obj3 = {};

// for (let item in obj1) {
//   if (!obj2[item]) {
//     obj3[item] = obj1[item];
//   }
// }
// for (let item in obj2) {
//   if (!obj1[item]) {
//     obj3[item] = obj2[item];
//   }
// }

// console.log(obj3);
