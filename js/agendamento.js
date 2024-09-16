// Captura os parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const nomeServico = urlParams.get('nome');
const precoServico = urlParams.get('preco');
const categoriaServico = urlParams.get('categoria');

// Função para exibir os detalhes do serviço escolhido
function exibirDetalhesServico() {
    if (nomeServico && precoServico && categoriaServico) {
        // Exibe os dados do serviço selecionado no HTML
        document.getElementById('detalhesServico').innerHTML = `
            <h1 class="display-4">Agendar Serviço</h1>
            <p><strong>Nome:</strong> ${nomeServico}</p>
            <p><strong>Preço:</strong> R$${parseFloat(precoServico).toFixed(2)}</p>
            <p><strong>Categoria:</strong> ${categoriaServico}</p>
        `;
    }
}

// Exibe os detalhes do serviço ao carregar a página
exibirDetalhesServico();

window.onload = exibirDetalhesServico();