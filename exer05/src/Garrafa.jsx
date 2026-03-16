import React, { Component } from 'react';

/**
 * Componente Garrafa (que atua como o cabeçalho neste exercício)
 * Foca no método de desmontagem (Unmounting).
 */
class Garrafa extends Component {
  
  /**
   * componentWillUnmount: Executado IMEDIATAMENTE antes do componente 
   * ser removido do DOM e destruído.
   */
  componentWillUnmount() {
    alert("O componente chamado Cabecalho está prestes a ser desmontado.");
  }

  render() {
    return (
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#e3f2fd', 
        border: '2px solid #2196f3',
        borderRadius: '8px',
        marginBottom: '15px' 
      }}>
        <h1 style={{ color: '#0d47a1', margin: 0 }}>Olá, React!</h1>
      </div>
    );
  }
}

export default Garrafa;