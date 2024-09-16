const servicos = [
    { nome: "Banho e Tosa", preco: 50.00, categoria: "Banho e Tosa", imagem: "images/banho.jpg" },
    { nome: "Consulta Veterinária", preco: 100.00, categoria: "Consulta Veterinária", imagem: "images/vet.jpg" },
    { nome: "Vacinação", preco: 70.00, categoria: "Vacinação", imagem: "images/vacina.jpg" },
    { nome: "Hospedagem para Pets", preco: 150.00, categoria: "Hospedagem", imagem: "images/hotel.png" },
    { nome: "Hidratação de Pelagem", preco: 80.00, categoria: "Banho e Tosa", imagem: "images/creme.png" },
    { nome: "Consulta Especialista", preco: 200.00, categoria: "Consulta Veterinária", imagem: "images/especialista.png" }
];

// Função para renderizar os serviços
function renderServicos(servicosFiltrados) {
    const serviceList = document.getElementById('service-list');
    serviceList.innerHTML = '';

    servicosFiltrados.forEach(servico => {
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
        serviceList.innerHTML += serviceCard;
    });
}


// Função para aplicar os filtros
function filtrarServicos() {
    const categoriasSelecionadas = Array.from(document.querySelectorAll('.filter-category:checked')).map(cb => cb.value);
    const precoMaximo = document.getElementById('filterPrice').value;

    const servicosFiltrados = servicos.filter(servico => {
        const categoriaCondicao = categoriasSelecionadas.length === 0 || categoriasSelecionadas.includes(servico.categoria);
        const precoCondicao = servico.preco <= precoMaximo;
        return categoriaCondicao && precoCondicao;
    });

    renderServicos(servicosFiltrados);
}

// Inicializa a renderização e os filtros
document.getElementById('filterPrice').addEventListener('input', function() {
    document.getElementById('priceRange').innerText = `Preço: R$30 - R$${this.value}`;
    filtrarServicos();
});

document.querySelectorAll('.filter-category').forEach(cb => {
    cb.addEventListener('change', filtrarServicos);
});

// Renderiza os serviços ao carregar a página
renderServicos(servicos);
// Captura o parâmetro de pesquisa da URL
const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get('search');

// Função para filtrar serviços com base no termo de pesquisa
function filtrarServicosPorPesquisa() {
    if (searchQuery) {
        const servicosFiltrados = servicos.filter(servico =>
            servico.nome.toLowerCase().includes(searchQuery)
        );
        renderServicos(servicosFiltrados);
    } else {
        renderServicos(servicos); // Renderiza todos os serviços se não houver busca
    }
}

// Chama a função de filtragem ao carregar a página
filtrarServicosPorPesquisa();
