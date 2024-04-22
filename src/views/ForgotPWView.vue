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
  let valid = await form.validate();
  if (valid) {
    //ask backend if email is correct

    if (true==true ) {
      console.log("email correct");
    } else {
      console.log("incorrect");
    }
  } else {
    console.log("not valid");
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
