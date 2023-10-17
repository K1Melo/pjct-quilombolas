<template>
    <div class="dif">
        <ul class="wrapper">
            <li v-for="(item, index) in list" :key="'item'+index">
                <i class="material-icons " :class="{'open':item.open}">expand_more</i>
                <div class="title" @click="item.open = !item.open">
                    {{ item.title }}
                </div>
                <DifficultyItem :list="item"></DifficultyItem>
            </li>
        </ul>
    </div>
</template>

<script>

import DifficultyItem from './DifficultyItem.vue';

export default {
    name: 'DifficultiesComp',
    data: () => {
        return {
            list: [
                {
                    title: "Infraestrutura",
                    open: false,
                    text: ["Loren Ipsun"]
                },
                {
                    title: "Educação",
                    open: false,
                    text: ["Loren Ipsun"]
                },
                {
                    title: "Saúde",
                    open: false,
                    text: ["Loren Ipsun"]
                },
                {
                    title: "Terras",
                    open: false,
                    text: ["Loren Ipsun"]
                }
            ]
        }
    },
    components: {
        DifficultyItem
    }
}

</script>

<style lang="less" scoped>

.dif{
    height: 100vh;
}

.wrapper {
    list-style: none;
    background-color: #fefefe;
    box-shadow: 0 2px #000000ca;
    border-radius: 4px;
    overflow: hidden;

    li {
        position: relative;
        color: #555;
        border-top: 1px solid #dedede;
        cursor: pointer;

        .title {
            padding: 10px 0;
            text-indent: 20px;
        }

        i {
            position: absolute;
            top: 14px;
            right: 10px;
            transition: transform .5s ease-in-out;

        }
        .open {
            transform: rotateZ(180deg);
        }
        .title:hover {
            color: #4f7351;
            background-color: #DFEEE0;
        }
    }
}
</style>