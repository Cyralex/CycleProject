<template>
  <div style="display: flex; justify-content: center">
    <v-btn @click="logout" flat>Logout</v-btn>
  </div>
  <v-row justify="center">
    <v-col cols="3">
      <v-form class="form" @submit.prevent="submit">
        <h1>Login</h1>
        <v-text-field
          label="Username"
          variant="outlined"
          v-model="username"
          :rules="inputRules"
          required
        ></v-text-field>
        <v-text-field
          label="Password"
          variant="outlined"
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="inputRules"
          :type="showPassword ? 'text' : 'password'"
          required
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <v-btn type="submit" flat>Submit</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
let username = ref("");
let password = ref("");
const router = useRouter();
let inputRules = reactive([
  (v) => v.length > 0 || "Please add a value to this field",
]);
let login = async () => {
  let up = {
    username: username.value,
    password: password.value,
  };
  let response = await fetch(`${process.env.VUE_APP_BASE_URL}/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
    body: JSON.stringify(up),
  });
  response = await response.json();
  if (response.success == true) {
    router.push("/edit");
  } else {
    alert("Login failed");
  }
  // Log the headers or access specific header values
};
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
  // Lo
};
let submit = () => {
  login();
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
