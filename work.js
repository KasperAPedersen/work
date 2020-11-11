// Requiring the required modules


// Declaring the user-defined variables
let menu = [['calcSalary', 'Calculate Salary']];

// Declaring operation variables
let started = false;
let userAnswer;

// Functions
function reset(){
    started = false;
}

function begin(){
    console.log(`[~] Select one of the following to continue`);
    for(const [key, value] of menu.entries()) {
        console.log(`[${key}] ${value[1]}`);
    }

    
}

// Module export functions
module.exports = {
    start:() => {
        begin();
    }
}