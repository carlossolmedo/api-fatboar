<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <div class="content-left">
          <NuxtLink to="/" class="">
            <img class="img-logo" src="~/assets/images/logo-fatboar.svg" alt="logo FatBoar">
          </NuxtLink>
          <button id="navbarToggler" @click="openMenu()" class="burger" :class="$store.state.bodyClass"
            type="button"></button>
        </div>
        <div class="navbar-collapse">
          <!-- Customer -->
          <ul v-if="$auth.user.role === 'customer'" class="navbar-nav">
            <li>
              <NuxtLink class="nav-link" :class="$store.state.bodyClass" to="/game">Jouer</NuxtLink>
            </li>
            <li>
              <NuxtLink :class="$store.state.bodyClass" class="nav-link" to="/account/prizes">Gains</NuxtLink>
            </li>
            <li>
              <a @click="openDropdown('menuDropdownAccount')" class="nav-link" :class="$store.state.bodyClass"
                role="button">
                <span id="subMenu" v-if="getName($auth.user.username)">{{ username }}</span> <span
                  class="c-ic-angle-down-white" aria-hidden="true"></span>
              </a>
              <ul id="menuDropdownAccount" class="dropdown-menu">
                <li>
                  <NuxtLink to="/account/settings" class="dropdown-item">Mon compte</NuxtLink>
                </li>
                <li><a @click="logout" class="dropdown-item" role="button">Déconnexion</a></li>
              </ul>
            </li>
          </ul>

          <!-- Admin -->
          <ul v-if="$auth.user.role === 'admin'" class="navbar-nav">
            <li>
              <NuxtLink class="nav-link" to="/admin/dashboard">Dashboard</NuxtLink>
            </li>
            <li>
              <a @click="openDropdown('menuDropdownAdmin')" class="nav-link" role="button">
                <span id="subMenu">Administration</span> <span class="c-ic-angle-down-white" aria-hidden="true"></span>
              </a>
              <ul id="menuDropdownAdmin" class="dropdown-menu">
                <li>
                  <NuxtLink to="/admin/accounts" class="dropdown-item">Comptes</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/admin/tickets" class="dropdown-item">Tickets</NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <a @click="openDropdown('menuDropdownAccount')" class="nav-link" role="button">
                <span id="subMenu" v-if="getName($auth.user.username)">{{ username }}</span> <span
                  class="c-ic-angle-down-white" aria-hidden="true"></span>
              </a>
              <ul id="menuDropdownAccount" class="dropdown-menu">
                <li>
                  <NuxtLink to="/account/settings" class="dropdown-item">Mon compte</NuxtLink>
                </li>
                <li><a @click="logout" class="dropdown-item" role="button">Déconnexion</a></li>
              </ul>
            </li>
          </ul>

          <!-- Waiter -->
          <ul v-if="$auth.user.role === 'waiter'" class="navbar-nav">
            <li><a @click="logout" class="dropdown-item" role="button">Déconnexion</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        username: ''
      }
    },
    mounted() {
      window.onclick = function (event) {
        const elSubMenu = event.target.id;

        if (elSubMenu !== 'subMenu') {
          const subMenus = document.getElementsByClassName('dropdown-menu');
          for (let i = 0; i < subMenus.length; i++) {
            if (subMenus[i].classList.contains('show')) {
              subMenus[i].classList.remove('show');
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
      openDropdown(menuId) {
        const menuDropdown = document.getElementById(menuId);
        menuDropdown.classList.toggle('show');
      },
      openMenu() {
        const btn = document.getElementById('navbarToggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        btn.classList.toggle('open');
        navbarCollapse.classList.toggle('show');
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
