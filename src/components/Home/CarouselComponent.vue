<!-- <template>
    <div class="sliderView">
        <i class="material-icons" id="left" @click="changeSlideLeft">arrow_back_ios</i>
        <div class="wrapper">
            <div class="slider snap-inline">
                <div class="slides">
                    <div class="img-slide ">
                        <img src="../../assets/slide1-img.svg" alt="">
                    </div>
                    <div class="text-slide">
                        <div class="title">
                            <h2>Como eles surgiram</h2>
                        </div>
                        <div class="text">
                            <p>Originados da resistência africana contra a escravidão, escravizados fugitivos de suas fazendas buscaram liberdade nas áreas isoladas, onde formaram comunidades independentes, se organizando de acordo com suas próprias tradições culturais e sociais.</p>
                        </div>
                    </div>

                </div>
                <div class="slides" style="margin-left: -15px;">
                    <div class="img-slide ">
                        <h2>Oi</h2>
                    </div>
                    <div class="text-slide">
                         
                    </div>                
                </div>
                <div class="slides" style="margin-left: -15px;">
                    <p>3</p>
                </div>
            </div>
        </div>
        <i class="material-icons" id="rigth" @click="changeSlideRigth">arrow_forward_ios</i>
        
    </div>
</template>

<script>

export default {
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
}
</script>

<style scoped lang="less">
.sliderView {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.wrapper {
    width: 100vw;
    height: 100vh;
}

#left {
    position: absolute;
    left: 0;
    margin-left: 10px;
}

#rigth {
    position: absolute;
    right: 0;
}

#left,
#rigth {
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

    .slides {
        overflow: hidden;
        min-width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000000;
        font-size: 2rem;
        transition: all 1.5s;
    }

    .two {
        transform: translate(-100%);
    }

    .three {
        transform: translate(-200.1%);
    }
}



.snap-inline {
    scroll-snap-type: inline mandatory;
}

.snap-inline>* {
    scroll-snap-align: start;
}

.img-slide {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-image: url(../../assets/background-test.jpeg);
    transition: all 1s ease-out;
    background-position: 0%;
    background-size: cover;
    width: 50%;
    height: 50vh;
    height: 100%;
    img {
        z-index: 1;

        width: 75vh;
        bottom: 0%;
    }
}

.dark .img-slide {
    background-image: url(../../assets/background-slide1.jpg);
}

.text-slide {
    width: 50%;
    padding-left: 5%;
    z-index: 1;

    .title {
        width: 90%;

        h2{
            color: #000;
            line-height: 1;
            font-size: 2em;
        }
        margin: 0;
        opacity: 0.8;
    }

    .text {
        margin-top: 2vh;

        width: 90%;
        font-size: 30px;
        font-weight: 100;
    }
}

.circulos
{   
    z-index: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow-y: hidden;
    overflow-x: hidden;
}

.circulo2
{
    position: relative;
    left: 0%;
    top: 2%;
    animation: moveUpDown 4s ease-in-out infinite;
}
.circulo3
{
    left: 40%;
    bottom: 0%;
    animation: moveUpDown 2.5s ease-in-out infinite;
    position: relative;

}

@keyframes moveUpDown {
    0%, 100% {
      transform: translateY(0); /* Inicial e estado final: sem deslocamento vertical */
    }
    50% {
      transform: translateY(-1.25rem); /* Estado intermediário: desloca 20px para cima */
    }
}

.dark {
    .text-slide {
        .title {
            h2{
                color: #ffffff;
            }
        }
        .text {
            color: #ffffff;
        }
    }
}

@media only screen and (max-width: 1025px) {
    
    
    .text-slide {
        padding: 5%;
        .title {
            margin-top: 1vh;
            h2{
                font-size: calc(2em + 2vw);
            }
        }

        .text {
            width: 100%;
            font-size: 22px;
            font-weight: 100;
        }
    }

    .circulos
    {   
        display: none;  

    }
}


@media only screen and (max-width: 1000px) {
    .slider {
        
        .slides{
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;

        }
    }

    .img-slide {

        display: flex;
        justify-content: center;
        width: 100%;
        height: 50vh;
    img {
        width: 40vh;
    }

    
    
    }
    .text-slide {
        height: 70vh;
        width: 90%;
        margin: auto;
        padding: 0;
        .title {
            color: #000;
            margin-top: 1vh;
            h2{
                font-size: calc(2em + 2vw);
            }
            opacity: 0.8;

            h2 {
                line-height: 1;
            }
        }

        .text {
            margin-top: 2vh;
            width: 100%;
            font-size: 22px;
            font-weight: 100;
        }
    }

    .circulos
    {   
        display: none;  

    }


}
@media only screen and (max-width: 800px) {
    .slider {
        overflow-x: auto;
    }

    .material-icons {
        display: none;
    }
}

@media screen and (max-width: 600px){ 
    .img-slide {
        height: 40vh;
        img {
            width: 30vh;
        }
    }
    .text-slide {
        
        height: 50%;
        .title {
            h2{
                font-size: calc(1.2em + 2vw);
            }
        }
    
        .text {
            font-size: 18px;
        }
    }
}

@media screen and (max-width: 300px){ 
    .img-slide {
        height: 40vh;
        img {
            width: 30vh;
        }
    }
    .text-slide {
        
        height: 50%;
        .title {
            h2{
                font-size: calc(1em + 2vw);
            }
        }
    
        .text {
            font-size: 14px;
        }
    }
}

</style> -->

<template>
    <div class="sliderView">
        <i class="material-icons" id="left" @click="changeSlideLeft">arrow_back_ios</i>
        <div class="wrapper">
            <div class="slider snap-inline">
                <div class="slides">
                    <div class="img-slide">
                        <img src="../../assets/slide1-img.svg" alt="">
                    </div>
                    <div class="text-slide">
                        <div class="title">
                            <h2>Teste</h2>
                        </div>
                        <div class="text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora inventore ipsum blanditiis quidem suscipit earum voluptate soluta repellat possimus, voluptates neque dicta commodi sed consectetur quisquam omnis fuga accusantium.</p>
                        </div>
                    </div>
                </div>
                <div class="slides" style="margin-left: -15px;">
                    <p>2</p>
                </div>
                <div class="slides" style="margin-left: -15px;">
                    <p>3</p>
                </div>
            </div>
        </div>
        <i class="material-icons" id="rigth" @click="changeSlideRigth">arrow_forward_ios</i>
    </div>
</template>

<script>

export default {
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
}
</script>

<style scoped lang="less">
.sliderView {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.wrapper {
    width: 100vw;
    height: 100vh;
}

#left {
    position: absolute;
    left: 0;
    margin-left: 10px;
}

#rigth {
    position: absolute;
    right: 0;
}

#left,
#rigth {
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

    .slides {
        overflow: hidden;
        min-width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000000;
        font-size: 2rem;
        transition: all 1.5s;
    }

    .two {
        transform: translate(-100%);
    }

    .three {
        transform: translate(-200.1%);
    }
}



.snap-inline {
    scroll-snap-type: inline mandatory;
}

.snap-inline>* {
    scroll-snap-align: start;
}

.img-slide {
    display: flex;
    justify-content: center;
    background-image: url(../../assets/background-slide1.jpg);
    background-position: 0%;
    background-size: cover;
    width: 50%;
    img {
        width: 75vh;
    }
}

.text-slide {
    width: 50%;
    padding-left: 5%;
    .title {
        // width: 50%;
        color: #000;

        // margin-bottom: 2vh;
        font-size: 2em;
        opacity: 0.8;
    }

    .text {
        width: 80%;
        height: 50%;
    }
}



@media only screen and (max-width: 1000px) {
    .slider {
        
        .slides{
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;

        }
    }

    .img-slide {

        display: flex;
        justify-content: center;
        width: 100%;
    img {
        width: 40vh;
    }
}

}
@media only screen and (max-width: 800px) {
    .slider {
        overflow-x: auto;
    }

    .material-icons {
        display: none;
    }
}
</style>
