<template>
    <div class="production" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1500">
        <ProductionComp></ProductionComp>
        <PredominantComp></PredominantComp>
    </div>
</template>

<script>

import ProductionComp from "../components/Production/ProductionComp.vue"
import PredominantComp from "@/components/Production/PredominantComp.vue";

export default {
    components: {
        ProductionComp,
        PredominantComp
    }
}

</script>

<style scoped>

</style>