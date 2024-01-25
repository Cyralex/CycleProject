<template> 

<v-container>
    <v-container class="description"> 
        Please use the form below if you have a route you would like to see included in the Bolivar Cycling website!
        <br>
        Please provide a name for the route along with its associated GPX file. 
        <br>
        Your submission will be reviewed by the City of Bolivar.
        <br>
    </v-container>

    <form class="formContainer">

        <v-text-field 
            label="Route Name"
            prepend-icon="mdi-bike"
            v-model="name"
            name="name"
            >

        </v-text-field> 
    
        <v-file-input
          label="Upload .gpx File"
          variant="outlined"
          type="file"
          ref="file"
          @change="handleFile()"
          required
          v-model="file"
          name="file"
        ></v-file-input>

        <v-btn class="submit" type="submit">submit</v-btn>

    </form>

</v-container>


</template>

<script> 
import {emailjs} from '@emailjs/browser';

// get form data 
export default {
  name: 'routeSuggestion',
  data() {
    return {
      name: '',
      file: '',
     
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target,
        'YOUR_USER_ID', {
          name: this.name,
          file: this.file
          
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.file = ''
      
    },

    handlefile()
    { 
      const selectedFile = this.$refs.file.files[0];
    }
  }
}




</script>

<style> 
    .formContainer
    { 
        max-width: 500px;
        color: #083a8c;
    }

    .description
    { 
        text-align: center;       
    }

   
</style>