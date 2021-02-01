<template>
  <header>
    <div class="c-container">
      <div class="c-row c-row--middle">
        <div class="c-row_col c-row__col--auto">
          <div class="c-site-branding">
              <NuxtLink to="/" class="c-site-branding__title">Logo</NuxtLink>
          </div>
        </div>
        <div class="c-row__col c-row__col--auto u-hidden-sm u-hidden-md">
          <Navbar :connected="connected" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Navbar from './Navbar';

  export default {
    components: {
      Navbar
    },
    data() {
      return {
        connected: false
      }
    }
  }

</script>
