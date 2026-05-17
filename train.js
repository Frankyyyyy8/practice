/* N-TASK (NodeJS)

  Shunday function yozing, u raqamlardan tashkil topgan 
array qabul qilsin va array ichidagi har bir raqam uchun 
raqamni ozi va hamda osha raqamni kvadratidan tashkil 
topgan object hosil qilib, hosil bolgan objectlarni array 
ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, 
{number: 2, square: 4}, {number: 3, square: 9}];
*/

// Masalani yechimi:

function getSquareNumbers(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push({
      number: numbers[i],
      square: numbers[i] ** 2,
    });
  }

  return result;
}

const result = getSquareNumbers([1, 2, 3]);
console.log("result:", result);

/* L-TASK (NodeJS)

Shunday function yozing, u string qabul qilsin va string
ichidagi hamma sozlarni chappasiga yozib va sozlar 
ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";
*/

// Masalani yechimi:
// function reverseSentence(str) {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// const result = reverseSentence("we like coding!");
// console.log("result:", result);
// Output: "ew ekil !gnidoc"

/* J-TASK (NodeJS)

Shunday function yozing, u parametridagi array ichida 
eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4
*/

// Masalani yechimi:
// function majorityElement(arr) {
//   return arr
//     .sort(
//       (a, b) =>
//         arr.filter((v) => v === a).length - arr.filter((v) => v === b).length,
//     )
//     .pop();
// }

// result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);
// console.log("result:", result);

/* H-TASK (NodeJS)

shunday function tuzing, u integerlardan iborat arrayni
argument sifatida qabul qilib, faqat positive qiymatlarni
olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"
*/

// Masalani yechimi:

// function getPositive(ele) {
//   let result = "";

//   for (let i = 0; i < ele.length; i++) {
//     if (ele[i] > 0) {
//       result += ele[i];
//     }
//   }

//   return result;
// }

// const result = getPositive([1, -4, 2, 5]);
// console.log("result:", result);

/* 
F-TASK (NodeJS)

 Shunday findDoublers function tuzing, unga faqat bitta
string argument pass bolib, agar stringda bir hil harf
qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi
*/

// // Masalani yechimi:
// function findDoublers(str) {
//   return new Set(str).size !== str.length;
// }
// const result = findDoublers("hello");
// console.log("result:", result);

/*  
E-TASK (NodeJS)

Shunday function tuzing, u bitta string argumentni qabul
qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"
*/
// Masalani yechimi:
// function getReverse(str) {
//   return str.split("").reverse().join("");
// }

// result = getReverse("hello");
// console.log("result:", result);

/*
D-TASK (NodeJS)

 Shunday function tuzingki unga integerlardan iborat
array pass bolsin va function bizga osha arrayning eng
katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/

// Masalani yechimi:
// function getHighestIndex(intArr) {
//   let a = intArr[0];
//   let b = 0;

//   for (let i = 0; i < intArr.length; i++) {
//     if (intArr[i] > a) {
//       a = intArr[i];
//       b = i;
//     }
//   }
//   return b;
// }

// const result = getHighestIndex([5, 21, 12, 21, 8]);
// console.log("result:", result);

/* C-TASK (NodeJS)

  Shunday function tuzing,
u 2ta string parametr ega bolsin,
hamda agar har ikkala string bir hil harflardan
iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

// Masalani yechimi:
// function checkContent(a, b) {
//   if (a.length !== b.length) return false;

//   const sort = (ele) => ele.split("").sort().join("");

//   return sort(a) === sort(b);
// }

// const result = checkContent("mitgroup", "gmtiprou");
// console.log("result:", result);

/* B-TASK
 Shunday function tuzing,
 u 1ta string parametrga ega bolsin, 
 hamda osha stringda qatnashgan raqamlarni 
 sonini bizga return qilsin.

MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/

// Masalani yechimi:
// function countDigits(dig) {
//   let count = 0;

//   for (let ele of dig) {
//     if (ele >= "0" && ele <= "9") {
//       count++;
//     }
//   }

//   return count;
// }
// const result = countDigits("ad2a54y79wet0sfgb9");
// console.log("result:", result);

/* A-TASK: 
SAVOL: Shunday 2 parametrli function tuzing, 
 hamda birinchi parametrdagi letterni ikkinchi parametrdagi 
 sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN: countLetter("e", "engineer") 3ni return qiladi.
*/

// Masalani yechimi:

// function countLetter(a, b) {
//   let c = b.split("");
//   let count = 0;

//   for (let i = 0; i <= c.length; i++) {
//     if (c[i] === "e") {
//       count += 1;
//     }
//   }

//   return count;
// }

// const result = countLetter("e", "engineer");
// console.log("result:", result);
