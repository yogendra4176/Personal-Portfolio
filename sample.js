            var typed = new Typed('#element', {
              strings: ['<b><i>Web</i></b> <b>Developer.</b>', '<b><i>Data</i></b> <b>Scientist.</b>','<b><i>Machine</i></b> <b>Learner</b>'  , '<b><i>Software</i></b> <b>Engineer.</b>'],
              typeSpeed: 50,
            });
// Download Resume Function
     function downloadResume() {
    alert('Downloading resume...');
    window.location.href = 'YOGENDRA_PANDEY.pdf'; 
}
// Visit Github Function
function VisitGit() {
    window.location.href = 'https://github.com/yogendra4176'; 
}
function view1() {
    window.location.href = 'https://github.com/yogendra4176/House-Price-Prediction-'; 
}
function view2() {
    window.location.href = 'https://sites.google.com/view/yogendra-pandey/home'; 
}
function view3() {
    window.location.href = 'https://github.com/yogendra4176/Quiz.app'; 
}
function view4() {
    window.location.href = 'https://github.com/yogendra4176/Gym-website-'; 
}
function view5() {
    window.location.href = 'https://github.com/yogendra4176/Temperatureconverter'; 
}
function view6() {
    window.location.href = 'https://github.com/yogendra4176/Calculator'; 
}
function view7() {
    window.location.href = 'https://github.com/yogendra4176/TO-do-list'; 
}
function view8() {
    window.location.href = 'https://github.com/yogendra4176/Pandey-s-Library'; 
}
function view9() {
    window.location.href = 'https://github.com/yogendra4176/Music_App'; 
}
function lkin() {
    window.location.href = 'https://www.linkedin.com/in/yogendra4176/'; 
}
function int1() {
    window.location.href = 'https://github.com/yogendra4176/E_Learning_Website'; 
}
function int2() {
    window.location.href = 'https://github.com/yogendra4176/Codsoft'; 
}
function cert1() {
    window.location.href = 'py.jpeg'; 
}
function cert2() {
    window.location.href = 'c.jpeg'; 
}
function cert3() {
    window.location.href = 'flipkart.jpg'; 
}
function cert4() {
    window.location.href = 'tvs.jpg'; 
}
function cert5() {
    window.location.href = 'foundation.pdf'; 
}
function cert6() {
    window.location.href = 'phy.jpeg'; 
}
function cert7() {
    window.location.href = 'iitk.jpg'; 
}


// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-message').textContent = 'Message sent successfully!';
        this.reset();
    } else {
        document.getElementById('form-message').textContent = 'Please fill all fields.';
        
    }
});
