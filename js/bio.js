let me={
    name:{
        fName:"jordan",
        lName:"wallace"
    },
    timeBorn:new Date('april 28, 1992 11:30:00'),
    dog:"deamon kai wallace",
    spouse:"callie riddell wallace",
    placeBorn:"siera Vista, AZ",
    home:"canton, MS",
    mother:"Jennifer L. Minard",
    father:"Joesph T. Wallace",
    hobbies:["video games", "fighting", "politics","pschology"]
}

console.log(me.timeBorn);

// looks better with the body background color
// let body=document.getElementById('body');
// body.style.backgroundColor='black';
console.log(me.timeBorn().getFullYear()- new Date().getFullYear())
// get root

let root=document.getElementById('root');

// create h1 and p tags

let h1=document.createElement('h1');

let p1=document.createElement('p');

let p2=document.createElement('p');

let p3=document.createElement('p');

let p4=document.createElement('p');

let p5=document.createElement('p');

let p6=document.createElement('p');

let p7=document.createElement('p');

let p8=document.createElement('p');

// declaring the innerText/innerHTML for the h1 and p tags

h1.innerText=`My name is ${me.name.fName} ${me.name.lName}`;

p1.innerText=`I was born ${me.timeBorn}`

p2.innerText=`My dogs name is ${me.dog}`

p3.innerHTML=`My wife's name is <span id="wife">${me.spouse}</span>`

p4.innerText=`I was born in ${me.placeBorn}`

p5.innerText=`I currently live in ${me.home}`

p6.innerText=`My mothers name is ${me.mother}`

p7.innerText=`My fathers name was ${me.father}`

p8.innerText=`My hobbies include ${me.hobbies[0]}, ${me.hobbies[1]},${me.hobbies[2]},${me.hobbies[3]}`

// appending the tags into the html attached to the root

root.appendChild(h1);
root.appendChild(p1);
root.appendChild(p2);
root.appendChild(p3);
root.appendChild(p4);
root.appendChild(p5);
root.appendChild(p6);
root.appendChild(p7);
root.appendChild(p8);

//getting the p tags and wife span after they are called into the html

let paragraph=document.querySelectorAll('p');
let wife=document.getElementById('wife');

// styling the html


console.log(body)
root.style.textAlign='center';
root.style.backgroundColor='red'
h1.style.textDecoration='underline';
h1.style.fontSize='50px'
wife.style.textTransform='capitalize';

console.log(paragraph);

//styling all the p tags in a foreach statement

paragraph.forEach(e=>{
    e.style.fontSize='20px'
    e.style.padding='20px 0'
    e.style.border='1px solid black'
})