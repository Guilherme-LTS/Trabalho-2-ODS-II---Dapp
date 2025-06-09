import { useState } from 'react';
import { ethers } from 'ethers'; // A importação continua a mesma
import { contractAddress, contractABI } from './contracts/contract-info.js';
import './App.css';

function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // CORREÇÃO: Usamos ethers.BrowserProvider para a v6
        const provider = new ethers.BrowserProvider(window.ethereum);
        
        // Pede ao usuário para conectar a carteira
        const signer = await provider.getSigner();
        
        // Pega o endereço da carteira conectada
        const address = await signer.getAddress();
        
        setAccount(address);
        setProvider(provider);

        // A criação da instância do contrato continua igual
        const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
        setContract(contractInstance);

      } catch (err) {
        console.error(err);
        alert("Ocorreu um erro ao conectar a carteira.");
      }
    } else {
      alert("Por favor, instale a MetaMask para usar este dApp!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sistema de Votação Descentralizado</h1>
        
        {account ? (
          <p>Conectado como: {account}</p>
        ) : (
          <button onClick={connectWallet}>Conectar Carteira</button>
        )}
      </header>
    </div>
  );
}

export default App;