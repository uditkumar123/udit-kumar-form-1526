let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// event-target object
let btn = document.getElementById("submit-btn");
let email = document.getElementById("email");
let fullName = document.getElementById("full-name");

// Clear the data from HTML form
let testForm = document.querySelector("form");

// event-handler
function validateForm() {
    
    console.clear();
    
    // save data and errors in these initially empty "buckets":
    let errors = [];
    let data = {};
    
    // VALIDATING FULL NAME
    if (fullName.value === ""){
        errors.push("Please enter your full name.");
    } else {
        data.fullnameProp = fullName.value;
    } 
    
    // VALIDATING EMAIL
    if (email.value === "") {
        errors.push("Please enter your email!");
    } else {
        if (pattern.test(email.value)) {
            data.emailProp = email.value;
        } else {
            errors.push("your email not correct");
        }
    }
    
    
    
    
    // CREATE FEEDBACK
    if (errors.length === 0) {
        // clear your form here:
        testForm.reset();
        console.log(data);
    } else {
        console.log(errors);
    } 
}

// registering event
btn.addEventListener("click", validateForm);