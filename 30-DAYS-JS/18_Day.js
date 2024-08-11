// A-1
// A-2

// let arr = [8,9,10];
// let target = 9;
// function find(arr,target){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==target){
//             return i;
//         }
        
//     }
// }
// console.log(find(arr,target));



// function Bsearch(arr,start,end,mid,target){
//     if(arr[mid]==target){
//         return arr[mid];
//     }
//     else if (arr[mid]>target){
//         end = mid;
//         mid = Math.floor((start + end)/2);
//         return Bsearch(arr,start,end,mid,target);
//     }
//     else if(arr[mid]<target){
//         start = mid+1;
//         mid = Math.floor((start + end)/2);
//         return Bsearch(arr,start,end,mid,target);
//     }
//     return 0;
// }
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let start = 0;
// let end = arr.length - 1;
// let mid = Math.floor((start + end)/2);
// let target = 1;

// console.log(Bsearch(arr,start,end,mid,target));

// A-3

// let str = "abushaansari"
// let count = 0;
// let arrayElement = [];
// let occurance = [];
// for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     for (let j = 1; j < str.length; j++) {
//         if(str[i]=="*"){
//             break
//         }
//         if(str[i]==str[j]){
//             count++;
            
//             str[j]="*";
//         }
        
//     }
//     arrayElement.push(str[i]);
    
//     occurance.push(count);
// }

// console.log(str[8]);
// console.log(arrayElement);
// console.log(occurance);

// A-4
// A-5