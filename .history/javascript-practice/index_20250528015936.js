// console.log(`hello world`);
// window.alert("A new alert");
document.getElementById("myH1" ).textContent= "Hello";
document.getElementById("myP1").textContent = "this is a paragraph";
document.getElementById("myP2").textContent = "this is another paragraph";
document.getElementById("myP3").textContent = `the number of students are ${student}`;




// let online = Boolean;
// online = false;


let student= 70;

let even = student % 2 === 0 ? "even" : "odd";
console.log(even);

let element = array;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= array.length;i++){
    console.log(element);
}

document.getElementById("array1").textContent = `is 7 odd or even? it is: ${even}`;
document.getElementById("array2").textContent = `the element is: ${element}`;

// }
// let number = 10 * 10;
// if (online === true){
//     console.log(`You are online now for ${number}`  );
// } 
// else{
//     console.log(`Your are not online please login first`);
// }