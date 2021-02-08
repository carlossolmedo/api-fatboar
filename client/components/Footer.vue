<template>
  <footer>
    <div class="c-container">
      <ul class="c-navbar c-navbar--center">
        <li class="c-navbar__item"><a href="/conditions" :class="{'footer__link': pageIndex, 'footer__link-primary': !pageIndex}">Condition Générales</a></li>
        <li class="c-navbar__item"><a href="/terms" :class="{'footer__link': pageIndex, 'footer__link-primary': !pageIndex}">Mentions Légales</a></li>
        <li class="c-navbar__item"><a href="/privacy" :class="{'footer__link': pageIndex, 'footer__link-primary': !pageIndex}">Politique de Confidentialité</a></li>
      </ul>
      <div class="u-text-center" :class="{'text__copyright-home': pageIndex, 'text__copyright-default': !pageIndex}">&copy; Copyright Fatboar 2021</div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    pageIndex: { type: Boolean }
  }
}
</script>
