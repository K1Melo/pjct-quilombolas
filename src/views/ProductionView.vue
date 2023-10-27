<template>
    <div class="production" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1500">
        <ProductionComp></ProductionComp>
        <PredominantComp></PredominantComp>
        <AgricultureComp></AgricultureComp>
    </div>
</template>

<script>

import ProductionComp from "@/components/Production/ProductionComp.vue"
import PredominantComp from "@/components/Production/PredominantComp.vue";
import AgricultureComp from "@/components/Production/AgricultureComp.vue";

export default {
    components: {
        ProductionComp,
        PredominantComp,
        AgricultureComp
    }
}

</script>

<style scoped>

</style>