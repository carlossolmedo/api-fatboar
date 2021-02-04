<template>
  <div>
    <div class="c-container text-container">
      <div class="index-style"></div>
      <div class="c-row">
        <div class="c-row__col c-row__col--1-1 c-row__col--md-1-2">
          <div>
            <img src="~/assets/images/range-rover-evoque.png" alt="range rover evoque">
          </div>
        </div>
        <div class="c-row__col c-row__col--1-1 c-row__col--md-1-2">
          <div class="u-text-center">
            <h1>Gangez des prix !</h1>
            <p>
              Testez votre change avec votre ticket FatBoar<br />
              et gangez de millier de prix !
            </p>
            <div class="links">
              <a @click="$refs.connectionModal.openModal()" rel="noopener noreferrer" class="btn-play">
                Jouer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalAuth ref="connectionModal" />
  </div>
</template>

<script>
  import ModalAuth from '~/components/auth/ModalAuth';

  export default {
    components: {
      ModalAuth
    }
  }

</script>

<style>
  .index-style {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(97, 66, 130);
    background: radial-gradient(circle, rgba(97, 66, 130, 1) 0%, rgba(41, 6, 64, 1) 100%);
    z-index: -1;
  }

  .container {
    margin: 0 auto;
    min-height: calc(100vh - 30vh);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .links {
    margin-top: 15px;
  }

</style>
