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

// function calculate(expression: string): number {
//   // String ichidagi sonlarni va amallarni ajratish uchun eval metodidan foydalanamiz
//   const result = eval(expression);
//   return result;
// }

// // Misol uchun chaqirish
// const sum = calculate("1+3");
// console.log(sum); // 4

// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// // MASALAN: missingNumber([3, 0, 1]) return 2

// function missingNumber(sonlar: number[]): number {
//     sonlar.sort((a, b) => a - b);
//     for (let i = 0; i < sonlar.length; i++) {
//         if (sonlar[i] !== i) {  
//             return i;
//         }
//     }

//     return sonlar.length;
// }

// // Masalan:
// console.log(missingNumber([3, 0, 1]));  // Natija: 2


// T-TASK:

// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]


// U-TASK:

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;


// function sumOdds(number: number): number {
//     let count = 0;  // Toq sonlarni sanash uchun o'zgaruvchi
//     for (let i = 0; i <= number; i++) {  // 0 dan numbergacha barcha sonlarni ko'rib chiqamiz
//         if (i % 2 !== 0) {  // Agar son toq bo'lsa (2 ga bo'linmasa)
//             count++;  // Sanagichga 1 qo'shamiz
//         }
//     }
//     return count;  // Natijani qaytaramiz
// }


// V-TASK:

// Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}
// function countChars(str: string): { [key: string]: number } {
//     const result: { [key: string]: number } = {};

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
        
//         if (result[char]) {
//             result[char]++;  // Agar harf oldin bor bo'lsa, uni sanog'ini oshiramiz
//         } else {
//             result[char] = 1;  // Agar harf yangi bo'lsa, sanog'ini 1 ga teng qilib qo'yamiz
//         }
//     }

//     return result;
// }

// console.log(countChars("hello")); // {h: 1, e: 1, l: 2, o: 1}


// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

// function chunkArray(sonlar: number[], uzunlik: number): number[][] {
//     let natija: number[][] = [];  // Bo'laklarga ajratilgan arrayni saqlaymiz
//     let i = 0;

//     // Sonlar arrayini uzunlik bo'yicha bo'laklarga ajratamiz
//     while (i < sonlar.length) {
//         // Har bir bo'lakni kesib olamiz va natijaga qo'shamiz
//         let bolak = sonlar.slice(i, i + uzunlik);
//         natija.push(bolak);
//         i += uzunlik;  // Keyingi bo'lak uchun indexni yangilaymiz
//     }

//     return natija;
// }

// // Masalan:
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));  
// Natija: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]


// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda

// function countOccurrences(obj: { [key: string]: any }, key: string): number {
//     let count = 0;  // kalitlarni sanash uchun

//     // har bir kalit-qiymat juftligini aylanib chiqamiz
//     for (let k in obj) {
//         if (k === key) {
//             count++;  // agar kalit qidirilayotgan kalitga teng bo'lsa, sanaymiz
//         }

//         // agar qiymat yana bir object bo'lsa, rekursiv chaqiramiz
//         if (typeof obj[k] === 'object' && obj[k] !== null) {
//             count += countOccurrences(obj[k], key);
//         }
//     }

//     return count;  // umumiy natijani qaytaramiz
// }

// // Misol
// const obj = {
//     model: 'Bugatti',
//     steer: {
//         model: 'HANKOOK',
//         size: 30
//     }
// };

// const natija = countOccurrences(obj, 'model');
// console.log(natija);  // bu yerda natija 2 bo'lishi kerak

// Y-TASK:

// Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]
//  mana shuni type scripda yozib ber

function findIntersection(arr1: number[], arr2: number[]): number[] {
    let result: number[] = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) !== -1) {
            result.push(arr1[i]);
        }
    }

    return result;
}

// Misol:
const result = findIntersection([1, 2, 3], [3, 2, 0]);
console.log(result); // Natija: [2, 3]
