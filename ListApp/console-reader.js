//let reverseArray = require('./Commands/reverse.js');

//function reverseArray(){
    //   theArray.reverse();
    //refactor this into a printArray() function
    //terminal.value+=theArray.join(' ')+'\n';
//}

(function () {

    let theArray=[];
    let initialized = false;

    let terminal = document.getElementById('terminal');
    let input = document.getElementById('input');

    document.getElementById('submit').addEventListener('click', submit);
    input.addEventListener('keypress', (e) => e.code === 'Enter' ? submit() : '');

    function submit() {
        let commandTokens = input.value.split(' ').filter(e => e !== '');

        if(!initialized){
            theArray = commandTokens.slice(0);  //copy array   
            terminal.value+=theArray.join(' ')+'\n';   //print array    
            initialized = true;
            input.value = '';
            return;
        }

        switch (commandTokens[0]) {

            case 'append':
				theArray.push(commandTokens[1]);
				 terminal.value+=theArray.join(' ')+'\n';
                break;
          

            case 'prepend':
				theArray.unshift(commandTokens[1]);
				 terminal.value+=theArray.join(' ')+'\n';
                break;

            //refactor this command in its own file!
            case 'reverse':
                ///theArray.reverseArray();
                theArray.reverse();
                //refactor this into a printArray() function
                terminal.value+=theArray.join(' ')+'\n';
                break;

            //case 'insert ':
            //   theArray.append();

            //case 'delete ':
            //   theArray.delete();

            //case 'roll left':
            //   theArray.rollLeft();

            //case 'roll right':
            //   theArray.rollRight();

            //case 'sort ':
            //   theArray.sort();

            //case 'count':
            //   theArray.count();

            //case 'end':
            //   theArray.end();
            
            default:
                //refactor this into a function printError(msg)
                terminal.value+='Error: Invalid command\n';

        }

        //refactor this into function cleanInput()
        input.value = '';
    }


})();