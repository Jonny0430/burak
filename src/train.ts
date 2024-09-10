// console.log("hello ")
// G-TASK: 

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

// function getHighestIndex(arr:number[]) {
//     let max_value = Math.max(...arr);
//     return arr.indexOf(max_value);
// };

// // Example usage:
// const array = [3, 5, 7, 27, 7, 1];
// console.log("getHighestIndex:", getHighestIndex(array));

// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(arr: number[]): string {
//     // Filter the array to keep only positive numbers and join them into a string
//     return arr.filter(num => num > 0).join('');
// }

// // Example usage:
// console.log(getPositive([1, -4, 2])); // Output: "12"

/* Project Standards:
- Logging standards:
-Naming standards:
   function, method,variable => CEMAL
   class => PASCAL
   folder => KEBAB
   css => SNAK
   -Error handling
*/ 

// H2-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

// function getDigits(input: string): string {
//     return input.replace(/\D/g, '');
// }

// console.log(getDigits("m14i1t")); 

// Traditinal API 
// Rest API 
// GraphQl API 

// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

function majorityElement(nums: number[]): number | null {
   let counts = new Map<number, number>();
   let majority = null;
   let maxCount = 0;

   nums.forEach(num => {
       let count = (counts.get(num) || 0) + 1;
       counts.set(num, count);

       if (count > maxCount) {
           maxCount = count;
           majority = num;
       }
   });

   return majority;
}

// Example usage:
console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); 