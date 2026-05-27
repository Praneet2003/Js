let str = "Javascript";
let size = 0;
for(let i of str){
    console.log("i = ",i);
    size++;
}
console.log("The size of given string is: "+size);
let sum = 0;
let arr = [10,20,30,40,50];
for(let val of arr){
    sum+=val;
    console.log(val);
}
console.log("The sum of elements present in the array is: "+sum);