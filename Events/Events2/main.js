/*
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}
*/

/*const para = document.getElementById('para_1');
para.addEventListener('click', handlerFn);*/

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
function clickHandeler(e) {
  console.log(e.target);
}

// window.onload = function() {
//   document.getElementById('child').addEventListener('click', function(e){
//       console.log(e.target);
//   }, false);
//   document.getElementById('parent').addEventListener('click', function(e){
//     console.log(e.target);
// }, false);
//document.getElementById('child').onclick = clickHandeler;
//document.getElementById('parent').onclick = clickHandeler;
//}


function eventCheck(evt) {
  console.log(`I am in eventCheck`); // check

  evt.preventDefault();

}

function fnHandleClick(e) {
 // console.log(e.target.className);
 //e.stopPropagation(); 
 console.log("called from Child");
 //window.open("https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units");
}
function fnHandleClickG(e) {
  // console.log(e.target.className);
  
  console.log("called from Grand Child");
  //window.open("https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units");
 }

function fnHandleClickParent (e) {
  console.log(e.target.className);
  console.log("called from  Parent");
  //window.open("https://www.wikipedia.org/");
}

/*let parent = document.getElementById('parent');
parent.addEventListener('click', fnHandleClick);
parent.addEventListener('click', fnHandleClickG);
parent.addEventListener('click', fnHandleClickParent);
*/