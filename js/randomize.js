var array=[
    ["Lorem",
    "ipsum", 
    "dolor",
    "sit", 
    "amet", 
    "consectetur", 
    "adipisicing",
    "elit.",
    "Blanditiis",
    "amasdet", 
    "aperiam",
    "saepe",
    "provident",
    "ducimus",
    "debitis",
    "beatae",
    "quidem",
    "molestias",
    "nemo",
    "vel",
    "earum",
    "nostrum",
    "laudantium",
    "culpa",
    "quo",
    "recusandae",
    "explicabo",
    "non",
    "nisi",
    "error."],
// second group of array
    [ "Lor",
    "ipsm", 
    "door",
    "sasit", 
    "ametrt", 
    "contetur", 
    "adipicing",
    "elitwer.",
    "Blitiis",
    "amelat", 
    "aperimer",
    "sasee",
    "proent",
    "ducgsmus",
    "debitis",
    "bgdfgtae",
    "quvfgem",
    "molfwtas",
    "nemsfdo",
    "veasfl",
    "esaetum",
    "nolskfum",
    "laudatamm",
    "culbro",
    "quolore",
    "recaedndae",
    "expsejcabo",
    "nolko",
    "nislo",
    "elerror."]];
var lorem=document.getElementById("lorem");
function random(){
    let arrayRandom=Math.floor(Math.floor(Math.random()*array[0].length));
    let randomItem=array[0||1][arrayRandom];
    lorem.innerHTML=randomItem;
}
random();

// var x=10;
// for(let i=0;i<x;i++){
// };
// console.log(lorem);

    //     // var array2Random=Math.floor(Math.floor(Math.random()*array2.length));
    //     // var array3Random=Math.floor(Math.floor(Math.random()*array1.length));
    //     // var array4Random=Math.floor(Math.floor(Math.random()*array1.length));
    //     // var array5Random=Math.floor(Math.floor(Math.random()*array1.length));
    //  var ran2=array2[array2Random];
    //  var ran3=array2[array3Random];
    //  var ran4=array2[array4Random];
    //  var ran5=array2[array5Random];
    // 
    //
        // var bigArray=[array1,array2];
        // var random1=Math.floor(Math.random()*array1.length);
        // var random2=Math.floor(Math.random()*array1.length);
        // var random3=Math.floor(Math.random()*array1.length);
        // var random4=Math.floor(Math.random()*array1.length);
        // var random5=Math.floor(Math.random()*array1.length);
        // var random6=Math.floor(Math.random()*array1.length);
        // var random7=Math.floor(Math.random()*array1.length);
        // var bigChaos1=bigArray[Math.floor(Math.random()*bigArray.length)];
        // var bigChaos2=bigArray[Math.floor(Math.random()*bigArray.length)];
        
        // var chaos1=bigChaos1[random1];
        // var chaos2=bigChaos2[random2];
        // var chaos3=bigChaos1[random3];
        // var chaos4=bigChaos2[random4];
        // var chaos5=bigChaos1[random5];
        // var chaos6=bigChaos2[random6];
        // var chaos7=bigChaos1[random7];
        
        // console.log(random1,random2,random3,random4,random5,random6,random7);
        // console.log(chaos1,chaos2,chaos3,chaos4,chaos5,chaos6,chaos7);
        
        
        // var bigRun=bigArray[multiRandom];
        // var chaosRandom=chaos[Math.floor(Math.random()*chaos.length)]
        // var randomTotal=chaos[chaosRandom][ran1];
        
        
        /* new and improve
        
           removed redundancy by using a while statement
           x = user input;
           i = is used to end the while statment;
           
        */
    
    // while (i<10){
    //     var array1Random=Math.floor(Math.floor(Math.random()*array1.length));
    //     var array2Random=Math.floor(Math.floor(Math.random()*array2.length));
    //     var ran1=array1[array1Random];
    //     var ran2=array2[array2Random];
    //     console.log(ran1||ran2,ran1||ran2,ran1||ran2,ran1||ran2);
    // i++;
    // };
    
    // also works the same with a for loop.

        
        
        
// random();
// random();
// random();
// random();
// random();
// random();
// random();
// random();

// var input=array[input];
//  array[5][]
// var counter=input[counter]
//  array[5][counter]
//  var character=array[idx]
//  character.foreach(counter){
//      console.log(counter);
//  }