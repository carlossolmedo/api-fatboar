<template>
  <div>
    <Navbar v-if="$auth.loggedIn" />
    <div class="c-container">
      <div class="c-row">
        <main class="content-admin">
          <Nuxt />
        </main>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';

export default {
  middleware: ['auth-admin'],
  components: {
    Navbar,
    Footer
  }
}
</script>
