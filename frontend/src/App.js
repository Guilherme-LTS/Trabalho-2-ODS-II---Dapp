import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from './contracts/contract-info.js';
import './App.css';

function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
  const loadProposals = async () => {
    if (contract) {
      try {
        setIsLoading(true);
        
        const tempProposals = [];
        for (let i = 0; i < 6; i++) { // Assumindo 6 candidatos
           const proposal = await contract.proposals(i);
           tempProposals.push({ 
              name: proposal.name, 
              voteCount: proposal.voteCount.toString() 
           });
        }
        setProposals(tempProposals);
      } catch (error) {
         console.error("Erro ao carregar propostas: ", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // useEffect para carregar as propostas quando o contrato estiver pronto
  useEffect(() => {
    loadProposals();
  }, [contract]);

  const connectWallet = async () => {
    
    if (window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const address = await signer.getAddress();
          const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
          
          setAccount(address);
          setContract(contractInstance);
        } catch (err) {
          console.error(err);
        }
      } else {
        alert("Instale a MetaMask!");
      }
  };

  // NOVA FUNÇÃO para lidar com o voto
  const handleVote = async (proposalIndex) => {
    if (!contract) return;

    // Inicia o feedback visual para o usuário
    setIsLoading(true);
    try {
      // Chama a função 'vote' do nosso contrato inteligente
      const tx = await contract.vote(proposalIndex);
      // Espera a transação ser minerada e confirmada na blockchain
      await tx.wait();

      alert("Voto computado com sucesso!");
      // Recarrega os dados para mostrar o voto novo
      loadProposals();

    } catch (error) {
      console.error("Erro ao votar:", error);
      // Exibe a mensagem de erro que vem do 'require' do Solidity!
      alert(error.reason || "Ocorreu um erro ao processar seu voto.");
    } finally {
      // Termina o feedback visual
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sistema de Votação Descentralizado</h1>
        
        {account ? (
          <p>Conectado como: {account.substring(0, 6)}...{account.substring(account.length - 4)}</p>
        ) : (
          <button onClick={connectWallet} disabled={isLoading}>Conectar Carteira</button>
        )}

        <div className="proposals-section">
          <h2>Candidatos:</h2>
          {isLoading && <p>Processando transação, por favor aguarde...</p>}
          {proposals.map((proposal, index) => (
            <div key={index} className="proposal-card">
              <span>{proposal.name}: {proposal.voteCount} votos</span>
              {/* Adiciona o botão de voto e o desabilita durante o carregamento */}
              <button onClick={() => handleVote(index)} disabled={isLoading || !account}>
                Votar
              </button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;