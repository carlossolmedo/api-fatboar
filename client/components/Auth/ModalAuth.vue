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
              <button class="btn btn-signup">S'INSCRIRE</button>
              <button class="btn btn-login">SE CONNECTER</button>
            </div>
          </div>
          <!-- Sign Up -->
          <div id="signupForm" class="signup__block">
            <div class="c-fluid-container">
              <SignUp />
            </div>
          </div>
          <!-- Login -->
          <div id="loginForm" class="login__block">
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
  import SignUp from '../Auth/SignUp';
  import Login from '../Auth/Login';

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
      }
    }
  };

</script>

<style lang="scss">
  .modal {
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;

    &__backdrop {
      background-color: rgba(0, 0, 0, 0.3);
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
    }

    &__dialog {
      background-color: #ffffff;
      position: relative;
      width: 600px;
      margin: 50px auto;
      display: flex;
      flex-direction: column;
      border-radius: 5px;
      z-index: 2;

      @media screen and (max-width: 992px) {
        width: 90%;
      }
    }

    &__close {
      cursor: pointer;
      opacity: 0.3;

      &:hover {
        opacity: 1;
        transition: all .5s ease-in-out;
      }
    }

    &__header {
      padding: 20px 20px 10px;
      display: flex;
      align-items: center;
      justify-content: right;
    }

    &__body {
      padding: 10px 20px 10px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    &__footer {
      padding: 10px 20px 20px;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

// Form styles

  .connection-title {
    margin-bottom: 1rem;

    .btn {
      width: calc(100%/2);

      &-signup {
        background-color: black;
        color: white;
      }
      &-login {
        background-color: blue;
        color: white;
      }
    }
  }

  .login__block {
    display: none;
  }

  form.connection {
    width: 100%;

    & > dt {
      text-align: left;
      margin-bottom: 1rem;

      & > label {
        display: block;
        margin-bottom: .5rem;
      }
    }
    .btn-block {
      padding: 1.5rem;
    }
  }
</style>
