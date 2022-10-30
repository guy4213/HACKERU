//
///
//


function handleOnLoadEvent() {
    changeInp1ColorToRed();
    goo();
    foo();
}

function changeInp1ColorToRed() {
    document.getElementById('inp1').style.color = 'red';
}

function goo() {
    console.log('goo')
}

function foo() {
    console.log('foo')
}

function inp1Clicked() {
    // alert('לחצת עלי.');
    document.getElementById('myH1').innerHTML = 'My Form After Change'

}

function doubleClicked() {
    // alert('הקלקת עלי פעמיים');
    console.log(document.body.innerHTML)
    console.log(document.getElementById('lbl1').innerHTML);
    document.body.innerHTML = document.getElementById('lbl1').innerHTML;
}

function onInputChanged(elemId, nextElemId) {
    const content = document.getElementById(elemId).value;
    const nextContent = document.getElementById(nextElemId).value;
    if (elemId == 'inp1')
        console.log('הערך של האלמנט הראשון שונה והערך שלו הוא: ' + content)
    else if (elemId == 'inp2')
        console.log('הערך של האלמנט השני שונה והערך שלו הוא: ' + content)
    else if (elemId == 'inp3')
        console.log('הערך של האלמנט השלישי שונה והערך שלו הוא: ' + content)
    else if (elemId == 'slc')
        console.log('הערך של האלמנט הרביעי שונה והערך שלו הוא: ' + content)

    console.log('הערך של האלמנט הבא הוא: ' + nextContent);
}

const firstName = 'dan';//;
printHelloToName(firstName);
function printHelloToName(name) {
    console.log('hello ' + name);
}

calcAndPrintResult(50, 100);
function calcAndPrintResult(num1, num2) {
    const res = num1 + num2;
    console.log(num1 + ' + ' + num2 + ' = ' + res);
}

let res = printBiggestNumber(30, 30);//undefined
function printBiggestNumber(number1, number2) {
    if (number1 > number2)
        console.log(number1);
    else if (number2 > number1)
        console.log(number2);
    // else
    //     console.log('equals');
}

let res1 = printHelloNameAndReturnTheMessage('dani');
console.log(res1);
function printHelloNameAndReturnTheMessage(name) {
    console.log('hello ' + name);
    // alert('hello ' + name);
    // prompt('hello ' + name);
    return false;
}

let mnth = myGetMonth();
function myGetMonth() {
    return new Date().get();
}

let nn1 = prompt('הכנס מספר ראשון')
let nn2 = prompt('הכנס מספר שני')
let operator = prompt('הכנס אופרטור')
let afterCalc = calcTwoNumbers(nn1, nn2, operator);
console.log(afterCalc);
function calcTwoNumbers(n1, n2, oper) {
    let res;
    if (oper === '+')
        res = n1 + n2;
    else if (oper === '-')
        res = n1 - n2;
    else if (oper === '*')
        res = n1 * n2;
    else if (oper === '/')
        res = n1 / n2;
    else
        res = -999;

    return res;
}








