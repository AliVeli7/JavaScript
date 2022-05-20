let form_item = document.getElementById("form_item");
let form = document.getElementsByClassName("form");
let firstName = document.getElementById("form_first_name");
let lastName = document.getElementById("form_last_name");
let email = document.getElementById("form_email");
let age = document.getElementById("form_age");
let Button = document.getElementById("button");


Button.onclick(() => {
    if (firstName.value.length <=2 || lastName.value.length <=2 ) {
        firstName.innerText = "Name must be at least 3 characters";
        lastName.innerText = "Name must be at least 3 characters";

    }
    else if(age<=0){
        age.innerText="age must be minimum 0" 
    }
    else if (email !== "" || email !== " ") {
        email.innerText = "Wrong Email "
    }
    else {
        `${}`
        form.innerText += `First_name: ${firstName.value}\n Last_Name: ${lastName.value}\n Email: ${email.value}\n Age: ${age.value}`;
    }

})