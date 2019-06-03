
<template>
  <nav>
      <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
          <span>Awesome! You added a new project.</span>
          <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
      </v-snackbar>
        <v-toolbar flat app>
            <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">My</span>
                <span>Projects</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>
  
            <v-menu offset-y> <!--offeset-y is used to not cover de menu, but displays the dropdown under the menu button  -->
                <v-btn flat slot="activator" color="grey">
                    <v-icon left>expand_more</v-icon>
                    <span>Menu</span>
                </v-btn>
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-tile-title >{{ link.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <v-btn flat color="grey" v-if="signout" @click="logOut">
                <span>Sign Out</span><v-icon right>exit_to_app</v-icon>
            </v-btn>

            <Login @openDialog="dialog = true" :signoutProp="signout" v-on:childToParent="onChildClick" />

        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" class="primary">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100" >
                        <img src="/mypic.png" alt="" class="src">
                    </v-avatar>
                    <p class="white--text subheading mt-1 ml-3">Roberta</p>
                </v-flex>


                <v-flex class="mt-4 mb-3">
                    <Popup @projectAdded="snackbar = true" :drawerProp="drawer"/>
                </v-flex>
            </v-layout>
        <v-list>
            <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-action>
                <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
        </v-list>
        </v-navigation-drawer>
  </nav>
</template>

<script>

import Popup from './Popup.vue'
import Login from './Login.vue'
import userModel from '@/plugins/userModel.js'

export default {
    components: {
        Popup,
        Login
    },
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'dashboard', text: 'Dashboard', route: '/' },
                { icon: 'folder', text: 'My Projects', route: '/projects' },
                { icon: 'person', text: 'About me', route: '/about-me' },
            
            ],
            snackbar: false,
            signout: false
        }
    },

    methods: {
         onChildClick(value) {
             this.signout = value;
           console.log("THIS IS THE SIGNOUT IN THE PARENT", value)
        },

        logOut() {
            userModel.data.isUserLoggedIn = false;
            this.signout = false;
        }
    }

}
</script>

<style>
</style>