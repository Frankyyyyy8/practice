/*
D-TASK (NodeJS)

 Shunday function tuzingki unga integerlardan iborat
array pass bolsin va function bizga osha arrayning eng
katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/

// Masalani yechimi:
function getHighestIndex(intArr) {
  let a = intArr[0];
  let b = 0;

  for (let i = 0; i < intArr.length; i++) {
    if (intArr[i] > a) {
      a = intArr[i];
      b = i;
    }
  }
  return b;
}

const result = getHighestIndex([5, 21, 12, 21, 8]);
console.log("result:", result);

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
