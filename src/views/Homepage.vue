<template>
    <v-row justify="center" class="pt-12">
        <v-btn @click="goToExplore" color="primary">Explore our collection</v-btn>
    </v-row>
</template>
  
<script>
export default {
    data() {
        return {
        }
    },

    methods: {
        goToExplore() {
            this.$router.push('/explore')
        }
    }
}
</script>
