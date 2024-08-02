document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();






    const formData = new FormData(envent.target)
    const data = Object.fromEntries(formData.entries())

    emailjs.send().then(response =>
    {
        document.getElementById('response-messege').innerText = 'menagem enviar com sucesso';
        this.reset();
    })
    .catch(error => {
        document.getElementById('response-message').innerText = 'Error ao enviar a mensagem';
        console.error('Erro ao enviar o e-mail', error)
    });

});