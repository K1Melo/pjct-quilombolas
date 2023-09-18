<template>
    <div class="change">
        <input type="checkbox" class="checkbox" id="chk">

        <label class="label" for="chk" @click="changeTheme">
            <i id="dark" class="material-icons" >dark_mode</i>
            <i id="ligth" class="material-icons" >sunny</i>
            <div class="ball">
            </div>
        </label>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({

})


export default class ChangeTheme extends Vue {

    public changeTheme(){
        const body = document.querySelector("body");

        if(!body?.classList.contains("on")){
            body?.classList.add("on");
        } else {
            body?.classList.remove("on");

        }
    }
}
</script>

<style scoped lang="less">

.checkbox{
    opacity: 0;
    position: absolute;
}
i{
    transform: scale(0.95);
    color:  #1C1A1F;
    width: 50%;
}

i:hover{
    transform: scale(1.1);
    transition: 1s;
    opacity: 0.8;
}

i:active{
    transform: scale(0.8);
    transition: 1s;
}

.label{
    border: #1C1A1F solid 1px;
    border-radius: 50px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px;
    position: relative;
    width: 50px;
}


#dark{
    background-color: #1C1A1F;
    border-radius: 50%;
}

.on{
    .label{
        border: #C5B7B6 solid 1px;
    }
    i{
        color:  #C5B7B6;
    }

    #ligth{
        background-color: #C5B7B6;
        border-radius: 50%;
    }
}

@media only screen and (max-width: 480px) {
    .change{
        transform: scale(0.8);
    }
}

</style>