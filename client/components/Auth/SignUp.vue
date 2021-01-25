<template>
  <div class="c-row">
    <form class="connection" action="/" method="get">
      <dt>
        <label for="name">Nom</label>
        <input type="text" id="name" autofocus="autofocus" class="c-form-control-input" required>
      </dt>
      <dt>
        <label for="email">Adresse mail</label>
        <input type="email" id="email" autofocus="autofocus" class="c-form-control-input" required>
      </dt>
      <dt>
        <label for="password">Password</label>
        <input type="password" id="password" autofocus="autofocus" class="c-form-control-input" required>
      </dt>
      <div class="btn-block">
        <input type="submit" value="valider">
      </div>
    </form>
  </div>
</template>

