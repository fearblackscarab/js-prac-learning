/*

objects

everything is a object!!!!

let obj={
    key:value
    property:value

    data can be accessed

    dot notation
    bracket notation

    CLASSES

    class Classname{
        constructor(){
            this.property= value,
            this.property= value2,
            this.property= value3,
        }
        method(){
            do stuff
        }
    }
};

*/

let person={
    id:1,
    myname:{
        "nickname": "satch",
        fname:"herbert",
        lName:"brown",
    },
    age:41,
    occupation:"instructor",
    hobbies:["things","and","stuff"],
    wife:"cassandra",
    children:{
        oldest:"bob",
        youngest:"jeff",
    },
    favTeams:{
        football:"eagles",
        baseball:"cardinals",
        soccer:"sweden",
        hockey:"predators",
    },
    isAwesome:true,
    grandchildren:null
};

console.log(person);

console.log(person.hobbies[0]);

console.log(person.myname['nickname']);

// Object.freeze(person); //makes the object un mutable
// object.seal(person); //can not add properties but can change the data(including adding new properties isnt a property);

class Animal {
    constructor(){
        this.name
        this.color
        this.eyes
        this.legs
        this.sound
    }
    makeSound(){
        console.log(this.sound);
    }
}
let dog = new Animal;
dog.name="damien"
dog.color="dirty brown"
dog.legs=4
dog.eyes=2
dog.sound="woof"

console.log(dog);

dog.makeSound();

let spider= new Animal
spider.name="charlotte"
spider.color="black"
spider.legs=8
spider.eyes=16
spider.sound="hiss"

// using class build a movie object and music object.with at least 10 properties.
/*

movie

title
ageRating
reviewRating
actors
budget
genre
videoQuality
framesPerSec
leadingActor
producer
*/
class Movie {
    constructor(){
        this.title
        this.ageRating
        this.reviewRating
        this.actors
        this.budget
        this.genre
        this.videoQuality
        this.boxOffice
        this.leadingActor
        this.producer  
    }
    producedBy(){
        console.log(this.producer);
    }
    leadingRole(){
        console.log(this.leadingActor);
    }
    movieTitle(){
        console.log(this.title)
    }
}

let venom2 = new Movie
venom2.title = "venom:let there be carnage"
venom2.ageRating ="R"
venom2.reviewRating ="5 stars"
venom2.actors =["tom hardy","woody harrelson","amber sienna","michelle wiiliams","naomie harris","j k simmons","stephen grahem","tom hollander","peggy lu","reid scott","otis winston"]
venom2.budget= "110 million USD"
venom2.genre=["action","thriller","superhero","mystery","science fiction","adventure"]
venom2.videoQuality="1080p"
venom2.boxOffice="354.7 million"
venom2.leadingActor="tom hardy"
venom2.producer="andy serkis"
console.log(venom2);

venom2.producedBy();
/*
music

artist
genre
ageRating
reviewRating
budget
publisher
featuredArtists
productTypes
albums
tracks
*/
class Music{
    constructor(){
        this.artist
        this.genre
        this.length
        this.recorded
        this.writer
        this.publisher
        this.featuredArtists
        this.productTypes
        this.album
        this.certified
    }
    tribute(){
        console.log(this.featuredArtists);
    }
    typeOfMusic(){
        console.log(this.genre);
    }
    whoMadeIt(){
        console.log(this.artist);
    }
}

let allStar= new Music;
allStar.artist="smashmouth";
allStar.genre=["alt rock","pop rock"];
allStar.length="";
allStar.recorded=1999;
allStar.writer="greg camp";
allStar.publisher="H.O.S.";
allStar.featuredArtists="none";
allStar.productTypes=["cd","digital"];
allStar.album="astro Lounge";
allStar.certified="triple platinum";

allStar.tribute();
allStar.typeOfMusic();
allStar.whoMadeIt();

for(let key in spider){
    console.log(`${key}: ${spider[key]}`)
}
