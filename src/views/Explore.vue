<template>
    <template v-if="images?.length" >
        <Carousel :images="images" />
    </template>
</template>
  
<script>
import { supabase } from '@/supabaseClient';
import Carousel from '../components/Carousel.vue';
export default {
    components: { Carousel },
    data() {
        return {
            images: [],
            loading: true
        }
    },

    created() {
        this.loadImages();
    },

    methods: {
        async loadImages() {
            const { data } = await supabase.from('images').select('*');
            console.log(data)
            this.images = [...data].map(item => {
                return {src: item.src, alt: ''}
            })
            this.loading = false;
        }
    }
}
</script>
