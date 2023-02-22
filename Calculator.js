var num1, num2;

firstNum = "";
isFirstNumValue = false;
secondNum = "";
isSecondNum = false; 
sign = "";

var display = document.querySelector('input');

var buttons = document.getElementsByTagName('button');

var signs = document.getElementsByClassName('.sign');

const equals = document.getElementById('')

console.log(buttons);

for(i = 0;i<buttons.length;i++){
    buttons[i].addEventListener('click', (e) =>{
        let arr = e.target.getAtribute('value');
        if(isFirstNumValue === false){
            setFirstValue(arr)
        }
        if(isSecondNumValue === false){
            setSecondValue(arr)
        }
    });
}

function setFirstValue(a){
    firstNum += a;
    isFirstNumValue = true;
    display.innerText = firstNum;
    firstNum = + firstNum;
}
function setSecondValue(b){
    if(firstNum !="" && sign!=""){
        secondNum +=b;
        display.innerHTML = secondNum;
        secondNum = +secondNum;
    }

}

function getSign(){
    for()
}

// for(i = 0;i<)
// buttons.addEventListener('click', (e) =>{
//     let arr = e.target.getAtribute();
// });