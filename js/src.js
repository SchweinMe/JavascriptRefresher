/* - Const , Let , Var  */
window.onload = () => {
    let a = 0
    var b = 0
    if(true) {
        let a = 1
        var b = 1
    }
    // console.log(a, b)
}

/* - การรวม string เข้ากับตัวแปร ` string : ${params} ` */
let result = 1
let stringA = ' The result is : ' +  result
let stringB = ` The result is : ${result} `
// console.log(stringA, stringB)

 
/* - การเข้าถึง DOM  */
let domA = document.getElementById('idName')  
let domB = document.getElementsByClassName('className')  

/* querySelector */
let domC = document.querySelector('#idName')
let domD = document.querySelector('.className')
let domE = document.querySelector('input[type="email"]') //is-invalid
if(domE) {
    domE.innerHTML = '<p>Hello</p>'
    domE.innerText = 'Hello'
    
    /* ClassList */
    if(domE.classList.contains('is-invalid')){
        domE.classList.remove('is-invalid')
    } else {
        domE.classList.add('is-invalid')
    }

    domE.addEventListener('keyup', (event)=> {
        console.log(event.keyCode)
    })
    
}

/* Loop */


/* Switch Case */
let value = 1;
const changeValue = (_value) => {
    switch(_value) {
        case 1: //console.log('return A value') 
                return 'A';
        break;
        case 2: //console.log('return B value') 
                return 'B';
        break;
        case 3: //console.log('return C value') 
                return 'C';
        break;
        default: //console.log('return error ')
                return 'error';
        break;
    }
}
let changeVal = changeValue(9)
// console.log(changeVal)


/* - การประกาศ Function, Arrow Function */
function NameOfFunction(event){
    /* ทำอะไรสักอย่างภายในนี้ */
    // console.log("Hello, I'm Here")
}

/* Arrow function */
const NameFunction = (...arr) => {
    // console.log(arr)
    /* ทำอะไรสักอย่างภายในนี้ */
    // console.log("Hello, I'm There")
}

NameOfFunction()
NameFunction([1,2,3,4,5,6])
  

let mom = moment().format('LLL');
// console.log(mom)

