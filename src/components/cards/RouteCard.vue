<!-- This file contains the design for the route card on the homepage -->
<template>
  <v-container>
    <router-link
      @click="scrollToTop()"
      class="cardlink"
      :to="'/route/' + route.id"
    >
      <v-card class="mx-auto" max-width="375" max-height="500">
        <CardMap :route="route" cover />

        <v-card-title>{{ route.name }}</v-card-title>
        <v-card-text
          >{{ route.length }} miles <br />
          {{ route.difficulty }} <br />
          Elevation Gain: {{ route.elevation }} Feet</v-card-text
        >

        <v-card-actions>
          <v-btn router :to="link"> View Route </v-btn>
        </v-card-actions>
      </v-card>
    </router-link>
  </v-container>
</template>

<script>
import CardMap from "@/components/cards/CardMap.vue";
export default {
  props: {
    route: null, //route inputed by parent component
    link: null,
  },
  data() {
    return {
      link: "/route/" + this.route.id,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  components: {
    CardMap,
  },
};
</script>

<style>
.cardlink {
  text-decoration: none;
  color: inherit;
}
</style>
