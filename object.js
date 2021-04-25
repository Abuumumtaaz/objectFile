class User  {
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

class Admin extends User{
    deleteUser(){

    }
}
const userOne = new User('Ahmed', 'ahmedqayr22@gmail.com');
const userTwo = new User('Ramla', 'rayelmi22@gmail.com');
const userThree = new User('Damla', 'elmi22@gmail.com');
const userFour = new User('Rayaan', 'rayaan22@gmail.com');
const userFive = new Admin('Raage', 'raage22@gmail.com');

console.log(userFive, userOne, userFour, userTwo);
userOne.login(); 
userOne.inScore();
userOne.logout();
userTwo.login().logout().inScore();
userFour.inScore().inScore();
userThree.login().login().login().logout();

let users = [userFive, userOne, userFour, userTwo];
console.log(users);

