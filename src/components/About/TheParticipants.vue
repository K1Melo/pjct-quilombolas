<template>
    <div class="participants">
        <div class="title-participants">
            <h2>Participantes</h2>
        </div>
        <div class="container-participants">
            <div class="participant"></div>
            <div class="participant"></div>
            <div class="participant"></div>
            <div class="participant"></div>
            <div class="participant"></div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
       
    }
}

</script>

<style lang="less" scoped>
.participants {
    width: 100%;
    // height: 100vh;
}

.title-participants {
    width: 100%;
    // height: 10%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.container-participants {
    display: flex;
    width: 100%;
    height: 70%;
    align-items: center;
    justify-content: space-evenly;
}

.participant {
    width: 15vw;
    height: 15vw;
    background-color: aqua;
    border-radius: 50%;
}

</style>