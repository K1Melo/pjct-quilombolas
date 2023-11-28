<template>
    <transition name="fade">
        <div class="preloader" id="preloader">
            <div class="logo">
                <img src="../assets/logo.png" alt="" width="110">
            </div>
            <p>Carregando</p>
            <div class="circles">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
        </div>
    </transition>
</template>

<script>

export default {

}

</script>

<style lang="less" scoped>
@keyframes scaleOut {

    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
    }

}

@keyframes scaleIn {

    0% {
        transform: scale(0.1);
    }

    100% {
        transform: scale(1);
    }

}

@keyframes load {
    0% {
        box-shadow: 0 0 0 0 #ffffff;
    }

    100% {
        box-shadow: 0 0 0 15px #ffffffb8;
    }

}


.preloader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #1c1c1c;
    z-index: 999;

    p {
        font-size: 1.5rem;
        color: white;
        font-weight: 600;
        letter-spacing: 2px;
        margin-top: .5rem;
        margin-bottom: 0;
    }


    .circles {
        display: flex;
        margin-top: 0;

        .circle {
            width: 1rem;
            height: 1rem;
            margin: 1rem;
            background-color: #ee7777;
            border-radius: 50%;
            animation: scaleIn 2s infinite;
            transform: scale(0);

            &:nth-child(1) {
                animation-delay: 0s;
            }

            &:nth-child(2) {
                animation-delay: .3s;
            }

            &:nth-child(3) {
                animation-delay: .6s;
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;

    .logo {
        
        animation-name: scaleOut;
        animation-duration: 1s;
    }

    p {
        animation-name: scaleOut;
        animation-duration: 1s;

    }
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>