<template>
  <div>
    <div class="block-btn-add">
      <button @click="openForm" class="c-btn c-btn--primary">Ajouter un nouveau compte</button>
    </div>
    <transition name="fade" mode="in-out" appear>
      <div id="formAdminSignUp" v-show="openFormSignUp" class="form-sign-up">
        <form @submit.prevent="submitFormAdmin" class="connection">
          <dl class="required">
            <dt>
              <label>Tous les champs sont obligatoires</label>
            </dt>
          </dl>
          <div class="c-row c-row--between">
            <div class="c-row__col c-row__col--1-1 c-row__col--md-1-3">
              <dl>
                <dt>
                  <span>Genre</span>
                </dt>
                <dd>
                  <label>
                    <input v-model="$v.form.gender.$model" type="radio" name="gender" value="M" class="c-form-control"> M.
                  </label>
                  <label>
                    <input v-model="$v.form.gender.$model" type="radio" name="gender" value="F" class="c-form-control"> Mme.
                  </label>
                </dd>
              </dl>
            </div>
            <div class="c-row__col c-row__col--1-1 c-row__col--md-1-2">
              <dl>
                <dt>
                  <label for="role">Rôle</label>
                </dt>
                <dd>
                  <div class="c-select">
                    <select v-model="$v.form.role.$model"
                      class="c-select__control" id="role" name="role" required>
                      <option value="admin">Administrateur</option>
                      <option value="waiter">Serveur</option>
                    </select>
                    <span class="c-select__toggle"></span>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
          <dl>
            <dt>
              <label for="name">Nom complet</label>
            </dt>
            <dd>
              <input v-model.trim="$v.form.username.$model" type="text" name="username" id="username"
                class="c-form-control-input" :class="{'input-error': $v.form.username.$error}"
                autocomplete="off" required>
              <small class="error" v-if="!$v.form.username.minLength">Votre nom doit contenir au moins
                {{$v.form.username.$params.minLength.min}}
                lettres.</small>
            </dd>
          </dl>
          <dl>
            <dt>
              <label for="email">Adresse mail</label>
            </dt>
            <dd>
              <input v-model.trim="$v.form.email.$model" type="email" name="email" id="emailSignUp"
                class="c-form-control-input" :class="{'input-error': $v.form.email.$error}"
                required>
              <small class="error" v-if="$v.form.email.$error">Adresse mail invalide.</small>
            </dd>
          </dl>
          <dl>
            <dt>
              <label for="passwordAdmin">Mot de passe</label>
            </dt>
            <dd>
              <input v-model.trim="$v.form.password.$model" type="password" name="password" id="passwordAdmin"
                class="c-form-control-input" :class="{'input-error': $v.form.password.$error}" required>
              <small class="error" v-if="!$v.form.password.minLength">Votre mot de passe doit contenir
                {{$v.form.password.$params.minLength.min}} characteres minimum.</small>
            </dd>
          </dl>
          <dl>
            <dt>
              <label for="postalCode">Code postal</label>
            </dt>
            <dd>
              <input v-model.trim="$v.form.postal_code.$model" type="text" name="postal_code" id="postalCode"
                class="c-form-control-input" :class="{'input-error': $v.form.postal_code.$error}"
                maxlength="5">
              <small class="error" v-if="$v.form.postal_code.$error">Code postal invalide.</small>
            </dd>
          </dl>
          <div class="block-btn-form">
            <div>
              <button @click="openForm" class="c-btn c-btn--cancel" role="button" type="button">Annuler</button>
            </div>
            <div>
              <button id="submitAdminSignUp" v-if="submitStatus !== 'OK'" type="submit" :disabled="$v.validationGroup.$invalid" class="c-btn"
                :class="{'c-btn--primary': !$v.validationGroup.$invalid}">
                <span v-if="!loading">Valider</span>
                <Loader :loading="loading" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </transition>
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
  import Loader from '@/components/Loader';

  export default {
    data: () => ({
      openFormSignUp: false,
      loading: false,
      submitStatus: null,
      form: {
        gender: null,
        role: null,
        username: null,
        email: null,
        password: null,
        postal_code: null,
        newsletter: true,
        country: 'FR'
      }
    }),
    components: {
      Loader
    },
    validations: {
      form: {
        gender: {
          required
        },
        role: {
          required
        },
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
        postal_code: {
          required,
          numeric,
          minLength: minLength(5),
          maxLength: maxLength(5)
        }
      },
      validationGroup: [
        'form.gender', 'form.role', 'form.username',
        'form.email', 'form.password', 'form.postal_code'
      ]
    },
    methods: {
      openForm() {
        this.openFormSignUp = !this.openFormSignUp;
      },
      async submitFormAdmin() {
        this.$v.form.$touch();
        this.loading = true;
        if (!this.$v.form.$invalid) {
          await this.$axios.$post('/auth/signup', this.form)
          .then(() => {
            setTimeout(() => {
              this.loading = false;
              this.$toast.success(`Inscription avec succès`).goAway(3000);
            }, 1000);
          }).catch(() => {
            this.loading = false;
            this.submitStatus = 'ERROR';
            document.getElementById('submitAdminSignUp').setAttribute("disabled", true);
            this.$toast.error("Inscription impossible").goAway(3000);
          });
        }
      }
    },
  }

</script>

<style>
#postalCode {
  width: 50%;
}
</style>
