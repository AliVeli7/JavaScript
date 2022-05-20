let form_item = document.getElementById("form_item");
let form = document.getElementById("form");
let firstName = document.getElementById("form_first_name");
let lastName = document.getElementById("form_last_name");
let email = document.getElementById("form_email");
let age = document.getElementById("form_age");
let Button = document.getElementById("button");


Button.addEventListener(()=> {
    if(firstName.value.length < 3){
        firstName.innerText = "FirstName must be at least 3 characters";
    }
    else if(lastName.value.length < 3){
        lastName.innerText = "LastName must be at least 3 characters";
    }
    else if( email !== "" || email !== " " || age.value >=0){
            email.innerText = "Fill all Form"
            age.innerText="Fill all form"
        }
        else{
            `${}`
        form.innerText += `First_name: ${firstName.value}\n Last_Name: ${lastName.value}\n Email: ${email.value}\n Age: ${age.value}`;
        }
    
})