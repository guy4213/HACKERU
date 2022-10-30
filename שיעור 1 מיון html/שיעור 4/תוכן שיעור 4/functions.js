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
    alert('לחצת עלי.');
    document.getElementById('myH1').innerHTML = 'My Form After Change'
    
}

function doubleClicked(){
    alert('הקלקת עלי פעמיים');
    console.log(document.body.innerHTML)
    document.body.innerHTML = 'הכל חדש!'

}

function onInputChanged() {
    console.log('הערך שונה...');
}