<template>
  <main class="content-connection">
    <h3>Connexion</h3>
    <div>
      <form>
        <dl>
          <dt>
            <label for="emailAdmin">Adresse mail</label>
          </dt>
          <dd>
            <input type="text" name="email" id="emailAdmin">
          </dd>
        </dl>
        <dl>
          <dt>
            <label for="passwordAdmin">Mot de passe</label>
          </dt>
          <dd>
            <input type="password" name="password" id="passwordAdmin">
          </dd>
        </dl>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'admin-connection',
  middleware: ['auth'],
  auth: false
}
</script>
