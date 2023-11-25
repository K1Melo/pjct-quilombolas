## VUEX

```

// Importa a função necessária do Vuex
import { createStore } from 'vuex'

// Cria e exporta uma instância do Vuex store
export default createStore({
  // Estado da aplicação
  state: {
    // Array de objetos representando estados brasileiros com algumas informações
    estados: [
      // Exemplo de um estado
      {
        acronym: 'BA',
        name: 'Bahia',
        population: 397.059,
        porcentage: 30
      },
      // ... (restante dos estados)
    ]
  },
})

```

- Vuex: Vuex é um gerenciador de estado para Vue.js, que é utilizado para centralizar e gerenciar o estado da aplicação.

- createStore: Função do Vuex utilizada para criar uma instância do Vuex store.

- state: O estado da aplicação, onde você armazena os dados que a aplicação precisa gerenciar.