
//#region אופרטורים מתמטיים

let number1 = 110;
let number2 = 30;
let calcn1Withn2 = number1 + number2;
console.log('number1 (' + number1 + ') + number2 (' + number2 + ') = ' + calcn1Withn2);

calcn1Withn2 = number1 - number2;
console.log('number1 (' + number1 + ') - number2 (' + number2 + ') = ' + calcn1Withn2);

calcn1Withn2 = number1 * number2;
console.log('number1 (' + number1 + ') * number2 (' + number2 + ') = ' + calcn1Withn2);

calcn1Withn2 = number1 / number2;
console.log('number1 (' + number1 + ') / number2 (' + number2 + ') = ' + calcn1Withn2);

calcn1Withn2 = number1 % number2;
console.log('number1 (' + number1 + ') % number2 (' + number2 + ') = ' + calcn1Withn2);

let numVar1 = 10;
let numVar2 = 25;
let strVar1 = "8";
let strVar2 = "10";
console.log(numVar1 + strVar1 + numVar2 + strVar2);//
console.log(strVar1 + numVar2 + numVar1 + strVar2);//8251010
//#endregion

//#region אופרטורים השמה
let num1 = 10;
num1 += 10;//20;
num1 -= 15;//5
num1 *= 2;//10
num1 /= 2;//5
//#endregion

//#region אופרטורים יחסיים
let nmb1 = 10;
let nmb2 = 20;
let nmb3 = 10;
let nmb4 = 25;
let nmbAsStr = '10';
const isEqual = nmb1 === nmb2;//false
console.log('nmb1 === nmb2 = ' + isEqual);//false
console.log('nmb1 === nmb3 = ' + (nmb1 === nmb3));//true
console.log('nmb1 == nmbAsStr = ' + (nmb1 == nmbAsStr));//true
console.log('nmb1 === nmbAsStr = ' + (nmb1 === nmbAsStr));//false

console.log(nmb1 > nmb2);//false
console.log(nmb1 > nmb3);//false
console.log(nmb2 > nmb3);//true

console.log(nmb1 < nmb2);//true
console.log(nmb1 < nmb3);//false
console.log(nmb2 < nmb3);//false

console.log(nmb1 >= nmb2);//false
console.log(nmb1 >= nmb3);//true
console.log(nmb2 >= nmb3);//true

console.log(nmb1 <= nmb2);//true
console.log(nmb1 <= nmb3);//true
console.log(nmb2 <= nmb3);//false

console.log(nmb1 != nmb2);//true
console.log(nmb1 != nmb3);//false
console.log(nmb2 != nmb3);//false

console.log(nmb1 !== nmb2);//true
console.log(nmb1 != nmbAsStr);//false
console.log(nmb1 !== nmbAsStr);//true
console.log(nmb2 !== nmb3);//false
//#endregion

//#region אופרטורים לוגיים

let nmb1EqualToNmb3AndNotEqualToNmb2 = nmb1 === nmb3 && nmb1 !== nmb2;//true
console.log(nmb1EqualToNmb3AndNotEqualToNmb2);
let nmb1EqualToNmb4OrNotEqualToNmb2 = nmb1 === nmb4 || nmb1 !== nmb2;//true
console.log(nmb1EqualToNmb4OrNotEqualToNmb2);
let nmb1EqualToNmb4OrNotEqualToNmb2_AFUH = !(nmb1 === nmb4 || nmb1 !== nmb2);//false
console.log(nmb1EqualToNmb4OrNotEqualToNmb2_AFUH);

const temperature = 19;
let itsNormalTmpr = (temperature > 18) && (temperature < 25);
let coldButNotFrozen = (temperature <= 5) && (temperature > 0);

let smoker = true;
let doingSport = true;
isHealthyMan = !(!doingSport || smoker);

//#endregion

var z = 1
while (z < 11) 
{
        document.write(z + "<br />");
        z++;
}
