<template>
    <div class="production" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1500">
        <ProductionComp></ProductionComp>
        <PredominantComp></PredominantComp>
        <AgricultureComp></AgricultureComp>
        <ArtesanatoComp></ArtesanatoComp>
    </div>
</template>

<script>

import ProductionComp from "@/components/Production/ProductionComp.vue"
import PredominantComp from "@/components/Production/PredominantComp.vue";
import AgricultureComp from "@/components/Production/AgricultureComp.vue";
import ArtesanatoComp from "@/components/Production/ArtesanatoComp.vue";

export default {
    components: {
        ProductionComp,
        PredominantComp,
        AgricultureComp,
        ArtesanatoComp
    }
}

</script>

<style scoped>

</style>