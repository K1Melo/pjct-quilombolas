<template>
    <div class="dif">
        <div class="title">
            <h2>Dificuldades</h2>
        </div>
        <ul class="accordion" data-aos="fade-left" data-aos-duration="500">
            <li>
                <input type="radio" name="accordion" id="first">
                <label for="first">Infraestrutura</label>
                <div class="content">
                    <p>Como base para todos os outros problemas,
                        a insfraestrutura se entende como os
                        servios fundamentais para o desenvolvimento do povo
                        em questões fisicas de acessibilidade.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="second">
                <label for="second">Educação</label>
                <div class="content">
                    <p>Um dos principais desafios sociais enfrentado pelos
                        quilombolas, já que a maioria das estruturas educacionais
                        apresenta falta de docentes qualificados para a formação
                        de uma boa grade curricular.</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="third">
                <label for="third">Saúde</label>
                <div class="content">
                    <p>Assim como na educação, quando falamos dos quilombolas é muito
                        importante falar da saúde, por vários fatores, tanto a sua localidade
                        desprivilegiada, quanto fatores raciais e aceso a estruturas que deviam
                        ter por direito.</p>
                </div>
            </li>
            <li style="border: none;">
                <input type="radio" name="accordion" id="fourth">
                <label for="fourth">Terras</label>
                <div class="content">
                    <p>Juntamente com os projetos governamentais, a pavimentação se torna um grande prejuízo para os
                        quilombolas, já que ela muitas vezes força a saída dos moradores do seu lugar de origem. Relacionado
                        a isso nós temos a demarcação de terras, que, da mesma forma, tira moradores de suas terras de
                        origem.</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'DifficultiesComp',

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

.accordion {
    z-index: 1;
    margin: 60px auto;
    width: calc(40vw + 10vh);
    background-color: #555;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 6px 6px 10px 10px rgba(0, 0, 0, 0.15);

    li {
        list-style: none;
        width: 100%;
        padding: 30px;
        border-bottom: #555 1px solid;
        background-color: #F0DBDB;
        opacity: 0.88;


        label {
            display: flex;
            align-items: center;

            padding: 10px;
            margin: 0;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
        }

        label::before {
            content: '+';
            margin-right: 10px;
            font-size: 24px;
            ;
        }

        input[type="radio"] {
            display: none;
        }
    }

    .content {
        color: #555;
        padding: 0 10px;
        line-height: 26px;
        max-height: 0;
        overflow: hidden;

        transition: max-height 1s ease-in-out, padding 1s ease-in-out;
    }

    input[type="radio"]:checked+label+.content {
        max-height: 300px;
        padding: 10px 10px 20px;
    }

    input[type="radio"]:checked+label::before {
        content: '-';
    }

}

.dark {
    .title {
        h2 {
            background-color: #4c2626d7;
        }
    }

    .accordion {
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

    .accordion {
        z-index: 1;
        margin: 60px auto;
        width: calc(40vw + 10vh);
        background-color: #555;
        border-radius: 20px;
        overflow: hidden;

        li {
            list-style: none;
            width: 100%;
            padding: 20px;
            border-bottom: #555 1px solid;
            background-color: #d8c6c6;
            opacity: 0.88;
            box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15);

            label {
                display: flex;
                align-items: center;

                padding: 5px;
                margin: 0;
                font-size: 18px;
                font-weight: 500;
            }

            label::before {
                content: '+';
                margin-right: 5px;
                font-size: 18px;
                ;
            }
        }

        .content {
            color: #555;
            padding: 0 10px;
            line-height: 26px;
            max-height: 0;
        }

        input[type="radio"]:checked+label+.content {
            max-height: 300px;
            padding: 5px 5px 10px;
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

    .accordion {
        z-index: 1;
        margin: 0 auto;
        width: 90%;
        background-color: #555;
        border-radius: 20px;
        overflow: hidden;

        li {
            list-style: none;
            width: 100%;
            padding: 30px;
            border-bottom: #555 1px solid;
            background-color: #d8c6c6;
            opacity: 0.88;
            box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15);

            label {
                display: flex;
                align-items: center;

                padding: 8px;
                margin: 0;
                font-size: 18px;
                font-weight: 500;
            }

            label::before {
                content: '+';
                margin-right: 5px;
                font-size: 18px;
                ;
            }
        }

        .content {
            color: #555;
            padding: 0 10px;
            line-height: 26px;
            max-height: 0;
        }

        input[type="radio"]:checked+label+.content {
            max-height: 300px;
            padding: 5px 5px 10px;
        }

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

    .accordion {
        z-index: 1;
        margin: 0 auto;
        width: 90%;
        background-color: #555;
        border-radius: 20px;
        overflow: hidden;

        li {
            list-style: none;
            width: 100%;
            padding: 20px;
            border-bottom: #555 1px solid;
            background-color: #d8c6c6;
            opacity: 0.88;
            box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15);

            label {
                display: flex;
                align-items: center;

                padding: 8px;
                margin: 0;
                font-size: 15px;
                font-weight: 500;
            }

            label::before {
                margin-right: 5px;
                font-size: 15px;
                ;
            }
        }

        .content {
            color: #555;
            padding: 0 7px;
            line-height: 23px;
            max-height: 0;
            font-size: 13px;
        }

        input[type="radio"]:checked+label+.content {
            max-height: 200px;
            padding: 3px 3px 7px;
        }

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

    .accordion {
        z-index: 1;
        margin: 0 auto;
        width: 90%;
        background-color: #555;
        border-radius: 20px;
        overflow: hidden;

        li {
            list-style: none;
            width: 100%;
            padding: 20px;
            border-bottom: #555 1px solid;
            background-color: #d8c6c6;
            opacity: 0.88;
            box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15);

            label {
                display: flex;
                align-items: center;

                padding: 8px;
                margin: 0;
                font-size: 13px;
                font-weight: 500;
            }

            label::before {
                margin-right: 5px;
                font-size: 13px;
                ;
            }
        }

        .content {
            color: #555;
            padding: 0 5px;
            line-height: 15px;
            max-height: 0;
            font-size: 10px;
        }

        input[type="radio"]:checked+label+.content {
            max-height: 200px;
            padding: 2px 2px 5px;
        }

    }
}</style>