// Single line comment

/*
multi line
comment
*/

/* variables
    var

    var varName = data;

    SCENIC ROUTE!!! DETOUR!!!

    Data 
       Primitive data
       number/integer/float
          1, -10, 0.5
        String
          charater text
          "hello world"
          'keep hands and feet inside the vehicle, Keitron!'
          "6"
        boolean
          true
          false
        Undefined
        Null
        
    Var varName;

    Naming Conventions
      begins with lowercase letter
      noSpaces
        camelCase
        camelCaseText
        var_name "unconventional"
      noSymbols
      can use numbers but not at beginning

    Assignment operator
      =
      "gets"

      left side => container
      right side =>evaluation
*/

var myName;
var myAge=29;
var aNumber=7;
var aString='7';

myName='jordan';

console.log(aNumber);
console.log(aString)
console.log(myAge);
console.log(myName);

console.log(typeof(aNumber));

myAge=30;
console.log(myAge);

myAge='thirty'
console.log(myAge);

var five=2+3;
console.log(five);//5

//arithmetic expressions

/*
   plus/addition +
   minus/subtration -
   times/multiplication *
   division /

   exponent **
   remainder/modulus %
*/

console.log(22/7);

//build a temp converter

var fah=212;
var cel=(fah-32)*5/9;
var message="the temperature in celsius is "+cel;
console.log(message);

//build tip calculator

var tip;
var tax;
var subtotal;
var total;

subtotal=20
tax=subtotal*.07;
subtotal+=tax;
tip=subtotal*.20;
total=subtotal+tip;

console.log(total);

// increment/decrement

var count=0;
console.log(count);
count++
console.log(count);


/*
display sluggin percentage
set single 
set double 
set triple
set homerun
set magic number excepted as a at bat calculated my some guy name bob.
*/


// a=singles
// b=doubles
// c=triples
// d=homerun
// x=total bases
// e=at-bat
// final x equals slugging percentage

var a=1;
var b=2;
var c=3;
var d=4;
var e=10;

x=a+b*2+c*3+d*4;
x/=e;
console.log(x);