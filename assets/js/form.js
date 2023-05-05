function sendMail() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var position = document.getElementById("position").value;
    var company = document.getElementById("company").value;
    var message = document.getElementById("message").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // alert("name = " + name);
    if (firstname == "" && lastname == "" && email == "" && position == "" && company == "" && message == "") {
        document.getElementById("error-message").innerHTML = "Above fields are required";
        // alert("Fields are required");
    }
    else if (!(email.match(mailformat))) {
        document.getElementById("error-message").innerHTML = "Kindly enter valid email address";
        // alert("Fields are required");
    }
    else if (firstname != ""
        && lastname != ""
        && email != "" && email.match(mailformat)
        && position != ""
        && company != ""
        && message != "") {
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


// For Blog 1 //

function shareOnFacebook() {
    const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + 'https://cubestatistica.com/blog-1.html';
    window.open(navUrl, '_blank');
}

function shareOnTwitter() {
    const navUrl =
        'https://twitter.com/intent/tweet?text=' +
        'https://cubestatistica.com/blog-1.html';
    window.open(navUrl, '_blank');
}

function shareOnLinkedin() {
    const navUrl =
        'https://www.linkedin.com/shareArticle?mini=true&url=' +
        'https://cubestatistica.com/blog-1.html';
    window.open(navUrl, '_blank');
}

function shareOnWhatsapp() {
    const navUrl =
        'https://api.whatsapp.com/send/?text=' +
        'https://cubestatistica.com/blog-1.html';
    window.open(navUrl, '_blank');
}

// For Blog 2 //

function shareOnFacebook2() {
    const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' +
        'https://cubestatistica.com/blog-2.html';
    window.open(navUrl, '_blank');
}

function shareOnTwitter2() {
    const navUrl =
        'https://twitter.com/intent/tweet?text=' +
        'https://cubestatistica.com/blog-2.html';
    window.open(navUrl, '_blank');
}

function shareOnLinkedin2() {
    const navUrl =
        'https://www.linkedin.com/shareArticle?mini=true&url=' +
        'https://cubestatistica.com/blog-2.html';
    window.open(navUrl, '_blank');
}

function shareOnWhatsapp2() {
    const navUrl =
        'https://api.whatsapp.com/send/?text=' +
        'https://cubestatistica.com/blog-2.html';
    window.open(navUrl, '_blank');
}


// For Blog 3 //

function shareOnFacebook3() {
    const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' +
        'https://cubestatistica.com/blog-3.html';
    window.open(navUrl, '_blank');
}

function shareOnTwitter3() {
    const navUrl =
        'https://twitter.com/intent/tweet?text=' +
        'https://cubestatistica.com/blog-3.html';
    window.open(navUrl, '_blank');
}

function shareOnLinkedin3() {
    const navUrl =
        'https://www.linkedin.com/shareArticle?mini=true&url=' +
        'https://cubestatistica.com/blog-3.html';
    window.open(navUrl, '_blank');
}

function shareOnWhatsapp3() {
    const navUrl =
        'https://api.whatsapp.com/send/?text=' +
        'https://cubestatistica.com/blog-3.html';
    window.open(navUrl, '_blank');
}


