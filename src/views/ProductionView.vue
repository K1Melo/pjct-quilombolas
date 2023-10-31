<template>
    <div class="production" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1500">
        <ProductionComp></ProductionComp>
        <PredominantComp></PredominantComp>
        <AgricultureComp></AgricultureComp>
        <WhatIsAgriculture></WhatIsAgriculture>
        <AgricultureCard></AgricultureCard>
        <ArtesanatoComp></ArtesanatoComp>
        <WhatIsArtesanato></WhatIsArtesanato>
        <ArtesanatoCard></ArtesanatoCard>
    </div>
</template>

<script>

import ProductionComp from "@/components/Production/ProductionComp.vue"
import PredominantComp from "@/components/Production/PredominantComp.vue";
import AgricultureComp from "@/components/Production/AgricultureComp.vue";
import ArtesanatoComp from "@/components/Production/ArtesanatoComp.vue";
import WhatIsAgriculture from "@/components/Production/WhatIsAgriculture.vue";
import WhatIsArtesanato from "@/components/Production/WhatIsArtesanato.vue";
import AgricultureCard from "@/components/Production/AgricultureCard.vue";
import ArtesanatoCard from "@/components/Production/ArtesanatoCard.vue";

export default {
    components: {
        ProductionComp,
        PredominantComp,
        AgricultureComp,
        WhatIsAgriculture,
        AgricultureCard,
        ArtesanatoComp,
        WhatIsArtesanato,
        ArtesanatoCard
    }
}

</script>

<style scoped>

</style>