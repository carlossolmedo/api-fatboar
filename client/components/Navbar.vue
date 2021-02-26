<template>
  <nav class="u-pull-right" role="navigation">
    <ul class="c-navbar c-navbar--right">
      <li v-if="$auth.user.role === 'customer'" class="c-navbar__item"><NuxtLink class="navbar__link" to="/game">Jouer</NuxtLink></li>
      <li v-if="$auth.user.role === 'customer'" class="c-navbar__item"><NuxtLink class="navbar__link" to="/account/prizes">Gains</NuxtLink></li>
      <li v-if="$auth.user.role === 'admin'" class="c-navbar__item"><NuxtLink class="navbar__link" to="/admin">Admin</NuxtLink></li>
      <li class="c-navbar__item">
        <a class="navbar__link"><span v-if="getName($auth.user.username)">{{ username }}</span> <span class="c-ic-angle-down-white" aria-hidden="true"></span></a>
        <ul class="c-menu__submenu" aria-hidden="true">
          <li class="c-menu__subitem" aria-haspopup="true">
            <NuxtLink to="/account/settings">Mon compte</NuxtLink>
          </li>
          <li class="c-menu__subitem" aria-haspopup="true">
            <a @click="$auth.logout()" style="cursor: pointer;">Déconnexion</a>
          </li>
        </ul>
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
  methods: {
    getName(username) {
      if (username) {
        let name = username.split(' ');
        return this.username = name[0];
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-navbar__item:hover > .c-menu__submenu {
    visibility: visible;
    opacity: 1;
  }

  .c-menu__submenu {
    position: absolute;
    top: 100%;
    left: 0;
    visibility: hidden;
    min-width: 200px;
    margin: 0;
    padding: 0;
    list-style: none;
    opacity: 0;
    transition: opacity 0.1s ease-out;
    background-color: #ffffff;
  }

  .c-menu__subitem {
    position: relative;
    margin: 0;
    padding: 0;

    &:hover {
      a {
        color: black;
      }
    }

    & a {
      display: block;
      padding: 0.6875rem 0.875rem;
      text-align: left;
      text-decoration: none;
      color: #7952b3;
      transition: background-color 0.1s ease-out, color 0.1s ease-out;
    }
  }
</style>
