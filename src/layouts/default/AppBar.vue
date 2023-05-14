<template>
  <v-app-bar scroll-behavior="elevate">
    <v-app-bar-title>
      <v-icon icon="mdi-dance-ballroom" />
      Pink Lady
    </v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn icon to="/explore">
      <v-icon>mdi-shimmer</v-icon>
    </v-btn>

    <v-btn icon to="/favorites" >
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon to="/account" >
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
  //
</script>
