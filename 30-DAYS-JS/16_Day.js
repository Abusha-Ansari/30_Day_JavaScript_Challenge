// A-1
// function fact(n){
//     if(n==0){
//         return 1;
//     }
//     return n*fact(n-1)
// }

// console.log(fact(5));


// function fibo(n){
//     if(n==0){
//         return 0;
//     }
//     if(n==1){
//         return 1;
//     }
//     return fibo(n-1)+fibo(n-2);
// }

// console.log(fibo(7));

// A-2
// let arr = [1,2,3,4,5];
// let len = arr.length;
// function sumArr(arr , len){
//     if(len == 0){
//         return arr[len];
//     }
//     return arr[len] + sumArr(arr , len-1);
// }

// console.log(sumArr(arr , len-1));







// let arr = [0,1,2,3,4,5];
// let len = arr.length - 1;
// let ans;
// function max(arr,len){
//     if(len == 0){
//         return ans;
//     }
//     if (arr[len] < arr[len-1]){
//         let maxValue = arr[len] 
//     }
//     ans = max(arr,len-1);
//     return ans;
// }

// console.log(max(arr,len));

// A-3

// let stringWord = "daksh";
// let n = stringWord.length - 1;
// function reverse(stringWord , n){
//     if (n==0){
//         return stringWord[n];
//     }
//     else{
//         return stringWord[n] + reverse(stringWord , n-1)
//     }   
// }

// let newStr = (reverse(stringWord,n))
// console.log(newStr);



// let stringWord = "moom";
// let n = stringWord.length - 1;
// function reverse(stringWord , n){
//     if (n==0){
//         return stringWord[n];
//     }
//     else{
//         return stringWord[n] + reverse(stringWord , n-1)
//     }   
// }

// let newStr = (reverse(stringWord,n))
// if(newStr == stringWord){
//     console.log("Palindrome");
// }
// else{
//     console.log("Not a Palinrome");
// }


// A-4

// let target = 7;
// const arr = [1,2,3,4,5,6,7,8,9,10];
// let start = 0;
// let end = arr.length - 1;

// function binSearch(arr, target, start, end){

//     let mid = Math.floor((start+end)/2);

//     if(start>end){
//         return false;
//     }

//     if(arr[mid]==target){
//         return true;
//     }

//     if(arr[mid]>target){
//         end = mid;
//         return binSearch(arr,target,start,mid-1)
//     }

//     if(arr[mid]<target){
//         start = mid+1;
//         return binSearch(arr,target,mid+1,end)
//     }
// }

// console.log(binSearch(arr, target, start, end));
