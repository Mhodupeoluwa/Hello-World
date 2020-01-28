// function is a block of code design to perform a specific task
//function is only executed when its been called 
/*
function name (parameter1,parameter2,){
    code to be executed
}
*/
//function without a parameter
function display(){
    document.write("hello javascript" + "<br>")
}
    display();//function calling
function modupenum(){
    function modupe(a,b){
return a*b;
    }
    document.write(modupe(5,7) +10);
} 