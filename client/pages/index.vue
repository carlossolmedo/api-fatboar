<template>
  <div class="container">
    <div class="links">
      <a @click="$refs.connectionModal.openModal()" rel="noopener noreferrer" class="button--green">
        Jouer
      </a>
    </div>
    <ModalAuth ref="connectionModal" />
  </div>
</template>

<script>
  import ModalAuth from '~/components/Auth/ModalAuth';

  export default {
    components: {
      ModalAuth
    }
  }

</script>

<style>
  html {
    height: 100%;
    overflow: hidden;
    background: rgb(2, 0, 36);
    background: linear-gradient(142deg, rgba(2, 0, 36, 1) 0%, rgba(9, 93, 121, 1) 48%, rgba(0, 212, 255, 1) 100%);
    /* background: url("https://picsum.photos/id/1002/1600/980") center no-repeat;
    background-size: cover; */
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

  .overflow-hidden {
    overflow: hidden;
  }

</style>
