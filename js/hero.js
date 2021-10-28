/*
Hero generator

build a program that will randomize a adjetive, hero, and a superpower

ex: the fantastic lava girl can carve 30 pumpkins

pseudocode

Variables

adjectives
heroes
powers

idx
adj
hero
power
message

Precedure

set adjectives, heroes, powers

set adj From adjectives
set hero from heroes
set power from powers
set message to "{hero}the{adj}{power}"

display {hero}the{adj}can{power}
output message

*/

var heroes=["stargirl","elastic man","deku","bakugo","eraser"];

var adjectives=["shameful","magestic","caring","doubtful","sneaky"];

var powers=["stick to things.","fly only if no one is looking.","leap a 10 foot fence.","slow time with their mind.","end world hunger but for some reason hasn't."];

var heroIdx;
var adjIdx;
var powerIdx;

heroIdx = Math.floor(Math.random()*heroes.length);
adjIdx = Math.floor(Math.random()*adjectives.length);
powerIdx = Math.floor(Math.random()*powers.length);
console.log(heroIdx,adjIdx,powerIdx);
var hero,adj,power;
hero=heroes[heroIdx];
adj=adjectives[adjIdx];
power=powers[powerIdx];

// var message=hero+" the "+adj+" can "+power;
var message= `${hero} the ${adj} can ${power}`

console.log(message);