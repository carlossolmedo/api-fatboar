<template>
  <div class="c-row">
    <form @submit.prevent="submit" class="connection" id="formSignUp">
      <dl>
        <dt>
          <span>Genre</span>
        </dt>
        <dd>
          <label>
            <input v-model="form.gender" type="radio" name="gender" value="M" autofocus="autofocus"
              class="c-form-control"> M.
          </label>
          <label>
            <input v-model="form.gender" type="radio" name="gender" value="F" autofocus="autofocus"
              class="c-form-control"> Mme.
          </label>
        </dd>
      </dl>
      <dl class="required">
        <dt>
          <label for="username">Nom complet</label>
        </dt>
        <dd>
          <input v-model.trim="$v.form.username.$model" type="text" name="username" id="username" autofocus="autofocus"
            class="c-form-control-input" :class="{'input-error': $v.form.username.$error}" autocomplete="off" required>
          <small class="error" v-if="!$v.form.username.minLength">Votre nom doit contenir au moins
            {{$v.form.username.$params.minLength.min}}
            lettres.</small>
        </dd>
      </dl>
      <dl class="required">
        <dt>
          <label for="emailSignUp">Adresse mail</label>
        </dt>
        <dd>
          <input v-model.trim="$v.form.email.$model" type="email" name="email" id="emailSignUp" autofocus="autofocus"
            class="c-form-control-input" :class="{'input-error': $v.form.email.$error}" required>
          <small class="error" v-if="$v.form.email.$error">Adresse mail invalide.</small>
        </dd>
      </dl>
      <div class="c-row c-row--between">
        <div class="c-row__col c-row__col--1-1 c-row__col--md-1-3">
          <dl class="required">
            <dt>
              <label for="postal_code">Code postal</label>
            </dt>
            <dd>
              <input v-model.trim="$v.form.postalCode.$model" type="text" name="postal_code" id="postal_code"
                autofocus="autofocus" class="c-form-control-input" :class="{'input-error': $v.form.postalCode.$error}"
                maxlength="5" required>
              <small class="error" v-if="$v.form.postalCode.$error">Code postal invalide.</small>
            </dd>
          </dl>
        </div>
        <div class="c-row__col c-row__col--1-1 c-row__col--md-1-2">
          <dl class="required">
            <dt>
              <label for="country">Pays</label>
            </dt>
            <dd>
              <div class="c-select">
                <select @change="setCountry($event.target.value)" v-model="$v.form.country.$model"
                  class="c-select__control" :class="{'input-error': messageCountry}" id="country" name="country"
                  required>
                  <option value="FR">France</option>
                  <option value="other">Autre</option>
                </select>
                <span class="c-select__toggle"></span>
              </div>
              <div>
                <small class="error" v-if="messageCountry">Jeu uniquement en France métropolitaine.</small>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <dl class="required">
        <dt>
          <label for="passwordSignUp">Mot de passe</label>
        </dt>
        <dd>
          <input v-model.trim="$v.form.password.$model" type="password" name="password" id="passwordSignUp"
            autofocus="autofocus" class="c-form-control-input" :class="{'input-error': $v.form.password.$error}"
            required>
          <small class="error" v-if="!$v.form.password.minLength">Votre mot de passe doit contenir
            {{$v.form.password.$params.minLength.min}} characteres minimum.</small>
        </dd>
      </dl>
      <dl class="required">
        <dt>
          <label for="cdg">
            <input v-model="$v.form.conditions.$model" type="checkbox" autofocus="autofocus" id="cdg"
              class="c-form-control">
            J'accepte les <NuxtLink to="/conditions">conditions générales</NuxtLink> de participation.
          </label>
        </dt>
      </dl>
      <dl class="required">
        <dt>
          <label for="legalAge">
            <input v-model="$v.form.legalAge.$model" type="checkbox" autofocus="autofocus" id="legalAge"
              class="c-form-control">
            Je certifie sur l'honneur avoir 18 ans ou plus.
          </label>
        </dt>
      </dl>
      <dl>
        <dt>
          <label for="newsletter">
            <input v-model="form.newsletter" name="newsletter" type="checkbox" id="newsletter"
              class="c-form-control">
            Je souhaite m'inscrire à la newsletter.
          </label>
        </dt>
      </dl>
      <div class="btn-block">
        <button id="submitSignUp" v-if="submitStatus !== 'OK'" type="submit" :disabled="$v.validationGroup.$invalid" class="c-btn c-btn--block"
          :class="{'c-btn--primary': !$v.validationGroup.$invalid}">
          <span v-if="!loading">Je m'inscris</span>
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
  import {
    required,
    minLength,
    maxLength,
    numeric,
    email
  } from 'vuelidate/lib/validators';
  import Loader from '../Loader';

  export default {
    data() {
      return {
        form: {
          gender: null,
          username: null,
          email: null,
          password: null,
          postalCode: null,
          country: null,
          conditions: null,
          legalAge: null,
          newsletter: null
        },
        messageCountry: false,
        messageSubmit: "Je m'inscris",
        loading: false,
        submitStatus: null
      }
    },
    components: {
      Loader
    },
    validations: {
      form: {
        username: {
          required,
          minLength: minLength(6)
        },
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(8)
        },
        postalCode: {
          required,
          numeric,
          minLength: minLength(5),
          maxLength: maxLength(5)
        },
        country: {
          required
        },
        conditions: {
          required
        },
        legalAge: {
          required
        }
      },
      validationGroup: [
        'form.username', 'form.email', 'form.password',
        'form.postalCode', 'form.country', 'form.conditions',
        'form.legalAge'
      ]
    },
    methods: {
      setCountry(value) {
        if (value === 'other') {
          this.messageCountry = true;
        } else {
          this.messageCountry = false;
        }
      },
      async submit() {
        this.$v.form.$touch();
        this.loading = true;
        if (!this.$v.form.$invalid) {
          await this.$axios.$post('/auth/signup', {
            gender: this.form.gender,
            username: this.form.username,
            email: this.form.email,
            password: this.form.password,
            postal_code: this.form.postalCode,
            country: this.form.country,
            newsletter: this.form.newsletter === null ? false : true
          }).then(() => {
            this.$auth.loginWith('local', {
              data: {
                email:  this.form.email,
                password: this.form.password
              }
            }).then(() => {
              setTimeout(() => {
                this.loading = false;
                this.submitStatus = 'OK';
                this.$router.push({name: 'game'});
                this.$toast.success(`Bienvenue! ${this.$auth.user.username}`).goAway(1500)
              }, 1000);
            });
          }).catch(() => {
            this.loading = false;
            this.submitStatus = 'ERROR';
            document.getElementById('submitSignUp').setAttribute("disabled", true);
            this.$toast.error("Compte déjà existant, veuillez changer d'adresse mail").goAway(3000);
          });
        }
      }
    }
  }
</script>
