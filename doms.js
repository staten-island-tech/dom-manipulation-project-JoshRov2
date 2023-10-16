const DOMselectors = {
    form: document.querySelector("#form"),
    name: document.querySelector(".name"),
    address: document.querySelector(".address"),
    age: document.querySelector(".age"),
    email: document.querySelector(".email")
    }
     DOMselectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Name: " + DOMselectors.name.value);
    console.log("Address: " + DOMselectors.address.value);
    console.log("Age: " + DOMselectors.age.value);
    console.log("Email: " + DOMselectors.email.value);
    });

    