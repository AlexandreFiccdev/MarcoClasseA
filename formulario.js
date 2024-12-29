// Inicialize o EmailJS com sua chave pública (User ID)
emailjs.init("GYuzeQWkCvvZUL5Mz");

document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Envia o e-mail com os dados do formulário
    emailjs.sendForm("service_kb77cfn", "template_sw7mu3v", this)
        .then(function(response) {
            console.log("Mensagem enviada com sucesso:", response);
            alert("Sua mensagem foi enviada com sucesso!");
        }, function(error) {
            console.log("Erro ao enviar mensagem:", error);
            alert("Houve um erro ao enviar sua mensagem. Tente novamente.");
        });
});