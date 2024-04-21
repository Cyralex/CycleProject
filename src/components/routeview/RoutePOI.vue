<template>
  <v-container class="poi">
    <strong class="text-decoration-bold">Points of Interest</strong>
    <p>
      {{ route?.poi }}
    </p>
  </v-container>
</template>

<script>
export default {
  props: {
    route: null,
  },
};
</script>

<style></style>
