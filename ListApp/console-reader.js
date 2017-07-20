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

    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submit);
    input.addEventListener('keypress', (e) => e.code === 'Enter' ? submit() : '');

    function submit() {
        let commandTokens = input.value.split(' ').filter(e => e !== '');

        if(!initialized){
            theArray = commandTokens.slice(0);  //copy array   
            terminal.value+=theArray.join(' ')+'\n';   //print array    
            initialized = true;
            input.value = '';
            input.placeholder = 'give me a command!';
            return;
        }

        switch (commandTokens[0]) {

            case 'append':
			if(commandTokens.length != 2) {
				terminal.value+="Error: invalid command parameters\n";
				break;
			} else {
				theArray.push(commandTokens[1]);
				 terminal.value+=theArray.join(' ')+'\n';
                break;
			}
		

            case 'prepend':
			if(commandTokens.length != 2) {
				terminal.value+="Error: invalid command parameters\n";
				break;
			} 
				theArray.unshift(commandTokens[1]);
				 terminal.value+=theArray.join(' ')+'\n';
                break;
	

            
            case 'reverse':
                if(commandTokens.length != 1) {
				    terminal.value+="Error: invalid command parameters\n";
                break;
                } else {
                ///theArray.reverseArray();
                theArray.reverse();
                //refactor this into a printArray() function
                terminal.value+=theArray.join(' ')+'\n';
                break;
                }

            case 'insert':
			if(commandTokens.length != 3) {
				terminal.value+="Error: invalid command parameters\n";
				break;
			} else  {
				let index = Number(commandTokens[1]);
				if(index < 0 || index >theArray.length-1 || (Number(commandTokens[1]) != commandTokens[1])) {
					terminal.value+="Error: invalid index\n";
					break;
				} else {
               theArray.splice(commandTokens[1], 0, commandTokens[2]);
			   terminal.value+=theArray.join(' ')+'\n';
                break;
				}
			}



            case 'delete':
                //theArray.delete();
                let indexOfArr = Number(commandTokens[1]);
                if(indexOfArr < 0 || indexOfArr >theArray.length-1) {
                    terminal.value+=`Error: invalid index ${indexOfArr}\n`;
                    break;
                } else {
                    theArray=theArray.slice(0, indexOfArr)
                        .concat(theArray.slice(indexOfArr + 1))
                        .slice(0);
                    terminal.value += theArray.join(' ') + '\n';
                    break;
}

            //case 'roll left':
            //   theArray.rollLeft();

            //case 'roll right':
            //   theArray.rollRight();

            case 'roll':
                if(commandTokens[1] == 'left'){
                    let rolledStr = theArray.shift();
                    theArray.push(rolledStr);
                    console.log('\n')
                }else if(commandTokens[1] == 'right'){
                    let lastStr = theArray.pop();
                    theArray.unshift(lastStr);
                }else{
                    terminal.value += "Error: invalid command parameter\n"
                    break;
                }
                terminal.value += theArray.join(' ') + '\n';
                break;

            case 'sort':

                theArray=theArray.sort();
            terminal.value+=theArray.join(' ') + '\n';
            break;

            case 'count':
                //   theArray.count();
                let count = 0;
                let index = theArray.indexOf(commandTokens[1]);
                while (index != -1) {
                    count++;
                    index = theArray.indexOf(commandTokens[1], index + 1);
                }
                terminal.value += count + '\n';
                break;

            case 'end': 
                //theArray.end();
                terminal.value+='Finished\n';
                input.disabled = true;  
                submitBtn.disabled = true;  
                break;

            
            default:
                //refactor this into a function printError(msg)
                terminal.value+='Error: Invalid command\n';

        }

        //refactor this into function cleanInput()
        input.value = '';
    }


})();