export default class AllUsers{
    constructor(Users) {
        this.Users = Users
    }
    
    ShowAllUsers() {
        console.log(this.Users)
    }

    AddUserToList(user) {
        this.Users.push(user)
    }
}