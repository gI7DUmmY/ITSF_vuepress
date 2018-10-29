module.exports = {
  title: 'Règles ITSF',
  description: 'résumé du règlement ITSF',
  base: '/itsf_rules/',
  port: 8008,
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }]
  ],
  themeConfig: {
    logo: '/images/logo.png',
    lastUpdated: 'Dernière mise à jour',
    serviceWorker: {
      updatePopup: true, // Boolean | Object, default to undefined.
      // If set to true, the default text config will be: 
      updatePopup: { 
         message: "Le contenu a été mis à jour", 
         buttonText: "Rafraîchir" 
      }
    },
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Définitions', link: '/definitions.md' },
      { text: 'Règlement', link: '/rules/' },
      { text: 'FFFT', link: 'http://www.ffft.fr/' }
    ],
    displayAllHeaders: false,
    sidebar: [
      ['/', 'Accueil'],
      ['/definitions.md', 'Définitions'],
      {
        title: 'Règlement',
        collapsable: true,
        children: [
          '/rules/',
          '/rules/code.md',
          '/rules/le-match.md',
          '/rules/debut-partie.md',
          '/rules/engagement.md',
          '/rules/engagement-suivants.md',
          '/rules/balle-en-jeu.md',
          '/rules/balle-sortie.md',
          '/rules/balle-immo.md',
          '/rules/temps-mort.md',
          '/rules/reprise-jeu.md',
          '/rules/temps-officiel.md',
          '/rules/point-marque.md',
          '/rules/cote-table.md',
          '/rules/positions.md',
          '/rules/roulettes.md',
          '/rules/genes.md',
          '/rules/reset.md',
          '/rules/aire-jeu.md',
          '/rules/modif-table.md',
          '/rules/distraction.md',
          '/rules/entrainement.md',
          '/rules/comportement.md',
          '/rules/passes.md',
          '/rules/temps-possession.md',
          '/rules/retard.md',
          '/rules/rappel-forfait.md',
          '/rules/penalty.md',
          '/rules/decisions.md',
          '/rules/tenue.md',
          '/rules/directeur.md'
        ]
      }
    ]
  }
}