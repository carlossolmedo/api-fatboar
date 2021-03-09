<template>
  <div class="block-form-connection">
    <div v-if="!loading">
      <div class="block-img-logo">
        <img class="img-logo-connection" src="~/assets/images/logo-fatboar.svg" alt="logo FatBoar">
      </div>
      <h3>Connexion</h3>
      <form @submit.prevent="submitConnection" class="admin-connection">
        <dl>
          <dt>
            <label for="emailAdmin">Adresse mail</label>
          </dt>
          <dd>
            <input v-model.trim="$v.form.email.$model" class="c-form-control-input" type="text" name="email"
              id="emailAdmin" :class="{'input-error': $v.form.email.$error}">
            <small class="error" v-if="$v.form.email.$error">Adresse mail invalide.</small>
          </dd>
        </dl>
        <dl>
          <dt>
            <label for="passwordAdmin">Mot de passe</label>
          </dt>
          <dd>
            <input v-model.trim="$v.form.password.$model" type="password" name="password" id="passwordAdmin"
              class="c-form-control-input" :class="{'input-error': $v.form.password.$error}"
              >
            <small class="error" v-if="!$v.form.password.minLength">Votre mot de passe doit contenir
              {{$v.form.password.$params.minLength.min}} characteres minimum.</small>
          </dd>
        </dl><br />
        <button id="submitConnection" v-if="submitStatus !== 'OK'" type="submit" :disabled="$v.validationGroup.$invalid"
          class="c-btn c-btn--block" :class="{'c-btn--primary': !$v.validationGroup.$invalid}">Valider
        </button>
        <div v-if="submitStatus === 'ERROR'" class="error">{{messageSubmit}}</div>
      </form>
    </div>
    <Loader :loadingBlack="loading" />
  </div>
</template>

<script>
  import {required,minLength,email} from 'vuelidate/lib/validators';
  import Loader from '../Loader';

  export default {
    data() {
      return {
        form: {
          email: null,
          password: null
        },
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
      redirection(userRole) {
        let authorized = false;
        if (userRole) {
          switch (userRole) {
            case 'admin':
              this.$router.push({name: 'admin-dashboard'});
              authorized = true;
              break;
            case 'waiter':
              this.$router.push({name: 'admin-winners'});
              authorized = true;
              break;
            default:
              this.$toast.error(`Vous n'êtes pas autorisé`).goAway(3000);
              this.$router.push({name: 'admin-connection'});
              authorized = false;
              break;
          }
        }
        return authorized;
      },
      async submitConnection() {
        this.loading = true;
        this.$v.form.$touch();
        if (!this.$v.form.$invalid) {
          await this.$auth.loginWith('local', { data: this.form })
          .then(() => {
            setTimeout(() => {
              this.loading = false;
              this.submitStatus = 'OK';
              if (this.redirection(this.$auth.user.role)) {
                this.$toast.success(`Bienvenue! ${this.$auth.user.username}`).goAway(3000);
              } else {
                this.submitStatus = 'ERROR';
                this.messageSubmit = "Vérifiez vos identifiants";
                localStorage.clear();
              }
            }, 1000);
          }).catch(() => {
            this.loading = false;
            this.submitStatus = 'ERROR';
            this.messageSubmit = "Vérifiez vos identifiants";
          });
        }
      }
    }
  }
</script>

<style scoped>
  h3 {
    text-align: center;
    margin-bottom: 3rem;
  }
</style>
