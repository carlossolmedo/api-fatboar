<template>
  <div>
    <form @submit.prevent="submit" class="connection">
      <dl>
        <dt>
          <label for="email">Adresse mail</label>
        </dt>
        <dd>
          <input v-model.trim="$v.form.email.$model" type="email" name="email" id="email" autofocus="autofocus"
            class="c-form-control-input" :class="{'input-error': $v.form.email.$error}" required>
          <small class="error" v-if="$v.form.email.$error">Adresse mail invalide.</small>
        </dd>
      </dl>
      <dl>
        <dt>
          <label for="password">Password</label>
        </dt>
        <dd>
          <input v-model.trim="$v.form.password.$model" type="password" name="password" id="password"
            autofocus="autofocus" class="c-form-control-input" :class="{'input-error': $v.form.password.$error}"
            required>
          <small class="error" v-if="!$v.form.password.minLength">Votre mot de passe doit contenir
            {{$v.form.password.$params.minLength.min}} characteres minimum.</small>
        </dd>
      </dl>
      <div class="btn-block">
        <button v-if="submitStatus !== 'OK'" type="submit" :disabled="$v.validationGroup.$invalid"
          class="c-btn c-btn--block" :class="{'c-btn--primary': !$v.validationGroup.$invalid}">
          <span v-if="!loading">{{messageSubmit}}</span>
          <Loader :loading="loading" />
        </button>
        <div v-if="submitStatus === 'OK'" class="c-alert c-alert--success" role="alert">
          <div v-if="!loading">{{messageSubmit}}</div>
        </div>
      </div>
    </form>
    <div class="third-connection-block">
      <h5><span class="hyphen">Ou</span></h5>
      <ul class="c-navbar c-navbar--center">
        <li class="c-navbar__item">
          <a href="#google">
            <img class="third-logo" src="~/assets/images/logo-google.svg" title="Google" alt="logo google">
          </a>
        </li>
        <li class="c-navbar__item">
          <a href="#fb">
            <img class="third-logo" src="~/assets/images/logo-facebook.svg" title="Facebook" alt="logo facebook">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    required,
    minLength,
    email
  } from 'vuelidate/lib/validators';
  import Loader from '../Loader';

  export default {
    data() {
      return {
        form: {
          email: null,
          password: null,
        },
        messageSubmit: 'Se connecter',
        loading: false,
        submitStatus: null
      }
    },
    components: {
      Loader
    },
    validations: {
      form: {
        email: {
          email
        },
        password: {
          required,
          minLength: minLength(8)
        }
      },
      validationGroup: ['form.email', 'form.password']
    },
    methods: {
      async sendLoginData(formData) {
        try {
          const logged = await this.$axios.$post('/auth/login', {
            email: formData.email,
            password: formData.password
          });
          if (logged) {
            localStorage.setItem('api_logged', JSON.stringify(logged));
          }
          return logged;
        } catch (error) {
          console.error(error);
        }
      },
      async submit() {
        this.$v.$touch();
        this.loading = true;
        const userLogged = await this.sendLoginData(this.form);
        if (userLogged) {
          this.$store.commit('auth/setUser', this.form.email);
          setTimeout(() => {
            this.loading = false;
            this.submitStatus = 'OK';
            this.$router.push({name: 'game'});
          }, 1000);
        } else {
          this.messageSubmit = 'Accès non autorisé';
        }
      }
    }
  }

</script>
