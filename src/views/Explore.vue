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
    name: 'ImageCarousel',
    data() {
        return {
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=783&q=80',
                    alt: 'red dress'
                },
                {
                    src: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
                    alt: 'orange dress'
                },
                {
                    src: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
                    alt: 'blue dress'
                },
                {
                    src: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
                    alt: 'red dress'
                }
            ]
        }
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
  