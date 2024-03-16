<template>
    <button @click="recaptcha">Execute recaptcha</button>
  </template>
  
  <script>
  import { useReCaptcha } from 'vue-recaptcha-v3'
  
  export default {
    setup() {
      const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
      const recaptcha = async () => {
        await recaptchaLoaded()
        const token = await executeRecaptcha('submit')
        console.log({ token })
      }
      return {
        recaptcha
      }
    },
  }
  </script>
  