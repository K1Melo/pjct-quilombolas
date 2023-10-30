<template>
    <div class="participants">
        <div class="participants-container">
            <div class="tools">

            </div>
            <div class="participants-project">
                <div class="pjct-logo">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <div class="pjct-participants"></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.participants {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.participants-container {
    width: 60%;
    height: 80%;
    background: rgba(255, 255, 255, 0.687);
    box-shadow: 0 8px 32px 0 rgba(147, 147, 147, 0.37);

    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    overflow: hidden;

    display: flex;
    align-items: center;
}

.tools {
    width: 70%;
    height: 100%;
}

.participants-project {
    width: 30%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.662);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.pjct-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 30%;
    }
}   

@media only screen and (max-width: 820px) {
    .participants-container {
        width: 80%;
        height: 80%
    }
}


@media only screen and (max-width: 650px) {
    .participants-container {
        width: 80%;
        height: 80%
    }
}

@media only screen and (max-width: 300px) {
    .participants-container {
        width: 80%;
        height: 80%
    }
}


</style>