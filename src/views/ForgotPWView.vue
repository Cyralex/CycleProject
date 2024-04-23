<template>
  <v-row justify="center">
    <h1>you have a bad memory</h1>
  </v-row>
  <v-row justify="center">
    <v-form @submit.prevent="submitForm()" ref="form">
      <div class="text-h4">Enter the email associated with your account</div>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="name@example.com"
        hide-details
        required
      ></v-text-field>
      <v-btn type="submit">Submit</v-btn>
    </v-form>
  </v-row>
</template>

<script setup>
import { ref, reactive } from "vue";
const email = ref("");
let form = reactive();
const emailRules = reactive([
  (value) => /.+@.+\..+/.test(value) || "E-mail must be valid.",
]);

const submitForm = async () => {

    //ask backend if email is correct
    let reqObj = {
      email: email.value,
    };
    let response = await fetch(
      `${process.env.VUE_APP_BASE_URL}/v1/email/validate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqObj),
      }
    );
    response = await response.json();
    console.log("validate res from be", response);
    if (response.valid == true) {
      console.log("email correct");
    } else {
      console.log("incorrect");
    }

};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
