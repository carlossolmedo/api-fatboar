<template>
  <div class="c-row">
    <form @submit.prevent="submit" class="connection">
      <dl>
        <dt>
          <span>Genre</span>
        </dt>
        <dd>
          <label>
            <input type="radio" name="gender" value="M" autofocus="autofocus" class="c-form-control"> M.
          </label>
          <label>
            <input type="radio" name="gender" value="F" autofocus="autofocus" class="c-form-control"> Mme.
          </label>
        </dd>
      </dl>
      <dl class="required">
        <dt>
          <label for="name">Nom complet</label>
        </dt>
        <dd>
          <input v-model.trim="$v.name.$model" type="text" name="name" id="name" autofocus="autofocus"
            class="c-form-control-input" :class="{'input-error': $v.name.$error}" autocomplete="off" required>
          <small class="error" v-if="!$v.name.minLength">Votre nom doit contenir au moins {{$v.name.$params.minLength.min}}
            lettres.</small>
        </dd>
      </dl>
      <dl class="required">
        <dt>
          <label for="email">Adresse mail</label>
        </dt>
        <dd>
          <input type="email" name="email" id="email" autofocus="autofocus" class="c-form-control-input" required>
        </dd>
      </dl>
      <div class="c-row c-row--between">
        <div class="c-row__col c-row__col--1-1 c-row__col--md-1-3">
          <dl class="required">
            <dt>
              <label for="postal_code">Code postal</label>
            </dt>
            <dd>
              <input v-model.trim="$v.postalCode.$model" type="text" name="postal_code" id="postal_code"
                autofocus="autofocus" class="c-form-control-input" :class="{'input-error': $v.postalCode.$error}" maxlength="5" required>
              <small class="error" v-if="$v.postalCode.$error">Code postal invalide.</small>
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
                <select @change="setCountry($event.target.value)" class="c-select__control" :class="{'input-error': messageCountry}" id="country" name="country"
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
          <label for="password">Password</label>
        </dt>
        <dd>
          <input v-model.trim="$v.password.$model" type="password" name="password" id="password" autofocus="autofocus"
            class="c-form-control-input" :class="{'input-error': $v.password.$error}" required>
          <small class="error" v-if="!$v.password.minLength">Votre mot de passe doit contenir
            {{$v.password.$params.minLength.min}} characteres minimum.</small>
        </dd>
      </dl>
      <dl class="required">
        <dt>
          <label for="cdg">
            <input type="checkbox" autofocus="autofocus" id="cdg" class="c-form-control" required>
            J'accepte les <a href="#cdg">conditions générales</a> de participation.
          </label>
        </dt>
      </dl>
      <dl class="required">
        <dt>
          <label for="legalAge">
            <input type="checkbox" autofocus="autofocus" id="legalAge" class="c-form-control" required>
            Je certifie sur l'honneur avoir 18 ans ou plus.
          </label>
        </dt>
      </dl>
      <div class="btn-block">
        <button type="submit" :disabled="$v.validationGroup.$invalid" class="c-btn c-btn--block"
        :class="{'c-btn--primary': !$v.validationGroup.$invalid, 'c-btn--success': submitStatus === 'OK'}">
          <span v-if="!loading">{{messageSubmit}}</span>
          <Loader :loading="loading" />
        </button>
      </div>
      <div class="message--success" v-if="submitStatus === 'OK'">Connectez-vous !</div>
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
  import {required,minLength,maxLength,numeric} from 'vuelidate/lib/validators';
  import Loader from '../Loader';

  export default {
    data() {
      return {
        name: '',
        password: '',
        postalCode: '',
        messageCountry: false,
        messageSubmit: 'Je m\'inscris',
        loading: false,
        submitStatus: null
      }
    },
    components: {
      Loader
    },
    validations: {
      name: {
        required,
        minLength: minLength(6)
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
      validationGroup: ['name', 'password']
    },
    methods: {
      setCountry(value) {
        if (value === 'other') {
          this.messageCountry = true;
        } else {
          this.messageCountry = false;
        }
      },
      submit() {
        this.$v.$touch();
        this.loading = true;
        if (!this.$v.$invalid) {
          // do your submit logic here
          this.submitStatus = 'PENDING';
          setTimeout(() => {
            this.loading = false;
            this.messageSubmit = 'Inscription avec succès';
            this.submitStatus = 'OK';
          }, 2000);
        }
      }
    }
  }
</script>
