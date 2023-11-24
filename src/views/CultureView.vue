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

</style>