import React, { Component } from 'react';
import Garrafa from './Garrafa';

/**
 * Componente Recipiente
 * Gerencia a exibição condicional do componente Garrafa.
 */
class Recipiente extends Component {
  constructor(props) {
    super(props);
    
    // Estado inicial: o componente deve ser mostrado
    this.state = {
      mostrar: true
    };
  }

  // Arrow function para alterar o estado para false
  removerCabecalho = () => {
    this.setState({ mostrar: false });
  };

  render() {
    // Lógica condicional: se 'mostrar' for true, a variável recebe o componente
    let meuCabecalho;
    if (this.state.mostrar) {
      meuCabecalho = <Garrafa />;
    }

    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        {/* Renderiza a variável (que pode conter o componente ou ser nula) */}
        {meuCabecalho}

        <button 
          onClick={this.removerCabecalho}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ff1744',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Remover Cabeçalho
        </button>
      </div>
    );
  }
}

export default Recipiente;