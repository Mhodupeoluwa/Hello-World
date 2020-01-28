 let age = parseInt (prompt("What is your age ?"));

if(isNaN(age)){
 alert  ("Age must be a number");
}
else{
    if(age > 18){
    alert("welcome to the website");
} else if(age > 13){
    alert("you are not allowed to acces the website");
}
else{
    alert("you are not allowed to access the website");
}
}