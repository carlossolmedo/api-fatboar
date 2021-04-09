<template>
  <div>
    <Navbar v-if="$auth.loggedIn" />
    <Nuxt />
    <footer>
      <div class="u-text-center">&copy; Fatboar 2021</div>
    </footer>
  </div>
</template>

<style scoped>
footer {
  margin-bottom: 50px;
}
</style>
