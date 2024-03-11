<template>
  <v-container >
    <Map />
  </v-container>
  <v-container>
    <div class="search-filters">
      <v-text-field
        variant="solo"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search for a route!"
        single-line
        hide-details
        placeholder="Search for a route!"
      ></v-text-field>
      <br>
    <div class="filters">
      <v-text-field
        variant="solo"
        v-model="minLength"
        label="Minimum Route Length"
        single-line
        hide-details
        type="number"
        ></v-text-field>

      <div class="filter-spacing"></div>
      <br>

      <v-text-field
        variant="solo"
        v-model="maxLength"
        label="Maximum Route Length"
        single-line
        hide-details
        type="number"
      ></v-text-field>
      
      <div class="filter-spacing"></div>
      <br>
      
      <v-select
        class="difficulty-select"
        variant="solo"
        v-model="selectedDifficulty"
        :items="difficultyOptions"
        label="Difficulty"
      ></v-select>
    </div>


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
const minLength = ref(null);
const maxLength = ref(null);
const selectedDifficulty = ref(null);

const difficultyOptions = ['Any', 'Beginner', 'Intermediate', 'Expert'];

const filteredRoutes = computed(() => {
  let filtered = getRoutes.value;

  // Filter by search term
  const searchTerm = search.value.toLowerCase().trim();
  if (searchTerm) {
    filtered = filtered.filter(route =>
      route.name.toLowerCase().includes(searchTerm)
    );
  }

  // Filter by min length
  if (minLength.value) {
    filtered = filtered.filter(route => route.length >= minLength.value);
  }

  // Filter by max length
  if (maxLength.value) {
    filtered = filtered.filter(route => route.length <= maxLength.value);
  }

  // Filter by difficulty
  if (selectedDifficulty.value && selectedDifficulty.value !== 'Any') {
    filtered = filtered.filter(route => route.difficulty === selectedDifficulty.value);
  }

  return filtered;
});


</script>

<style>


@media (max-width: 600px){

  .filter-spacing{
    width: 10px;
  }


}

@media (min-width: 600px){
    .RoutesTable {
    scale: 80%;
  }

  .filters{
    display: flex;
    justify-content: center;
    
    
  }

  .filter-spacing{
    width: 10px;
  }

  .difficulty-select{
    height: 56px;
  }     
}
</style>
