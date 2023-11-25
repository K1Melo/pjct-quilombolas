## Vue Router

```
// Importa as funções necessárias do Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// Importa os componentes de visualização para cada rota
import HomeView from '../views/HomeView.vue'

// Define as rotas da aplicação
const routes = [
  {
    path: '/',          // Caminho da rota
    name: 'home',       // Nome da rota (opcional)
    component: HomeView // Componente associado à rota
  },
  {
    path: '/lugares',
    name: 'lugares',
    component: () => import('../views/LocationsView.vue') // Lazy loading do componente
  },
  {
    path: '/producao',
    name: 'producao',
    component: () => import('../views/ProductionView.vue')
  },
  {
    path: '/cultura',
    name: 'cultura',
    component: () => import('../views/CultureView.vue')
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/AboutUs.vue')
  },
]

// Cria uma instância do Vue Router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Modo de histórico baseado em HTML5
  routes // Passa as rotas para o router
})

// Exporta a instância do Vue Router para uso na aplicação
export default router
```

- Vue Router: Vue Router é a biblioteca oficial de roteamento para o Vue.js. Ele permite a navegação entre diferentes partes da sua aplicação Vue.

- createRouter e createWebHistory: Funções para criar uma instância do Vue Router. createWebHistory é utilizado para definir o modo de histórico baseado em HTML5.

- Rotas: Cada rota é um objeto que possui um path (caminho da rota), um name (nome da rota, opcional), e um component (componente associado à rota). O componente pode ser carregado dinamicamente usando a função import para Lazy Loading, o que é uma prática recomendada para melhorar o desempenho.

- router: A instância do Vue Router é criada com as opções definidas e, em seguida, exportada para ser utilizada na aplicação Vue.