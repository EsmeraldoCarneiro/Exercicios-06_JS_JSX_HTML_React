import React, { Component } from 'react';

/**
 * Componente Cabecalho
 * Demonstra a inicialização de um estado simples no construtor.
 */
class Cabecalho extends Component {
  // O construtor é o método chamado no momento da criação do componente
  constructor(props) {
    // super(props) é obrigatório para que as funcionalidades do React funcionem
    super(props);

    // Inicialização do estado com a chave corFavorita
    this.state = {
      corFavorita: "vermelho"
    };
  }

  render() {
    // Acessando o valor do estado para exibição
    return (
      <header style={{ 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        borderBottom: '2px solid #ddd',
        borderRadius: '8px' 
      }}>
        {/* Renderização da mensagem conforme solicitado no enunciado */}
        <h2 style={{ color: '#333', margin: 0 }}>
          A minha cor favorita é <span style={{ color: 'red' }}>{this.state.corFavorita}</span>
        </h2>
      </header>
    );
  }
}

export default Cabecalho;