<template>
  <v-container fluid>
    <v-card v-if="!loading" :loading="loading">
      <v-row>
        <v-col class="mt-6 mb-3 ml-5">
          <v-row>
            <v-btn color="primary" :loading="loading" @click="signOut" variant="text">
              Sign out
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-card-text>
        <v-text-field v-model="form.firstname" label="FirstName"></v-text-field>
        <v-text-field v-model="form.lastname" label="Last Name"></v-text-field>
        <v-text-field v-model="form.phone" type="number" label="Phone" @blur="onPhoneBlur"></v-text-field>
        <v-text-field readonly v-model="form.email" label="Email Address"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="success" :loading="saving" @click="update">
          Save Changes
        </v-btn>
      </v-card-actions>
    </v-card>
    <template v-else>
      <v-row justify="center" class="mt-3"><v-progress-circular indeterminate color="primary" size="40"
          width="3" /></v-row>
    </template>
  </v-container>
</template>

<script>

import { supabase } from '../supabaseClient'
export default {
  pageTitle: 'My Account',

  data() {
    return {
      loading: true,
      saving: false,
      form: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        id: '',
      },
    }
  },

  created() {
    this.loadUserData();
  },

  methods: {
    async loadUserData() {
      const { data: { user } } = await supabase.auth.getUser()
      const { data: profile } = await supabase.from('profiles').select('*').eq('id', user?.id).single()
      this.form = {
        firstname: profile.firstname ?? '',
        lastname: profile.lastname ?? '',
        phone: profile.phone ?? '',
        email: profile.email,
        id: profile.id,
      }
      this.loading = false;
    },

    async update() {
      this.saving = true;
      await supabase.from('profiles').update({ firstname: this.form.firstname, lastname: this.form.lastname, phone: this.form.phone }).eq('id', this.form.id)
      this.saving = false;
    },

    onPhoneBlur() {
      this.form.phone = this.form.phone.replaceAll('+', '00');
    },

    signOut() {
      supabase.auth.signOut().then(() => {
        this.$router.replace('/auth')
      })
    }
  }
}
</script>