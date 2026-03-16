import './App.css'
import React, { Component } from 'react';
import Cabecalho from './Cabecalho';

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
            Crie um componente "Cabecalho" com state "corFavorita: vermelho". 
            Use <strong>componentDidMount</strong> com um <strong>setTimeout</strong> 
            de 1 segundo para alterar a cor para "amarelo".
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