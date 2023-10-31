<template>
    <div class="feedback">
        <div class="container-get">
            <h2>{{ formData.name }}</h2>
        </div>
        <div class="container-post">
            <div class="your-post">
                <h2 for="name">{{ formData.name }}</h2>
                <p>{{ formData.feedback }} </p>
            </div>
            <form @submit.prevent="createPost">
                <div class="name">
                    <input type="text" id="name" placeholder="Seu nome:" v-model="formData.name"> <br>
                    <input type="text" id="name" placeholder="Seu feedback:" v-model="formData.feedback">
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            formData: {
                name: '',
                feedback: '',
            }
        }
    },

    methods: {
        createPost() {
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