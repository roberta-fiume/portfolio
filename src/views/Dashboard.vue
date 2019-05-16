<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

      <v-container class="my-5">

        <v-layout row class="mb-3">
          <v-tooltip top>
            <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
            <span>Sort projects by project name</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
              <span>Sort projects by project person</span>
          </v-tooltip>
        
        </v-layout>

        <v-card flat v-for="project in projects" >
          <v-layout row wrap :class="`pa-3 project ${project.status}`">
            <v-flex xs12 md6>
              <div class="caption grey--text">Project title</div>
              <div>{{project.title}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Person</div>
              <div> {{project.person}} </div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Due by</div>
              <div> {{project.due}}</div>
            </v-flex>
            <v-flex xs2 sm4 md2>
              <div class="right">
                <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
              </div>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </v-card>
       
      </v-container>
  </div>

</template>

<script>

  export default {
      data() {
        return {
          projects: [
            { title: 'Design a new website', person: 'Roberta', due: '31st Jul 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { title: 'Code up and style Properties Availability website', person: 'Roberta', due: '3rd May 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { title: 'Code up Women Wishes website', person: 'Roberta', due: '20th May 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            { title: 'Restyle Pokemons app with Vuetify', person: 'Roberta', due: '15th May Jun 2019', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          ]
        } 
      },
      methods: {
        sortBy(property) {
          this.projects.sort((a,b) => a[property] < b[property] ? -1 : 1)
        }
      }
  }

</script>

  <style>
    .project.complete {
      border-left: 4px solid #3cd1c2
    }
    .project.ongoing{
      border-left: 4px solid orange
    }
    .project.overdue{
      border-left: 4px solid tomato;
    }
    .v-chip.complete{
      background: #3cd1c2;
    }
    .v-chip.ongoing{
      background: #ffaa2c;
    }
    .v-chip.overdue{
      background: #f83e70;
    }
  </style>
  