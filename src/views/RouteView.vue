<!-- Contains all content for /route -->

<template>
  
  <div>
    <!-- Map -->
    <div class="" v-if="route">
      <v-row justify="center">
        <v-col cols="9">
          <RouteViewMap :route="route" />
        </v-col>
      </v-row>
      <!-- Title -->
      <v-row justify="center">
        <v-col cols="9">
          <div class="text-h4" style="text-align: center">{{ route.name }}</div>
        </v-col>
      </v-row>
      <!-- Data table -->
      <v-row justify="center">
        <v-col cols="9">
          <RouteTable :route="route" />
        </v-col>
      </v-row>
      <!-- Desc and POI -->
      <v-row justify="center">
        <v-col cols="9">
          <div class="desc">
            <RouteDetail :route="route" />
            <RoutePOI :route="route" />
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- Waiting to recieve route prop -->
    <!-- May need to add timeout for when route is never recieved -->
    <div class="noRoute" v-if="!route">
      <h1>Loading...</h1>
      <router-link class="noRoutea" :to="'/'">Back to Home</router-link>
    </div>
  </div>
</template>

<script setup>
import "leaflet/dist/leaflet.css";
import RouteTable from "@/components/routeview/RouteViewTable.vue";
import RouteDetail from "@/components/routeview/RouteDetail.vue";
import RoutePOI from "@/components/routeview/RoutePOI.vue";
import RouteViewMap from "@/components/routeview/RouteViewMap.vue";
import { LMap, LTileLayer, LMarker, LGeoJson } from "@vue-leaflet/vue-leaflet";
import { useRouteStore } from "@/store/index.js";
import { storeToRefs } from "pinia";
import { ref, onMounted, reactive, computed } from "vue";
import { useRoute } from "vue-router";
const routeStore = useRouteStore();
const routing = useRoute();
const { getRoutebyID } = storeToRefs(routeStore);
const zoom = ref(12); //map zoom

let route = computed(() => routeStore.getRoutebyID(routing.params.id));

</script>

<style>
.noRoute {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
