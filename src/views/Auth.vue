<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="elevation-1">
          <v-toolbar color="primary" dark>
            <v-toolbar-title class="text-center">Pink Lady</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="handleSubmit">
              <v-text-field v-if="mode === 'Sign up'" v-model="firstname" label="First name" required></v-text-field>
              <v-text-field v-if="mode === 'Sign up'" v-model="lastname" label="Last name" required></v-text-field>
              <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
              <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
              <v-text-field v-if="mode === 'Sign up'" v-model="confirmPassword" label="Confirm Password" type="password"
                required></v-text-field>
              <template v-if="errors.length">
                <v-alert class="mb-3" v-for="(error, index) in errors" :key="index" :value="error" type="error">{{
                  error }}</v-alert>
              </template>

              <v-btn v-if="mode === 'Sign up'" variant="text" color="secondary" text @click="setMode('Sign in')">Already
                have an
                account?</v-btn>
              <v-btn v-if="mode === 'Sign in'" variant="text" color="secondary" text @click="setMode('Sign up')">Don't
                have an account
                yet?</v-btn>

              <v-btn class="mt-3" type="submit" color="primary" block>{{ mode }}</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions class="px-4 pb-4 pt-0">
            <v-btn v-on:click="handleGoogleSignIn" block color="primary" variant="outlined">
              <v-icon left>mdi-google</v-icon>
              Sign in with Google
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { supabase } from '../supabaseClient'
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'AuthForm',
  setup() {
    const router = useRouter()

    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const firstname = ref('');
    const lastname = ref('');
    const mode = ref('Sign in');
    const errors = ref([]);

    const handleSubmit = async () => {
      errors.value = []; // clear any previous errors
      if (mode.value === 'Sign in') {
        await signIn();
      } else {
        await signUp();
      }
    };

    const signIn = async () => {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({ email: email.value, password: password.value });
        if (error) {
          throw new Error(error.message);
        }
        router.push('/')
      } catch (error) {
        console.log(error.message);
      }
    };

    const signUp = async () => {
      try {
        if (password.value !== confirmPassword.value) {
          errors.value.push('Passwords do not match.');
          return;
        }

        const { data, error } = await supabase.auth.signUp({ email: email.value, password: password.value });
        if (error) {

          throw new Error(error.message);
        }
        await supabase.from('profiles').insert({
          id: user.id,
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value
        })

        router.push('explore')
      } catch (error) {
        console.log(error.message);
      }
    };

    const handleGoogleSignIn = async () => {
      try {
        const { user, error } = await supabase.auth.signIn({ provider: 'google' });
        if (error) {
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const setMode = (newMode) => {
      mode.value = newMode;
    };

    return {
      email,
      password,
      confirmPassword,
      mode,
      errors,
      handleSubmit,
      signIn,
      signUp,
      handleGoogleSignIn,
      setMode,
    };
  },
};
</script>


<style>
.auth-form {
  max-width: 500px;
  margin: auto;
}

@media screen and (max-width: 600px) {
  .auth-form {
    max-width: 300px;
  }
}
</style>
