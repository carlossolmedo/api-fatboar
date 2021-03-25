<template>
  <div>
    <Navbar v-if="$auth.loggedIn" />
    <Nuxt />
    <Footer />
    <GDPR />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
import GDPR from '~/components/GDPR';

export default {
  middleware: ['404'],
  components: {
    Navbar,
    Footer,
    GDPR
  }
}
</script>
