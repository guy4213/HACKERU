
function bodyload(){
 alert("body has been loaded");
console.log("awaiting for the user to enter his details ");
}
function onclick1(){
 alert("typing has began");
console.log("user started typing  ");
}
function ondoubleclick (){
 alert("click only one time to start.");
console.log("user is doubleclicking");
console.log( print2());
 console.log(print1());
}
function changing  (){
  console.log("user is done typing");
}
 function print1(){
let username= document.getElementById('inp1').value;
console.log (username);
return username;
}
function print2(){
  let password= document.getElementById('inp3').value;
  console.log (password);
  return password;
 
  } 
  
   
 print3(print2(),print1());
 
  function print3(password,username){
    password=print2();
    username=print1();
   if(password=="guy722000" && username=="guy4213"){
console.log("details are correct")
alert ("details are correct")
   }
  }