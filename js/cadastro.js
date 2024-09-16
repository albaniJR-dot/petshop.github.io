document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const dataNascimento = document.getElementById("dataNascimento").value;
    const endereco = document.getElementById("endereco").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const email = document.getElementById("email").value.trim();
    const confirmarEmail = document.getElementById("confirmarEmail").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    // Validação de E-mails
    if (email !== confirmarEmail) {
        alert("Os e-mails não coincidem.");
        return;
    }

    // Validação de Senhas
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    // Validação de CPF (simples)
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
        alert("CPF inválido. Utilize o formato XXX.XXX.XXX-XX.");
        return;
    }

    const cliente = {
        nome,
        sobrenome,
        cpf,
        dataNascimento,
        endereco,
        cep,
        email,
        senha
    };

    // console.log("Cliente cadastrado:", cliente);
    // alert("Cadastro realizado com sucesso!");

    // // Limpar o formulário após o cadastro
    // document.getElementById("cadastroForm").reset();
    // // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    window.location.href = "cadastro-pet.html";
});
