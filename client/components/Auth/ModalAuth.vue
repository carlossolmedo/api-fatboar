<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()" />
      <div class="modal__dialog">
        <div class="modal__header">
          <a type="button" class="modal__close" @click="closeModal()">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18">
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
            </svg>
          </a>
        </div>
        <div class="modal__body">
          <div class="c-fluid-container connection-title">
            <div class="c-row">
              <button id="btn-signUpForm" @click="showForm('signUpForm')" class="btn btn-signUp active"
                type="button">s'inscrire</button>
              <button id="btn-loginForm" @click="showForm('loginForm')" class="btn btn-login"
                type="button">connection</button>
            </div>
          </div>
          <div id="signUpForm" class="form-block signUp__block show">
            <div class="c-fluid-container">
              <SignUp />
            </div>
          </div>
          <div id="loginForm" class="form-block login__block">
            <div class="c-fluid-container">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import SignUp from '../auth/SignUp';
  import Login from '../auth/Login';

  export default {
    name: "ModalAuth",
    components: {
      SignUp,
      Login
    },
    data() {
      return {
        show: false
      };
    },
    methods: {
      closeModal() {
        this.show = false;
        document.querySelector("body").classList.remove("overflow-hidden");
      },
      openModal() {
        this.show = true;
        document.querySelector("body").classList.add("overflow-hidden");
      },
      showForm(idForm) {
        let buttons = document.getElementsByClassName('btn');
        let form = document.getElementsByClassName('form-block');
        let btnToActive = document.getElementById(`btn-${idForm}`);
        let formToOpen = document.getElementById(`${idForm}`);

        for (let i = 0; i < buttons.length; i++) {
          buttons[i].className = buttons[i].className.replace(' active', '');
          form[i].className = form[i].className.replace(' show', '');
        }
        btnToActive.classList.add('active');
        formToOpen.classList.add('show');
      }
    }
  };

</script>

<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .signUp__block {
    display: none;
  }

  .login__block {
    display: none;
  }

  form.connection {
    width: 100%;

    & dl {
      text-align: left;
      margin-bottom: 1rem;

      &>dt {
        display: block;
        margin-bottom: .5rem;
      }
    }

    .btn-block {
      margin: 1.5rem 0 1.5rem 0;
    }
  }

  .third-connection-block {
    width: 100%;
    margin: 1rem 0 1.5rem 0;
  }
</style>
