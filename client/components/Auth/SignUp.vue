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
          <label for="name">Nom</label>
        </dt>
        <dd>
          <input v-model.trim="$v.name.$model" type="text" name="name" id="name" autofocus="autofocus"
            class="c-form-control-input" :class="{'input-error': $v.name.$error}" autocomplete="off" required>
          <small class="error" v-if="!$v.name.minLength">Votre nom doit contenir {{$v.name.$params.minLength.min}}
            lettres minimum.</small>
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
      <dl class="required">
        <dt>
          <label for="birthdate">Date de naissance</label>
        </dt>
        <dd>
          <input type="date" placeholder="jj-mm-aaaa" min="1997-01-01" max="2030-12-31" name="birthdate" id="birthdate"
            class="c-form-control-input" required>
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
                <small class="error" v-if="messageCountry">Jeu uniquement en France metropolitenne.</small>
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
      <dl>
        <dt>
          <label for="cdg">
            <input type="checkbox" name="cdg" autofocus="autofocus" id="cdg" class="c-form-control" required>
            J'accepte les <a href="#cdg">conditions générales</a>
          </label>
        </dt>
      </dl>
      <div class="btn-block">
        <button type="submit" :disabled="$v.validationGroup.$invalid" class="c-btn c-btn--block c-btn--primary">
          Je m'inscris
        </button>
        <!-- <button type="submit" :disabled="submitStatus === 'PENDING'" class="c-btn c-btn--block c-btn--primary">Je m'inscris</button> -->
        <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
      </div>
    </form>
    <div class="third-connection-block">
      <h5><span class="hyphen">Ou</span></h5>
      <ul class="c-navbar c-navbar--center">
        <li class="c-navbar__item"><a href="#google">Google</a></li>
        <li class="c-navbar__item"><a href="#fb">Facebook</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    required,
    minLength,
    maxLength,
    numeric
  } from 'vuelidate/lib/validators';

  export default {
    data() {
      return {
        name: '',
        password: '',
        postalCode: '',
        messageCountry: false,
        submitStatus: null,
        btnDisabled: ''
      }
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
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR';
        } else {
          // do your submit logic here
          this.submitStatus = 'PENDING';
          setTimeout(() => {
            this.submitStatus = 'OK';
            this.btnDisabled = false;
          }, 500);
        }
      }
    }
  }
</script>
