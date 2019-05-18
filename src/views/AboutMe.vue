<template>
  <div class="about-me">
    <h1 class="subheading grey--text">About me</h1>

    <v-container class="my-5">
       <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg4 v-for="person in team" class="mb-3 ml-3">
              <v-card flat class="text-xs-center">
                  <v-responsive class="pt-4">
                     <v-avatar size="100" class="grey lighten-2">
                         <img :src="person.avatar" alt="" class="src">
                     </v-avatar>
                  </v-responsive>
                  <v-card-text>
                      <div class="class suheading">{{person.name}}</div>
                      <div class="class grey--text"> {{person.role}}
                      </div>
                  </v-card-text>
                  <v-card-actions>
                      <v-btn flat color="grey">
                          <v-icon small left>message</v-icon>
                          <span>Message</span>
                      </v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex> 
          <v-flex xs6 md6 lg6 class="white pa-3 ml-3">
                <div class="title grey--text mb-2">Who I am</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, nesciunt autem laudantium perspiciatis aperiam laborum quis neque. Autem fuga, officiis a soluta aliquam debitis, eum rem possimus, hic inventore libero.</div>
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
                { name: 'Roberta', role: 'Front-End Developer', avatar: '/mypic.png' }, 
            ]
        }
      }
  }

  
</script>