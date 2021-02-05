<template>
  <div class="c-container">
    <h1>Mentions Légales</h1>
    <h2>À propos du site</h2>
    <div class="c-row">
      <section class="c-row__col c-row__col--1-1">
        <h3>Direction de la publication</h3>
          <table>
            <tr>
              <th>Représentant</th>
              <td>Eric Bourdon</td>
            </tr>
            <tr>
              <th>Société</th>
              <td>FatBoar SA au capital social de 750 000 €</td>
            </tr>
            <tr>
              <th>Siège</th>
              <td>1Bis Rue Gustave Eiffel<br/>78280 Guyancourt - France</td>
            </tr>
            <tr>
              <th>Tél</th>
              <td>01 30 48 60 88</td>
            </tr>
            <tr>
              <th>Fax</th>
              <td>01 30 48 62 40</td>
            </tr>
            <tr>
              <th>N°TVA</th>
              <td>FR12325373045</td>
            </tr>
            <tr>
              <th>RCS Paris</th>
              <td>325 373 117</td>
            </tr>
          </table>
      </section>
      <section class="c-row__col c-row__col--1-1">
        <h3>Développement, Conception, Création</h3>
        <table>
          <tr>
            <th>Société</th>
            <td>Web agency - FuriousDucks SA au capital social de 100 000 €</td>
          </tr>
          <tr>
            <th>Siège</th>
            <td>170 Rue de Courcelles<br/>75017 Paris - France</td>
          </tr>
          <tr>
            <th>N°SIREN</th>
            <td>48806573100025</td>
          </tr>
          <tr>
            <th>Code APE</th>
            <td>6201Z</td>
          </tr>
          <tr>
            <th>N°TVA</th>
            <td>FR53488065731</td>
          </tr>
          <tr>
            <th>RCS Paris</th>
            <td>488 065 731</td>
          </tr>
        </table>
      </section>
      <section class="c-row__col c-row__col--1-1">
        <h3>Hébergement</h3>
        <p>
          <strong>Adresse Postal</strong><br/>
          ONLINE SAS<br/>
          BP 438 75366 PARIS CEDEX 08<br/><br/>
          <strong>Contact</strong><br/>
          Vous pouvez joindre notre service clientèle par téléphone 24h/24, 7j/7 au +33 (0)899 173 788 (appel non surtaxé) ou via notre formulaire de contact https://www.online.net/<br/><br/>
          SAS au capital de 214 410,50 euros<br/>RCS Sarreguemines B 431 303 775
        </p>
      </section>
      <section>
        <h3>Droits d'auteurs</h3>
        <p>
          La société <strong>FatBoar</strong> a ouvert ce site pour l'information personnelle de ses utilisateurs. Aucune exploitation commerciale même partielle des données qui y sont présentées ne pourra être effectuée sans l'accord préalable et écrit de la société <strong>FatBoar SA</strong>.
        </p>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  h1, h2, h3 {
    color: rgb(97, 66, 130);
  }
  h3, section {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  h2 {
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
  }
  h3 {
    font-size: 1.313rem;
  }

  table {
    width: 100%;
    th {
      text-align: left;
    }
    @media (min-width: 576px) {
      width: 50%;
    }
  }
</style>
