/*----1 Question---*/ 

days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"]

var d = new Date()
var  showDay = days[d.getDay()]
  
 var showTime = d.toLocaleTimeString();
 document.getElementById("showDay").innerHTML = showDay;
 console.log(showDay)
 document.getElementById("showtime").innerHTML = showTime;
 console.log(showTime)
 showmonth = d.toLocaleDateString()

 /*------------------ Q2 Question --------------*/
 console.log(showmonth);
 document.getElementById("showMonth").innerHTML = showmonth ;

 /*--------------Q3 Question ------------------ */
 var base =5; var height = 6; var length = 7;
  triangle = 1/2 *(base*height)
  document.getElementById("showtriangle").innerHTML =triangle


  /*-------Q4 Question-------*/
  function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}


/* ------ Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 
*/

var takeValue = prompt("Enter a Value between 1 to 10")
var ran = Math.floor(Math.random()*10) +1
console.log(ran)

if(parseInt(takeValue)==ran){
  console.log("Good Work")

  document.getElementById("result").innerHTML ="Good Work";
}
else{
  console.log("Try your Luck next time")
  var a ="Not Match";
  document.getElementById("result").innerHTML = a;
}


document.getElementById("random_text").innerHTML ="Random Number" +" "+ ran;


/* Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.*/
var f =45, c=60;
var tem = ((f-32)*5)/9
var checkk = ((c+32)*9)/5
console.log(checkk,tem);

/*Write a JavaScript program to get the current website URL (loading page).*/ 

var urlStore = window.location.href;
console.log("current Website Url link: "+" "+urlStore);


/*--Write a JavaScript program to compute the sum of the two given integers. 
If the two values are same, then returns triple their sum.---*/

function sum (a, b) {
  if (a == b) {
    return 3 * (a + b);
    } 
   else
   {
    return (a + b);
   }
 }

 console.log(sum(5,5));
 console.log(10,12)

 /*Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.*/ 
 function checkSum(a,b){

    if(a==50|b==50){
      console.log(true)
    return (a,b);
  }
  else if(a+b ==50){
    console.log(true)
    return (a,b);
  }
  else {
    console.log(false)
    return (a + b);
  }
 }

 console.log(checkSum(50,50))
 console.log(checkSum(20,30))
 console.log(checkSum(20,10))

 /* Q: Write a JavaScript program to check a given integer is within 20 to 100.*/ 
   function done(x){


 var s = Math.abs(100-x) <=20 
 console.log(s);
 return x;
}
 
 var x = document.getElementById("adi").value;

 /*Q: Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.*/
  
 var str ="Aditya";
 var str2="py";
 console.log(str2.concat(str))
 console.log(str)

//  var arr=[]
//  var va ="aditya";
//    var spVa = va.split('')
//    for (var i=0;spva.length;i++){
//    console,log(spVa[i])
//   }

/* Write a JavaScript program to create a new string from a given string changing the position of first and last characters.
 The string length must be greater than or equal to 1.*/

 var a =["a","b","c"]
 
//  a.push(b);
for(var i=0;i<a.length;i++){
  var b = a.shift();
(function myTimer(){
 
    console.log("Check" + a.push(b))
  
   
   console.log("Check" + b)
   console.log(a)
  
})();

}
var myVar = setInterval(myTimer, 1000);