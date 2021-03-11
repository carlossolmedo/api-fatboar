<template>
  <div class="c-container">
    <div class="c-row">
      <h1>Dashboard</h1>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth-admin'],
  head: {
    title: 'Dashboard'
  }
}
</script>

<style>

</style>
