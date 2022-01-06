<template>
  <v-app id="app">
    <v-main>
      <checker></checker>
    </v-main>
  </v-app>
</template>

<script>

import Checker from "@/components/Checker";

export default {
  name: 'App',
  components: {
    Checker,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background-color: var(--v-background-base);
  font-family: firasansregular;
}
</style>