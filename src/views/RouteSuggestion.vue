
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
    expired.value = false; 
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
//show is a bool to alter the submit button to hide it for when it 

</script>  
<script>


  export default {
    componenets:{
    },
    name: "routeSuggestion",
    data() {
      return{
        name:"",
        file: null,
        success: false,
        email: "",
        poi: "",
        valid: true,
      };
    },
  
    methods:{
      //added to this to try to extend the show var to hcaptcha to alter the submit button to only go after the hcaptcha is done.
      
      // handle file once uploaded 
      handleFile() {
        this.file = this.$refs.file.files[0];
        
      },
      
      // send data to backend 
      async postSuggestion()
      { 

        const blob = new Blob([this.file], { type: "text/plain" });
        const text = await blob.text();
        

       /* const formData = new FormData();
        formData.append('name', this.name);
        formData.append('route', text);
        console.log(formData);*/

        

        let response = await fetch(`${process.env.VUE_APP_BASE_URL}/v1/email/`, {
          method: "POST",
          headers: 
          { 
            "Content-Type": "application/json",
             
          },
          body: JSON.stringify({
            name: this.name,
            file: text,
            poi: this.poi,
            email: this.email

          })
          
        })
        
        //response = await response.json();
        return response;
      },
      

      // submit 
      async submit(){ 
        try{
      
          
            if(!this.file || !this.name){
              this.valid=false;
              return;
            }else{
              this.valid=true;
            }

            const response = await this.postSuggestion(
              this.file,
              this.name
            );       
              
          if (response.status === 200){
            this.success = true;
          }
        
          
          }
        catch(e){
          console.log("error:\n");
          console.log(e);

        }     

      }
    },
  };
  
  </script>
  <template>
    <v-container>
      <div v-if="success">
        <v-alert 
        class="success"
        type="success"
        title="Suggestion Submitted!"
        text="Your route has been submitted for review by the City of Bolivar!"
      >
      </v-alert><br>
    </div>

    <div v-if="!valid">
      <v-alert
        class="invalidForm"
        type="warning"
        title="Invalid Form Input"
        text="Please include GPX file and name of route."
        width="max"
      >
      </v-alert>
    </div>

    <v-container class="description" v-show="!success">
      <v-card
        width="max"
        prepend-icon="mdi-map-marker-outline"
        color="#083a8c"
        class="justify-center"
      >
        <template v-slot:title> Submit a route! </template>

        <v-card-text>
          Please use the form below to submit a route suggestion for the cycling
          website!
          <br />
          Your submission will be reviewed by the City of Bolivar.
          <br />
          Please include the name of your route, associated GPX file, points of
          interest you would like to include along the route, and optionally
          your contact information.
        </v-card-text>
      </v-card>
    </v-container>

    <form
      v-show="!success"
      class="formContainer"
      @submit.prevent="handleSubmit"
      enctype="multipart/form-data"
      id="form"
      name="form"
      ref="form"
    >
      <v-text-field
        variant="outlined"
        label="Route Name"
        prepend-icon="mdi-bike"
        v-model="name"
        name="name"
        id="name"
        required
      >
      </v-text-field>

      <v-file-input
        label="Upload .gpx File"
        variant="outlined"
        type="file"
        ref="file"
        @change="handleFile()"
        required
        name="file"
        accept=".gpx"
      ></v-file-input>
      <v-text-field
        variant="outlined"
        label="Points of Interest"
        prepend-icon="mdi-map-marker-radius"
        v-model="poi"
        name="poi"
        id="poi"
      ></v-text-field>

      <v-text-field
        variant="outlined"
        label="Email"
        prepend-icon="mdi-email"
        v-model="email"
        name="email"
        id="email"
        type="email"
      >
      </v-text-field>
      <v-btn v-if="verified" @click="submit" class="submit" type="submit">submit</v-btn>
      
    </form>
    <div id="App">

    <div v-if="expired" id="expired">
      <v-alert 
        class="expired"
        type="info"
        title="Challenged Expired"
        text="Your challenge has expired. Please verify again that you are human."
      >
      </v-alert>

    </div>

    <div v-if="error" id="error">

      <v-alert 
        class="error"
        type="error"
        title="Error"
        text="{{ error }}"
      >
      </v-alert>        
    </div>
    <vue-hcaptcha
        sitekey="61e05036-5aa4-47a1-9e3e-9109ab2c1762"
        @verify="onVerify"
        @expired="onExpire"
        @challenge-expired="onChallengeExpire"
        @error="onError"
    />
</div>
  </v-container>
  
</template>

<style>
.formContainer {
  max-width: 500px;
  color: #083a8c;
  padding: 10px;
}

.invalidForm,
.success {
  padding: 10px;
  margin: 15px;
}
body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#App {
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
}

#verified {
    color: white;
    background: green;
}


</style>
