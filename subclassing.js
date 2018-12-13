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

const adminFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
} 

function adminFactory(name, score) {
  let admin = Object.create(adminFunctionStore)
  admin.type = "Admin";
	admin.name = name;
  admin.score = score;
  return admin;
}

adminFunctionStore.sharePublicMessage = function(){console.log('Welcome users!')}

const adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFunctionStore.sharePublicMessage() // -> Logs "Welcome users!"