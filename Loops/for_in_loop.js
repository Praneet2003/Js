//for -in loop is basically used for objects in js.
let Student = {
    name:"Praneet Raj",
    age:22,
    cgps: 7.9
};
for(let key in Student){
    console.log("key = "+key+" value = "+Student[key]);
}