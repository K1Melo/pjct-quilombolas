# Feedback Docs

# Front 

## Template 

```
<div class="feedback">
    <!-- Seção de postagem -->
    <div class="post">
        <form method="post" @submit.prevent="postMessage" id="postMsg">
            <h2>Feedback</h2>
            <!-- Input para o nome do autor -->
            <div class="input-name">
                <input type="text" name="author" placeholder="Nome" v-model="posts.name" id="name" required maxlength="20">
            </div>
            <!-- Input para o comentário -->
            <div class="input-feedback">
                <input type="text" name="feedback" placeholder="Comentários" v-model="posts.feedback" id="feedback" required maxlength="50">
            </div>
            <!-- Botão de envio -->
            <button type="submit" class="btn">
                <!-- Ícone SVG animado -->
                <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                    </div>
                </div>
                <span>Enviar</span>
            </button>
        </form>
    </div>
    <!-- Seção de exibição de feedbacks -->
    <div class="get">
        <div class="juntar">
            <h2>Comentários</h2>
            <!-- Espaço onde os feedbacks são exibidos -->
        </div>
    </div>
</div>

```

## Script

- Dados (data): O objeto posts contém propriedades name e feedback vinculadas aos campos de entrada.

```
data() {
    return {
        posts: {
            name: '',
            feedback: ''
        }
    };
},

```

### Métodos (methods): O método postMessage é chamado quando o formulário é enviado. Ele envia uma solicitação POST com os dados do usuário para a API.
```

// Função assíncrona para enviar um post para a API
const submitPost = async () => {
    // Configuração das opções para a solicitação POST
    const options = {
        method: 'POST', // Método HTTP
        headers: {
            'Content-Type': 'application/json', // Tipo de conteúdo na requisição
        },
        body: JSON.stringify(this.posts), // Corpo da requisição convertido para JSON
    };

    try {
        // Envia a requisição para a URL da API com as opções configuradas
        const response = await fetch('https://quilombolas-backend.onrender.com/', options);

        // Verifica se a resposta foi bem-sucedida (código de status 2xx)
        if (response.ok) {
            // Exibe um alerta agradecendo pelo comentário
            alert('Obrigado pelo comentário ' + this.posts.name);
            // Reseta o formulário com id 'postMsg'
            document.getElementById('postMsg').reset();
            // Recarrega a página
            window.location.reload();
        } else {
            // Se a resposta não for bem-sucedida, exibe um erro no console
            console.error('Erro ao enviar o post:', response.statusText);
        }
    } catch (error) {
        // Se ocorrer um erro durante a requisição, exibe-o no console
        console.error('Erro durante a requisição:', error);
    }
};

// Chama a função submitPost
submitPost();

```

- submitPost: Função assíncrona que realiza uma solicitação POST para a API.

Configuração de Opções:

- method: Método HTTP (POST).
- headers: Cabeçalhos da requisição, especificamente o tipo de conteúdo como JSON.
- body: Corpo da requisição, convertido para JSON usando JSON.stringify(this.posts).
Tratamento de Erros:

1. Utiliza try e catch para lidar com erros de requisição.
2. Verifica se a resposta é bem-sucedida (response.ok) e realiza ações correspondentes.
Execução: A função submitPost é chamada imediatamente após ser definida, o que resulta na execução imediata do código.

### Hooks de Ciclo de Vida (mounted): No hook mounted, são carregados os feedbacks existentes da API e exibidos no máximo os últimos 4.

```
// Seleciona o primeiro elemento da classe CSS 'juntar' no documento HTML
const getClass = document.querySelector(".juntar");

// Realiza uma solicitação FETCH para a URL 'https://quilombolas-backend.onrender.com/'
fetch('https://quilombolas-backend.onrender.com/')
    // O método 'then' é usado para manipular a resposta da solicitação FETCH
    .then((res) => res.json())
    .then((data) => {
        // O método 'reverse' inverte a ordem dos elementos no array 'data'
        data.reverse().forEach((element, index) => {
            // Para os primeiros 4 elementos do array 'data'
            if (index < 4) {
                // Cria um novo elemento 'div' e o anexa ao elemento com a classe 'juntar'
                var div = getClass.appendChild(document.createElement('div'));
                // Cria um novo elemento 'h3' e o anexa ao elemento 'div'
                var htres = div.appendChild(document.createElement('h3'));
                // Cria um novo elemento 'p' e o anexa ao elemento 'div'
                var p = div.appendChild(document.createElement('p'));

                // Adiciona um nó de texto com o conteúdo do feedback ao elemento 'p'
                p.appendChild(document.createTextNode(element.feedback))
                // Adiciona um nó de texto com o conteúdo do nome seguido por ':' ao elemento 'htres'
                htres.appendChild(document.createTextNode(element.name + ":"))
            }
        });
    });

```

document.querySelector(".juntar"):

- Seleciona o primeiro elemento no documento HTML que possui a classe CSS 'juntar'.

fetch('https://quilombolas-backend.onrender.com/'):

- Realiza uma solicitação FETCH para a URL 'https://quilombolas-backend.onrender.com/'.

.then((res) => res.json()):

1. O método 'then' é usado para manipular a resposta da solicitação FETCH.
2. Converte a resposta para o formato JSON.

.then((data) => { ... }):

- Outro bloco 'then' para manipular os dados JSON obtidos da resposta.

data.reverse().forEach((element, index) => { ... }):

1. Inverte a ordem dos elementos no array 'data'.
2. Itera sobre cada elemento do array.

if (index < 4) { ... }:

- Verifica se o índice é menor que 4.

var div = getClass.appendChild(document.createElement('div'));:

- Cria um novo elemento 'div' e o anexa ao elemento com a classe 'juntar'.

var htres = div.appendChild(document.createElement('h3'));:

- Cria um novo elemento 'h3' e o anexa ao elemento 'div'.

var p = div.appendChild(document.createElement('p'));:

- Cria um novo elemento 'p' e o anexa ao elemento 'div'.

p.appendChild(document.createTextNode(element.feedback)):

- Adiciona um nó de texto ao elemento 'p' com o conteúdo do feedback do elemento atual.
htres.appendChild(document.createTextNode(element.name + ":")):

- Adiciona um nó de texto ao elemento 'htres' com o conteúdo do nome seguido por ':' do elemento atual.

# Back

```
// Importa os módulos necessários
const express = require('express');
const mongoose = require('mongoose');

// Cria uma instância do aplicativo Express
const app = express();

// Configuração do aplicativo
app.use(express.static('public')); // Serve arquivos estáticos na pasta 'public'
app.use(express.json({ limit: '100kb' })); // Aceita dados JSON com limite de 100KB

// Configuração do CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Porta em que o servidor irá escutar
const port = ...;

// Modelo do Mongoose para a coleção 'UserMessage'
const Message = mongoose.model('UserMessage', {
    name: String,
    feedback: String,
});

// Rota GET para obter todas as mensagens
app.get('/', async (req, res) => {
    const messages = await Message.find();
    return res.send(messages);
});

// Rota POST para adicionar uma nova mensagem
app.post('/', async (req, res) => {
    const message = new Message({
        name: req.body.name,
        feedback: req.body.feedback,
    });

    await message.save();
    return res.send(message);
});

// Rota PUT para atualizar uma mensagem por ID
app.put('/:id', async (req, res) => {
    const message = await Message.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            feedback: req.body.feedback,
        },
        {
            new: true,
        }
    );

    return res.send(message);
});

// Rota DELETE para excluir uma mensagem por ID
app.delete('/:id', async (req, res) => {
    const message = await Message.findByIdAndDelete(req.params.id);
    return res.send(message);
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    // Conecta-se ao banco de dados MongoDB usando a URL fornecida
    mongoose.connect('...');
    console.log(`Example app listening on port ${port}`);
});
```

- express e mongoose são módulos Node.js para simplificar o desenvolvimento web e a interação com o MongoDB, respectivamente.
- express.static('public'): Configura o Express para servir arquivos estáticos da pasta 'public'.
- express.json({ limit: '100kb' }): Configura o Express para aceitar dados JSON com um limite de 100KB.
- Configuração CORS (Access-Control-Allow-Origin): Permite solicitações de qualquer origem para acessar o recurso.
- const Message = mongoose.model('UserMessage', { ... });: Define um modelo Mongoose chamado 'UserMessage' com campos 'name' e 'feedback'.
- Rotas HTTP (app.get, app.post, app.put, app.delete): Define rotas para manipular operações CRUD no banco de dados MongoDB.
- Conexão ao banco de dados MongoDB (mongoose.connect(...)): Conecta-se ao banco de dados MongoDB usando a URL fornecida.
- app.listen(port, () => { ... });: Inicia o servidor Express na porta especificada.