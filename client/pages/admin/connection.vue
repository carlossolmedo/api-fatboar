<template>
  <main class="content-connection">
    <FormAdminConnection />
  </main>
</template>

<script>
import FormAdminConnection from '~/components/auth/FormAdminConnection';

export default {
  layout: 'admin-connection',
  middleware: ['auth'],
  auth: false,
  head: {
    title: 'Connexion'
  },
  components: {
    FormAdminConnection
  },
  mounted() {
    localStorage.setItem('gdpr', true);
  }
}
</script>
