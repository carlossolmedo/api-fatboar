<template>
  <div class="c-container">
    <div class="c-row">
      <client-only>
        <h1 class="u-text-center">Connection</h1>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth']
}
</script>
