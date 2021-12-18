import User from "/user/UserClass.js";
import AllUsers from "/user/AllUsers.js";
import { CreateList} from "../backend/models/createList.js";

var id = 0;
let UserAll = [];
let AllUsers1 = new AllUsers(UserAll);

export function AddUser(user) {
    CreateList(user)
    alert((id+1) + ".  Kisi aşağıya eklendi")
    
}

export function CheckInput() {
    if ($("#exampleInputEmail1").val() === "") {
        ShowError("Please enter Email Address")
        return false;
    }
    else if ($("#exampleInputPassword1").val() === "") {
        ShowError("Please enter Password ")
        return false;
    }
    else {
        return true;
    }
}

export function CreateUser() {
    var user1 = new User();
    user1.id = id;
    user1.email = $("#exampleInputEmail1").val();
    user1.password = $("#exampleInputPassword1").val();
    user1.checkbox = $("#exampleCheck1").is(":checked")
    user1.range = $("#formControlRange").val();
    AllUsers1.AddUserToList(user1)
    AddUser(user1)
    id += 1;
}

function ShowError(message) {
    console.error(message)
    alert(message);
}
export function ShowUsers() {
    AllUsers1.ShowAllUsers();
}