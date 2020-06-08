
$(document).ready(function () {
    $("#basic-form").validate({
        rules: {
            fname: {
                required: true,
                minlength: 3
            },
            lname: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                number: true,
                required: true,
                minlength: 10,
            },
            college: {
                required: true,
                minlength: 3,
            },
            dob: {
                date: true,
                required: true,
            },
            uname: {
                required: true,
                minlength: 3,
            },
            pass: {
                required: true,
                minlength: 8
            },
            ucname: {
                required: true,
                minlength: 3,
                equalTo: '#uname'
            },
            cpass: {
                required: true,
                equalTo: '#pass'
            }
        },
        messages: {
            fname: {
                minlength: "Name should be at least 3 characters"
            },
            lname: {
                minlength: "Name should be at least 3 characters"
            },
            email: {
                email: "The email should be in the format: abc@domain.xyz"
            },
            phone: {
                number: "Enter a valid phone number",
                minlength: "Enter a valid phone number"
            },
            dob: {
                date: "Enter a valid date"
            },
            uname: {
                minlength: "Username should be atleast 3 characters"
            }
        },

    })
});

function checkPasswordStrength() {
    password = document.getElementById("pass").value;
    if (password.length === 0) {
        document.getElementById("passStrength").innerHTML = "";
        return false;
    }
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]");
    matchedCase.push("[A-Z]");
    matchedCase.push("[0-9]");
    matchedCase.push("[a-z]");
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Very Weak";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("passStrength").innerHTML = strength;
    document.getElementById("passStrength").style.color = color;
}