<template>
    <div class="dif">
        <div class="title">
            <h2>Dificuldades</h2>
        </div>
        <div class="container">

            <div class="faq" @click="addActive('infrestrutura')" id="infrestrutura">
                <div class="question">
                    <h3>Infraestrutura</h3>
                </div>
                <div class="answer">
                    <p>Como base para todos os outros problemas,
                        a insfraestrutura se entende como os
                        servios fundamentais para o desenvolvimento do povo
                        em questões fisicas de acessibilidade.</p>
                </div>
            </div>

            <div class="faq" @click="addActive('educacao')" id="educacao">
                <div class="question">
                    <h3>Educação</h3>
                </div>
                <div class="answer">
                    <p>Um dos principais desafios sociais enfrentado pelos
                        quilombolas, já que a maioria das estruturas educacionais
                        apresenta falta de docentes qualificados para a formação
                        de uma boa grade curricular.</p>
                </div>
            </div>

            <div class="faq" @click="addActive('saude')" id="saude">
                <div class="question">
                    <h3>Saúde</h3>
                </div>
                <div class="answer">
                    <p>Um dos principais desafios sociais enfrentado pelos
                        quilombolas, já que a maioria das estruturas educacionais
                        apresenta falta de docentes qualificados para a formação
                        de uma boa grade curricular.</p>
                </div>
            </div>

            <div class="faq" @click="addActive('terra')" id="terra">
                <div class="question">
                    <h3>Terras</h3>
                </div>
                <div class="answer">
                    <p>Juntamente com os projetos governamentais, a pavimentação se torna um grande prejuízo para os
                        quilombolas, já que ela muitas vezes força a saída dos moradores do seu lugar de origem. Relacionado
                        a isso nós temos a demarcação de terras, que, da mesma forma, tira moradores de suas terras de
                        origem.</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'DifficultiesComp',
    methods: {
        addActive(id) {
            const faqs = document.querySelectorAll(".faq");
            faqs.forEach(item => {
                item.classList.remove("active")

                if (item.id == id) {
                    item.classList.add("active")
                }
            })
        }
    }
}

</script>

<style lang="less" scoped>
.dif {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;
}

.title {
    width: 40%;
    height: 50vh;

    h2 {
        display: flex;
        justify-content: center;
        position: absolute;
        align-items: center;
        font-size: calc(4em + 1vw);
        padding-right: 50%;
        width: 100%;
        height: 25%;
        background-color: #100404d7;
    }
}

.container {
    z-index: 1;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(40vw + 10vh);
    box-shadow: 6px 6px 10px 10px rgba(0, 0, 0, 0.15);
    background-color: #555;
    border-radius: 20px;
    overflow: hidden;
}

.faq {
    width: 100%;
    padding: 30px;
    background-color: #F0DBDB;
    border-bottom: #555 1px solid;
    cursor: pointer;

}


.question {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.question h3 {
    font-size: 18px;

    padding: 10px;
    margin: 0;
    font-weight: 500;

    color: #000;
}

.answer p {
    margin-top: 0;
    color: #555;
    padding: 0 10px;
    overflow: hidden;
}

.answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.faq.active .answer {
    max-height: 300px;
}

.faq.faq.active svg {
    transform: rotate(180deg);
}

svg {
    transition: transform 0.4s ease-in;
}

.dark {
    .title {
        h2 {
            background-color: #4c2626d7;

        }
    }


    .container {

        box-shadow: 6px 6px 10px 5px rgba(255, 255, 255, 0.15);
    }

}

@media screen and (max-height: 800px) {

    .title {
        width: 40%;
        height: 70vh;

        h2 {
            font-size: calc(3em + 1vw);
        }
    }

}

@media screen and (max-width: 1000px) {

    .dif {
        flex-direction: column;
    }

    .title {
        width: 100%;
        height: 20vh;

        h2 {
            padding-right: 0%;

            width: 100%;
            justify-content: center;
            position: absolute;
            font-size: calc(3em + 1vw);
        }
    }

    .container {
        width: 90%;
    }

    .faq {
        padding: 25px;
    }
}

@media screen and (max-width: 800px) {
    .container {
        width: 90%;
    }

    .faq {
        padding: 25px;
    }
}

@media screen and (max-width: 600px) {

    .dif {
        flex-direction: column;
    }

    .title {
        width: 100%;
        height: 18vh;

        h2 {
            padding-right: 0%;

            width: 100%;
            justify-content: center;
            position: absolute;
            font-size: calc(2em + 1vw);
        }
    }

    .container {
        width: 90%;
    }

    .faq {
        padding: 20px;
    }

    .question h3 {
        font-size: 16px;

        padding: 7px;
    }

    .answer p {
        color: #555;
        padding: 0 7px;
        font-size: 12px;
    }
}

@media screen and (max-width: 300px) {

    .dif {
        flex-direction: column;
    }

    .title {
        width: 100%;
        height: 18vh;

        h2 {
            padding-right: 0%;

            width: 100%;
            justify-content: center;
            position: absolute;
            font-size: calc(2em + 1vw);
        }
    }

    .container {
        width: 90%;
    }

    .faq {
        padding: 15px;
    }

    .question h3 {
        font-size: 16px;

        padding: 7px;
        margin: 0;
        font-weight: 500;

        color: #000;
    }

    .answer p {
        color: #555;
        padding: 0 7px;
        font-size: 12px;
    }

}
</style>