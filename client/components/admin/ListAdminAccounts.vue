<template>
  <div class="block-lists-admin">
    <div class="search">
      <form id="formSearchAdmins">
        <input type="search" name="query" v-model="searchQuery" class="c-form-control" id="searchQuery" placeholder="Recherchez nom">
      </form>
    </div>
    <table class="table-fluid table-list-admin">
      <thead>
        <tr>
          <th>#</th>
          <th @click="sortBy('role')" class="filter" :class="{active: sortKey}">
            Rôle <span class="arrow" :class="sortOrder > 0 ? 'asc' : 'dsc'"></span>
          </th>
          <th>Genre</th>
          <th>Nom</th>
          <th>Adresse mail</th>
          <th>Code postal</th>
          <th>Pays</th>
          <th>Date de création</th>
          <th>Dernière connexion</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="!loadingBlack">
        <tr v-for="(adminUser, index) in filteredAdminUsers" :key="adminUser._id">
          <th>{{ index + 1 }}</th>
          <td>{{ adminUser.role | roleFr }}</td>
          <td>{{ adminUser.gender }}</td>
          <td>{{ adminUser.username }}</td>
          <td>{{ adminUser.email }}</td>
          <td>{{ adminUser.postal_code }}</td>
          <td>{{ adminUser.country }}</td>
          <td>{{ adminUser.date_created | dateFr }}</td>
          <td>{{ adminUser.last_connection | dateLastConnection }}</td>
          <td class="actions">
            <a @click="openModal(adminUser._id)" class="icon icon-red" title="modifier">
              <edit-2-icon size="16" class=""></edit-2-icon>
            </a>
            <a @click="deleteUser(adminUser._id)" class="icon icon-red" title="supprimer">
              <trash-2-icon size="16" class=""></trash-2-icon>
            </a>
          </td>
        </tr>
      </tbody>
      <tbody v-if="loadingBlack">
        <tr>
          <td colspan="9">
            <Loader :loadingBlack="loadingBlack" />
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div v-if="showModal" id="modalUpdate" class="modal">
      <div class="modal__content">
        <div @click="closeModal" class="close">&times;</div>
        <div>
          <form @submit.prevent="submitFormUpdate" class="connection">
            <div class="c-row c-row--between">
              <div class="c-row__col c-row__col--1-1 c-row__col--md-1-3">
                <dl>
                  <dt>
                    <span>Genre</span>
                  </dt>
                  <dd>
                    <label>
                      <input v-model="form.gender" type="radio" name="gender" value="M" class="c-form-control"> M.
                    </label>
                    <label>
                      <input v-model="form.gender" type="radio" name="gender" value="F" class="c-form-control"> Mme.
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
                      <select v-model="form.role" class="c-select__control" id="role" name="role">
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
                  class="c-form-control-input" :class="{'input-error': $v.form.username.$error}" autocomplete="off">
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
                  class="c-form-control-input" :class="{'input-error': $v.form.email.$error}">
                <small class="error" v-if="$v.form.email.$error">Adresse mail invalide.</small>
              </dd>
            </dl>
            <dl>
              <dt>
                <label for="postalCode">Code postal</label>
              </dt>
              <dd>
                <input v-model.trim="$v.form.postal_code.$model" type="text" name="postal_code" id="postalCode"
                  class="c-form-control-input" :class="{'input-error': $v.form.postal_code.$error}" maxlength="5">
                <small class="error" v-if="$v.form.postal_code.$error">Code postal invalide.</small>
              </dd>
            </dl>
            <div class="block-btn-form-update">
              <div>
                <button id="submitAdminUpdate" v-if="submitStatus !== 'OK'" type="submit"
                  :disabled="$v.validationGroup.$invalid" class="c-btn"
                  :class="{'c-btn--primary': !$v.validationGroup.$invalid}">
                  <span v-if="!loading">Valider</span>
                  <Loader :loading="loading" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dates from '@/utils/dates';
  import {
    Edit2Icon,
    Trash2Icon
  } from 'vue-feather-icons';
  import {
    minLength,
    maxLength,
    numeric,
    email
  } from 'vuelidate/lib/validators';

  export default {
    props: {
      adminUsers: Array
    },
    components: {
      Edit2Icon,
      Trash2Icon
    },
    data: () => ({
      showModal: false,
      loading: false,
      loadingBlack: false,
      submitStatus: null,
      searchQuery: '',
      sortKey: '',
      sortOrder: 1,
      userId: null,
      form: {
        gender: null,
        role: null,
        username: null,
        email: null,
        postal_code: null
      }
    }),
    computed: {
      filteredAdminUsers() {
        const filterSearch = this.searchQuery.toLowerCase();
        let adminUsers = this.adminUsers;
        let sortKey = this.sortKey
        let order = this.sortOrder;

        if (filterSearch) {
          adminUsers = adminUsers.filter((row) => {
            return String(row['username']).toLowerCase().indexOf(filterSearch) > -1;
          });
        }
        if (sortKey) {
          adminUsers = adminUsers.slice().sort((a, b) => {
            a = a[sortKey];
            b = b[sortKey];
            return (a === b ? 0 : a > b ? 1 : -1) * order;
          });
        }
        return adminUsers;
      }
    },
    validations: {
      form: {
        username: {
          minLength: minLength(6)
        },
        email: {
          email
        },
        postal_code: {
          numeric,
          minLength: minLength(5),
          maxLength: maxLength(5)
        }
      },
      validationGroup: ['form.username', 'form.email', 'form.postal_code']
    },
    filters: {
      dateFr(date) {
        if (!date) return '';
        return dates.dateFormat(date);
      },
      dateLastConnection(dateLastConnection) {
        if (!dateLastConnection) return '';
        return dates.dateLastConnection(dateLastConnection);
      },
      roleFr(role) {
        if (!role) return '';
        return role === 'waiter' ? 'serveur' : role;
      }
    },
    methods: {
      sortBy(key) {
        this.sortKey = key;
        this.sortOrder = this.sortOrder * -1;
      },
      openModal(userId) {
        this.showModal = true;
        this.userId = userId;
      },
      closeModal() {
        this.showModal = false
      },
      isNull(object) {
        let valuesNotNull = {};
        for (const [key, value] of Object.entries(object)) {
          if (value !== null) {
            valuesNotNull[key] = value;
          }
        }
        return valuesNotNull;
      },
      async deleteUser(userId) {
        if (confirm('Voulez-vous supprimer ce compte ?')) {
          this.loadingBlack = true;
          await this.$axios.$delete(`/users/${userId}`)
            .then(() => {
              setTimeout(() => {
                this.$nuxt.refresh();
                this.loadingBlack = false;
                this.$toast.success('Le compte a été supprimé avec succès').goAway(3000);
              }, 1000);
            }).catch(() => {
              this.loadingBlack = false;
              this.submitStatus = 'ERROR';
              this.$toast.error('Mis à jour impossible').goAway(3000);
            });
        }
      },
      async submitFormUpdate() {
        this.$v.form.$touch();
        this.loading = true;
        if (!this.$v.form.$invalid) {
          let fieldsToUpdate = this.isNull(this.form);
          await this.$axios.$put(`/users/${this.userId}`, fieldsToUpdate)
            .then(() => {
              setTimeout(() => {
                this.loading = false;
                this.$nuxt.refresh();
                this.$toast.success('Mis à jour avec succès').goAway(3000);
              }, 1000);
            }).catch(() => {
              this.loading = false;
              this.submitStatus = 'ERROR';
              this.$toast.error('Mis à jour impossible').goAway(3000);
            });
        }
      }
    }
  }

</script>

<style>

</style>
