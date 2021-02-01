<template>
  <div>
    <form @submit.prevent="submit" class="connection">
      <dl>
        <dt>
          <label for="email">Adresse mail</label>
        </dt>
        <dd>
          <input type="email" id="email" autofocus="autofocus" class="c-form-control-input" required>
        </dd>
      </dl>
      <dl>
        <dt>
          <label for="password">Password</label>
        </dt>
        <dd>
          <input v-model.trim="$v.password.$model" type="password" name="password" id="password" autofocus="autofocus"
            class="c-form-control-input" :class="{'input-error': $v.password.$error}" required>
          <small class="error" v-if="!$v.password.minLength">Votre mot de passe doit contenir
            {{$v.password.$params.minLength.min}} characteres minimum.</small>
        </dd>
      </dl>
      <div class="btn-block">
        <button type="submit" :disabled="$v.password.$invalid" class="c-btn c-btn--block"
          :class="{'c-btn--primary': !$v.password.$invalid, 'c-btn--success': submitStatus === 'OK'}">
          <span v-if="!loading">{{messageSubmit}}</span>
          <Loader :loading="loading" />
        </button>
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
  import { required, minLength } from 'vuelidate/lib/validators';
  import Loader from '../Loader';

  export default {
    data() {
      return {
        email: '',
        password: '',
        messageSubmit: 'Se connecter',
        loading: false,
        submitStatus: null
      }
    },
    components: {
      Loader
    },
    validations: {
      password: {
        required,
        minLength: minLength(8)
      }
    },
    methods: {
      submit() {
        this.$v.$touch();
        this.loading = true;
        if (!this.$v.$invalid) {
          this.submitStatus = 'PENDING';
          setTimeout(() => {
            this.loading = false;
            this.messageSubmit = 'Bienvenue !';
            this.submitStatus = 'OK';
          }, 2000);
        }
      }
    }
  }

</script>
