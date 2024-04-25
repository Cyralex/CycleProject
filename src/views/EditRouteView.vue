<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6" xl="4" class="text-center">
      <v-btn @click="logout" flat>Logout</v-btn>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6" xl="4">
      <EditRoutesTable />
    </v-col>
  </v-row>
</template>

<script setup>
import EditRoutesTable from "@/components/editroute/EditRoutesTable.vue";
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
//
const router = useRouter();
let logout = async () => {
  let response = await fetch(`${process.env.VUE_APP_BASE_URL}/v1/auth/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  response = await response.json();
  if (response.success == true) {
    router.push("/");
  } else {
    alert("Logout failed");
  }
  //
};
</script>
<style></style>
