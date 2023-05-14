<template>
  <v-app-bar scroll-behavior="elevate">
    <v-app-bar-title>
      <v-icon icon="mdi-dance-ballroom" />
      Pink Lady
    </v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn icon @click="() => goTo('/')">
      <v-icon>mdi-shimmer</v-icon>
    </v-btn>

    <v-btn icon @click="() => goTo('/favorites')">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon @click="() => goTo('/account')">
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
//
export default {
  methods: {
    goTo(name) {
      this.$router.push(name)
    }
  }
}
</script>
