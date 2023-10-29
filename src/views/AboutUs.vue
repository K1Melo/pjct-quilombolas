<template>
    <div class="about-view" >
        <AboutComp></AboutComp>
        <CreationComp></CreationComp>
    </div>
</template>

<script>

import AboutComp from '../components/About/AboutComp.vue'
import CreationComp from '@/components/About/CreationComp.vue';

export default {
    components: {
        AboutComp,
        CreationComp
    }
}

</script>