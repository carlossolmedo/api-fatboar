<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
    <GDPR />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import GDPR from '~/components/GDPR';

export default {
  middleware: ['404'],
  components: {
    Header,
    Footer,
    GDPR
  }
}
</script>
