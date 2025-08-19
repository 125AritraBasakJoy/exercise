
let userName = "Malfoy";
let secretCode = "12345";
if (secretCode === "12345") {
    console.log("Welcome, " + userName + "!");
}
else {
    console.log("Access denied.");
}

let myString = "Harry"; 
let age = 20;
let checkValidation = (age => 18) ? "Access Entry to Hogwarts" : "Access Denied";
console.log(checkValidation);
myString += " Potter";
console.log(myString);

const information = {
    name: "Hermione",
    age: 18,
    house: "Gryffindor"
};
delete information.age;
console.log(information);

const seriesName = ["Game of Thrones", "Breaking Bad", "Stranger Things", "The Witcher"];
seriesName.push("The Crown");
console.log(seriesName);
const movieName = ["Harry Potter", "The Goblet of Fire", "The Deathly Hallows", "The Intern", "The Dark Knight"];
const movieReleaseYear = [2001, 2005, 2010, 2015, 2018];
console.log(" ");
console.log(movieName.at(1));
console.log(" ");
movieName.splice(2, 0, "The Philosopher's Stone");
console.log(movieName);
movieName.splice(3, 1);
console.log(movieName);
let movieAndSeries = movieName.concat(seriesName);
console.log(" ");
console.log("Movie and Series List: " + movieAndSeries.join(", "));
console.log(" ");
// console.log("Movie List: "+ movieName.join(", ").concat(" and Series List: " + seriesName.join(", ")));
const carName = ["Toyota", "Honda", "BMW", "Mercedes"];
const iterator = carName.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
//const check = movieReleaseYear.every(year => year > 2000);