<template>
    <div class="about-view" >
        <AboutComp></AboutComp>
        <CreationComp></CreationComp>
        <TheParticipants></TheParticipants>
    </div>
</template>

<script>

import AboutComp from '../components/About/AboutComp.vue'
import CreationComp from '@/components/About/CreationComp.vue';
import TheParticipants from '@/components/About/TheParticipants.vue';

export default {
    components: {
        AboutComp,
        CreationComp,
        TheParticipants
    }
}

</script>