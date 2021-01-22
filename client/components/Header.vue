<template>
  <header>
    <div class="c-container">
      <div class="c-row c-row--middle">
        <div class="c-row_col c-row__col--auto">
          <div class="c-site-branding">
              <a href="/" class="c-site-branding__title">Logo</a>
          </div>
        </div>
        <div class="c-row__col c-row__col--auto u-hidden-sm u-hidden-md">
          <Navbar />
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
    }
  }

</script>
