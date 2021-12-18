import {
    CheckInput,
    CreateUser,
    ShowUsers
} from "/user/htmlUser.js"

$(document).ready(function () {

    $("#button1").on("click", function (event) {
        event.preventDefault();

        if (CheckInput()) {
            CreateUser()
        }
    })

    $("#button2").on("click", function (event) {
        // UserAll.map(user => {
        //     console.log(user)
        // })
        ShowUsers()
    })


    $("#formControlRange").on("change", function () {
        let x1 = $("#formControlRange").val()
        $("#formControlRange1").text(x1)
    })


})