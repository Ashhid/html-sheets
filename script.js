const scriptURL = 'https://script.google.com/macros/s/AKfycbxtjTWq6iLkUpVVSMUzhI9q6grFdqxFZAeMEmIX_-KZ65RviH-CvpQRQ_5lrEjMRaZ0aw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e =>{  
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank You!"))
    .then(()=> {window.location.reload();})
    .catch(error => console.error('Error!', error.message))
})