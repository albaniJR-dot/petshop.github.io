// Produtos em destaque
const produtosDestaque = [
    { nome: "Ração Premium para cães", preco: 19.99, categoria: "Rações", descricao: "Ração de alta qualidade para cães de todas as idades.", imagem: "images/racao-1.jpg" },
    { nome: "Cama para cães", preco: 49.99, categoria: "Mobília", descricao: "Uma cama confortável para seu cão dormir bem.", imagem: "images/cama.jpg" },
    { nome: "Tigela para gatos", preco: 20.99, categoria: "Tigelas", descricao: "Tigela resistente e fácil de limpar para gatos.", imagem: "images/tigela-simples.jpg" }
];

// Serviços disponíveis
const servicosDisponiveis = [
    { nome: "Banho e Tosa", preco: 50.00, categoria: "Banho e Tosa", descricao: "Cuidados completos para seu pet com os melhores profissionais.", imagem: "images/banho.jpg" },
    { nome: "Consulta Veterinária", preco: 100.00, categoria: "Consulta Veterinária", descricao: "Atendimento veterinário especializado para seu pet.", imagem: "images/vet.jpg" },
    { nome: "Vacinação", preco: 70.00, categoria: "Vacinação", descricao: "Vacinas essenciais para manter a saúde do seu pet em dia.", imagem: "images/vacina.jpg" }
];

// Função para renderizar os produtos em destaque
function renderProdutosDestaque() {
    const produtosDiv = document.getElementById('produtosDestaque');
    produtosDestaque.forEach(produto => {
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
        produtosDiv.innerHTML += productCard;
    });
}

// Função para renderizar os serviços disponíveis
function renderServicosDisponiveis() {
    const servicosDiv = document.getElementById('servicosDisponiveis');
    servicosDisponiveis.forEach(servico => {
        const serviceCard = `
        <div class="col-md-4 mb-3">
            <div class="card h-100">
                <img src="${servico.imagem}" class="card-img-top" alt="${servico.nome}">
                <div class="card-body">
                    <h5 class="card-title">${servico.nome}</h5>
                    <p class="card-text">R$${servico.preco.toFixed(2)}</p>
                    <p class="card-text"><small>${servico.categoria}</small></p>
                    <a href="agendamento.html?nome=${encodeURIComponent(servico.nome)}&preco=${encodeURIComponent(servico.preco)}&categoria=${encodeURIComponent(servico.categoria)}" class="btn btn-primary">Agendar</a>
                </div>
            </div>
        </div>
        `;
        servicosDiv.innerHTML += serviceCard;
    });
}

// Inicializa a renderização ao carregar a página
renderProdutosDestaque();
renderServicosDisponiveis();
