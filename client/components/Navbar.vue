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
        <a @click="openSubMenu('subMenuCustomer')" class="navbar__link" :class="$store.state.bodyClass"><span id="subMenu"
            v-if="getName($auth.user.username)">{{ username }}</span> <span class="c-ic-angle-down-white"
            aria-hidden="true"></span></a>
        <ul id="subMenuCustomer" class="c-menu__submenu" aria-hidden="false">
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
        <a @click="openSubMenu('subMenuAdmin')" class="navbar__link">
          <span id="subMenu">Administration</span> <span class="c-ic-angle-down-white" aria-hidden="true"></span>
        </a>
        <ul id="subMenuAdmin" class="c-menu__submenu" aria-hidden="false">
          <li class="c-menu__subitem" aria-haspopup="true">
            <NuxtLink to="/admin/accounts">Comptes</NuxtLink>
          </li>
          <li class="c-menu__subitem" aria-haspopup="true">
            <NuxtLink to="/admin/tickets">Tickets</NuxtLink>
          </li>
        </ul>
      </li>
      <li class="c-navbar__item">
        <a @click="openSubMenu('subMenuAccount')" class="navbar__link">
          <span id="subMenu" v-if="getName($auth.user.username)">{{ username }}</span> <span class="c-ic-angle-down-white" aria-hidden="true"></span>
        </a>
        <ul id="subMenuAccount" class="c-menu__submenu" aria-hidden="false">
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
        username: ''
      }
    },
    mounted() {
      window.onclick = function(event) {
        const elSubMenu = event.target.id;

        if (elSubMenu !== 'subMenu') {
          const subMenus = document.getElementsByClassName("c-menu__submenu");
          for (let i = 0; i < subMenus.length; i++) {
            if (subMenus[i].classList.contains('show-submenu')) {
              subMenus[i].classList.remove('show-submenu');
            }
          }
        }
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
      },
      openSubMenu(subMenu) {
        document.getElementById(subMenu).classList.toggle("show-submenu");
      }
    }
  }

</script>
