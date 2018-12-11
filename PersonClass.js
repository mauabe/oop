class PersonClass {
	constructor(name) {
    this.name = name;
	}
  greet(){console.log('hello');}
}

const george = new PersonClass('George');

// Uncomment this line to check your work!
 george.greet(); // -> Logs 'hello'
 console.log(PersonClass.name)
 console.log(george.name)