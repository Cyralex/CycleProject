<script setup>
import { ref } from "vue";
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";


const verified = ref(false);
const expired = ref(false);
const token = ref("");
const eKey = ref("");
const error = ref("");



function onVerify(tokenStr, ekey) {
    verified.value = true;
    token.value = tokenStr;
    eKey.value = ekey;
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
</script>
<template>
    <div id="App">
    

        <div v-if="verified" id="verified">
            <h1>Successfully Verified</h1>
            
        </div>

        <div v-if="expired" id="expired">
            <h1>Challenge expired!</h1>
        </div>

        <div v-if="error" id="error">
            <h1>Error:</h1>
            <p>{{ error }}</p>
        </div>
        <vue-hcaptcha
            sitekey="61e05036-5aa4-47a1-9e3e-9109ab2c1762"
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