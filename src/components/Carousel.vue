<template>
    <v-carousel :cycle="false" :interval="5000" height="100%" width="100%" :show-arrows="this.isMobile ? false : 'hover'"
        hide-delimiters v-model="currentIndex">
        <v-carousel-item v-for="(image, index) in images" :key="index">
            <div class="carousel-image" v-if="!isMobile">
                <v-img cover :src="image.src" :alt="image.alt" height="100%" width="100%"></v-img>
            </div>
            <v-img v-else cover :src="image.src" :alt="image.alt" height="100%" width="100%"></v-img>
        </v-carousel-item>
        <v-btn @click="handleFavorite" class="fab-button"
            :icon="isFavorites ? 'mdi-delete' : addedToFavorites ? 'mdi-heart' : 'mdi-heart-outline'" color="primary"
            elevation="8" />
    </v-carousel>
</template>
  
<script>

export default {
    props: {
        images: Array,
        isFavorites: Boolean,
    },
    name: 'ImageCarousel',
    data() {
        return {
            currentIndex: 0,
            favorites: []
        }
    },

    created() {
        let storageFavorites = localStorage.getItem('_pink_lady_favorites_');
        if (storageFavorites?.length) {
            this.favorites = [...JSON.parse(storageFavorites)];
        }
        document.onkeydown = this.checkKey;
    },

    computed: {
        isMobile() {
            return window.innerWidth < 768
        },

        addedToFavorites() {
            return this.favorites.includes(this.images[this.currentIndex].id)
        },

        currentImageId() {
            return this.images[this.currentIndex].id
        }
    },

    watch: {
        favorites() {
            localStorage.setItem('_pink_lady_favorites_', JSON.stringify(this.favorites));
        }
    },

    methods: {
        // onImageChange(index) {
        //     this.currentIndex = index
        // },

        handleFavorite() {
            const tempFavorites = [...this.favorites];
            if (this.favorites.includes(this.currentImageId)) {
                this.favorites = tempFavorites.filter(item => item !== this.currentImageId);
                if (this.isFavorites) {
                    this.$emit('remove-image', this.currentImageId)
                    this.currentIndex = Math.max(this.currentIndex - 1, 0)

                }
            } else {
                tempFavorites.push(this.currentImageId);
                this.favorites = [...tempFavorites]
            }
        },
        checkKey(e) {
            e = e || window.event;
            if (e.code == 'ArrowLeft') {
                if (this.currentIndex) {
                    this.currentIndex = this.currentIndex - 1;
                } else {
                    this.currentIndex = this.images.length - 1;
                }
            }
            else if (e.code == 'ArrowRight') {
                if (this.currentIndex === this.images.length - 1) {
                    this.currentIndex = 0;
                } else {
                    this.currentIndex = this.currentIndex + 1;
                }
            }
        }
    }
}
</script>

<style>
.carousel-image {
    max-height: 1200px !important;
    max-width: 600px !important;
    margin: auto;
    object-fit: contain !important;
}

/* Mobile-friendly styles */
@media (max-width: 768px) {
    .carousel-image {
        object-fit: contain !important;
    }

    .v-window-item {
        height: 100%;
    }

    .v-image__image {
        object-fit: contain !important;
    }
}

.fab-button {
    bottom: 0;
    position: absolute !important;
    margin: 0 0 16px 16px;
}
</style>
  