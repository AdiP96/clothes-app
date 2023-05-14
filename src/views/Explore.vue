<template>
    <Carousel :images="images" />
</template>
  
<script>
import Carousel from '../components/Carousel.vue';
export default {
    components: { Carousel },
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
}
</script>
