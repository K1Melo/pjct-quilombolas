<template>
    <div class="feedback">
        <div class="post">
            <h2>Feedback</h2>
            <form method="post" @submit.prevent="postMessage" id="postMsg">
                <div class="input-name">
                    <input type="text" name="author" placeholder="Nome" v-model="posts.name" id="name" required
                        maxlength="20"> <br>
                </div>
                <div class="input-feedback">
                    <input type="text" name="feedback" placeholder="Comentarios" v-model="posts.feedback" id="feedback"
                        required maxlength="50">
                    <br>
                </div>
                <button type="submit" class="btn btn-ligth">Enviar</button>
            </form>
        </div>
        <div class="get"></div>
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
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.posts)
            };

            fetch('https://quilombolas-backend.onrender.com/', options)
            alert("Obrigado pelo comentario " + this.posts.name)
            document.getElementById("postMsg").reset();
        },
    },
    mounted() {
        const getClass = document.querySelector(".get");
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
    height: 50%;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.input-name,
.input-feedback {
    width: 150%;
    border-bottom: 1px white solid;

    input {
        font-weight: 400;
        color: white;
    }
}



.get {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

    }

    .get {
        height: fit-content;
        padding-bottom: 15%;
        // width: 100%;

    }
}

@media only screen and (max-width: 600px) {
    .get {

        width: 100%;

    }
}
</style>