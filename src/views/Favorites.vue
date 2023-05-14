<template>
    <template v-if="images?.length">
        <Carousel :images="images" :isFavorites="true" />
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
        this.load();
    },

    methods: {
        async load() {
            let storageFavorites = localStorage.getItem('_pink_lady_favorites_');
            let favoriteIds = []
            if (storageFavorites?.length) {
                favoriteIds = [...JSON.parse(storageFavorites)];
            }
            const { data: images } = await supabase.from('images').select('*').in('id', favoriteIds);
            this.images = [...images]
            this.loading = false;
        },
    }
}
</script>
