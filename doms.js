const formData = {};

const DOMselectors = {
    form: document.querySelector("#form"),
    name: document.querySelector(".name"),
    address: document.querySelector(".address"),
    age: document.querySelector(".age"),
    email: document.querySelector(".email")
    }
     DOMselectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    
    formData.name = DOMselectors.name.value;
    formData.address = DOMselectors.address.value;
    formData.age = DOMselectors.age.value;
    formData.email = DOMselectors.email.value;

    console.log("Name: " + formData.name);
    console.log("Address: " + formData.address);
    console.log("Age: " + formData.age);
    console.log("Email: " + formData.email);
    });

    