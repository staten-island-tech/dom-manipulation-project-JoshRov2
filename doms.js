const DOMselectors = {
    form: document.getElementById("form"),
    name: document.getElementById("name"),
    address: document.getElementById("address"),
    age: document.getElementById("age"),
    email: document.getElementById("email"),
    showdata: document.getElementById("showdata"),
    clearinputbutton: document.getElementById("clearinput")
    };

const formData = {};

 
    function formobjects() {
    formData.name = DOMselectors.name.value;
    formData.address = DOMselectors.address.value;
    formData.age = DOMselectors.age.value;
    formData.email = DOMselectors.email.value;

    adddata();
    clearinputs();

    }

    function adddata() {
        const showdata = document.createElement("div");
        showdata.className = "data";

        const inputentries = [
            { label: "Name", value: formData.name },
            { label: "Age", value: formData.age },
            { label: "Address", value: formData.address },
            { label: "Email", value: formData.email },
        ];
        
        inputentries.forEach(entry => {
            const entryElement = document.createElement("p")
            entryElement.textContent = `${entry.label}: ${entry.value}`;
            showdata.appendChild(entryElement);
        });
    DOMselectors.showdata.appendChild(showdata);
    }

    function clearinputs() {
        DOMselectors.name.value = "";
        DOMselectors.age.value = "";
        DOMselectors.email.value = "";
        DOMselectors.address.value = "";
    }

   DOMselectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    formobjects();
   });

   DOMselectors.clearinputbutton.addEventListener("click", function() {
    clearinputs();
    deletedata();
    loginconsole();
   });

   function deletedata() {
    const showdata = document.querySelectorAll(".data")
    showdata.forEach(datadisplay => {
        DOMselectors.showdata.removeChild(datadisplay);
    });
   }

   function loginconsole() {
    console.log("Inputs have been cleared.")
   }


    