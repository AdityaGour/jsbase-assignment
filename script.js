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

function temCheck(){
  var vach = document.getElementById("check").value ;
  var f =45, c=60;
     var tem = ((parseInt(vach)-32)*5)/9;
   var checkk = ((parseInt(vach)+32)*9)/5;
console.log(checkk,tem);


}

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
 console.log(10,12) ;

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
 
  x = document.getElementById("adi").value;
 

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



/* Write a JavaScript program to compute the absolute difference between a specified number and 19. */ 
 
  function SubCheck(x){
    var x = x-19;
    console.log("CheckSub"+x)
  }

  console.log(SubCheck(18))


/* Write a JavaScript program to create a new string from a given string changing the position of first and last characters.
 The string length must be greater than or equal to 1.*/

 var a =["a","b","c"]
 
//  a.push(b);

  for(var i=0;i<a.length;i++){
    var b = a.shift();
    console.log("Check" + a.push(b))
  }
   
   console.log("Check" + b)
   console.log(a)
   

/*Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7. */

function divi(x){
  if(x%3==0 || x%7==0){
    console.log(x+"This is multiple of 3 or 7 ");

  }
  else{
    console.log("not divided with 3 and 7");
  }
}
console.log(divi(7))

/* Q:Write a JavaScript program to check if a string starts with 'Java' and false otherwise.  */

function javastr(x){
   str = x.substring(0,4)
  if(str =='java' || str =='Java' || str =='JAVA'){
    console.log("java Match"+true)
  }
  else{
    console.log("java Not Match"+false)
  }
}
console.log(javastr("JavaAditya"));

/* Q:Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive).
 Return true if one or more of them are in the said range. */

 function rangeint(a,b,c){
  sumch = a+b+c;
  console.log(sumch)
    if(sumch >=50 && sumch <=99){
      console.log(true)
      return true;
    }
    else{
      console.log(false)
      console.log(false)
    }
    
 }
 console.log(rangeint(10,20,40))

/* Write a JavaScript program to find the largest of three given integers.  */
 function largestnumber(a,b,c){
   if(a > b && a > c ){
     console.log("Greater Number A"+" "+a)
   }
   else if(b > a && b > c ){
    console.log("Greater Number B is"+" "+b)
   }
   else if(c > a && c > b ){
    console.log("Greater Number c is"+" "+c)
   }
  else{
    console.log("Greater not Number")
  }

 }
 console.log(largestnumber(2,3,4))

 /* Q: Write a JavaScript program to check if the last digit of the three given positive integers is same.  */

 function checkinterger(a,b,c){
     if((a > 0) && (b>0) && (c>0) ){
       return(a % 10 == b % 10 || a % 10 == c % 10  || c% 10 == b % 10)
       console.log("true")
     }
     else{
       console.log("False")
     }
 }
 console.log(checkinterger(20,10,40))
 console.log(checkinterger(20,10,-40))

 /* Q:  Write a JavaScript program to check the total marks of a student in various examinations.The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. 
 Return true if the student get A+ grade or false otherwise. */

 function totalMarks(x,y,z){
    var tmarks = (x+y+z)/3
    if(tmarks >= 89 && tmarks <=100){
      console.log(" you got A+"+ true)

    }
    else{
      console.log(false +" you are fail ")
    }
 }

 console.log(totalMarks(100,95,95))

 /*Write a JavaScript program to compute the sum of the two given integers, 
 If the sum is in the range 50..80 return 65 other wise return 80.  */


 function sumValues(){
   a =document.getElementById("add1").value;
   b=document.getElementById("add2").value;
   sum =parseInt(a)+parseInt(b)
   if(sum >=50 && sum <=80){
     console.log(65)

    }
    else{
      console.log(80)
    }
   console.log(sum);

 }

 /* Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.  */

 function checkingValue(){
  a =document.getElementById("add3").value;
   b=document.getElementById("add4").value;
   var sum =parseInt(a)+parseInt(b); var subtt = parseInt(a)+parseInt(b);
   console.log(sum)
  if(a == 8 || b==8){
    console.log(true)
  }
  
   if( ((parseInt(a)+parseInt(b)) == 8) ||  ((parseInt(a)-parseInt(b)) == 8)){
    console.log(true)
  }
  
  else{
    console.log(false)
  }
 }

 /*Write a JavaScript program to check three given numbers, 
 if the three numbers are same return 30 otherwise return 40 and if two numbers are same return 20. */

 function givenNum(a,b,c){
   console.log(a,b,c)
   
   if (a==b && b==c)  {
    return 30
    console.log(30)
  }
   
  else{
    return 40
    console.log(40)

  }
  if(a==b ||b==c || c==a){
    return 20
    console.log(20)
  }
  
 }
 console.log(givenNum(2,2,2))

 /* Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.*/
function nearest(){

  var nearA = document.getElementById("add5").value;
  var nearB = document.getElementById("add6").value;
 var v1=Math.abs(nearA -100); var v = Math.abs(nearB -100);
      console.log(v1,v)
 
   if(v1 > v){
     console.log(nearB)
   }
   if(v > v1)
   {
     console.log(nearA)

   }
   else{
     console.log("check")
   }
  }

  var ch ="aditya";
  // ch.reverse();
  console.log(ch.split('').reverse().join(':'))


  /* Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  */
     function chk1(){
    alp= document.getElementById("chk").value;
    console.log(alp)
    spalp = alp.split('');
    console.log(spalp)
      for(var i=0; i < spalp.length;i++){
        console.log(spalp[i])
        switch(spalp[i]){
        case '':
        break;
        case 'z':
        spalp[i]= 'a'
        break;
        case 'Z':
        spalp[i]= 'A'
        break;
        default:
        spalp[i] = String.fromCharCode(1 + spalp[i].charCodeAt(0));
        
      }
      console.log(spalp[i])
    }
  }


  /* Q: Write a JavaScript program to capitalize the first letter of each word of a given string.  */

  function captialAph(){
    // y = document.getElementById("aph").value;
    y="aditya sharma"
     z = y.split(" ")
     console.log(z)
      for(var i=0;i< z.length;i++){
       console.log(z[i][0].toUpperCase())
     }

  }
/* Q:Write a JavaScript program to convert the letters of a given string in alphabetical order. */

var letter ="Aditya";
 var  chekletter =letter.split('').sort().join('')
 console.log(chekletter)
/* Q:Write a JavaScript program to count the number of vowels in a given string. */
var vowels1 = "aeiouAEIOU";
var c11 =0;
var strtr = "Aditya ";
for(var i=0; i<strtr.length;i++){
    if(vowels1.indexOf(strtr[i])!== -1){
      c11 +=1;
  }
}
console.log(c11)

/*Q:Write a JavaScript program to check if a given string contains equal number of p's and t's present.  */


var va1 ="adityaa"
var va2 ="aidwaee"
 
var va3 = va1.length;
var va4 = va2.length;
va3 === va4;
console.log(va3 === va4)


/* Write a JavaScript program to extract the first half of a string of even length.  */

var sts ="AkashDhaka"
if (sts.length %2 == 0){
  var sstt = sts.slice(0,sts.length/2)
  console.log(sstt)
}


/* Q:Write a JavaScript program to create a new string without the first and last character of a given string. */
var akash ="DhakaSingh"

console.log(akash.substring(1,akash.length -1));


/* Q: Write a JavaScript program to test if a string end with "Script". 
The string length must be greater or equal to 6.  */
  var str11 ="Adityascript";
if (str11.substring(str11.length - 6, str.length) == 'script'){
  console.log(true)
  
}
else{
  console.log(false)
}
/* Q: Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3. */

var as = [30,32,31]
var addas =as[0]+as[1]+as[2];
console.log(addas)


/* Q: Write a JavaScript program to rotate the elements left of a given array of integers of length 3. */

// var arr11 =[4,2,1]

// console.log(changearr)
function arr_left(x)
{  console.log(x[1], x[2], x[0])
    // return (x[1], x[2], x[0]);
  
}
console.log(arr_left([3,2,4]))

/* Q:Write a JavaScript program to check if 1 appears in first or last position of a given array of integers.
 The array length must be greater or equal to 1. */
 
 function checkstr11(str111,n){
 var part1t = str111.substring(0, n);
  var par2t = str111.substring(str.length - n);
  var stst11 = part1t + par2t
  console.log(stst11);
 }
  console.log(checkstr11("adityaJava",2));
  /* Q: Write a JavaScript program to check if the first and last elements are equal of a given array of integers length 3. */
  function checkstr111(x){
    var chx = x.length - 1;
    if (x.length >= 1){
       return x[0] == x[chx];
       console.log(x[0] == x[chx])
    } 
    else 
    {
      return false; 
      console.log(false);
    }
    
    }


    console.log( checkstr111([15,10,15]))

    /*Q: Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value.
     Display the new array. */
    function checkfristlast(num){
      var maxfir = num[0]> num[2] ? num[0]:num[2]
      num[0] =maxfir;
      num[1] = maxfir;
      num[2] =maxfir;
      return num
      console.log(maxfir)
      console.log(num[0],num[1],num[2])
    }
    console.log(checkfristlast([10,20,30]))

    
