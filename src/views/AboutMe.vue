<template>
  <div class="about-me">
    <h1 class="subheading grey--text">About me</h1>

    <v-container class="my-5" >
       <v-layout row wrap>
          <v-flex xs12 sm12 md5 lg4 v-for="person in team" :key="person.name" class="mb-3 ml-3">
              <v-card flat class="text-xs-center">
                  <v-responsive class="pt-3">
                     <v-avatar size="100" class="grey lighten-2">
                         <img :src="person.avatar" alt="" class="src">
                     </v-avatar>
                  </v-responsive>
                  <v-card-text>
                      <div class="class subheading">{{person.name}}</div>
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
          <v-flex xs12 sm12 md6 lg6 class="white pa-3 ml-3" >
                <div class="title grey--text mb-2">Who I am</div>
                <div>Hi everyone! My name is Roberta and I am a self-learner front-end developer. I discovered my passion for coding after doing some internships in web design. I followed a Web and Graphic Design course and after that I got a job as a Junior Front End Developer.
                    As I never stop learning, I have been learning Vue.js on my own since the last year and I fell in love with it! 
                    I always say that being a front-end developer is like being a wizard: just by writing some code I can create amazing magic and make appear whatever you want! </div>
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