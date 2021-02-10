<template>
  <div>
    <Header />
    <Nuxt />
    <Footer :pageIndex="pageIndex" />
    <GDPR :cookieAccepted="cookieAccepted" />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import GDPR from '~/components/GDPR';

export default {
  components: {
    Header,
    Footer,
    GDPR
  },
  data() {
    return {
      pageIndex: false,
      cookieAccepted: false
    }
  },
  created() {
    if (this.$route.name === 'index') {
      this.pageIndex = true;
    }
  }
}
</script>
