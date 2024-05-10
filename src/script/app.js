// Task 1. ===> Arrayin içində olan tək ədədləri bir vahid artır <===
let arr = [89, 41, 7, 56, 44, 11, 100, 2];
console.log(`full array: [${arr}]`)
for (let numbers of arr) {
    if (numbers % 2 !== 0) {
        console.log(`initial: ${numbers}`);
        numbers += 1;
        console.log(`new: ${numbers}`);
    };
};


// Task 2. ===> Arrayin içində olan tək ədədləri arrayin sonuncu elementinə cüt ədədləri isə arrayin ilk elementinə vur  <===
  let sumAlone=0;
  let sumCouple=0
 for(let numbers of arr){       
        if(numbers %2 !==0){
        sumAlone+=numbers;}          
     else {
      sumCouple+=numbers;

     }

 };
 console.log(`sum of alone numbers:${sumAlone  * arr[0]}`)
 console.log(`sum of couple numbers:${sumCouple * arr[arr.length-1]}`)

 
 // Task 3. ===> Arrayin içində ən böyük iki ədədi tapın və hasilini yazın <===
let nums = [2, 4, 5, 6, 10, 45, 77, 99, 200];
let largestNumber = nums[0];
let smallestNumber = nums[0];
let sum = 0

for (let i = 1; i <= nums.length - 1; i++) {
    if (nums[i] > largestNumber) {
        largestNumber = nums[i];
    }
    if (nums[i] < smallestNumber) {
        smallestNumber = nums[i];
    }
};
sum = largestNumber * smallestNumber;
console.log(sum);











