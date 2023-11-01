<template>
    <div class="feedback">
        <form @submit.prevent="postMessage" method="post">
            <input type="text" name="author" placeholder="nome" v-model="posts.name" id="name"> <br>
            <input type="text" name="feedback" placeholder="comentarios" v-model="posts.feedback" id="feedback"> <br>
            <button type="submit" class="btn btn-ligth">Post</button>
        </form>
        <div class="teste">
            {{ posts.name }}
            {{ posts.feedback }}
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
            console.log(JSON.stringify(this.posts))
            
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.posts)
            };

            fetch('https://quilombolas-backend.onrender.com/', options)
        }
    }
}

</script>

<style scoped>
.feedback {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-get {
    width: 50%;
    height: 100%;
    background-color: rgb(87, 100, 100);
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-post {
    width: 50%;
    height: 100%;
    background-color: rgb(97, 106, 106);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
}

.your-post {
    position: absolute;
    top: 15%;
    width: 50%;
    height: 30%;
    padding: 2%;
    border-radius: 50px;
    background-color: aquamarine;
}
</style>