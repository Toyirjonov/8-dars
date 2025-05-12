//1-task
//  Quyidagi objectni outputdagi ko'rinishda chiqaring. (toString, join)

// Input:
// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };
// Output:
// firstName: Abdulaziz
// lastName: Toshpulatov
// age: 23
// languages: js,python,c++,nodejs
// friends: Jamshid+Abbos+Jalol+Mar'uf

// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// console.log("firstName: " + me.firstName);
// console.log("lastName: " + me.lastName);
// console.log("age: " + me.age);
// console.log("languages: " + me.languages.toString());
// console.log("friends: " + me.friends.join("+"));

// 2-task
// Kalitlari 1 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvatratiga teng object hosil qiling. (for)

// Input: 5
// Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

// let n = 5;
// let result = {};
// for (let i = 1; i < n; i++) {
//   result[i] = i * i;
// }

// console.log(result);

// 3-task
// 2-misoldan hosil bo’lgan objectning kalitlari va qiymatlari yig’indisini toping. (Object.keys(), Object.values())
// let n = 5;
// let result = {};
// for (let i = 1; i < n; i++) {
//   result[i] = i * i;
// }
// let sumkeys = 0;
// let sumvalues = 0;
// for (let key in result) {
//   sumkeys += +key;
//   sumvalues += result[key];
// }
// console.log(sumkeys);
// console.log(sumvalues);

// 4-task
// Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for)

// Input: ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"]
// Output: {"Abdulaziz": 9, "Safarmurod": 10, "O’rol": 5, "Jahongir": 8}

// const names = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
// let result = {};
// for (let i = 0; i < names.length; i++) {
//   result[names[i]] = names[i].length;
// }

// console.log(result);

// 5-task
// Shunday object berilganki, uning kalitlari mahsulotlardan va qiymatlari esa ularning narxlaridan tuzilgan. Barcha mahsulot qancha turishini toping. (Object.values())

// Input: {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000}
// Output: 50000

// const fruits = {
//   Apelsin: 10000,
//   Olma: 12000,
//   Mandarin: 8000,
//   Banan: 20000,
// };

// let result = 0;
// const narxlar = Object.values(fruits);

// for (let i = 0; i < narxlar.length; i++) {
//   result += narxlar[i];
// }

// console.log(result);

// 6-task qila olmadim

// 7-task
// let obj = { a: false, b: 12, c: true, d: 0 };
// let nevObj = {};
// for (let key in obj) {
//   if (!obj[key] == false) {
//     nevObj[key] = obj[key];
//   }
// }

// 8-task
// Bir necha takrorlanuvchi sonlar ishtirok etgan massivdan shunday obyekt hosil qilingki, bu object kalitlari massivning takrorlanmas sonlaridan, qiymatlari esa o’sha sonlarning massivda necha marta ishtirok etganidan tuzilgan bo’lsin. (for)

// Input: [ 7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9 ]
// Output: { 7: 3, 8: 2, 4: 3, 5: 3, 9: 1 }

// const arr = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
// const result = {};
// for (let item of arr) {
//   if (result[item]) {
//     result[item]++;
//   } else {
//     result[item] = 1;
//   }
// }

// console.log(result);

// 9-task
// function sort(num) {
//   let _num = num.toString();
//   let obj = {};
//   let arr = ["birlar", "minglar", "millionlar", "milliardlar", "trilionlar"];
//   let arrIndex = 0;
//   for (let i = _num.length; i > 0; i -= 3) {
//     if (i - 3 >= 0) {
//       obj[arr[arrIndex]] = _num.slice(i - 3, i);
//     } else {
//       obj[arr[arrIndex]] = _num.slice(0, i);
//     }
//     arrIndex++;
//   }
//   return obj;
// }

// console.log(sort(8945472985629));

// 10-task
// Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.

// Input:
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ]
// Output:
// 1. Akrom Malikning "Halqa" kitobi o'qilmagan;
// 2. O'tkir Hoshimovning "Dunyo ishlari" kitobi o'qilgan;
// 3. Abdulfattoh Abu G'uddaning "Vaqtning qadri" kitobi o'qilmagan;

// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];

// for (let i = 0; i < books.length; i++) {
//   const book = books[i];
//   const status = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
//   console.log(`${i + 1}. ${book.author}ning "${book.title}" kitobi ${status}`);
// }

// 11-task
// Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.

// Input: const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];
// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// let total = 0;

// for (let i = 0; i < products.length; i++) {
//   const product = products[i];
//   const discountPrice = product.price - (product.price * product.discount / 100)
//   total += discountPrice * product.quantity;

// }

// console.log("Umumiy summa:", total);

//12-task

// Objectning kalitlaridan va qiymatlaridan iborat bo'lgan massiv tuzing.

// Input: const obj = {
//   "it": 20,
//   "mushuk": 10,
//   "sigir": 200,
//   "tovuq": 2
// }
// Output: ["it", 20, "mushuk", 10, "sigir", 200, "tovuq", 2]

// const obj = {
//   it: 20,
//   mushuk: 10,
//   sigir: 200,
//   tovuq: 2,
// };

// let arr = [];
// for (let key in obj) {
//   arr.push(key);
//   arr.push(obj[key]);
// }
// console.log(arr);

// 13-task
// GPA ni hisoblovchi dastur tuzing.

// GPA = (grade1 * kredit1 + grade2 * kredit2 + ...) / (kredit1 + kredit2 + ...)

// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];

// let totalgrade = 0;
// let totalkredit = 0;

// for (let item of grades) {
//   totalgrade += item.grade * item.kredit;
//   totalkredit += item.kredit;
// }

// const GPA = totalgrade / totalkredit;
// console.log(GPA.toFixed(2));

// 14-task

// Abdulaziz Programmer nechta to'g'ri va noto'g'ri javob topganligini toping.

// const rightAnswers = {
//   1: "B",
//   2: "A",
//   3: "C",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "A",
//   8: "D",
//   9: "A",
//   10: "B",
// };
// const myAnswers = {
//   1: "C",
//   2: "A",
//   3: "D",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "B",
//   8: "C",
//   9: "A",
//   10: "C",
// };

// let corect = 0;
// let incorect = 0;

// for (key in rightAnswers) {
//   if (rightAnswers[key] == myAnswers[key]) {
//     corect++;
//   } else {
//     incorect++;
//   }
// }

// console.log(corect);
// console.log(incorect);

// 15-task
// Qiymatlari sonlardan iborat obj nomli object berilgan. Qiymatlarini n martaga oshiruvchi getMultipleValues(n) nomli funksiya yozing.

// Input:  let n = 3
// const obj = { a: 2, b: 3, c: 4, d: 6 };
// Output:  const res = { a: 6, b: 9, c: 12, d: 18 }

// const obj = { a: 2, b: 3, c: 4, d: 6 };

// function getMultipleValues(n) {
//   const res = {};
//   for (let key in obj) {
//     res[key] = obj[key] * n;
//   }
//   return res;
// }

// let n = 3;
// const res = getMultipleValues(n);
// console.log(res);

// 17-20 task

// const pupils = [
//   { name: "Elbek", protcent: 95 },
//   { name: "Zafar", protcent: 78 },
//   { name: "Aziz", protcent: 83 },
//   { name: "Jasur", protcent: 88 },
// ];

// // 17-task: O‘rtacha protcentni hisoblash
// let total = 0;
// for (let i = 0; i < pupils.length; i++) {
//   total += pupils[i].protcent;
// }
// const average = total / pupils.length;
// console.log("O‘rtacha protcent:", average.toFixed(2));

// // 18-task: Har bir o‘quvchiga grade va isPassed qo‘shish
// const updatedPupils = [];

// for (let i = 0; i < pupils.length; i++) {
//   const pupil = pupils[i];
//   let grade;

//   if (pupil.protcent >= 90) {
//     grade = 5;
//   } else if (pupil.protcent >= 80) {
//     grade = 4;
//   } else if (pupil.protcent >= 70) {
//     grade = 3;
//   } else {
//     grade = 2;
//   }

//   const isPassed = pupil.protcent >= 70;

//   updatedPupils.push({
//     ...pupil,
//     grade,
//     isPassed,
//   });
// }

// console.log("O‘quvchilar ro‘yxati:", updatedPupils);

// // 19–20-task: O‘tganlar va o‘tolmaganlar sonini hisoblash
// let passedCount = 0;
// let failedCount = 0;

// for (let i = 0; i < updatedPupils.length; i++) {
//   if (updatedPupils[i].isPassed) {
//     passedCount++;
//   } else {
//     failedCount++;
//   }
// }

// console.log("Imtihondan o‘tganlar soni:", passedCount);
// console.log("Imtihondan o‘ta olmaganlar soni:", failedCount);
