<template>
    <div class="creation-comp">
        <div class="cell-phone">
            <canvas id="phoneMokup"></canvas>
        </div>
        <div class="text-creation">
            <h2>Teste</h2>
        </div>
    </div>
</template>

<script>
import { Application } from '@splinetool/runtime';

export default {
    mounted() {

        const canvas = document.getElementById('phoneMokup');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/5ZeLWfjcnXbITjyx/scene.splinecode');

    }
}

</script>

<style scoped>
.creation-comp {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cell-phone {
    width: 50%;
    height: 100%;
    background-color: #1c1c1c;
}

.text-creation {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 1000px) {

    .creation-comp {
        flex-direction: column;
    }

    .cell-phone {
        width: 100%;
        height: 30%;
    }

    .text-creation {
        width: 100%;
        height: 70%;

    }
}
</style>