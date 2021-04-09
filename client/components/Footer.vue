<template>
  <footer class="footer-style" :class="$store.state.bodyClass">
    <div class="content-link-footer">
      <NuxtLink class="link-footer" to="/conditions">Conditions Générales</NuxtLink>
      <NuxtLink class="link-footer" to="/terms">Mentions Légales</NuxtLink>
      <NuxtLink class="link-footer" to="/privacy">Politique de Confidentialité</NuxtLink>
      <NuxtLink class="link-footer" to="/contact">Contact</NuxtLink>
    </div>
    <div class="text__copyright" :class="$store.state.bodyClass">&copy; Fatboar 2021</div>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    margin-bottom: 3rem;

    &.footer-style {
      & a {
        color: #7952b3;

        &:hover,
        &:focus {
          color: #0a58ca;
        }
      }

      &.index,
      &.game {
        & a {
          transition: background-color 0.1s ease-out,
            color 0.1s ease-out;
          color: #fff;
          opacity: 0.5;

          &:hover {
            color: #fff;
            opacity: 1;
          }
        }
      }
    }

    .text {
      &__copyright {
        text-align: center;
        color: #63707c;

        &.index,
        &.game {
          color: #f7bc06;
        }
      }
    }
  }

</style>
