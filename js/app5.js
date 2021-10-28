/*
functions

function funcName(arg){
    do stuff
}

funcName needs to say what the function is doing
and be camelCase

  ex: countToHundred

  argument
     food for the function to run
     can have function without argument
     can have more then one argument

*/

function countString(str){
    //do stuff
    // function to count the number of characters in a string
    console.log(`${str} has ${str.length} characters`);
    return;
}

countString('hello world');

function countTo10(){
    let i=0;
    while(i<=10){
        console.log(i);
        i++;
    }
    return;
};

countTo10();

function greeting(person='takia'){
    console.log(`hello ${person}`);
    return;
};

greeting();
greeting('horatio');

