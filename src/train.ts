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

// function majorityElement(nums: number[]): number | null {
//    let counts = new Map<number, number>();
//    let majority = null;
//    let maxCount = 0;

//    nums.forEach(num => {
//        let count = (counts.get(num) || 0) + 1;
//        counts.set(num, count);

//        if (count > maxCount) {
//            maxCount = count;
//            majority = num;
//        }
//    });

//    return majority;
// }

// // Example usage:
// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); 

//UNAUTHORIZED 3 ga bolinadi
//Sessions : (Cookies),
//Tokens : (Cookies),
//Tokens : (Headers)


// Bravzurni 3xil xotirasi mavjud
// 1.Local Storage
// 2.Sessions.Storage
// 3.Cookie

// Traditional FD => SSR => EJS
// Modern FD => SPA => REACT

// J-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// function findLongestWord(text: string) {
//     return text
//         .split(/\s+/g)
//         .reduce(function (record, word) {
//             if (word.length > record.length) {
//                 record = word;
//             }
//             return record;
//         }, '');
// }

// console.log(findLongestWord("I come from Uzbekistan"));


/**
  request join
  self destroy
 */


//   K-TASK: 

//   Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
//   MASALAN: countVowels("string") return 1;

// function countVowels(input: string): number {
//     const vowels  = ['a', 'e', 'i', 'o'];
//     let count = 0;
   
//     for (let length of input) {
//         if (vowels.includes(length)) {
//             count++;
//         }
//     }
// return count;
// };

// console.log(countVowels("string"));

// function countVowels(input: string): number {
//     // Unli harflar ro'yxati
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let count = 0;

//     // Har bir harfni tekshirib chiqish
//     for (let char of input) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// // Funksiyani sinab ko'rish
// console.log(countVowels("string")); // Natija: 1
// console.log(countVowels("Typescript")); // Natija: 3
// console.log(countVowels("Uzbekistan")); // Natija: 4


// L-TASK: 

// Shunday function yozing, u string qabul qilsin va string
//  ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini
//   buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function reverseSentence(sentence: string): string {
//     return sentence
//       .split(' ')                // Gapni so'zlarga ajratadi
//       .map(word =>               // Har bir so'z uchun
//         word.split('').reverse().join('') // So'zni harflar bo'yicha chappa qilib
//       ).join(' ');               // So'zlarni yana gapga birlashtiradi
//   }
  
//   // Namuna chaqiruv
//   console.log(reverseSentence("we like coding!")); // "ew ekil gnidoc!"

// Raqamlar uchun ob'ektning turini belgilash
// type NumberSquare = {
//   number: number;  // Raqam
//   square: number;  // Raqamning kvadrati
// };

// // Funksiya: raqamlardan iborat array qabul qiladi va ularni ob'ektlar arrayiga aylantiradi
// function getSquareNumbers(numbers: number[]): NumberSquare[] {
//   // Natija uchun bo'sh array yaratamiz
//   let result: NumberSquare[] = [];

//   // Har bir raqamni ko'rib chiqamiz
//   for (let i = 0; i < numbers.length; i++) {
//       let num = numbers[i];  // Raqamni olish
//       let square = num * num; // Raqamning kvadratini hisoblash

//       // Ob'ektni natijaga qo'shamiz
//       result.push({
//           number: num,
//           square: square
//       });
//   }

//   return result; // Natijani qaytarish
// }

// // Funksiyani chaqirish va natijani ko'rsatish
// const result = getSquareNumbers([1, 2, 3]);
// console.log(result); // [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]

// N-TASK: 

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindromCheck(s: string): boolean {
//   // Stringni teskari qilib olamiz
//   let reverseString: string = s.split('').reverse().join('');
  
//   // Asl string va teskari stringni solishtiramiz
//   if (s === reverseString) {
//       return true;  // Agar teng bo‘lsa, palindrom
//   } else {
//       return false; // Agar teng bo‘lmasa, palindrom emas
//   }
// }

// Masalan:
// console.log(palindromCheck("dad"));  // true
// console.log(palindromCheck("son"));  // false


// function calculateSumOfNumbers(arr: string | any[]) {
//   let sum = 0; 
//   for (let i = 0; i < arr.length; i++) {

//     if (typeof arr[i] === 'number') {
//       sum += arr[i];
//     }
//   }

//   return sum; 
// }

// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35])); // 45


// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]


// function objectToArray(obj: any): any[] {
//   // Bo'sh array yaratamiz
//   let result = [];

//   // For-in tsikli orqali objectning barcha kalitlarini ko'ramiz
//   for (let key in obj) {
//     // Har bir kalit va uning qiymatini kichik massivga joylaymiz
//     result.push([key, obj[key]]);
//   }

//   // Natijani qaytaramiz
//   return result;
// }

// // Funksiyani test qilamiz
// const result = objectToArray({ a: 10, b: 20 });
// console.log(result); // [['a', 10], ['b', 20]]

// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string.
//  Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// function hasProperty(obj: Record<string, any>, prop: string): boolean {
//   // Agar obyekt prop degan xususiyatga ega bo'lsa, true qaytaramiz
//   if (obj[prop] !== undefined) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Masalan:
// console.log(hasProperty({name: "BMW", model: "M3"}, "model")); // true
// console.log(hasProperty({name: "BMW", model: "M3"}, "year"));  // false

// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

function calculate(expression: string): number {
  // String ichidagi sonlarni va amallarni ajratish uchun eval metodidan foydalanamiz
  const result = eval(expression);
  return result;
}

// Misol uchun chaqirish
const sum = calculate("1+3");
console.log(sum); // 4
