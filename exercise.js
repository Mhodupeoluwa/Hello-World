//checks if a string is longer than n value removing all whitespace
function isLonger(str , n){

    var res =str.trim();
    return res.length > n;

}

var ans = isLonger("this is a programming class",30);
document.write(ans + "<br>");

//create a function that reverse a strong,for example:hi,ih
function reversestr(str){
    return str.split("").reverse().join("");
}
document.write(reversestr("Hello"));