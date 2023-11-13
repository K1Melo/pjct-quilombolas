<template>
    <div class="feedback">
        <div class="post">
            <form @submit.prevent="postMessage" method="post">
                <div class="input-name">
                    <input type="text" name="author" placeholder="Nome" v-model="posts.name" id="name"> <br>
                </div>
                <div class="input-feedback">
                    <input type="text" name="feedback" placeholder="Comentarios" v-model="posts.feedback" id="feedback"> <br>
                </div>
                <button type="submit" class="btn btn-ligth">Post</button>
            </form>
        </div>
        <div class="get">
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

.post {
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

input {
    border: none;
    background-color: transparent;
}
input:focus {
    outline: none;
}

.input-name,  .input-feedback{
    border-bottom: 1px white solid;
}

.get {
    width: 50%;
    height: 50%;
}

</style>