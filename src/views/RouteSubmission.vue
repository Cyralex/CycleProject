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

    <v-container class="formContainer">

        <v-text-field 
            label="Route Name"
            prepend-icon="mdi-bike">

        </v-text-field> 
    
        <v-file-input
          label="Upload .gpx File"
          variant="outlined"
          type="file"
          ref="file"
          @change="handleFile(file)"
          required
        ></v-file-input>

    </v-container>

</v-container>


</template>

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