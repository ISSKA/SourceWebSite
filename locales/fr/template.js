export default {
  default_head_title: 'RandoSources.ch - Randonnées vers les sources',
  layout: {
    title: 'Randonnées vers les sources',
    intro: 'Des excursions pour découvrir la Suisse et ses sources',
    btn_excursions: 'Les randonnées'
  },
  menu: {
    website_name: 'RandoSources.ch',
    home: 'Accueil',
    excursions: 'Liste des randonnées',
    about: 'A propos',
    contact: 'Contact'
  },
  footer: {
    copyright_brand: 'RandoSources.ch'
  },
  home: {
    text: [
      'La Suisse compte des milliers de sources : petites ou grandes, discrètes ou spectaculaires, facilement accessibles ou pas, belles ou modestes...',
      'Vous trouverez ici une série d’itinéraires qui vous amèneront vers des sources remarquables à un titre ou à un autre. Celle-ci est urbaine, celle-là sauvage, une autre bucolique. Mais toutes sont dignes d’intérêt et devraient susciter la curiosité de leurs visiteurs.'
    ],
    excursions_list: 'Les randonnées',
    table: {
      name: 'Nom',
      type: 'Type de randonnée',
      canton: 'Canton'
    },
    excursions_selection: 'Sélection de randonnées',
    display_all_excursions: 'Afficher toutes les randonnées'
  },
	smartphone_guide: {
		link_smartphone: 'Utiliser ce site comme une application pour smartphone',
		path_link: "/smartphone",
		intro: "Il est possible de créer un raccourci vers une page web sur l'écran de notre smartphone. Ce site web sera ensuite accessible comme une application (vous pourrez également accéder aux pages précédemment visitées sans connexion internet). La manière d'importer ce raccourci peut changer suivant les smartphones, mais celà reste relativement simple.",
		guide_title: "Démarche pour la plupart des appareils android :",
		step_1: 'Ouvrir votre navigateur (Google Chrome si possible) et accéder au site randosources.',
		step_2: 'Cliquer sur les 3 points pour accéder aux options du navigateur.',
		step_3: 'Cliquer sur "Ajouter à l\'écran d\'accueil".',
		img_1: "/img/smart1.png",
		img_2: "/img/smart2.png",
		concl_begin: "Si la démarche ci-dessus ne fonctionne pas sur votre appareil, veuillez consulter un guide plus complet",
		concl_link1_1: "https://fr.wikihow.com/cr%C3%A9er-un-raccourci-de-favori-sur-l%27%C3%A9cran-d%27accueil-d%27un-Android",
		concl_link1_2: "pour android",
		between_links: "ou",
		concl_link2_1: "https://www.clubic.com/tutoriels/article-889913-1-comment-ajouter-raccourci-web-page-accueil-iphone.html",
		concl_link2_2: "pour Iphone"
	},
  excursions_list: {
    title: 'Liste des randonnées'
  },
  excursion: {
    infos: {
      level: 'Difficulté',
      duration: 'Durée',
      start: 'Départ',
      end: 'Arrivée',
      distance: 'Distance',
      delta_height: 'Dénivellation',
      restaurant: 'Restaurants',
      type: 'Type de randonnée',
	  hebergement: 'Hébérgement',
    },
    link_swissmobile: 'Afficher le tracé sur SuisseMobile',
    link_geoadmin: 'Afficher le tracé sur GeoAdmin',
    education_sheet_link: 'Télécharger cette randonnée en PDF',
    route: {
      title: 'Description de l’itinéraire',
      legend: 'Cliquez sur un point d’intérêt pour afficher ses informations.',
    },
    point_of_interest: 'Points d’intérêt le long du parcours',
    extras: 'A voir aussi dans la région',
    more: 'Références',
    cff: {
      text: 'horaire CFF',
      link: 'cliquez ici'
    },
    to_see_in_the_region: 'A voir aussi dans la région'
  },
  extra: {
    excursions_label: 'Randonnées',
    prev_text: 'Précédent',
    return_title: 'Randonnée',
    return_text: 'Retour à la randonnée',
    next_text: 'Suivant'
  },
  contact: {
    title: 'Formulaire de contact',
    infos: 'Pour nous contacter, merci de remplir le formulaire ci-dessous.',
    email: 'Adresse e-mail',
    name: 'Nom et prénom',
    content: 'Message',
    send: 'Envoyer',
    success_message_sent: 'Votre message a bien été envoyé, nous vous en remercions !'
  },
  about: {
    title: 'A propos',
    description: [
      'Ce site internet a été développé en complément au livre "Aux sources de la Suisse" édité en 2021 par Haupt Verlag sous la signature de Rémy Wenger, Jean-Claude Lalou et Roman Hapka.',
      'Il a été développé par l’Institut suisse de spéléologie et de karstologie (ISSKA) à La Chaux-de-Fonds.',
      'Une partie des informations contenues dans la description des itinéraires de randonnée proposés sur ce site sont extraites du livre.'
    ],
    contributors: 'Contributeurs',
    fp: {
      short_name: 'FP',
      name: 'Fondation suisse pour la protection et l’aménagement du paysage'
    },
    isska: {
      short_name: 'ISSKA',
      name: 'Institut suisse de spéléologie et de karstologie'
    },
    lr: {
      short_name: 'LoRo',
      name: 'Loterie Romande'
    },
    ofev: {
      short_name: 'OFEV',
      name: 'Office fédéral de l’environnement'
    }
  }
}
