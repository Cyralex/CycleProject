<template>
  <div class="desc">
    <strong class="text-decoration-bold">Points of interest</strong>
    <p>
      {{ route?.poi }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    route: null,
  },
};
</script>

<style></style>
