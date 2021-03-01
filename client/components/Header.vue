<template>
  <header>
    <div class="c-container">
      <div class="c-row c-row--middle">
        <div class="c-row_col c-row__col--auto">
          <div class="c-site-branding">
              <NuxtLink v-if="!$auth.loggedIn" to="/" class="c-site-branding__title">
                <img class="img-logo" src="~/assets/images/logo-fatboar.svg" alt="logo FatBoar">
              </NuxtLink>
              <NuxtLink v-if="$auth.loggedIn && $auth.user.role === 'customer'" to="/" class="c-site-branding__title">
                <img class="img-logo" src="~/assets/images/logo-fatboar.svg" alt="logo FatBoar">
              </NuxtLink>
              <NuxtLink v-if="$auth.loggedIn && $auth.user.role === 'admin'" to="/admin/dashboard" class="c-site-branding__title">
                <img class="img-logo" src="~/assets/images/logo-fatboar.svg" alt="logo FatBoar">
              </NuxtLink>
          </div>
        </div>
        <div class="c-row__col c-row__col--auto u-hidden-sm u-hidden-md">
          <Navbar v-if="$auth.loggedIn" />
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
