import './App.css'
import React, { Component } from 'react';
import Recipiente from './Recipiente';

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
            Crie os componentes "Recipiente" e "Garrafa". O Recipiente deve alternar 
            o estado "mostrar". O Garrafa deve usar <strong>componentWillUnmount </strong> 
            para exibir um alerta antes de ser removido da tela.
          </p>
        </section>

        <hr />

        {/* SEÇÃO DA RESOLUÇÃO */}
        <section style={{ marginTop: '20px' }}>
          <h2 style={{ color: '#ffffff', fontSize: '1.1rem', textTransform: 'uppercase' }}>
            Resolução:
          </h2>
          
          <Recipiente />
        </section>

      </div>
    );
  }
}

export default App;