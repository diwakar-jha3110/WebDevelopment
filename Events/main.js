/*
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}
*/

const para = document.getElementById('para_1');
para.addEventListener('click', handlerFn);

function handlerFn(evt){   
  para.textContent = "custom para with id 1";
};

/*
// Call back example
function callback(e) {
  console.log("call back" + e);
}


function mainMethod(fn) {
  var evt= {test:1};
  fn(evt);
}
mainMethod(callback);
*/


function createParagraph() {
    let body = document.getElementsByTagName('body');
    let div = document.createElement('div');
    div.className = "div box";
    div.textContent= "I am custom div";
    div.onclick = function () {
      console.log("button Clicked");
    };
    body[0].appendChild(div);
}


let btn = document.getElementsByTagName('button');
for(let i=0; i < btn.length; i++) {
  btn[i].addEventListener('click', createParagraph)
}
