# PetShop Online

## Descrição

Este projeto é um **site para um PetShop online**, onde os usuários podem visualizar produtos, serviços, detalhes específicos e realizar agendamentos para seus pets. O site foi desenvolvido utilizando **HTML**, **CSS**, **JavaScript** e **Bootstrap**, com componentes reutilizáveis para garantir a consistência e a manutenção simples do código.

## Funcionalidades

- **Tela Inicial**:
  - Exibe produtos e serviços em destaque.
  - Contém um banner principal que aparece no topo da página, sobreposto por um menu de navegação flutuante.
  - Permite que o usuário navegue até a página de detalhes de um produto ou agendamento de um serviço.

- **Página de Produtos**:
  - Listagem de produtos disponíveis com filtros por categoria, marca e preço.
  - Cada produto tem uma página de detalhes onde o usuário pode ver mais informações.

- **Página de Serviços**:
  - Listagem de serviços oferecidos pelo PetShop com filtros por categoria e preço.
  - Ao clicar em "Agendar", o usuário é redirecionado para uma página de agendamento com o serviço pré-selecionado.

- **Página de Detalhes do Produto**:
  - Exibe informações detalhadas de cada produto, incluindo nome, preço, categoria e descrição.

- **Página de Agendamento**:
  - Exibe os detalhes do serviço selecionado e permite que o usuário agende o serviço para seu pet.

- **Página de Cadastro de Usuário**:
  - Permite o cadastro de novos usuários no sistema, solicitando informações como nome, sobrenome, CPF, endereço, e-mail e senha.

- **Página de Cadastro de Pet**:
  - Permite o cadastro de pets no sistema, solicitando nome, tipo de pet (cachorro, gato, etc.), raça e temperamento.

- **Menu Flutuante**:
  - Menu de navegação fixo no topo da página, sobreposto ao banner.

- **Responsividade**:
  - O site é totalmente responsivo e utiliza **Bootstrap** para garantir uma boa experiência em dispositivos móveis.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **JavaScript**

## Estrutura do Projeto

```bash
petshop/
│
├── css/
│   └── style.css            # Estilos globais do site
|
├── images/
│   └──                      # Imagens do site
├── js/
│   ├── main.js              # Scripts globais (carregamento de menu, etc.)
│   ├── produtos.js          # Lógica de filtragem e renderização de produtos
│   ├── servicos.js          # Lógica de filtragem e renderização de serviços
│   ├── detalhe-produto.js   # Exibe os detalhes do produto selecionado
│   ├── agendamento.js       # Exibe os detalhes do serviço e gerencia o agendamento
│   ├── cadastro.js          # Lógica para o cadastro de usuários
│   ├── cadastro-pet.js      # Lógica para o cadastro de pets
│   └── index.js             # Exibe produtos e serviços na tela inicial
│
├── components/
│   ├── header.html          # Cabeçalho com menu de navegação
│   └── footer.html          # Rodapé do site
│
├── index.html               # Página inicial
├── produtos.html            # Página de listagem de produtos
├── servicos.html            # Página de listagem de serviços
├── detalhe-produto.html     # Página genérica de detalhes de produto
├── agendamento.html         # Página de agendamento de serviço
├── cadastro.html            # Página de cadastro de usuário
└── cadastro-pet.html        # Página de cadastro de pet
