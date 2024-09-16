// Captura os parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const nomeProduto = urlParams.get('nome');
const precoProduto = urlParams.get('preco');
const categoriaProduto = urlParams.get('categoria');
const descricaoProduto = urlParams.get('descricao');

// Função para exibir os detalhes do produto
function exibirDetalhesProduto() {
    const detalhesProdutoDiv = document.getElementById('detalhesProduto');

    if (nomeProduto && precoProduto && categoriaProduto && descricaoProduto) {
        // Exibe os dados do produto no HTML
        detalhesProdutoDiv.innerHTML = `
            <h2>${nomeProduto}</h2>
            <p><strong>Preço:</strong> R$${parseFloat(precoProduto).toFixed(2)}</p>
            <p><strong>Categoria:</strong> ${categoriaProduto}</p>
            <p><strong>Descrição:</strong> ${descricaoProduto}</p>
            <a href="produtos.html" class="btn btn-primary mt-3">Voltar aos Produtos</a>
        `;
    } else {
        detalhesProdutoDiv.innerHTML = `
            <p>Detalhes do produto não disponíveis.</p>
            <a href="produtos.html" class="btn btn-primary mt-3">Voltar aos Produtos</a>
        `;
    }
}

// Chama a função para exibir os detalhes ao carregar a página
exibirDetalhesProduto();
