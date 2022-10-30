//#region if-else
function allIfElse() {


    let x = "123";
    console.log(typeof (x));//string
    console.log(x + 3);//string
    x = 456;
    console.log(typeof (x));//number
    console.log(x + 3);//number
    let xx = 1 + 3;

    const curDay = parseInt(prompt('איזה מספר יום היום??'));
    console.log(typeof (curDay))
    printNameOfDay();
    printNameOfDay(curDay);

    const correctUserName1 = "משה";
    const correctUserName2 = "יוסי";
    let curUserName = 'יוסי';
    document.write('123');
    document.write('12345');

    let bb = true;
    let str = bb.toString();
    console.log('typeof(str): ' + typeof (str))
    console.log(str)
    // if (curUserName == correctUserName1)
    //     console.log('הרשאות מלאות');
    // else if (curUserName == correctUserName2)
    //     console.log('הרשות מוגבלות');
    // else
    //     console.log('ללא הרשאות!');
}
allIfElse();
//#endregion

//#region Functions And Events

function printNameOfDay(curDay) {
    curDay = parseInt(curDay);
    console.log(curDay)
    if (curDay == 1)
        console.log('יום ראשון');
    else if (curDay == 2)
        console.log('יום שני');
    else if (curDay == 3)
        console.log('יום שלישי');
    else if (curDay == 4)
        console.log('יום רביעי');
    else if (curDay == 5)
        console.log('יום חמישי');
    else if (curDay == 6)
        console.log('יום שישי!');
    else if (curDay == 7) {
        console.log('יום שבת');
        console.log('שבת שלום!!!');
    }
    else
        console.log('יום לא תקין');
}

function getNameAndPrint() {
    const fullName = prompt('enter your full name:');
    alert('your name is: ' + fullName);
    console.log('your name is: ' + fullName);
}

function getAgeAndPrint() {
    const age = prompt('enter your age:');
    alert('your age is: ' + age);
    console.log('your age is: ' + age);
}

printCurrentDate();
function printCurrentDate() {
    console.log(new Date());
}

//#endregion
//Shift + Alt + F = Format Document
