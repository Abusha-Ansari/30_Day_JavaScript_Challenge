// A-1 (TWO SUM)

// let nums = [2,11,7,15];
// let target = 9;
// function search(nums , target){
//     for(let i = 0 ; i<nums.length ; i++){
//         for(let j = 1; j<nums.length ; j++){
//             if(nums[i]+nums[j] == target){
//                 return {i,j}
//             }
//         }
//     }
// }
// console.log(search(nums , target));

// A-2

// let num = 123456789;
// let newStr = String(num);
// var finalStr=' ';

// function reverse(newStr , finalStr){
//     for(let i = newStr.length-1 ; i >= 0 ; i--){
//         finalStr += newStr[i];
//     }
//     return finalStr;
// }

// console.log(reverse(newStr,finalStr));


// A-3

// function reverse(newStr , finalStr){
//     for(let i = newStr.length-1 ; i >= 0 ; i--){
//         finalStr += newStr[i];
//     }
//     return finalStr;
// }

// let num = 12321;
// let newStr = String(num);
// var finalStr='';

// let reverseStr = reverse(newStr,finalStr);

// if(reverseStr==newStr){
//     console.log("Palindrome");
// }
// else{
//     console.log("Not A Palindrome");
// }

// A-4

// function mergeSortedArrays(arr1, arr2) {
//     let mergedArray = [];
//     let i = 0;
//     let j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }

//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }

//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }

//     return mergedArray;
// }

// let array1 = [1, 3, 5, 7];
// let array2 = [2, 4, 6, 8];

// let result = mergeSortedArrays(array1, array2);
// console.log(result);

// A-5

// let s = "()[]{}";
// let stack = [];
// let size = s.length;
// let isValid = true;

// for (let i = 0; i < size; i++) {
//     let char = s[i];
//     if (char == '(' || char == '[' || char == '{') {
//         stack.push(char);
//     } else {
//         let last = stack.pop();
//         if ((char == ')' && last != '(') ||
//             (char == ']' && last != '[') ||
//             (char == '}' && last != '{')) {
//             isValid = false;
//             break;
//         }
//     }
// }

// if (!isValid || stack.length != 0) {
//     console.log("Not Valid Parenthesis");
// } else {
//     console.log("Valid Parenthesis");
// }
