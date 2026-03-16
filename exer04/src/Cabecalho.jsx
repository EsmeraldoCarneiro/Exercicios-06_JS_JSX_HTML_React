import React, { Component } from 'react';

/**
 * Componente Cabecalho
 * Demonstra a transição de estados e a captura da atualização pelo componentDidUpdate.
 */
class Cabecalho extends Component {
  constructor(props) {
    super(props);

    // Estado inicial
    this.state = {
      corFavorita: "vermelho"
    };
  }

  // Executado após o componente ser montado
  componentDidMount() {
    const configurarTempoLimite = () => {
      // Esta alteração de estado disparará o método componentDidUpdate
      this.setState({ corFavorita: "amarelo" });
    };

    setTimeout(configurarTempoLimite, 1000);
  }

  /**
   * componentDidUpdate: É chamado imediatamente após a atualização ocorrer.
   * Aqui, manipulamos o elemento HTML "meuDiv" diretamente.
   */
  componentDidUpdate() {
    const elementoDiv = document.getElementById("meuDiv");
    if (elementoDiv) {
      elementoDiv.innerHTML = `A cor favorita atualizada é ${this.state.corFavorita}`;
    }
  }

  render() {
    const { corFavorita } = this.state;

    return (
      <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
        {/* Renderização inicial via h1 */}
        <h1 style={{ color: corFavorita === 'vermelho' ? 'red' : '#d4af37' }}>
          A minha cor favorita é {corFavorita}
        </h1>

        {/* Div que será populada pelo método componentDidUpdate */}
        <div 
          id="meuDiv" 
          style={{ 
            marginTop: '20px', 
            padding: '10px', 
            backgroundColor: '#f0f0f0',
            fontWeight: 'bold' 
          }}
        >
          {/* Este conteúdo será substituído pelo componentDidUpdate após 1 segundo */}
          Aguardando atualização...
        </div>
      </div>
    );
  }
}

export default Cabecalho;