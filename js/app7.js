let h2=document.getElementsByTagName('h2');

console.log(h2[0].innerText);

h2[1].innerText= "keitron";

h2[0].innerText="still jordan";

let green=document.getElementsByClassName('green');

console.log(green);

green[0].style.color='green';
console.log(green[0]);
green[1].style.color='green';

// let sans=document.querySelector('.sans');
let sans=document.querySelectorAll('.sans');

// sans.style.fontFamily='sans-serif'

// for each element in the sans nodeList give it the 'san-serif' font family
sans.forEach(e=>{
    e.style.fontFamily='sans-serif';
})
console.log(sans);

let myName=document.getElementById('myName');
myName.innerText="wallace";
console.log(myName);

let root=document.getElementById('root');

let h3=document.createElement('h3');
// let text=document.createElement('p');

h3.innerText="sub-header"
root.appendChild(h3);

root.innerHTML+=`<p> this is some text by ${myName.innerText}</p>`;
// root.appendChild(text);

/* build bio object and then write the bio on the page
   <div id="root"></div>
*/