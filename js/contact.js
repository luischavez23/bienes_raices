// Inputs
const contactForm = document.querySelector('.contact__form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const subjectField = document.getElementById('subject');
const messagetField = document.getElementById('message');
const submitBtn = document.querySelector('.contact__btn');
const listData = []

// Message 
const messageAlert = () => {
    const textAlert = document.createElement('div');
    const parent = submitBtn.parentNode;

    textAlert.classList.add('alert');
    textAlert.innerHTML = `<p class="alert__text">Mensaje enviado existosamente.</p>`;
    
    parent.insertBefore(textAlert, submitBtn);
    
    setTimeout(() => {
        textAlert.remove();
    }, 3000);
}

//Collect the information 
const dataForm = (e) => {
    e.preventDefault();
    const name = nameField.value.trim();
    const email = emailField.value.toLowerCase();
    const subject = subjectField.value.trim();
    const message = messagetField.value;
    const nowDate = new Date().toDateString();

    const data = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        date: nowDate,
    };

    listData.push(data)

    contactForm.reset();
    
    messageAlert();
}


contactForm.addEventListener('submit', dataForm);
console.log(listData)