document.addEventListener("DOMContentLoaded", function () {
    const fname = document.getElementById("firstname");
    const lname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const svgg = document.getElementById("svg1");
    const svg2 = document.getElementById("svg2");
    const svg3 = document.getElementById("svg3");
    const svg4 = document.getElementById("svg4");
    const etext1 = document.getElementById("etx1");
    const etext2 = document.getElementById("etx2");
    const etext3 = document.getElementById("etx3");
    const etext4 = document.getElementById("etx4");
    const sbutton = document.getElementById("submitbtn");

    sbutton.addEventListener("click", function () {
        if (fname.value.trim() === "") {
            etext1.style.opacity = "1";
            fname.style.borderColor = "hsl(0, 100%, 74%)";
            fname.style.borderWidth = "2.5px";
            svgg.style.opacity = "1";
        } else {
            etext1.style.opacity = "0";
            fname.style.borderColor = "rgba(117, 111, 111, 0.595)";
            svgg.style.opacity = "0";
        }

        if (lname.value.trim() === "") {
            etext2.style.opacity = "1";
            lname.style.borderColor = "hsl(0, 100%, 74%)";
            lname.style.borderWidth = "2.5px";
            svg2.style.opacity = "1";
        } else {
            etext2.style.opacity = "0";
            lname.style.borderColor = "rgba(117, 111, 111, 0.595)";
            svg2.style.opacity = "0";
        }
        const emailValue = email.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (emailValue === "") {
            etext3.style.opacity = "1";
            email.style.borderColor = "hsl(0, 100%, 74%)";
            email.style.borderWidth = "2.5px";
            svg3.style.opacity = "1";
        } else if (!emailPattern.test(emailValue)) {
            etext3.style.opacity = "1";
            email.style.borderColor = "hsl(0, 100%, 74%)";
            email.style.borderWidth = "2.5px";
            svg3.style.opacity = "1";
            /*etext3.innerText = "Looks like this is not an email";*/
        } else {
            etext3.style.opacity = "0";
            email.style.borderColor = "rgba(117, 111, 111, 0.595)";
            svg3.style.opacity = "0";
        }
        if (password.value.trim() === "") {
            etext4.style.opacity = "1";
            password.style.borderColor = "hsl(0, 100%, 74%)";
            password.style.borderWidth = "2.5px";
            svg4.style.opacity = "1";
        } else {
            etext4.style.opacity = "0";
            password.style.borderColor = "rgba(117, 111, 111, 0.595)";
            svg4.style.opacity = "0";
        }
    }); 
});

