/*
dad jokes

make a dad-joke generator

ex: question "why?" answer:"this is why"

*/

var jokes=[
    ["akali",['jax','aatrox']],
    ["Not to brag, but I defeated our local chess champion in less than five moves.", "Finally, my high school karate lessons paid off."],
    ["I ordered a chicken and an egg from Amazon.", "I'll let you know."],
    ["I can't take my dog to the pond anymore because the ducks keep attacking him.", "That's what I get for buying a pure bread dog."],
    ["I can't take my dog to the pond anymore because the ducks keep attacking him. That's what I get for buying a pure bread dog."]
]

var idx=Math.floor(Math.random()*jokes.length);
var joke=jokes[0];
var counters=joke[1];

counters.forEach(counter =>{
    console.log(counter);
})



// console.log(counter);
// if (joke.length===2){
//     console.log(joke[0]);
//     console.log(joke[1]);
// }
// else{
//     console.log(joke[0])
// }

// console.log(joke.length);



// while(joke[0]){
//     console.log(`joke: ${jokes[4][0]}`);
// }