import './App.css'
import React, { Component } from 'react';
import Cabecalho from './Cabecalho';

class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        {/* SEÇÃO DO ENUNCIADO: Padrão das atividades */}
        <section style={{ 
          backgroundColor: '#0e0909', 
          padding: '10px', 
          marginBottom: '20px', 
          borderLeft: '5px solid #646cff',
          color: 'white' 
        }}>
          <strong>Enunciado do Exercício:</strong>
          <p>
            Crie um componente "Cabecalho" com state inicial "vermelho". 
            Use <strong>componentDidMount</strong> para mudar para "amarelo" após 1s. 
            Use <strong>componentDidUpdate</strong> para atualizar o conteúdo de um div (id="meuDiv").
          </p>
        </section>

        <hr />

        {/* SEÇÃO DA RESOLUÇÃO */}
        <section style={{ marginTop: '20px' }}>
          <h2 style={{ color: '#ffffff', fontSize: '1.1rem', textTransform: 'uppercase' }}>
            Resolução:
          </h2>
          
          <Cabecalho />
        </section>

      </div>
    );
  }
}

export default App;