<template>
  <div>
    <div class="block-btn-add">
      <button @click="openForm" class="c-btn c-btn--primary">Ajouter un nouveau compte</button>
    </div>
    <transition name="fade" mode="in-out" appear>
      <div id="formAdminSignUp" v-show="openFormSignUp" class="form-sign-up">
        <form @submit.prevent="submit" class="connection">
          <dl>
            <dt>
              <label for="name">Nom complete</label>
            </dt>
            <dd>
              <input class="c-form-control-input" type="text" name="name">
            </dd>
          </dl>
          <dl>
            <dt>
              <label for="email">Adresse mail</label>
            </dt>
            <dd>
              <input class="c-form-control-input" type="email" name="email">
            </dd>
          </dl>
          <dl>
            <dt>
              <label for="role">Rôle</label>
            </dt>
            <dd>
              <div class="c-select">
                <select @change="getRole($event.target.value)"
                  class="c-select__control">
                  <option value="admin">Administrateur</option>
                  <option value="waiter">Serveur</option>
                </select>
                <span class="c-select__toggle"></span>
              </div>
            </dd>
          </dl>
          <div class="block-btn-form">
            <div><button @click="openForm" class="c-btn c-btn--cancel" role="button" type="button">Annuler</button></div>
            <div><button class="c-btn c-btn--primary" type="submit">Valider</button></div>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        openFormSignUp: false
      }
    },
    methods: {
      openForm() {
        this.openFormSignUp = !this.openFormSignUp;
      },
      getRole(value) {
        console.log('role: ', value);
      }
    }
  }

</script>

<style>

</style>
