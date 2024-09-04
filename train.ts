// console.log("hello ")
// G-TASK: 

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

function getHighestIndex(arr:number[]) {
    let max_value = Math.max(...arr);
    return arr.indexOf(max_value);
};

// Example usage:
const array = [3, 5, 7, 27, 7, 1];
console.log("getHighestIndex:", getHighestIndex(array));
