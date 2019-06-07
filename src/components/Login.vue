<template>

    <v-dialog max-width="500px" color="white" v-model="dialog">
        <v-btn flat slot="activator" color="grey" v-if="loginButton"> <v-icon left>account_circle</v-icon> Login </v-btn>
    
        <v-card class="pa-3" >
            <v-text-field 
                v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()" @blur="$v.email.$touch()">
            </v-text-field>
            <v-text-field
                v-model="password" :error-messages="passwordErrors" :counter="9" label="Password" required @input="$v.password.$touch()" @blur="$v.password.$touch()">
            </v-text-field>

            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
            <span class="red--text">{{permission}}</span>
        </v-card>
    </v-dialog>
</template>

<script>

  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import db from '@/fb'
  import userModel from '@/plugins/userModel'



  export default {
        props: ['signoutProp', 'loginButtonProp'],
        mixins: [validationMixin],

        validations: {
        email: { required, email },
        password: { required, maxLength: maxLength(9) },
    
        },

        data: () => ({
            email: '',
            password: '',
            dialog: false,
            permission: "",
            loginButton: true,
            signoutButton: userModel.data.isUserLoggedIn,
           
        }),

        computed: {
            emailErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        },

        passwordErrors () {
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.maxLength && errors.push('Password must be at most 9 characters long')
            !this.$v.password.required && errors.push('Password is required.')
            return errors
        },
    
        },

        methods: {
            retrieveUserDetails(e) {
                db.collection('user').get().then((response) => {
                    response.docs.forEach(doc => {
                        let usernameFirebase = doc.data().email;
                        let passwordFirebase = doc.data().password;
                        if (this.email === usernameFirebase && this.password === passwordFirebase) {
                        userModel.data.isUserLoggedIn = true
                        console.log("THIS IS THE USER ",userModel.data.isUserLoggedIn)
                            this.loginButton = false,
                            this.signoutButton = true
                            this.$emit('childToParent', this.signoutButton)
                            console.log("THIS IS THE SIGNOUT", this.signoutButton)
                            this.dialog = false;
                        } else {
                        this.dialog = true;
                        this.permission = "YOU CANNOT ACCESS.";
                        }
                    })
                })
            },

        
            submit () {
                this.$v.$touch();
                this.retrieveUserDetails(event)
            }, 

            clear() {
                this.$v.$reset()
                this.email = ''
                this.password = '',
                this.permission = ''

            }
        },

        watch: {
     
            loginButtonProp() {
                console.log("THIS IS THE LOGIN BUTTON:", this.loginButton);
                console.log("THIS IS THE LOGIN BUTTON PROP", this.loginButtonProp)
                if(this.loginButtonProp) {
                    console.log("LOGIN BUTTON PROP tryyyyy",this.loginButtonProp)
                    this.loginButton = true;
                    console.log("THIS IS LOGIN BUTTON STATE tryyyyyyy", this.loginButton);
                    this.$emit('changeLoginButton');
                }
            }
        }
}

  
</script>


<style>
  
</style>


