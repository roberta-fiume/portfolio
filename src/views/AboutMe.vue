<template>
  <div class="about-me">
    <h1 class="subheading grey--text">About me</h1>

    <v-container class="my-5">
       <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team">
              <v-card flat class="text-xs-center">Hello</v-card>
          </v-flex> 
       </v-layout>
    </v-container>
  </div>

</template>

<script>

  export default {
      data() {
        return {
            team: [
                { name: 'Roberta', role: 'Front-End Developer' }, 
            ]
        }
      }
  }

  
</script>