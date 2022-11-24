console.log("connection is maintained")
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.header-links');
menu.onclick = () => {
    navbar.classList.toggle('active');
}
const darkmode = document.querySelector('#darkmode');
darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active')
    }
    else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

//
//let Name = document.querySelector('#name').value;
/*let email = document.querySelector('#email').value;
const submit = document.querySelector('#Submit');
submit.onclick = () => {
    if (Name != "" && email != "") {
        window.location = 'index.html';
    }
    else if (Name == "" || email == "") {
        window.alert("Form Can Not Be Empty")
    }
    else{
        window.location="index.html"
    }

}*/
ScrollReveal().reveal('.content ',{ delay:250, orign: 'left',duration:2000,reset:true});
ScrollReveal().reveal('.social-links',{ delay:250, orign: 'left',duration:2000,reset:true});
ScrollReveal().reveal('.logo ',{ delay:250, orign: 'right',duration:2000,reset:true});
ScrollReveal().reveal('.about ,.skill-sec ,.contact-form' ,{ delay:200, orign: 'bottom' ,reset:true,distance:'45px'});


