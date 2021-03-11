<template>
  <div class="c-container text-conditions">
    <article class="c-row">
      <h1>Politique de Confidentialité</h1>
      <section>
        <h2>Données personnelles</h2>
        <p>Les dispositions qui suivent détaillent la façon dont <strong>FatBoar S.A.</strong> collecte et utilise vos données personnelles et vous informe des mesures prises pour en assurer la protection suite à votre consultation de notre Site. <strong>FatBoar S.A.</strong> protège la vie privée de ses internautes en respectant la règlementation applicable en vigueur. Nous vous invitons à consulter régulièrement notre Politique de Confidentialité pour prendre connaissance des dernières dispositions en date. Les pratiques des sites tiers, en lien avec le Site, en matière de collecte et d'utilisation des données personnelles, n'entrent pas dans le cadre de la présente Politique de Confidentialité.</p>
        <p>Vous déclarez et garantissez l'authenticité et l'exactitude de toutes les informations que vous nous soumettez. En utilisant le Site et en nous envoyant vos données personnelles, vous consentez à ce qu'elles soient recueillies et utilisées par <strong>FatBoar S.A.</strong> dans les conditions indiquées ci-après. La présente Politique de Confidentialité s'applique exclusivement à la collecte de données en ligne et ne concerne pas les informations recueillies par d'autres moyens.</p>
        <dl>
          <dt><h3>1.1 Quelles données personnelles recueillons-nous et pourquoi ?</h3></dt>
          <dd>Lorsque vous nous contactez, par l'intermédiaire de notre formulaire d'inscription ou lors d'un abonnement à notre newsletter électronique, vous nous fournissez expressément des données personnelles comme : nom complet et adresse électronique. Ces données sont conservées au sein de notre base de données qui permet à <strong>FatBoar S.A.</strong> de vous fournir les informations que vous nous avez demandées. Nous sommes également susceptibles d'utiliser ces données dans le cadre du suivi de l'activité du Site. Ce suivi nous permet de mieux comprendre la façon dont vous utilisez le Site et, ainsi, de mieux vous servir.</dd>
          <dd>Nous n'utiliserons les informations vous concernant qu'aux fins indiquées ci-dessous :
            <ul>
              <li>Vous envoyer notre Newsletter, si vous y avez souscrit.</li>
              <li>Analyser la fréquentation de notre site.</li>
            </ul>
          </dd>
          <dd>
            <strong>FatBoar S.A.</strong> a pris toutes les dispositions nécessaires afin de respecter le nouveau Règlement de l'UE sur la protection des données personnelles (Règlement général sur la protection des données du 27 avril 2016 ou RGPD) qui est entré en vigueur le 25 mai 2018.
          </dd><br/>
        </dl>
        <dl>
          <dt><h3>1.2. Droit d'accès, de rectification et de suppression (droit à l'oubli)</h3></dt>
          <dd>L'utilisateur dispose d'un droit d'accès, de rectification et de suppression des données le concernant ainsi que d'un droit d'opposition totale ou partielle, pour des motifs légitimes, au traitement de ces données. Il peut exercer tous ces droits en s'adressant à la rubrique Mon compte / Suppression de compte. Afin que nous puissions satisfaire à cette demande.</dd>
        </dl><br/>
        <dl>
          <dt><h3>1.3. Désabonnement de la Newsletter</h3></dt>
          <dd>Le Site propose une « Newsletter » auquel vous avez la liberté de souscrire et qui contient notamment des informations sur les gammes des produits <strong>FatBoar</strong> ou sur nos nouveautés.</dd>
          <dd>Les internautes qui souhaitent se désinscrire peuvent le faire en cliquant simplement sur le lien prévu à cet effet inclus dans chaque Newsletter, ou en remplissant le formulaire de contact, rubrique Politique de Confidentialité / Données Personnelles et en précisant la demande, ainsi que l'adresse e-mail à désinscrire. La demande sera prise en compte par <strong>FatBoar S.A.</strong> dans les meilleurs délais.</dd>
        </dl>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>
          Les «cookies» sont de petits fichiers de données stockés par votre navigateur sur le disque dur de votre ordinateur. La plupart des logiciels de navigation sur Internet acceptent automatiquement ces fichiers, mais vous pouvez en principe modifier les paramètres pour désactiver cette fonction (reportez-vous pour ce faire à l'Aide ou au Mode d'emploi de votre navigateur pour connaître la procédure d'activation/désactivation). Durant votre visite sur notre Site, nous utilisons deux types de cookies:<br/>
          <ul>
            <li>Les «cookies de session» qui servent à suivre les pages que vous consultez et à savoir si vous avez déjà visité le Site auparavant, ce qui nous permet de répondre à vos besoins et de comprendre comment les visiteurs utilisent notre Site.</li>
            <li>Les «cookies d'analyse» qui sont enregistrés lors de votre première visite sur notre Site et revalidés à chacune de vos prochaines visites afin de nous permettre d'obtenir des statistiques sur l'utilisation de notre Site. Ces informations nous servent à améliorer votre expérience de navigation. Le recours à un service d'analyse d'audience nous permet d'améliorer le service que nous vous offrons.</li>
          </ul>
          Veuillez noter que les cookies que nous utilisons ne contiennent AUCUNE DONNÉE PERSONNELLE et sont utilisés uniquement par <strong>FatBoar S.A.</strong> à des fins d'analyse, dans le but d'améliorer le service fourni sur notre Site.
          Si vous choisissez de désactiver tous les cookies, il est possible que l'accès à certaines parties du Site ne fonctionne pas.
        </p>
      </section>
      <section>
        <h2>Droit applicable et For</h2>
        <p>
          Tout litige qui pourrait survenir en relation avec l'application ou l'interprétation des dispositions qui règlent le fonctionnement du Site ou son contenu sera soumis au droit français, à l'exclusion de ses règles de droit international privé régissant les conflits de lois.
        </p>
      </section>
    </article>
  </div>
</template>

<script>
  export default {
    middleware: ['auth'],
    auth: false,
    head: {
      title: 'Politique de Confidentialité'
    }
  }
</script>

<style scoped>
  .text-conditions {
    line-height: 2rem;
  }
  h1, h2 {
    color: #7952b3;
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
  h3, p, section {
    margin-bottom: 1rem;
  }
</style>
