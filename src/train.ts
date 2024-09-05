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
function getPositive(arr: number[]): string {
    // Filter the array to keep only positive numbers and join them into a string
    return arr.filter(num => num > 0).join('');
}

// Example usage:
console.log(getPositive([1, -4, 2])); // Output: "12"


