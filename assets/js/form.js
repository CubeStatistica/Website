function sendMail(){
    var params = {
        name : document.getElementById("name").value,
        message : document.getElementById("message").value
    };
    
const serviceID = "service_36dx4hr";
const templateID = "template_wdbg4jl";

emailjs.send(serviceID, templateID, params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";

        console.log(res);
        alert("Your Message Sent Successfully");
    }
)
.catch((err) =>console.log(err));
}
