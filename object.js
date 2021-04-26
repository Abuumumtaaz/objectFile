  /*
  class User{
    constructor(username, email){
        this.username = username;
        this.email = email;
        this.score = 0;
    }
  
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    
    inScore(){
        this.score += 1;
        console.log(`${this.username} his score is ${this.score}`);
        return this;
    }
}


//subclass or class inhiritance 
class Admin extends User{
    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }
    deleteUser(user){ users = users.filter(u => u.username !== user.username );
}
}
*/
//constractor function

function User(username, email){
    this.username = username;
    this.email = email;
    this.score = 0;
    
} 
//use prototype 
User.prototype.login = function() {
    console.log(`${this.username} just logged in`);
    return this;
};
User.prototype.logout = function() {
    console.log(`${this.username} just logged out`);
};
User.prototype.inScore = function() {
        this.score += 1;
        console.log(`${this.username} his score is ${this.score}`);
        return this;
};

//constractor or inhiritance
function Admin(username, email, tittle){
   User.call(this, username, email)
   this.tittle = tittle;
}

Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function(u){
  users = users.filter(user => {
      return user.email != u.email;
  })
};

const userOne = new User('Ahmed', 'ahmedqayr22@gmail.com');
const userTwo = new User('Ramla', 'rayelmi22@gmail.com');
const userThree = new User('Damla', 'elmi22@gmail.com');
const userFour = new User('Rayaan', 'rayaan22@gmail.com');
const userFive = new Admin('Raage', 'raage22@gmail.com', 'prf');

console.log(userFive, userOne, userFour, userTwo);
userOne.login(); 
userTwo.login();
userTwo.logout();
userOne.logout();
userOne.inScore();
userTwo.inScore();

//userTwo.login().logout().inScore();
//userFour.inScore().inScore();
//userThree.login().login().login().logout();

let users = [ userOne, userTwo, userThree, userFour, userFive,];
console.log(users);

userFive.deleteUser(userThree);
userFive.deleteUser(userFour);
console.log(users);



 