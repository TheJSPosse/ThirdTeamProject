
function reverseArray(){
    theArray.reverse();
    //refactor this into a printArray() function
    terminal.value+=theArray.join(' ')+'\n';
}

module.exports=reverseArray;
