<template>
    <div class="culture-premise">
        <div class="culture-map">
            <img src="../../assets/brasil.png" alt="">
        </div>
        <div class="culture-txt">
            <h2>Cultura</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quaerat pariatur neque architecto? Corrupti aliquid error iste omnis quisquam reiciendis voluptas veniam totam sunt illo? Est tenetur culpa quos ullam.</p>
        </div>
    </div>
</template>

<style lang="less" scoped>
.culture-premise {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.culture-map {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 50%;
    }
}

.culture-txt {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

</style>