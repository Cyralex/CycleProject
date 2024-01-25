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

    <form class="formContainer" 
          @submit.prevent="sendEmail" 
          enctype="multipart/form-data">

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
      e.preventDefault(); // Prevent default form submission behavior

      try {
        emailjs.send('service_ind2c06', 'template_z4rluov', {
          name: this.name,
          file: this.file
        }).then(response => {
          console.log('Email sent successfully!', response);
        }).catch(error => {
          console.error('Error sending email:', error);
        });
  } catch(error) {
    console.error('Error sending email:', error);
  }

      // Reset form field
      this.name = ''
      this.file = ''
      
    },

    handleFile() {
      const file = this.$refs.file.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.file = reader.result; // store the file contents
       };

      // read the file as text
      reader.readAsText(file);
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