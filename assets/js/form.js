function sendMail() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var position = document.getElementById("position").value;
    var company = document.getElementById("company").value;
    var message = document.getElementById("message").value;

    // alert("name = " + name);
    if (firstname == "" && lastname == "" && email == "" && position == "" && company == "" && message == "") {
        document.getElementById("error-message").innerHTML = "Above fields are required";
        // alert("Fields are required");
    }
    else if (firstname != "" && lastname != "" && email != "" && position != "" && company != "" && message != "") {
        var params = {
            firstname: document.getElementById("firstname").value,
            lastname: document.getElementById("lastname").value,
            email: document.getElementById("email").value,
            position: document.getElementById("position").value,
            company: document.getElementById("company").value,
            message: document.getElementById("message").value
        };
        const serviceID = "service_36dx4hr";
        const templateID = "template_wdbg4jl";
        emailjs.send(serviceID, templateID, params)
            .then(
                res => {
                    document.getElementById("firstname").value = "";
                    document.getElementById("lastname").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("position").value = "";
                    document.getElementById("message").value = "";
                    document.getElementById("company").value = "";
                    console.log(res);
                    document.getElementById("error-message").style.display = "none";
                    document.getElementById("sent-message").innerHTML = "Your Message Sent Successfully";
                    // alert("Your Message Sent Successfully");
                }
            )
            .catch((err) => console.log(err));
    }
}






