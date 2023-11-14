<template>
    <div class="feedback">
        <div class="post">
            <h2>Feedback</h2>
            <form @submit.prevent="postMessage" method="post">
                <div class="input-name">
                    <input type="text" name="author" placeholder="Nome" v-model="posts.name" id="name"> <br>
                </div>
                <div class="input-feedback">
                    <input type="text" name="feedback" placeholder="Comentarios" v-model="posts.feedback" id="feedback">
                    <br>
                </div>
                <button type="submit" class="btn btn-ligth">Post</button>
            </form>
        </div>
        <div class="get">
            <button class="btn btn-ligth" @click="getMessage">Get</button>

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
            // console.log(JSON.stringify(this.posts))
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.posts)
            };

            fetch('https://quilombolas-backend.onrender.com/', options)
            alert("Obrigado pelo comentario " + this.posts.name)
        },
        getMessage() {
            const getClass = document.querySelector(".get");
            fetch('https://quilombolas-backend.onrender.com/')
                .then((res) => res.json())
                .then((data) => 
                    data.forEach((e, index) => {
                        getClass.innerHTML = "<p>" + JSON.stringify(data[index]["name"]) + "</p>"
                        console.log(JSON.stringify(data[index]["name"]), index)
                    })

                )

        }
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
    height: 50%;
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
    height: 100%;
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
    height: 50%;
}
</style>