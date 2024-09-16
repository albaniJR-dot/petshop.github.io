const produtos = [
    { nome: "Transportador de animais", preco: 29.99, categoria: "Mobília", descricao: "Um transportador confortável para seu pet.", imagem: "images/caixa-transporte.jpg" },
    { nome: "Tigela para gatos", preco: 20.99, categoria: "Tigelas", descricao: "Uma tigela resistente e fácil de limpar para gatos.", imagem: "images/tigela-simples.jpg" },
    { nome: "Ração para gatos", preco: 19.99, categoria: "Rações", descricao: "Ração de alta qualidade para gatos de todas as idades.", imagem: "images/racao-sobre-d-2.jpg" },
    { nome: "Ração para papagaios", preco: 20.99, categoria: "Rações", descricao: "Ração balanceada para papagaios, com vitaminas essenciais.", imagem: "images/racao-sobre-e-2.jpg" },
    { nome: "Tigela para cães", preco: 4.99, categoria: "Tigelas", descricao: "Tigela resistente e antiderrapante para cães de pequeno e médio porte.", imagem: "images/tigela-simples.jpg" },
    { nome: "Cama para cães", preco: 49.99, categoria: "Mobília", descricao: "Uma cama confortável para seu cão dormir bem.", imagem: "images/cama.jpg" },
    { nome: "Coleira para cães", preco: 9.99, categoria: "Brinquedos", descricao: "Coleira durável e confortável para passeios.", imagem: "images/colheira.jpg" },
    { nome: "Cama para hamster", preco: 49.99, categoria: "Mobília", descricao: "Uma cama segura e aconchegante para hamsters.", imagem: "images/cama.jpg" },
    { nome: "Ração para peixes", preco: 20.99, categoria: "Rações", descricao: "Alimento completo e nutritivo para peixes ornamentais.", imagem: "images/racao-lateral-2.jpg" },
    { nome: "Tigela Multipet", preco: 19.99, categoria: "Tigelas", descricao: "Tigela versátil, ideal para múltiplos tipos de pets.", imagem: "images/tigela-simples.jpg" }
];

// Função para renderizar os produtos
function renderProdutos(produtosFiltrados) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    produtosFiltrados.forEach(produto => {
        const productCard = `
        <div class="col-md-4 mb-3">
            <div class="card h-100">
                <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">R$${produto.preco.toFixed(2)}</p>
                    <p class="card-text"><small>${produto.categoria}</small></p>
                    <a href="detalhe-produto.html?nome=${encodeURIComponent(produto.nome)}&preco=${encodeURIComponent(produto.preco)}&categoria=${encodeURIComponent(produto.categoria)}&descricao=${encodeURIComponent(produto.descricao)}" class="btn btn-primary">Ver Detalhes</a>
                </div>
            </div>
        </div>
        `;
        productList.innerHTML += productCard;
    });
}


// Função para aplicar os filtros
function filtrarProdutos() {
    const categoriasSelecionadas = Array.from(document.querySelectorAll('.filter-category:checked')).map(cb => cb.value);
    const marcasSelecionadas = Array.from(document.querySelectorAll('.filter-brand:checked')).map(cb => cb.value);
    const precoMaximo = document.getElementById('filterPrice').value;

    const produtosFiltrados = produtos.filter(produto => {
        const categoriaCondicao = categoriasSelecionadas.length === 0 || categoriasSelecionadas.includes(produto.categoria);
        const marcaCondicao = marcasSelecionadas.length === 0 || marcasSelecionadas.includes(produto.marca);
        const precoCondicao = produto.preco <= precoMaximo;
        return categoriaCondicao && marcaCondicao && precoCondicao;
    });

    renderProdutos(produtosFiltrados);
}

// Inicializa a renderização e os filtros
document.getElementById('filterPrice').addEventListener('input', function() {
    document.getElementById('priceRange').innerText = `Preço: R$9 - R$${this.value}`;
    filtrarProdutos();
});

document.querySelectorAll('.filter-category, .filter-brand').forEach(cb => {
    cb.addEventListener('change', filtrarProdutos);
});

// Renderiza os produtos ao carregar a página
renderProdutos(produtos);

// Captura o parâmetro de pesquisa da URL
const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get('search');

// Função para filtrar produtos com base no termo de pesquisa
function filtrarProdutosPorPesquisa() {
    if (searchQuery) {
        const produtosFiltrados = produtos.filter(produto =>
            produto.nome.toLowerCase().includes(searchQuery)
        );
        renderProdutos(produtosFiltrados);
    } else {
        renderProdutos(produtos); // Renderiza todos os produtos se não houver busca
    }
}

// Chama a função de filtragem ao carregar a página
filtrarProdutosPorPesquisa();
