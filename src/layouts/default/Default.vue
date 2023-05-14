<template>
  <v-app class="app-class">
    <default-bar />

    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>
<style >
.app-class {
  overflow-x: hidden;
}
</style>