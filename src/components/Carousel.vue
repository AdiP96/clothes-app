<template>
    <v-carousel :cycle="false" :interval="5000" height="100%" width="100%" :show-arrows="this.isMobile ? false : 'hover'"
        hide-delimiters>
        <v-carousel-item v-for="(image, index) in images" :key="index">
            <v-img cover :src="image.src" :alt="image.alt" height="100%" width="100%"></v-img>
        </v-carousel-item>
    </v-carousel>
</template>
  
<script>
export default {
    props: {
        images: Array,
    },
    name: 'ImageCarousel',
    data() {
        return {}
    },

    computed: {
        isMobile() {
            return window.innerWidth < 768
        }
    }
}
</script>

<style>
/* Mobile-friendly styles */
@media (max-width: 768px) {
    .v-window-item {
        height: 100%;
    }

    .v-image__image {
        object-fit: contain !important;
    }
}
</style>
  