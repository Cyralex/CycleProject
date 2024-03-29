<script setup>
import { ref } from "vue";
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";

const verified = ref(false);
const expired = ref(false);
const token = ref("");
const eKey = ref("");
const error = ref("");
const invisibleHcaptcha = ref(null);
const asyncExecuteHCaptcha = ref(null);

function onVerify(tokenStr, ekey) {
    verified.value = true;
    token.value = tokenStr;
    eKey.value = ekey;
    console.log(`Callback token: ${tokenStr}, ekey: ${ekey}`);
}
function onExpire() {
    verified.value = false;
    token.value = null;
    eKey.value = null;
    expired.value = true;
    console.log('Expired');
}
function onChallengeExpire() {
    verified.value = false;
    token.value = null;
    eKey.value = null;
    expired.value = true;
    console.log('Challenge expired');
}
function onError(err) {
    token.value = null;
    eKey.value = null;
    error.value = err;
    console.log(`Error: ${err}`);
}
function onSubmit() {
    console.log('Submitting the invisible hCaptcha');
    invisibleHcaptcha.value.execute();
}

async function onAsyncExecute() {
  const res = await asyncExecuteHCaptcha.value.executeAsync();
  console.log("Async execute response", res);
}
</script>

<template>
    <div id="App">
    

        <div v-if="verified" id="verified">
            <h1>Successfully Verified!</h1>
            <p>token: {{ token }}</p>
            <p>eKey: {{ eKey }}</p>
        </div>

        <div v-if="expired" id="expired">
            <h1>Challenge expired!</h1>
        </div>

        <div v-if="error" id="error">
            <h1>Error:</h1>
            <p>{{ error }}</p>
        </div>
        <vue-hcaptcha
            sitekey=process.env.SITEKEY
            @verify="onVerify"
            @expired="onExpire"
            @challenge-expired="onChallengeExpire"
            @error="onError"
        />
    </div>
</template>

<style>
body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#App {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

#verified {
    color: white;
    background: green;
}

#error {
    color: white;
    background: red;
}
</style>