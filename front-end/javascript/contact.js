let cname = document.getElementById("contact-name")
let cemail = document.getElementById("contact-email")
let cphone = document.getElementById("contact-tel")
let caddress = document.getElementById("contact-address")
let submit = document.getElementById("form-btn-submit")

submit.addEventListener('click', function(e) {
    let nameArr = cname.value.split(" ")
    let phoneno = /^\d{10}$/;
    if(!cphone.value.match(phoneno)) {
        window.alert("enter the last 10 digits without space commas and plus sign")
        e.preventDefault()
    }
    else if (nameArr.length != 3) {
        window.alert("enter your full name")
        e.preventDefault()
    }
    else if (cphone.value.length != 10) {
        window.alert("check your phone number")
        e.preventDefault()
    }


})

