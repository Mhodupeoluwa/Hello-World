//convert fahreheit to celcius
function convert()
{
    function tocelsius(f){
         return(5/9)*(f-32)
    }
let fah =parseInt(prompt("Enter Fahrenheit"))
document.getElementById("demo").innerHTML =tocelsius(fah);
}