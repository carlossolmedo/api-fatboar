<template>
  <div>
    <header>
      <div class="c-container">
        <div class="c-row">
          <div class="c-row_col c-row__col--auto">
            <div class="c-site-branding">
              <NuxtLink to="/" class="c-site-branding__title">
                <img class="img-logo" src="~/assets/images/logo-fatboar.svg" alt="logo FatBoar">
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </header>
    <Nuxt />
    <Footer />
    <GDPR />
  </div>
</template>

<script>
  import Footer from '~/components/Footer';
  import GDPR from '~/components/GDPR';

  export default {
    components: {
      Footer,
      GDPR
    }
  }

</script>
