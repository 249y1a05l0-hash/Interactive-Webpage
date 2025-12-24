document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === "") {
        document.getElementById("message").innerText = "Please fill out all fields!";
        document.getElementById("message").style.color = "red";
    } else {
        document.getElementById("message").innerText = `Hello ${name}, form submitted successfully!`;
        document.getElementById("message").style.color = "green";
    }
});

