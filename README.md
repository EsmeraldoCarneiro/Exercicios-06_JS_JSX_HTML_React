# 🔄 Exercícios de ReactJS - Ciclo de Vida do Componente (Lifecycle)

Este repositório reúne uma série de atividades focadas no ciclo de vida de **Componentes de Classe**, explorando desde a montagem inicial até a destruição de elementos na memória da aplicação.

## 🛠️ Conceitos Dominados

* **Montagem (Mounting)**: Inicialização de estados e execução de processos pós-renderização.
* **Atualização (Updating)**: Monitoramento de mudanças e sincronização manual com o DOM.
* **Desmontagem (Unmounting)**: Gerenciamento de limpeza (*cleanup*) e encerramento de processos.
* **Comunicação entre Componentes**: Gerenciamento de componentes filhos através de estados do pai.

---

## 📋 Atividades Realizadas

### 1. Inicialização e Renderização Base

* **Componente**: `Cabecalho`.
* **Objetivo**: Demonstrar o uso básico do `render()` para exibir mensagens estáticas e o uso do `constructor` para definir estados iniciais.
* **Aprendizado**: Estrutura fundamental de uma classe herdando de `React.Component`.

### 2. Estados Iniciais com State

* **Componente**: `Cabecalho`.
* **Objetivo**: Definir o valor `corFavorita: vermelho` no estado e renderizá-lo dinamicamente.
* **Conceito**: Diferença entre dados estáticos e dados armazenados no `this.state`.

### 3. Alteração Automática (componentDidMount)

* **Componente**: `Cabecalho`.
* **Objetivo**: Utilizar o método de ciclo de vida para alterar a cor para "amarelo" após 1 segundo utilizando `setTimeout`.
* **Aprendizado**: Execução de lógica assíncrona assim que o componente é inserido no browser.

### 4. Sincronização de Estado e DOM (componentDidUpdate)

* **Componente**: `Cabecalho`.
* **Objetivo**: Detectar a atualização do componente e injetar texto em uma `div` externa (`id="meuDiv"`) utilizando JavaScript nativo.
* **Aprendizado**: Interação com elementos do DOM que dependem de uma atualização prévia do estado do React.

### 5. Destruição de Componente (componentWillUnmount)

* **Componentes**: `Recipiente` (Pai) e `Garrafa` (Filho).
* **Objetivo**: Criar uma lógica de remoção de componente. Antes do componente `Garrafa` sumir da tela, ele dispara um alerta de aviso.
* **Aprendizado**: Importância da limpeza de memória e encerramento de ciclos antes da desmontagem final.

---

## 💡 Observação sobre o Ambiente de Desenvolvimento

Durante os testes, o `React.StrictMode` (no `main.jsx`) foi desativado para evitar a execução dupla dos ciclos de vida (comportamento padrão de debug do React), permitindo a visualização precisa dos alertas de montagem e desmontagem conforme os requisitos das atividades.

---

## 🚀 Como Executar o Repositório

1. Clone o projeto: `git clone ...`
2. Instale as dependências: `npm install`
3. Execute o servidor de desenvolvimento: `npm run dev`

---

**Desenvolvido por:** Esmeraldo Junior 👨‍💻

*Analista e Desenvolvedor de Sistemas*

---

**Este README fecha com chave de ouro essa rodada de Lifecycle! Gostaria de começar uma nova série sobre Hooks (Componentes de Função modernos) ou tem mais alguma atividade de classe em mente?**
