// Função para carregar o header e o footer
function includeHTML() {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    fetch("components/header.html")
        .then(response => response.text())
        .then(data => header.innerHTML = data);

    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => footer.innerHTML = data);
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", includeHTML);

// Função para redirecionar com base na pesquisa
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

    if (!searchTerm) {
        alert("Digite um termo de pesquisa.");
        return;
    }

    // Termos de produtos e serviços (podem ser expandidos conforme a aplicação)
    const produtos = ["ração", "tigela", "cama", "coleira", "transportador", "ração para gatos"];
    const servicos = ["banho", "tosa", "consulta veterinária", "vacinação", "hospedagem"];

    // Verificar se o termo corresponde a um produto ou serviço
    if (produtos.some(produto => searchTerm.includes(produto))) {
        // Redirecionar para a página de produtos com o termo de pesquisa
        window.location.href = `produtos.html?search=${encodeURIComponent(searchTerm)}`;
    } else if (servicos.some(servico => searchTerm.includes(servico))) {
        // Redirecionar para a página de serviços com o termo de pesquisa
        window.location.href = `servicos.html?search=${encodeURIComponent(searchTerm)}`;
    } else {
        alert("Nenhum resultado encontrado para o termo pesquisado.");
    }
});
