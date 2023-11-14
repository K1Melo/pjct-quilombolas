<template>
    <div class="creation">
        <div class="timeline-imgs">

        </div>
        <div class="timeline-area">
            <div class="timeline-item">
                <h2>VUE JS</h2>
                <p>O Framework JavaScript Progressivo.</p>
            </div>
            <div class="timeline-item">
                <h2>HTML e CSS</h2>
                <p>Linguagens de marcação.</p>
            </div>
            <div class="timeline-item">
                <h2>JS</h2>
                <p>Linguagem de programação.</p>
            </div>
            <div class="timeline-item">
                <h2>Node.js</h2>
                <p>Interpretador (Backend).</p>
            </div>
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
    justify-content: space-evenly;
}

.timeline-area {
    border-left: 2px solid rgb(255, 255, 255);
    padding: 0 20px 0 30px;
}

.timeline-item {
    position: relative;

}
.timeline-item:before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: black;
    border: 3px solid #ffffff;
    position: absolute;
    top: 20px;
    left: -36px;
}

</style>