const userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
}

function userFactory(name, score) {
	let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}


const adminFunctionStore = new userFunctionStore; 

function adminFactory(name, score) {
	this.name = name;
	this.score = score;
}

//Put code here for a method called sharePublicMessage() = function(){}

const adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFunctionStore.sharePublicMessage() // -> Logs "Welcome users!"