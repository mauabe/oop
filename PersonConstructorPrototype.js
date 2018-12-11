function PersonConstructor() {
  this.greet = function() {
    console.log('hello');
  }
}

function personFromConstructor(name, age) {
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;
}

const mike = personFromConstructor('Mike', 30);

PersonConstructor.prototype.introduce = function(){
  console.log(`Hi, my name is ${this.name}`);
}

// Uncomment this line to check your work!
mike.introduce(); // -> Logs 'Hi, my name is Mike'