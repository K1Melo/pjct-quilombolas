<template>
    <button id="Btn" @click="goTop">
        <svg height="1.2em" class="arrow" viewBox="0 0 512 512">
            <path
                d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z">
            </path>
        </svg>
    </button>
</template>

<script>

export default {
    methods: {
        goTop() {
            window.scroll({ top: 0, behavior: "smooth" })
        }
    }
}

</script>

<style scoped>
#Btn {
    width: 45px;
    height: 45px;
    background: #e6e4e4;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    position: fixed;
    border: none;
    right: 30px;
    bottom: 30px;
}
</style>