import './App.css'
import React, { Component } from 'react';
import Cabecalho from './Cabecalho'; // Importação do componente de classe

class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        {/* SEÇÃO DO ENUNCIADO: Padrão Esmeraldo Junior */}
        <section style={{ 
          backgroundColor: '#0e0909', 
          padding: '10px', 
          marginBottom: '20px', 
          borderLeft: '5px solid #646cff',
          color: 'white' 
        }}>
          <strong>Enunciado do Exercício:</strong>
          <p>
            Crie um componente de classe chamado "Cabecalho" que contenha o método 
            "render" para exibir a mensagem: "Esse é o conteúdo do componente Cabeçalho."
          </p>
        </section>

        <hr />

        {/* SEÇÃO DA RESOLUÇÃO */}
        <section style={{ marginTop: '20px' }}>
          <h2 style={{ color: '#ffffff', fontSize: '1.1rem', textTransform: 'uppercase' }}>
            Resolução:
          </h2>
          
          {/* Chamada do componente de classe */}
          <Cabecalho />
        </section>

      </div>
    );
  }
}

export default App;