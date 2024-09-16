let pets = [];

document.getElementById("cadastroPetForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nomePet = document.getElementById("nomePet").value.trim();
    const tipoPet = document.getElementById("tipoPet").value;
    const racaPet = document.getElementById("racaPet").value.trim();
    const temperamentoPet = document.getElementById("temperamentoPet").value.trim();
    const idadePet = parseInt(document.getElementById("idadePet").value, 10);

    // Validação de Idade
    if (isNaN(idadePet) || idadePet < 0) {
        alert("Idade inválida.");
        return;
    }

    const pet = {
        nome: nomePet,
        tipo: tipoPet,
        raca: racaPet,
        temperamento: temperamentoPet,
        idade: idadePet
    };

    pets.push(pet);

    // Atualiza a lista de pets na tela
    const listaPets = document.getElementById("listaPets");
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${nomePet} - ${tipoPet}`;
    listaPets.appendChild(li);

  // Limpa os campos de entrada
    document.getElementById("nomePet").value = "";
    document.getElementById("tipoPet").value = "";
    document.getElementById("racaPet").value = "";
    document.getElementById("temperamentoPet").value = "";
    document.getElementById("idadePet").value = "";

    console.log("Pets cadastrados:", pets);

    // console.log("Pet cadastrado:", pet);
    // alert("Cadastro do pet realizado com sucesso!");

    // // Limpar o formulário após o cadastro
    // document.getElementById("cadastroPetForm").reset();
    // // Aqui você pode adicionar a lógica para enviar os dados para o servidor
});

document.getElementById("finalizarCadastro").addEventListener("click", function() {
    if (pets.length === 0) {
        alert("Você precisa cadastrar pelo menos um pet para finalizar!");
        return;
      }
    
    
    // Simular envio dos dados dos pets para o backend
    console.log("Cadastro finalizado com os seguintes pets:", pets);
  
    alert("Cadastro de pets finalizado com sucesso!");
  
    window.location.href = "index.html";
  });