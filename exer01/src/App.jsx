import './App.css'
import React, { Component } from 'react';
import Cabecalho from './Cabecalho'; // Importando o novo componente

class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        {/* SEÇÃO DO ENUNCIADO: Identidade visual das atividades */}
        <section style={{ 
          backgroundColor: '#0e0909', 
          padding: '10px', 
          marginBottom: '20px', 
          borderLeft: '5px solid #646cff',
          color: 'white' 
        }}>
          <strong>Enunciado do Exercício:</strong>
          <p>
            Crie um componente de classe "Cabecalho" com state inicial 
            <strong> corFavorita: vermelho</strong> no constructor e renderize a mensagem.
          </p>
        </section>

        <hr />

        {/* SEÇÃO DA RESOLUÇÃO */}
        <section style={{ marginTop: '20px' }}>
          <h2 style={{ color: '#ffffff', fontSize: '1.1rem', textTransform: 'uppercase' }}>
            Resolução:
          </h2>
          
          {/* Renderizando o componente que contém o estado interno */}
          <Cabecalho />
        </section>

      </div>
    );
  }
}

export default App;