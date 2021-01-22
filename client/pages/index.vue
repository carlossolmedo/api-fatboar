<template>
  <div class="container">
    <div class="links">
      <a href="#play" rel="noopener noreferrer" class="button--green">
        Jouer
      </a>
    </div>
  </div>
</template>

<script>
  export default {}

</script>

<style>
  html {
    height: 100%;
    overflow: hidden;
  }

  .container {
    margin: 0 auto;
    min-height: calc(100vh - 30vh);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family:
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

</style>
