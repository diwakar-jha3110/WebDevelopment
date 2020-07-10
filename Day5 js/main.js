const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}


   
      var myName = "Chris";
      var myName = "John";
      var a = 10;

      console.log("a is: " + a);
      // consider null and undefined as false rest true

      if ( a !== null && a !== undefined ){

         console.log(`IF:${a}`);

      }else if(1==2) {
        console.log("else");
      }  else {

      }
     // (conditions) ? 'truth section': 'false section';
      ( a !== null && a !== undefined ) ? console.log(`IF:${a}`) : console.log("else"); 

      let b= 1;

       switch(b) {
         case 1: // TODO
              console.log("First");
              break;
          case 2: // TODO
            console.log("second");
            break;
         default:
         // default 
       }

       //                                                                   i = 10;
       // Loop
       let i=10;

       for( let i=5;i<20;i++ ){            //     i=5
         console.log(i);
       }
       console.log(`out of loop ${i}`);

        // Loop
        var k=10;

        for( var k=5;k<20;k++ ){            //     i=5
          console.log(k);
        }
        console.log(`out of loop ${k}`);