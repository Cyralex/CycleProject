<template>
  <v-container >
    <Map />
  </v-container>
  <v-container>
    <div class="search-filters">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>

    </div>
    <v-row>
      <v-col v-for="r in filteredRoutes" :key="r" sm="12" md="6" lg="3" xl="2">
        <RouteCard :route="r" />
      </v-col>
    </v-row>
  </v-container>
  <RoutesTable />
  <br />
</template>

<script setup>
import { defineComponent } from "vue";
import { useRouteStore } from "@/store/index.js";
import { storeToRefs } from "pinia";
import { ref, reactive, computed } from "vue";
//Components
import Map from "@/components/Map.vue";
import RoutesTable from "@/components/RoutesTable.vue";
import RouteCard from "@/components/cards/RouteCard.vue";

const routeStore = useRouteStore();
const { getRoutes } = storeToRefs(routeStore);
let routes = computed(() => routeStore.getRoutes);

const search = ref("");

const filteredRoutes = computed(() => {
  return routes.value.filter((route) => {
    const searchMatch =
      route.name.toLowerCase().includes(search.value.toLowerCase()) || "";
    const difficultyMatch =
      selectedDifficulty.value === "" || route.difficulty === selectedDifficulty.value;
    return searchMatch && difficultyMatch; // Combine search and filter
  });
});
</script>

<style>
.RoutesTable {
  scale: 80%;
}
</style>
