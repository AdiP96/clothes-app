<template>
    <template v-if="images?.length">
        <Carousel :images="images" :isFavorites="false" />
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
            const { data: images } = await supabase.from('images').select('*');
            this.images = this.shuffle([...images])
            this.loading = false;
        },

        shuffle(array) {
            let currentIndex = array.length, randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }

            return array;
        }
    }
}
</script>
