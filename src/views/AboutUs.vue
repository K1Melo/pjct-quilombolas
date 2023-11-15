<template>
    <div class="about-view" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1500">
        <AboutComp></AboutComp>
        <CreationComp></CreationComp>
        <PremisesComp></PremisesComp>
        <TheParticipants></TheParticipants>
        <FeedbackComp></FeedbackComp>
    </div>
</template>

<script>

import AboutComp from '../components/About/AboutComp.vue'
import CreationComp from '@/components/About/CreationComp.vue';
import PremisesComp from '@/components/About/PremisesComp.vue';
import TheParticipants from '@/components/About/TheParticipants.vue';
import FeedbackComp from '@/components/About/FeedbackComp.vue';

export default {
    components: {
        AboutComp,
        CreationComp,
        PremisesComp,
        TheParticipants,
        FeedbackComp
    }
}

</script>