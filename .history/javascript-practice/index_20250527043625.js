// console.log(`hello world`);
// window.alert("A new alert");
document.getElementById("myH1" ).textContent= "Hello";
document.getElementById("myP1").textContent = "this is a paragraph";


let online = Boolean;
online = false;

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length;i++){
    console.log(array[i]);
    document.getElementById("myP2").textContent += array[i] + " ";
}
let number = 10 * 10;
if (online === true){
    console.log(`You are online now for ${number}`  );
} 
else{
    console.log(`Your are not online please login first`);
}