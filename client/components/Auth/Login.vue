<template>
  <div>
    <form @submit.prevent="submit" class="connection">
      <dl>
        <dt>
          <label for="emailLogin">Adresse mail</label>
        </dt>
        <dd>
          <input v-model.trim="$v.form.email.$model" type="email" name="email" id="emailLogin" autofocus="autofocus"
            class="c-form-control-input" :class="{'input-error': $v.form.email.$error}" required>
          <small class="error" v-if="$v.form.email.$error">Adresse mail invalide.</small>
        </dd>
      </dl>
      <dl>
        <dt>
          <label for="passwordLogin">Mot de passe</label>
        </dt>
        <dd>
          <input v-model.trim="$v.form.password.$model" type="password" name="password" id="passwordLogin"
            autofocus="autofocus" class="c-form-control-input" :class="{'input-error': $v.form.password.$error}"
            required>
          <small class="error" v-if="!$v.form.password.minLength">Votre mot de passe doit contenir
            {{$v.form.password.$params.minLength.min}} characteres minimum.</small>
        </dd>
      </dl>
      <div class="btn-block">
        <button id="submitLogin" v-if="submitStatus !== 'OK'" type="submit" :disabled="$v.validationGroup.$invalid"
          class="c-btn c-btn--block" :class="{'c-btn--primary': !$v.validationGroup.$invalid}">
          <span v-if="!loading">Se connecter</span>
          <Loader :loading="loading" />
        </button>
        <div v-if="submitStatus === 'ERROR'" class="error">{{messageSubmit}}</div>
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
          email,
          required
        },
        password: {
          required,
          minLength: minLength(8)
        }
      },
      validationGroup: ['form.email', 'form.password']
    },
    methods: {
      async submit() {
        this.$v.form.$touch();
        this.loading = true;
        if (!this.$v.form.$invalid) {
          await this.$auth.loginWith('local', { data: this.form })
          .then(() => {
            setTimeout(() => {
              this.loading = false;
              this.submitStatus = 'OK';
              this.$router.push({name: 'game'});
              this.$toast.success(`Bienvenue! ${this.$auth.user.username}`).goAway(3000);
            }, 1000);
          }).catch(() => {
            this.loading = false;
            document.getElementById('submitLogin').setAttribute("disabled", true);
            this.submitStatus = 'ERROR';
            this.messageSubmit = "Vérifiez vos identifiants";
          });
        }
      }
    }
  }

</script>
