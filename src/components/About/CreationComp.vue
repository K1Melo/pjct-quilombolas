<template>
    <div class="creation-comp">
        <div class="cell-phone">
            <canvas id="phoneMokup"></canvas>
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
}

.cell-phone {
    width: 50%;
    height: 100%;
    background-color: #1c1c1c;
}
</style>