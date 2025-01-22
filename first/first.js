// let student={
//     fullName:"somen kumar singh",
//     age:22,
//     cgpa:8.6,
//     isPass:true,
// };
// console.log(student.fullName);
// console.log(student);
// let linkdn={
//     fullName:"somen kumar singh",
//     isFollow:true,
//     message:"hiii",
//     post:143,
//     following:"143k",
//     followers:"50",
//     bio:"Software Engineer",
// };
// console.log(linkdn);

let age=25;

// if(age>=18){
//     console.log("you can vote");
// }

// else{
//     console.log("you cant vote");
// }

// let color="njkddv";

// if(color==="dark"){
//     color="white";
// }

// else{
//     color="jnjvrevb";
// }
// console.log(color);

// Terniary operator

// let result=age>=18?("adult"):"not adudlt";
// console.log(result);

// let number=prompt("Enter a number");
// number%5==0?console.log("true"):console.log("false");

// let grade=prompt("Enter your grade");
// if(grade>=90 && grade<=100){
//     console.log('A');
// }

// else if(grade>=70 && grade<=89){
//     console.log('B');
// }
// else if(grade>=60 && grade<=69){
//     console.log('C');
// }
// else if(grade>=50 && grade<=59){
//     console.log('D');
// }
// else{
//     console.log('E');
// }


// let str="somenkumarsingh";

// for(let val of str){
//     console.log(val);
// }


// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// let actualNumber=100;
// let i=0;
// let num;
// do{
//     i++;
//     num=prompt("Enter a number");
//     if(num==actualNumber){
//         console.log(i);
//     }
// }while(num!=actualNumber);

// let userName=prompt("Enter your fullname");
// userName='@'+userName+userName.length;
// console.log(userName);

// let marks=["somen","siddhi","ananya","vijay","eleson"];
// // for(let i=0;i<marks.length;i++){
// //     console.log(marks[i]);
// // }

// for(let i of marks){
//     console.log(i);
// }

// let marks=[85,97,44,37,76,60];

// let averageMarks=0;
// for(let item of marks){
//     averageMarks=averageMarks+item;
// }
// averageMarks=averageMarks/marks.length;
// console.log(`average marks of the leist of students = ${averageMarks}`);

let price=[250,645,300,900,50];

// for(let i=0;i<price.length;i++){
//     let cost=(price[i]*10)/100;
//     price[i]=price[i]-cost;
// }

// for(let item of price){
//     console.log(item);
// }
// price.push("somen");
// console.log(price);

// let deleted=price.pop();

// console.log(deleted);
// console.log(price);

// function sumOfTwo(num1,num2){
//     console.log(num1+num2);
// }

// let num1=10,num2=20;
// sumOfTwo(num1,num2);

// const sum=(a,b)=>{
//     return a+b;
// }
// console.log(sum(2,3));


// function findVowels(str){
//     let count=0;
//     for(let val of str){
//         if(val==='a'|| val==='e'|| val==='i'|| val==='o'|| val==='u'){
//             count++;
//         }
//     }
//     return count;
// }

// const countVowel=(str)=>{
//     let count=0;
//     for(let val of str){
//         if(val==='a'|| val==='e'|| val==='i'|| val==='o'|| val==='u'){
//             count++;
//         }
//     }
//     return count;
// }

// let str=prompt("Enter the string");
// console.log(countVowel(str));

let arr=[1,2,3,4,5];

arr.forEach((val)=>{
    console.log(val*val);
});