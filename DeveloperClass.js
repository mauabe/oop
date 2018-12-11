class PersonClass {
	constructor(name) {
    this.name = name;
	}
	greet() {
    console.log('hello');
  }
}
// PersonClass.prototype.introduce = function(){
//   console.log(`Hello World, my name is ${this.name}`);
// }

class DeveloperClass extends PersonClass {
  constructor(name, iq){
    super(name);
    this.iq = iq;
  }
  introduce() {
  	console.log(`Hello World, my name is ${this.name}`);
	}
}
const thai = new DeveloperClass('Thai', 32);

// Uncomment these lines to check your work!
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'