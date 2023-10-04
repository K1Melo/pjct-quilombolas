<template>
    <div class="changer">
        <div class="themes" @click="changeTheme">
            <i id="moon" class="material-icons">dark_mode</i>
            <i id="sun" class="material-icons" >sunny</i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ChangeTheme',
        methods: {
            changeTheme(){
                const body = document.querySelector("body");

                if(body.classList.contains("dark")){
                    body.classList.remove("dark");
                } else {
                    body.classList.add("dark");

                }
            }
        }
    }
</script>

<style scoped>

    i {

        transform: scale(0.95);
        color: #2A3046;
        width: 50%;

        border-radius: 50%;

    }

    .dark i {

        color: #C5B7B6;

    }

    i:hover {

        transform: scale(1.1);
        transition: 1s;
        opacity: 0.8;

    }

    i:active {

        transform: scale(0.8);
        transition: 1s;

    }

    .themes {

        border: #2A3046 solid 1px;
        border-radius: 50px;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 5px;
        position: relative;

    }

    .dark .themes {

        border: #C5B7B6 solid 1px;

    }

    #moon {

        background-color: #2A3046;
    }

    .dark #sun {
        background-color: #C5B7B6;
    }

    .dark #moon {
        background-color: #c5b7b600;
    }

</style>