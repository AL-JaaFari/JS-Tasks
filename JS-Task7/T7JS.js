
// TASK 7
let str = "mohammed";
let w1 = str.slice(0,1);
console.log(w1);

let w2 = str.slice(-8, 1);
console.log(w2);

let w3 = str.substring(0, 1);
console.log(w3);

let w6 = str.substring(-8, 1);
console.log(w6);

let w4 = str.substr(0, 1);
console.log(w4);

let w5 = str[0];
console.log(w5);
if (str[0] === str[0].toLowerCase()){
    console.log("Yes, It's");
}else{
        console.log("The first letter is a UpperCase");
}


