function sendMail() {
    var params = {
        title: document.getElementById("title").value,
        name: document.getElementById("name").value,
        company: document.getElementById("company").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_36dx4hr";
    const templateID = "template_wdbg4jl";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("title").value = "";
                document.getElementById("name").value = "";
                document.getElementById("message").value = "";
                document.getElementById("company").value = "";

                console.log(res);
                alert("Your Message Sent Successfully");
            }
        )
        .catch((err) => console.log(err));
}
