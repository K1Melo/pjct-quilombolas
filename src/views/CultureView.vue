<template>
    <div class="culture" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1500">
        <CultureComp></CultureComp>
        <SocialMovements></SocialMovements>
        <CulinaryComp></CulinaryComp>
        <AlimentsCulinary></AlimentsCulinary>
        <DancesApresentation></DancesApresentation>
        <DancesComp></DancesComp>
        <ReligionComp></ReligionComp>
    </div>
</template>

<script>
import CultureComp from "../components/Culture/CultureComp.vue"
import SocialMovements from "@/components/Culture/SocialMovements.vue";
import CulinaryComp from "@/components/Culture/CulinaryComp.vue";
import AlimentsCulinary from "@/components/Culture/AlimentsCulinary.vue";
import DancesApresentation from "@/components/Culture/DancesApresentation.vue";
import DancesComp from "@/components/Culture/DancesComp.vue";
import ReligionComp from "@/components/Culture/ReligionComp.vue";

export default {
    components: {
        CultureComp,
        SocialMovements,
        CulinaryComp,
        AlimentsCulinary,
        DancesApresentation,
        DancesComp,
        ReligionComp
    }
}

</script>

<style scoped>
.culture {
    width: 100%;
    overflow: hidden;
}
/*Desenvolvi Primeiro Pro Moba e dps Desktop*/

@media(max-width:530px) {
    body {
        margin: 0px;
        padding: 0px;
    }

    button {
        position: absolute;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        vertical-align: middle;
        text-decoration: none;
        background: transparent;
        padding: 0;
        font-size: inherit;
        font-family: inherit;
        margin-top: 4rem;
        margin-left: 20px;

    }

    h1,
    p,
    h2,
    h3 {
        margin: 0px;
    }
    /*Parte 3 da Culinária*/

    .container3 {
        display: flex;
        flex-direction: column-reverse;
        background-color: #6C1522;
    }

    #tipo {
        margin-top: 3rem;
        color: #e6e4e4;
        font-size: 17px;
    }

    #div-imagem {
        width: 100%;
        height: 600px;
        background-image: url(../assets/arranjo-de-comida-brasileira-de-alto-angulo_23-2148725054.png);
        background-size: cover;
        background-repeat: no-repeat;
    }

    .text3 {
        background-color: #6C1522;
        height: 750px;
        width: 100%;
    }

    #cul {
        margin-top: 2rem;
        font-size: 60px;
        color: aliceblue;
        margin-left: 25px;
    }

    .textesculs {
        height: 100%;
        width: 86%;
        margin-left: auto;
        margin-right: auto;
    }

    .textcul {
        margin-top: 50px;
        font-size: 1, 5rem;
        color: aliceblue;
    }

    #donts {
        font-size: 1, 5rem;
        color: aliceblue;
    }

    .tecnicas {
        height: 600px;
        width: 100%;
        display: flex;
    }

    /*Parte 4 Da Capoeira*/

    .container4 {
        background-color: #6C1522;
        height: 720px;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
    }

    .retangss {
        margin-left: auto;
        margin-right: auto;
        margin-top: 4rem;
    }

    #capos {
        width: 350px;
        height: 300px;
        border-radius: 20px;
    }

    .textscapo {
        width: 94%;
        margin-left: auto;
        margin-right: auto;
        height: 400px;
    }

    #capoeira {
        font-size: 45px;
        color: rgb(255, 255, 255);
        text-align: center;
        margin-top: 3rem;

    }

    #text4 {

        font-size: 14px;
        color: rgb(255, 255, 255);
        margin-left: 10px;
        margin-top: 30px;
    }



    /*Parte da Dança Jongo*/

    .container5 {
        background-color: #6C1522;
        height: 720px;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;

    }

    .imgjongo {
        margin-left: auto;
        margin-right: auto;
        margin-top: 4rem;
    }

    .textjong {
        height: 400px;
        width: 100%;

    }

    #jong {
        width: 350px;
        height: 300px;
        border-radius: 20px;
    }

    #titlej {
        text-align: center;
        color: aliceblue;
        margin-top: 7rem;
        font-size: 40px;

    }

    .textjongo-1 {
        margin-left: auto;
        margin-right: auto;
        height: 400px;
        width: 90%;
    }

    #jongo {
        color: aliceblue;
        margin-top: 60px;
        font-size: 1rem;
    }


}




@media (min-width:900px) {

    .container3 {
        display: flex;
        flex-direction: row;
        background-color: #6C1522;


    }

    #div-imagem {
        width: 35%;
        height: 700px;
        background-image: url(../assets/arranjo-de-comida-brasileira-de-alto-angulo_23-2148725054.png);
        background-size: cover;
        background-repeat: no-repeat;
    }

    .text3 {
        background-color: #791f2b;
        height: 700px;
        width: 65%;
    }

    #cul {
        margin-top: 2rem;
        font-size: 70px;
        color: aliceblue;
        margin-left: 30px;
    }

    .textesculs {
        width: 80%;
        margin-left: 30px;
    }



    .textcul {
        font-size: 19px;
        margin-top: 10px;

        color: aliceblue;
    }

    #donts {
        color: aliceblue;
        font-size: 19px;
        margin-top: 0px;
    }

    #tipo {
        margin-top: 3rem;
        color: #e6e4e4;
        font-size: 20px;
    }


    .container4 {

        width: 100%;
        background-color: #6C1522;
        display: flex;
        flex-direction: row;
        height: 600px;

    }

    #capoeira {

        color: rgb(255, 255, 255);
        font-size: 60px;
    }

    .capi {
        width: 90%;
    }

    #text4 {
        color: #ffffff;
        font-size: 18px;
        margin-top: 3rem;
    }

    .textscapo {
        width: 50%;
        color: rgb(255, 255, 255);
        margin-top: 2rem
    }

    .retangss {
        width: 50%;

    }

    #capos {
        width: 500px;
        height: 400px;
        border-radius: 30px;
        margin-left: 4rem;
        margin-top: 5rem;

    }

    /*Parte da Dança Jongo*/

    .container5 {
        display: flex;
        flex-direction: row-reverse;
        height: 600px;
        background-color: #6C1522;
    }

    .imgjongo {
        width: 55%;
        height: 100%;
    }

    .textjong {
        width: 55%;
        height: 100%;
    }

    #jong {
        width: 500px;
        height: 400px;
        border-radius: 30px;
        margin-left: 4rem;
        margin-top: 5rem;

    }



    #titlej {
        color: rgb(255, 255, 255);
        font-size: 60px;
        margin-left: 4rem;
    }

    #jongo {
        color: #ffffff;
        font-size: 19px;
        margin-top: 3rem;

    }

    .textjongo-1 {
        width: 80%;
        color: rgb(255, 255, 255);
        margin-top: 2rem;
        margin-left: 4rem;

    }


}

#Btn {
    width: 45px;
    height: 45px;
    background: #e6e4e4;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    position: fixed;
    border: none;
    right: 30px;
    bottom: 80px;
}

.arrow path {
    fill: rgb(0, 0, 0);

}


/*Botton*/

button {
    position: absolute;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    margin-top: 4rem;
    margin-left: 20px;

}

button.learn-more {
    width: 12rem;
    height: auto;
}

button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #ffffff;
    border-radius: 1.625rem;
}

button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #ffffff;
}

button.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
}

button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #000000;
    border-right: 0.125rem solid #000000;
    transform: rotate(45deg);
}

button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #ffffff;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
}

button:hover .circle {
    width: 100%;
}

button:hover .circle .icon.arrow {
    background: #000000;
    transform: translate(1rem, 0);
}

button:hover .button-text {
    color: #000000;
}
</style>