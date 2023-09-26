<template>
    <div class="home">
        <i class="material-icons" id="left" @click="changeSlideLeft">arrow_back_ios</i>
        <div class="wrapper">
            <div class="slider">
                <div class="slides">1</div>
                <div class="slides">2</div>
                <div class="slides">3</div>
            </div>
        </div>
        <i class="material-icons" id="rigth" @click="changeSlideRigth">arrow_forward_ios</i>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    data(){
        return {
            index: 0
        }
    }, 
    methods: {
        changeSlideRigth() {
            const slider = document.querySelectorAll(".slides")
            if(this.index == 1) {
                slider.forEach((slide) =>{
                    slide.classList.add("three");
                    slide.classList.remove("two");
                    console.log(slide.classList);
                });
                this.index++;
            } else if(this.index == 0) {
                slider.forEach((slide) =>{
                    slide.classList.add("two");
                    slide.classList.remove("three");
                });
                this.index++
            } else {
                slider.forEach((slide) =>{
                    slide.classList.remove("three");
                    slide.classList.remove("two");
                });
                this.index = 0;
            }
        },
        
        changeSlideLeft() {
            const slider = document.querySelectorAll(".slides")
            if(this.index == 1) {
                slider.forEach((slide) =>{
                    slide.classList.remove("three");
                    slide.classList.remove("two");
                });
                this.index--;
            } else if(this.index == 0) {
                slider.forEach((slide) =>{
                    slide.classList.remove("two");
                    slide.classList.add("three");
                });
                this.index = 2
            } else {
                slider.forEach((slide) =>{
                    slide.classList.remove("three");
                    slide.classList.add("two");
                });
                this.index = 1;
            }
        },
        
    }
})

export default class HomeView extends Vue {
changeSlideRigth: ((payload: MouseEvent) => void) | undefined;
changeSlideLeft: ((payload: MouseEvent) => void) | undefined;
    
}
</script>

<style scoped lang="less">
    .home {
        display: none;
        justify-content: center;
        align-items: center;
        min-height: 100vh;

    } 

    .wrapper{
        width: 100vw;
        height: 100vh;
    }

    #left{
        position: absolute;
        left: 0;
    }

    #rigth{
        position: absolute;
        right: 0;
    }

    #left, #rigth{
        font-size: 50px;
        z-index: 200;
        cursor: pointer;
    }

    .slider {
        display: flex;
        grid-gap: 1rem;
        width: 100%;
        height: 100vh;
        overflow-x: hidden;
        scroll-snap-type: x;

        .slides {
            min-width: 100%;
            height: 100%;
            background-color: rgba(59, 59, 59, 0.541);
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000000;
            font-size: 2rem;
            transition: all 1.5s;
        }

        .two{
            transform: translate(-100.8%);
        }

        .three {
            transform: translate(-201.8%);
        }
    }
    .on{
        .slides{
            background-color: rgba(163, 163, 163, 0.541);
        }
    }

    @media only screen and (max-width: 800px) {
            .slider {
                overflow-x: auto;
            }

            .material-icons{
                display: none;
            }
    }
</style>
