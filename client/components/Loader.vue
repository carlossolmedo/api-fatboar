<template>
  <div>
    <div v-if="loading" class="spinner">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
    <div v-if="loadingBlack" class="spinner-black">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      loading: {
        type: Boolean
      },
      loadingBlack: {
        type: Boolean
      },
    }
  }

</script>
