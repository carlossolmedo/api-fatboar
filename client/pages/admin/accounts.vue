<template>
  <div>
    <h1 class="title-lobster">Comptes</h1>
    <h3 class="subtitle">Comptes FatBoar</h3>
    <section>
      <FormAdminSignUp />
    </section>
    <section>
      <ListAdminAccounts :admin-users="listAdmin" />
    </section>
    <h3 class="subtitle">Comptes Clients</h3>
    <section>
      <ListUserAccounts :users="listCustomer" />
    </section>
  </div>
</template>

<script>
  import FormAdminSignUp from '@/components/admin/FormAdminSignUp';
  import ListAdminAccounts from '@/components/admin/ListAdminAccounts';
  import ListUserAccounts from '@/components/admin/ListUserAccounts';

  export default {
    layout: 'admin',
    head: {
      title: 'Comptes'
    },
    components: {
      FormAdminSignUp,
      ListAdminAccounts,
      ListUserAccounts
    },
    async asyncData({ $axios }) {
      const usersAdmin = await $axios.$get(`/users/admin/accounts`);
      const usersCustomer = await $axios.$get(`/users/customer/accounts`);
      return {
        listAdmin: usersAdmin,
        listCustomer: usersCustomer
      }
    }
  }

</script>

<style scoped>
  h1 {
    margin: 50px 0 50px 0;
  }

  section {
    margin-bottom: 3rem;
  }

</style>
