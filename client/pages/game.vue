<template>
  <main class="content">
    <div class="bg-purple"></div>
    <div class="c-container text-container">
      <div class="c-row c-row--center c-row--middle">
        <form>
          <input type="text" name="ticket-number" placeholder="xxxxxxxxxx">
          <div>
            <button class="c-btn c-btn--info">Valider</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  middleware: 'auth'
}
</script>
