<template>
  <div class="c-row">
    <form class="connection" action="/" method="get">
      <dl class="required">
        <dt>
          <label for="name">Nom</label>
        </dt>
        <dd>
          <input type="text" id="name" autofocus="autofocus" class="c-form-control-input" required>
        </dd>
      </dl>
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
      <dl>
        <dt>
          <label for="cdg">
            <input type="checkbox" id="cdg" autofocus="autofocus" class="c-form-control" required> J'accepte les <a
              href="#cdg">conditions génerales</a>
          </label>
        </dt>
      </dl>
      <div class="btn-block">
        <input type="submit" class="c-btn c-btn--block c-btn--primary" value="Je m'inscris">
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
