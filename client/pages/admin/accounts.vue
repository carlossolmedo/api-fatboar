<template>
  <div>
    <h1 class="title-lobster">Comptes</h1>
    <h3 class="subtitle">Comptes FatBoar</h3>
    <section>
      <FormAdminSignUp />
    </section>
    <section>
      <ListAdminAccounts :admin-users="listAdmin"/>
    </section>
    <h3 class="subtitle">Comptes Clients</h3>
    <section>
      <ListUserAccounts :users="listUsers"/>
    </section>
  </div>
</template>

<script>
import FormAdminSignUp from '@/components/auth/FormAdminSignUp';
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
    data() {
      return {
        listAdmin: [{
          "newsletter": true,
          "role": "admin",
          "active": true,
          "_id": "602bd9737ddc3304809b6b7e",
          "gender": "M",
          "username": "Carlos Olmedo",
          "password": "$2a$10$ezQzLe5t0Es8NuXoE.sGc.uLSSSS0/uWMa/G5x8GPr7iKqTnZInyS",
          "email": "carlos@fatboar.com",
          "postal_code": "75005",
          "country": "FR",
          "last_connection": "2021-03-16T11:09:48.851Z",
          "date_updated": null,
          "date_created": "2021-02-16T14:40:51.434Z",
          "__v": 0
        },
        {
          "newsletter": false,
          "role": "customer",
          "active": true,
          "_id": "602be03b77d92405d44a51af",
          "gender": "F",
          "username": "Fantine",
          "password": "$2a$10$zoULB6n6vPO86krdMJgPpuOrJew1Y756uUKUKuYTbkar.ozGowH02",
          "email": "fantine@fatboar.com",
          "postal_code": "77000",
          "country": "FR",
          "last_connection": "2021-03-09T15:07:12.986Z",
          "date_updated": null,
          "date_created": "2021-02-16T15:09:47.778Z",
          "__v": 0
        }]
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
