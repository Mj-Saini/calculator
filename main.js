// var a = 12;
// console.log(a);
// arr();
// function arr() {
//   const x = 10;
//   if (true) {
//     const x = 20;
//     console.log(x);
//   }
//   console.log(x);
// }

// var b = 100;
// if (b < 500) {
//   console.log("b is smaller than 100");
// } else {
//   console.log("b is greater");
// }
// b > 500
//   ? console.log("b is smaller than 100")
//   : b < 100
//   ? console.log("b is grater than 100")
//   : console.log("false");

// var grade = "B";

// switch (grade) {
//   case "A":
//     result = "A Grade";
//     break;
//   case "B":
//     result = "B Grade";
//     break;
//   case "C":
//     result = "C Grade";
//     break;
//   default:
//     result = "No Grade";
// }
// console.log(result);

// const expr = "Papayas";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// const Days = "Monday";
// switch (Days) {
//   case "january":
//     console.log("month");
//     break;
//   case "Monday":
//   case "मंगलवार":
//     console.log("day");
// }

// let x = 100;
// switch (x) {
//   case 2:
//     x = "one";
//     break;
//   case 3:
//     x = "there";
//     break;
//   default:
//     x = "null";
//     break;
// }
// console.log(`the value of ${x}`);
// console.log(x);

// let day = new Date().getDay();
// console.log(day);

// document.write(Date());

// switch (new Date().getDay()) {
//   case 0:
//     day: "Sunday";
//     break;
//   case 1:
//     day: "MondAy";
//     break;
//   case 2:
//     day: "Tuesday";
//     break;
//   case 3:
//     day: "Wednesday";
//     break;
//   case 4:
//     day: "Thursday";
//     break;
//   case 5:
//     day: "Friday";
//     break;
//   case 6:
//     day: "Saturday";
//     break;
// }

// LOOPS
//for loops

const days = ["sun ", "mon ", "teu ", " wed ", "thu ", "fri ", "sat "];
let week = " ";
for (let i = 0; i < days.length; i++) {
  week += days[i];
}
console.log(week);

//while loops

let text = "";
let i = 0;
do {
  text += i;
  i++;
} while (i < 5);
console.log(text);
