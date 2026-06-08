console.log('external file');

//option 2 to handle event
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
function makeWhite() {
    document.body.style.backgroundColor = 'white';
}
//optiion 3: get element by id and then set onclick
const btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick = function () {
    document.body.style.backgroundColor = 'blue';
}
//opttion 3: different way
const btnMakePurple = document.getElementById('btn-make-purple');
btnMakePurple.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}