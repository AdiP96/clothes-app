<template>
  <v-container fluid>
    <v-card>
      <v-row>
        <v-col class="mt-6 mb-3 mr-5">
          <v-row justify="end">
            <v-btn color="primary" :loading="loading" @click="signOut" variant="text">
              Sign out
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-card-text>
        <v-text-field v-model="form.firstName" label="FirstName"></v-text-field>
        <v-text-field v-model="form.lastName" label="Last Name"></v-text-field>
        <v-text-field v-model="form.contactEmail" label="Email Address"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="success" :loading="loading" @click="update">
          Save Changes
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>

import { supabase } from '../supabaseClient'
export default {
  pageTitle: 'My Account',

  data() {
    return {
      loading: false,
      form: {
        firstName: 'John',
        lastName: 'Doe',
        contactEmail: 'john@doe.com',
      },
    }
  },

  methods: {
    openAvatarPicker() {
      this.showAvatarPicker = true
    },

    selectAvatar(avatar) {
      this.form.avatar = avatar
    },
    signOut() {
      supabase.auth.signOut().then(() => {
        this.$router.replace('/auth')
      })
    }
  }
}
</script>