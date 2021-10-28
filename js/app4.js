//MORE ARRAYS           
//multidimensional calling
var teams=[
    ['dallas','cowboys'],
    ['philly','eagles'],
    ['saints','st. louis']
];
console.log(teams);
console.log(teams[1][1]);

/*
LOOPS!!!!!
   for
   while
   foreach
   for of
   for in
   do while

   for

   for(initialization; condition; iteration){
       do stuff
   };

   var=i=0;
   i<arr.length;
   i++;

   while

   while(condition){
       do stuff
   };

   forEach

   arr.forEach(item=> {do stuff});
*/
var i=0;
for (i;i<=5;i++){
    console.log(i);
}

var i=0;

while (i< 10){
    console.log(i);
    i++
}

var wallet= 10000000;
for(var i=0;i<10;i++){
    console.log('goodbye money');
    wallet-=1000000;
    console.log(wallet);
}

var wallet=10000000;

while(wallet>1000000){
    console.log('goodbye money')
    wallet-=1000000;
    console.log(wallet);
}

