<template>
    <div class="feedback">
        <div class="post">
            <form method="post" @submit.prevent="postMessage" id="postMsg">
                <h2>Feedback</h2>
                <div class="input-name">
                    <input type="text" name="author" placeholder="Nome" v-model="posts.name" id="name" required
                        maxlength="20"> <br>
                </div>
                <div class="input-feedback">
                    <input type="text" name="feedback" placeholder="Comentarios" v-model="posts.feedback" id="feedback"
                        required maxlength="50">
                    <br>
                </div>
                <button type="submit" class="btn">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor"
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <span>Enviar</span>
                </button>
            </form>
        </div>
        <div class="get">
            <div class="juntar">
                <h2>Comentários</h2>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            posts: {
                name: '',
                feedback: ''
            }
        }
    },
    methods: {
        postMessage() {
            const submitPost = async () => {
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.posts),
                };

                try {
                    const response = await fetch('https://quilombolas-backend.onrender.com/', options);

                    if (response.ok) {
                        alert('Obrigado pelo comentário ' + this.posts.name);
                        document.getElementById('postMsg').reset();
                        window.location.reload();
                    } else {
                        console.error('Erro ao enviar o post:', response.statusText);
                    }
                } catch (error) {
                    console.error('Erro durante a requisição:', error);
                }
            };

            submitPost();
        },
    },
    mounted() {
        const getClass = document.querySelector(".juntar");
        fetch('https://quilombolas-backend.onrender.com/')
            .then((res) => res.json())
            .then((data) => {
                data.reverse().forEach((element, index) => {
                    if (index < 4) {
                        var div = getClass.appendChild(document.createElement('div'));
                        var htres = div.appendChild(document.createElement('h3'));
                        var p = div.appendChild(document.createElement('p'));

                        p.appendChild(document.createTextNode(element.feedback))
                        htres.appendChild(document.createTextNode(element.name + ":"))
                    }
                });

            }
            )
    }
}

</script>

<style lang="less" scoped>
.feedback {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.post {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

input {
    border: none;
    background-color: transparent;
    width: 100%;
}

input:focus {
    outline: none;
}

form {
    height: 70%;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

h2 {
    color: rgb(0, 0, 0);
}

.input-name,
.input-feedback {
    width: 150%;
    border-bottom: 1px rgb(0, 0, 0) solid;

    input {
        font-weight: 400;
        color: rgb(0, 0, 0);
    }

    input::placeholder {
        color: rgba(0, 0, 0, 0.726);
    }
}

.dark {
    h2 {
        color: rgb(255, 255, 255);
    }

    .input-name,
    .input-feedback {
        border-bottom: 1px rgb(255, 255, 255) solid;

        input {
            color: rgb(255, 255, 255);
        }

        input::placeholder {
            color: rgba(255, 255, 255, 0.284);
        }
    }
}



.get {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;



    .juntar {
        padding-top: 5%;
        padding-bottom: 5%;
        padding-left: 2%;
        border-radius: 1%;
        height: 60%;
        border-top-right-radius: 20%;
        background-color: #2E0F0F;

        h2 {
            color: #ffffff;
        }
    }
}

button {
    font-family: inherit;
    font-size: 20px;
    background-color: rgb(21, 21, 21);
    color: rgb(255, 255, 255);
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
}

.dark {
    button {
        background-color: rgb(244, 244, 244);
        color: rgb(0, 0, 0);
    }
}

button span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
}

button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
    animation: fly-1 0.8s ease-in-out infinite alternate;
}

button:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

button:hover span {
    transform: translateX(5em);
}

button:active {
    border: none;
    transform: scale(0.95);

}

button:active .svg-wrapper {
    animation: fly-2 0.5s ease-in-out infinite alternate;
}

@keyframes fly-1 {
    from {
        transform: translateY(0.2em);
    }

    to {
        transform: translateY(-0.2em);
    }
}

@keyframes fly-2 {
    100% {
        transform: translateX(1em);
    }

    0% {
        transform: translateX(0em);
    }
}


@media only screen and (max-width: 1000px) {
    .feedback {
        flex-direction: column;
        height: fit-content;
    }

    .post {
        padding-top: 15%;
        height: 70vh;
        justify-content: start;

        form {
            height: 100%;
        }
    }

    .get {
        padding-bottom: 15%;
        width: 100%;
        height: 50%;

        .juntar {
            padding-top: 10%;
            padding-left: 5%;
        }
    }
}

@media only screen and (max-width: 600px) {
    .get {

        width: 100%;
        height: 55%;

    }
}
</style>