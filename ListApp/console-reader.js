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
                ///theArray.reverseArray();
                theArray.reverse();
                //refactor this into a printArray() function
                terminal.value+=theArray.join(' ')+'\n';
                break;

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