var name = document.getElementById("name").value;
var title = document.getElementById("title").value;
var company = document.getElementById("company").value;
var message = document.getElementById("message").value;

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
                if (name != "" && message != "" && company != "" && message != "") {
                    document.getElementById("title").value = "";
                    document.getElementById("name").value = "";
                    document.getElementById("message").value = "";
                    document.getElementById("company").value = "";
                    console.log(res);
                    document.getElementById("sent-message").innerHTML = "Your Message Sent Successfully";
                    alert("Your Message Sent Successfully");
                }
                else if (name.length < 4) {
                    document.getElementById("error-message").innerHTML = "Name Should be more than 4 characters";
                }
                else {
                    document.getElementById("error-message").innerHTML = "Above fields are required";
                }

            }
        )
        .catch((err) => console.log(err));
}
