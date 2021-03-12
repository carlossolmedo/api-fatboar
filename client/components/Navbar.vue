<template>
  <nav class="u-pull-right" role="navigation">
    <ul v-if="$auth.user.role === 'customer'" class="c-navbar c-navbar--right">
      <li class="c-navbar__item">
        <NuxtLink class="navbar__link" :class="$store.state.bodyClass" to="/game">Jouer</NuxtLink>
      </li>
      <li class="c-navbar__item">
        <NuxtLink :class="$store.state.bodyClass" class="navbar__link" to="/account/prizes">Gains</NuxtLink>
      </li>
      <li class="c-navbar__item">
        <a @click="openSubmenuCustomer = !openSubmenuCustomer" class="navbar__link" :class="$store.state.bodyClass"><span
            v-if="getName($auth.user.username)">{{ username }}</span> <span class="c-ic-angle-down-white"
            aria-hidden="true"></span></a>
        <ul v-if="openSubmenuCustomer" class="c-menu__submenu" aria-hidden="false">
          <li class="c-menu__subitem" aria-haspopup="true">
            <NuxtLink to="/account/settings">Mon compte</NuxtLink>
          </li>
          <li class="c-menu__subitem" aria-haspopup="true">
            <a @click="logout" style="cursor: pointer;">Déconnexion</a>
          </li>
        </ul>
      </li>
    </ul>

    <!-- Admin -->
    <ul v-if="$auth.user.role === 'admin'" class="c-navbar c-navbar--right">
      <li class="c-navbar__item">
        <NuxtLink class="navbar__link" to="/admin/dashboard">Dashboard</NuxtLink>
      </li>
      <li class="c-navbar__item">
        <a @click="openSubmenuAdmin = !openSubmenuAdmin" class="navbar__link">
          <span>Administration</span> <span class="c-ic-angle-down-white" aria-hidden="true"></span>
        </a>
        <ul v-if="openSubmenuAdmin" class="c-menu__submenu" aria-hidden="false">
          <li class="c-menu__subitem" aria-haspopup="true">
            <NuxtLink to="/admin/accounts">Comptes</NuxtLink>
          </li>
          <li class="c-menu__subitem" aria-haspopup="true">
            <NuxtLink to="/admin/tickets">Tickets</NuxtLink>
          </li>
        </ul>
      </li>
      <li class="c-navbar__item">
        <a @click="openSubmenuWaiter = !openSubmenuWaiter" class="navbar__link">
          <span v-if="getName($auth.user.username)">{{ username }}</span> <span class="c-ic-angle-down-white" aria-hidden="true"></span>
        </a>
        <ul v-if="openSubmenuWaiter" class="c-menu__submenu" aria-hidden="false">
          <li class="c-menu__subitem" aria-haspopup="true">
            <NuxtLink to="/account/settings">Mon compte</NuxtLink>
          </li>
          <li class="c-menu__subitem" aria-haspopup="true">
            <a @click="logout" style="cursor: pointer;">Déconnexion</a>
          </li>
        </ul>
      </li>
    </ul>

    <!-- Waiter -->
    <ul v-if="$auth.user.role === 'waiter'" class="c-navbar c-navbar--right">
      <li class="c-navbar__item">
        <a class="navbar__link" @click="logout" style="cursor: pointer;">Déconnexion</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        openSubmenuCustomer: false,
        openSubmenuAdmin: false,
        openSubmenuWaiter: false
      }
    },
    methods: {
      getName(username) {
        if (username) {
          let name = username.split(' ');
          return this.username = name[0];
        }
      },
      logout() {
        if (this.$auth.user.role !== 'customer') {
          this.$auth.logout().then(() => {
            this.$router.push({
              name: 'admin-connection'
            });
          }).catch((err) => {
            console.error(err);
          });
        } else {
          this.$auth.logout();
        }
      }
    }
  }

</script>
