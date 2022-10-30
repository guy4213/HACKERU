



//let x= prompt("enter number");
//let num=prompt ("enter second num");


//twonumbersfromone(x);
//stringi(x,num);
//function twonumbersfromone(y) { 
//  y= parseInt(y);
  //  document.write(" first number is: "+ y)
  //  let a=y+1;
 //   let b=a+1;
//    document.write(" second number is: "+ a)
//    document.write(" third number is: "+ b)
//}


//function stringi(x,y){
  //  document.write(" included num is "+ x+y)

//
//}





let x= prompt("enter number");
let num=prompt ("enter second num");




document.write(" first number is: "+ (twonumbersfromone(x)));
document.write(" second number is: "+ (twonumbersfromone(x)+1));
document.write(" third number is: "+ (twonumbersfromone(x)+2));

document.write(" string is: "     + (stringi(x,num)));


function twonumbersfromone(y) { 
  y= parseInt(y);
    
  return y;
    }
function stringi(x,y){
  let sum =x+y;
  return sum;
}