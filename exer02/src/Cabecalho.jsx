import React, { Component } from 'react';

/**
 * Componente Cabecalho
 * Um componente de classe básico focado na renderização de conteúdo estático.
 */
class Cabecalho extends Component {
  // Em componentes de classe, o método render() é o único obrigatório
  render() {
    return (
      // Retornamos o JSX que será transformado em HTML pelo browser
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f1f1f1', 
        border: '1px solid #ccc',
        borderRadius: '5px',
        color: '#333'
      }}>
        <p>Esse é o conteúdo do componente Cabeçalho.</p>
      </div>
    );
  }
}

// Exportação para que possamos utilizá-lo no App.jsx
export default Cabecalho;