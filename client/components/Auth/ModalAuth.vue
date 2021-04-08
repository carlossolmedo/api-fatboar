
<template>
  <div>
    <div class="c-btn-play">
      <a @click="openModal" rel="noopener noreferrer" class="btn-play">
        Jouer
      </a>
    </div>
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal"/>
      <div class="modal__dialog">
        <div class="modal__header">
          <a type="button" class="modal__close" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18">
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
            </svg>
          </a>
        </div>
        <div class="modal__body">
          <div class="c-fluid-container connection-title">
            <div class="c-row">
              <button @click="showForm($event, 'signUpForm')" class="tab tab-link active"
                type="button">s'inscrire</button>
              <button @click="showForm($event, 'loginForm')" class="tab tab-link"
                type="button">connexion</button>
            </div>
          </div>
          <div id="signUpForm" class="tab-content" style="display: block;">
            <div class="c-fluid-container">
              <SignUp />
            </div>
          </div>
          <div id="loginForm" class="tab-content">
            <div class="c-fluid-container">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    data: () => ({
      show: false
    }),
    methods: {
      openModal() {
        this.show = true;
        document.querySelector("body").classList.add("overflow-hidden");
      },
      closeModal() {
        this.show = false;
        document.querySelector("body").classList.remove("overflow-hidden");
      },
      showForm(event, idForm) {
        const tabLink = document.getElementsByClassName('tab-link');
        const tabContent = document.getElementsByClassName('tab-content');

        for (let i = 0; i < tabContent.length; i++) {
          tabContent[i].style.display = 'none';
        }
        for (let i = 0; i < tabLink.length; i++) {
          tabLink[i].className = tabLink[i].className.replace(' active', '');
        }
        document.getElementById(idForm).style.display = 'block';
        event.currentTarget.className += ' active';
      }
    }
  };

</script>

<style lang="scss">
  form.connection {
    width: 100%;

    & dl {
      text-align: left;
      margin-bottom: 1rem;

      & > dt {
        display: block;
        margin-bottom: .5rem;
      }
    }

    .btn-block {
      margin: 1.5rem 0 1.5rem 0;
    }
  }
</style>
