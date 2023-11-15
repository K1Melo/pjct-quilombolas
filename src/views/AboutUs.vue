<template>
    <div class="about-view" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1500">
        <AboutComp></AboutComp>
        <CreationComp></CreationComp>
        <PremisesComp></PremisesComp>
        <InovationComp></InovationComp>
        <!-- <CulturePremise></CulturePremise> -->
        <!-- <ToolsComp></ToolsComp> -->
        <TheParticipants></TheParticipants>
        <FeedbackComp></FeedbackComp>
    </div>
</template>

<script>

import AboutComp from '../components/About/AboutComp.vue'
import CreationComp from '@/components/About/CreationComp.vue';
import PremisesComp from '@/components/About/PremisesComp.vue';
import InovationComp from '@/components/About/InovationComp.vue';
// import CulturePremise from '@/components/About/CulturePremise.vue';
// import ToolsComp from '@/components/About/ToolsComp.vue';
import TheParticipants from '@/components/About/TheParticipants.vue';
import FeedbackComp from '@/components/About/FeedbackComp.vue';

export default {
    components: {
        AboutComp,
        CreationComp,
        PremisesComp,
        InovationComp,
        // CulturePremise,
        // ToolsComp,
        TheParticipants,
        FeedbackComp
    }
}

</script>