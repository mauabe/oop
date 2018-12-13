// Object-Oriented JavaScript

// Working with Object Literals
// Challenge 1/1

// Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
// create an empty object
// add a name property to the newly created object with its value being the 'name' argument passed into the function
// add an age property to the newly created object with its value being the 'age' argument passed into the function
// return the object


// Using Object.create
// Challenge 1/3

// Inside personStore object, create a property greet where the value is a function that logs "hello".
// Challenge 2/3

// Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.
// Challenge 3/3

// Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".


// Using the NEW keyword
// Challenge 1/3

// Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.
// Challenge 2/3

// Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.
// Challenge 3/3

// Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".


// Using ES6 Classes
// Challenge 1/2

// Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string 'hello'.
// Challenge 2/2

// Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'.
// EXTENSION: Subclassing
// Challenge 1/5

// Create an object adminFunctionStore that has access to all methods in the userFunctionStore object, without copying them over individually.
// Challenge 2/5

// Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class, but without copying each data field individually.
// Challenge 3/5

// Then make sure the value of the 'type' field for adminFactory objects is 'Admin' instead of 'User'.
// Challenge 4/5

// Make sure that adminFactory objects have access to adminFunctionStore methods, without copying them over.
// Challenge 5/5

// Created a method called sharePublicMessage that logs 'Welcome users!' and will be available to adminFactory objects, but not userFactory objects. Do not add this method directly in the adminFactory function.

/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
	// add code here
	let person = {};
	person.name = name;
	person.age = age;
	return person;
}

var vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
	greet: function() { console.log('Hello') }
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
	let person = Object.create(personStore);
	person.name = name;
	person.age = age;
	return person;
}

var sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/

personStore.introduce = function() {
	console.log('Hi, my name is ' + this.name);
}

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
	this.greet = function() {
		console.log('hello');
	}
}


// /********* Uncomment this line to test your work! *********/
// var simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
	this.name = name;
	this.age = age;
	this.greet = function() {
		console.log('hello');
	};
}

var mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
// add code here


// console.log(mike.introduce()); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
	constructor() {
    // add code here


	}

	// add code here

}


// /********* Uncomment this line to test your work! *********/
var george = new PersonClass;
// george.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

// add code here


// /********* Uncomment these lines to test your work! *********/
// var thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'



/*** CHALLENGE 3 of 3 ***/

// add code here

// /********* Uncomment these lines to test your work! *********/
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'



/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/


function userFactory(name, score) {
	let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}
const userFunctionStore = {
	sayType: function() {
		console.log("I am a " + this.type);
	}
}

const adminFunctionStore = new userFactory; 

function adminFactory(name, score) {
	this.name = name;
	this.score = score;
}

//Put code here for a method called sharePublicMessage() = function(){}

const adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFunctionStore.sharePublicMessage() // -> Logs "Welcome users!"