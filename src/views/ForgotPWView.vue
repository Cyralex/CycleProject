<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6" lg="4" class="d-flex align-center">
      <v-form
        class="routeForm"
        validate-on="submit lazy"
        :rules="emailRules"
        @submit.prevent="submitForm()"
        ref="form"
      >
        <div class="text-h5 text-center mb-6">
          Enter the email associated with your account
        </div>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="name@example.com"
          hide-details
          required
          class="mb-4"
        ></v-text-field>
        <v-row justify="center">
          <v-col>
            <v-btn type="submit" class="mt-4">Submit</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>

  <v-row justify="center">
    <div style="padding-top: 50px" v-if="emailValidity">
      <v-alert
        class="success"
        type="success"
        title="New password sent!"
        text="A new password has been sent to the admin email"
      >
      </v-alert>
    </div>
  </v-row>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const email = ref("");
let form = reactive();
const emailRules = reactive([
  (value) => /.+@.+\..+/.test(value) || "E-mail must be valid.",
]);
let emailValidity = ref(false);
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
  if (response.valid == true) {
    emailValidity.value = true;
    setTimeout(function () {
      emailValidity.value = false;
      router.push("/login");
    }, 10000);
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
