/*
boolean true or false

...

gets or is, assignment operator =
equal to ==
strictly equal to ===
not equal to !=
strictly not equal to !==

and && both have to be true
or || either is true the statement is true
not ! 
*/

var truth=true;
console.log(truth);

console.log(6==6);
console.log(3==1);

/*
conditions

  if

  if(condition){
      do stuff
  }

  */
var today= new Date().getDay();

  if (today == 5){
      console.log('yeah, it\'s friday');
  }
  else if(today == 4){
      console.log('thursday blues')
    }
    else if(today == 3){
        console.log('hump day')
    }
    else if(today == 2){
        console.log('tuesday')
    }
    else if(today == 1){
        console.log('monday...')
    }
    else if(today == 6||0){
        console.log('weekend')
    }
    else{
        console.log('if you see this, it broke')
    }

/*
    switch

    switch(expression)
          statements
             case a:
                 do stuff
                 break;
             case b:
                 do stuff
                 break;
             default:
                 do stuff
                 break;
*/

var message;

switch(today){
    case 0:
        message='sunday'
        break;
    case 1:
        message='monday'
    case 2:
        message='tuesday'
        break;
    case 3:
        message='wednesday'
        break;
    case 4:
        message='thursday'
        break;
    case 5:
        message='friday'
        break;
    case 6:
        message='saturday'
        break;
    default:
        message='this won\'t work'
}

console.log(message)

//write a program that test if a number is even or odd

/*
variables

  num
  message

  precedure

  set num
  set message
  if num remainder is zero 
  then message equals "{num} is even"
  else message ="{num} is odd"
*/

var num;
var message;

num=0

if(num===0){
    message=undefined
}
else if(num%2==0){
    message=num+' is even'
}
else{
    message=num+' is odd'
};
console.log(message);

var i=1;
var j=i;
var k=2;

console.log(j);

if(i===j){
    if (j===k){
        console.log('i equals k')
    }
    else{
        console.log("i doesn't equal k")
    }
}

//temp converter
var tempFah;
var tempCel;
var fah;
var cel;

tempCel=0;

fah=(tempCel*9/5)+32;

console.log(fah);


tempFah=32

    cel=(tempFah-32)*5/9;
    console.log(cel);



//kelvin converter
var kelvin;

kelvin=cel+273.15
console.log(kelvin)