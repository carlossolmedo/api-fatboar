<template>
  <main class="content">
    <div class="bg-purple"></div>
    <div class="c-container text-container">
      <div class="c-row c-row--middle">
        <div class="c-row__col c-row__col--1-1 c-row__col--md-1-2">
          <div class="c-images-prize">
            <h1>FatBoar</h1>
            <h2>Fête son 100e restaurant !</h2>
          </div>
          <img class="prizes" src="~/assets/images/prizes-fatboar.png" alt="all prizes">
        </div>
        <div class="c-row__col c-row__col--1-1 c-row__col--md-1-2">
          <div class="c-message-prize">
            <h1>Gangez des prix !</h1>
            <p>
              Testez votre chance avec votre ticket FatBoar<br />
              et gagnez des milliers de prix&nbsp;!
            </p>
            <div class="c-btn-play">
              <a @click="$refs.connectionModal.openModal()" rel="noopener noreferrer" class="btn-play">
                Jouer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalAuth ref="connectionModal" />
  </main>
</template>

<script>
  import ModalAuth from '~/components/auth/ModalAuth';

  export default {
    layout: 'home',
    components: {
      ModalAuth
    }
  }
</script>

<style scoped>
  .prizes {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
</style>
