<template>
  <div v-if="loading">
    <img class="img-logo-game" src="~/assets/images/logo-fatboar.svg" alt="logo FatBoar">
  </div>
</template>

<script>
export default {
  props: {
    loading: { type: Boolean }
  }
}
</script>
