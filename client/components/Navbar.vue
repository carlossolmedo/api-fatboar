<template>
  <nav class="u-pull-right" role="navigation">
    <ul class="c-navbar c-navbar--right">
      <li class="c-navbar__item"><a href="#blog">Blog</a></li>
      <li class="c-navbar__item"><a href="#menu">Menu</a></li>
      <li class="c-navbar__item">
        <a href="#user">User <span class="c-ic-angle-down" aria-hidden="true"></span></a>
        <ul class="c-menu__submenu" aria-hidden="true">
          <li class="c-menu__subitem" aria-haspopup="true">
            <a href="#">Settings</a>
          </li>
          <li class="c-menu__subitem" aria-haspopup="true">
            <a href="#">Logout</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {

  }

</script>

<style lang="scss">
  .c-navbar__item {

    a {
      transition: background-color 0.1s ease-out, color 0.1s ease-out;

      &:hover {
        color: inherit;
      }
    }
  }

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
    background-color: rgba(17, 17, 17, 0.8);
  }

  .c-menu__subitem {
    position: relative;
    margin: 0;
    padding: 0;

    &:hover {
      background-color: white;

      a {
        color: black;
      }
    }

    & a {
      display: block;
      padding: 0.6875rem 0.875rem;
      text-align: left;
      text-decoration: none;
      transition: background-color 0.1s ease-out, color 0.1s ease-out;
    }
  }

</style>
