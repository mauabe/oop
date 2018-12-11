function PersonConstructor() {
  this.greet = function() {
    console.log('hello');
  }
}

function personFromConstructor(name, age) {
	this.name = name;
  this.age = age;
  this.greet = function(){console.log('hello');}
}



const mike = new personFromConstructor('Mike', 30);

// Uncomment these lines to check your work!
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs 30
mike.greet(); // -> Logs 'hello'