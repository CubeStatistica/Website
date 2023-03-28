function sendMail() {
    var name = document.getElementById("name").value;
    var title = document.getElementById("title").value;
    var company = document.getElementById("company").value;
    var message = document.getElementById("message").value;

    // alert("name = " + name);
    if (name == "" && company == "" && message == "") {
        document.getElementById("error-message").innerHTML = "Above fields are required";
        // alert("Fields are required");
    }
    else if (name != "" && company != "" && message != "") {
        var params = {
            title: document.getElementById("title").value,
            name: document.getElementById("name").value,
            company: document.getElementById("company").value,
            message: document.getElementById("message").value
        };
        const serviceID = "service_0lebw28";
        const templateID = "template_x2g7dmv";
        emailjs.send(serviceID, templateID, params)
            .then(
                res => {
                    document.getElementById("title").value = "";
                    document.getElementById("name").value = "";
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


