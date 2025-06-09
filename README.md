# dApp de Votação na Blockchain Ethereum

Este é um projeto de uma Aplicação Descentralizada (dApp) para um sistema de votação, desenvolvido como parte da disciplina de Oficina de Desenvolvimento de Sistemas na Universidade do Estado do Amazonas (UEA).

A aplicação permite que usuários conectem suas carteiras Ethereum, visualizem candidatos e registrem um voto único e imutável na rede de testes Sepolia, demonstrando os princípios de transparência, segurança e descentralização da tecnologia blockchain.

## 🖼️ Demonstração

![Demonstração do dApp de Votação](https://i.imgur.com/link_da_sua_imagem_aqui.png)
*(Dica: Tire um print da sua aplicação funcionando, suba a imagem para um site como o [Imgur](https://imgur.com/upload) e cole o link aqui.)*

## ✨ Funcionalidades

* Conexão com carteiras Ethereum (via MetaMask).
* Visualização de propostas/candidatos em tempo real.
* Registro de voto único por carteira.
* Segurança contra votos duplicados e em propostas inválidas.
* Toda a lógica de votação é governada por um Smart Contract na blockchain, garantindo transparência e imutabilidade.

## 🛠️ Tecnologias Utilizadas

**Backend (Smart Contract):**
* [Solidity](https://soliditylang.org/)
* Rede de Testes Sepolia

**Frontend:**
* [React.js](https://reactjs.org/)
* [Ethers.js](https://ethers.io/)
* CSS

**Ferramentas de Desenvolvimento:**
* [Remix IDE](https://remix.ethereum.org/) (para deploy do contrato)
* Visual Studio Code
* Node.js
* Git & GitHub

**Hospedagem:**
* [Vercel](https://vercel.com/)

## 🚀 Executando o Projeto Localmente

Siga os passos abaixo para executar o dApp em seu ambiente local.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão 16 ou superior)
* Gerenciador de pacotes NPM (já vem com o Node.js)
* Navegador com a extensão [MetaMask](https://metamask.io/) instalada.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/](https://github.com/)[SEU_USUARIO_GITHUB]/[NOME_DO_SEU_REPOSITORIO].git
    ```

2.  **Navegue até a pasta do frontend:**
    ```bash
    cd [NOME_DO_SEU_REPOSITORIO]/frontend
    ```

3.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

4.  **Configure sua MetaMask:**
    * Abra a extensão e certifique-se de que a rede selecionada é a **Sepolia Testnet**.
    * Garanta que você tenha ETH de teste na Sepolia para pagar as taxas de gás da transação de voto. Você pode obter em um "faucet" como [sepoliafaucet.com](https://sepoliafaucet.com/).

5.  **Inicie a aplicação React:**
    ```bash
    npm start
    ```

6.  **Abra no navegador:**
    A aplicação abrirá automaticamente em `http://localhost:3000`. Agora você pode conectar sua carteira e interagir com o dApp.

## 📄 Contrato Inteligente

O contrato `Voting.sol` foi implantado na rede de testes Sepolia e é responsável por toda a lógica de negócio da aplicação.

* **Endereço do Contrato na Sepolia:**
    [`[COLE_AQUI_O_ENDERECO_DO_SEU_CONTRATO]`](https://sepolia.etherscan.io/address/[COLE_AQUI_O_ENDERECO_DO_SEU_CONTRATO])

* **Explorador de Blocos:**
    Você pode visualizar o contrato, suas transações e seu código-fonte (se verificado) diretamente no [Sepolia Etherscan](https://sepolia.etherscan.io/).

## 👨‍💻 Autor

Desenvolvido por **[Seu Nome ou Nome da Equipe]**.

* **Guilherme**
    * GitHub: [@seu-usuario-github](https://github.com/[SEU_USUARIO_GITHUB])
    * LinkedIn: [/in/seu-linkedin](https://linkedin.com/in/[SEU_LINKEDIN])

## 📝 Licença

Este projeto está sob a licença MIT.