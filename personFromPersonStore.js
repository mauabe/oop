const personStore = {
  greet: function() {
    console.log('hello');
  }
}

function personFromPersonStore(name, age) {
  const newPerson =  Object.create(personStore)
  newPerson.name = name;
  newPerson.age = age;
  return newPerson;
}

const sandra = personFromPersonStore('Sandra', 26);

console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'