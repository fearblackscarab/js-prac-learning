/*TEMP CONVERTERS

 building 6 converters using functions, 2 for farhenheit, 2 for celsius and 2 for kelvin.  

 created a function for each converter
 farhenheit to celsius
 fahrenheit to kelvin
 celsius to farhenheit
 celsius to kelvin
 kelvin to farhenheit
 kelvin to celsius

  variables

  farhenheit
  celsius
  kelvin
  unit(arr)
*/


// being over ambitious
var farhenheit=document.getElementById("farhenheit");
var celsius=document.getElementById("celsius");
var kelvin=document.getElementById("kelvin");
var celsiusText=document.getElementById("celsiusText");
var kelvinText=document.getElementById('kelvinText');
var farhenheitText=document.getElementById('farhenheitText');


// var unit=[farhenheit,celsius,kelvin];

function farhenheitToCelsius(){
    celsius=(farhenheit.value-32)* 5/9
    celsiusText.innerText=celsius;
    return farhenheit;
};

function farhenheitToKelvin(){
    kelvin=(farhenheit.value-32)* 5/9+273.15;
    kelvinText.innerText=kelvin;
    return;
};

function celsiusToFarhenheit(){
    farhenheit=(celsius.value* 5/9)+32;
    farhenheitText.innerText=farhenheit;
    return farhenheit;
};

function celsiusToKelvin(){
    kelvin=celsius.value+273.15;
    kelvinText.innerText=kelvin;
    return farhenheit;
};

function kelvinToFarhenheit(){
    farhenheit=(kelvin.value-273.15)*9/5+32;
    farhenheitText.innerText=farhenheit;
    return farhenheit;
};

function kelvinToCelsius(){
    celsius=kelvin.value-273.15;
    celsiusText.innerText=celsius;
    return farhenheit;
};

function displayKelvin(){
    return kelvinText.innerText=kelvin.value;
};

function displayCelcius(){
    return celsiusText.innerText=celsius.value;
};

function displayFarhenheit(){
        farhenheitText.innerText=farhenheit.value;
    return;
};

// even or odd

 numEval=document.getElementById("numEval");
var numInput=document.getElementById("numInput");;

function EvenOrOdd(){
    let x=numInput.value;
    if (x%2==0){
        numEval.innerText="even"
    }
    else{
        numEval.innerText="odd"
    }
    return;
}