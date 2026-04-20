/* B-TASK
 Shunday function tuzing,
 u 1ta string parametrga ega bolsin, 
 hamda osha stringda qatnashgan raqamlarni 
 sonini bizga return qilsin.

MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/

// Masalani yechimi:
function countDigits(dig) {
  let count = 0;

  for (let ele of dig) {
    if (ele >= "0" && ele <= "9") {
      count++;
    }
  }

  return count;
}
const result = countDigits("ad2a54y79wet0sfgb9");
console.log("result:", result);

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
