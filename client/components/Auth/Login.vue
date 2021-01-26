<template>
  <div>
    <form class="connection" action="/" method="get">
      <dl class="required">
        <dt>
          <label for="email">Adresse mail</label>
        </dt>
        <dd>
          <input type="email" id="email" autofocus="autofocus" class="c-form-control-input" required>
        </dd>
      </dl>
      <dl class="required">
        <dt>
          <label for="password">Password</label>
        </dt>
        <dd>
          <input type="password" id="password" autofocus="autofocus" class="c-form-control-input" required>
        </dd>
      </dl>
      <div class="btn-block">
        <input type="submit" class="c-btn c-btn--block c-btn--primary" value="Se connecter">
      </div>
    </form>
    <div class="third-connection-block">
      <h3>Ou</h3>
      <ul class="c-navbar c-navbar--center">
        <li class="c-navbar__item"><a href="#google">Google</a></li>
        <li class="c-navbar__item"><a href="#fb">Facebook</a></li>
      </ul>
    </div>
  </div>
</template>
