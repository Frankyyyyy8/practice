/* A-TASK: 
SAVOL: Shunday 2 parametrli function tuzing, 
 hamda birinchi parametrdagi letterni ikkinchi parametrdagi 
 sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN: countLetter("e", "engineer") 3ni return qiladi.
*/

// Masalani yechimi:

function countLetter(a, b) {
  let c = b.split("");
  let count = 0;

  for (let i = 0; i <= c.length; i++) {
    if (c[i] === "e") {
      count += 1;
    }
  }

  return count;
}

const result = countLetter("e", "engineer");
console.log("result:", result);
