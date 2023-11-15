<template>
    <div class="creation">
        <div class="programming-img">
            <img src="../../assets/programer.svg" alt="">
        </div>
        <div class="programming-txt">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, earum inventore magni laudantium pariatur
                sequi ut nobis ipsum explicabo reiciendis ipsam ea dignissimos porro nisi mollitia distinctio quisquam
                maiores vitae.</p>
        </div>
    </div>
</template>

<script>

export default {

}

</script>

<style lang="less" scoped>
.creation {
    // height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.programming-img {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 80%;
    }
}

.programming-txt {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

}

.dark {
    .programming-txt {
        p {
            color: #fff;
        }
    }
}

@media only screen and (max-width: 912px) {
    .creation {
        flex-direction: column;
    }

    .programming-img {
        height: 50%;
        width: 100%;

        img {
            width: 80%;
        }
    }

    .programming-txt {
        height: 50%;
        width: 100%;
        padding-top: 10%;
        display: flex;
        align-items: flex-start;
        justify-content: center;

        p {
            width: 80%;
        }

    }
}
</style>