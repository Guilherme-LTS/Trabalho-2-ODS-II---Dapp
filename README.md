# dApp de Votação na Blockchain Ethereum

Este é um projeto de uma Aplicação Descentralizada (dApp) para um sistema de votação, desenvolvido como parte da disciplina de Oficina de Desenvolvimento de Sistemas na Universidade do Estado do Amazonas (UEA).

A aplicação permite que usuários conectem suas carteiras Ethereum, visualizem candidatos e registrem um voto único e imutável na rede de testes Sepolia, demonstrando os princípios de transparência, segurança e descentralização da tecnologia blockchain.

## ✨ Funcionalidades

* Conexão com carteiras Ethereum (via MetaMask).
* Visualização de propostas/candidatos em tempo real.
* Registro de voto único por carteira.
* Segurança contra votos duplicados e em propostas inválidas.
* Toda a lógica de votação é governada por um Smart Contract na blockchain, garantindo transparência e imutabilidade.

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
    git clone [https://github.com/](https://github.com/)Guilherme-LTS/Trabalho-2-ODS-II---Dapp.git
    ```

2.  **Navegue até a pasta do frontend:**
    ```bash
    cd Trabalho-2-ODS-II---Dapp/frontend
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

6.  **Abra o Remix IDE:**
    * Abra o Remix IDE, procure pelo arquivo **Voting.sol**, clique e compile ele.
    * Após o ícone ✅ aparecer sobre ele, vá para o **"Deploy & run transactions"**

7.  **No Deploy & run transactions:**
    * Em "_proposalNames:" você insere a lista de canditados. Exemplo: 
    ```bash
    ["Jucimar","Bolsonaro","Lula","Marcela","Voto em Branco","Voto Nulo"]
    ``` 
    e aperte em "Deploy" ou "Transact"
    * Clicando no botão, o pop-up do MetaMask abrira para confirmar a transação e o contrato será criado

8.  **Em Deployed Contracts**
    Clique no triangulo para mostrar mais, e copie o adress do contrato no ícone "📄"

9.  **No seu editor de codigo:**
    Vá para **frontend\src\contracts\contract-info.js**, ou onde estiver seu **contract-info.js**
    E cole o adress do contrato em: **export const contractAddress = "COLE_AQUI_O_ENDERECO_DO_SEU_CONTRATO";**


## 📄 Contrato Inteligente

O contrato `Voting.sol` foi implantado na rede de testes Sepolia e é responsável por toda a lógica de negócio da aplicação.

* **Endereço do Contrato na Sepolia:**
    [`0x246F0772F14688fe73d2acd0cBAd9229109d1cF2`](0x246F0772F14688fe73d2acd0cBAd9229109d1cF2)

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




<!--## 👨‍💻 Autor

Desenvolvido por:

* **Guilherme Lucas**-->

## 📝 Licença

Este projeto está sob a licença MIT.
