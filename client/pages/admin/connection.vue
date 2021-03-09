<template>
  <main class="content-connection">
    <FormAdmin />
  </main>
</template>

<script>
import FormAdmin from '~/components/auth/FormAdmin';

export default {
  layout: 'admin-connection',
  middleware: ['auth'],
  auth: false,
  components: {
    FormAdmin
  },
  mounted() {
    localStorage.setItem('gdpr', true);
  }
}
</script>
