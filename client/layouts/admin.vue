<template>
  <div>
    <Header />
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
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default {
  middleware: ['auth-admin'],
  components: {
    Header,
    Footer
  }
}
</script>
