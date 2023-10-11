<template>
    <div class="changer">
        <div class="themes relative transition-all duration-100 ease-out border border-current rounded-[50px] cursor-pointer flex items-center justify-center p-[5px]" @click="changeTheme">
            <i id="moon" class="material-icons w-1/2 rounded-full hover:scale-[1.1] active:scale-[0.8] bg-black">dark_mode</i>
            <i id="sun" class="material-icons w-1/2 rounded-full hover:scale-[1.1] active:scale-[0.8]" >sunny</i>
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
    .dark i {
        color: #C5B7B6;
    }

    .dark .themes {

        border-color: #C5B7B6;

    }

    .dark #sun {
        background-color: #C5B7B6;
    }

    .dark #moon {
        background-color: #c5b7b600;
    }

</style>