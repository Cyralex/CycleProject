<template>
  <div v-if="!valid">
    <VueHcaptcha
      size="invisible"
      ref="hCaptchaRef"
      sitekey="10000000-ffff-ffff-ffff-000000000001"
      @verify="verifyCaptcha"
    />
    <button @click="submit">submit</button>
  </div>
  <div v-else>Success</div>
</template>

<script>
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";

export default {
  name: "App",
  data() {
    return {
      valid: false,
      formData: {
        hCaptchaToken: null,
      },
    };
  },
  components: {
    VueHcaptcha,
  },
  methods: {
    submit() {
      this.$refs.hCaptchaRef.execute();
    },
    verifyCaptcha(token) {
      this.formData.hCaptchaToken = token;

      if (this.formData.hCaptchaToken) {
        fetch("url", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.formData),
        })
          .then(() => {
            this.valid = true;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>