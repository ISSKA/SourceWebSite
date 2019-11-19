<template>
  <div class="container">
    <h1 class="title">Excursion {{ $route.params.id }}</h1>

    <div style="margin-bottom: 20px;">
      Difficuleté : Modérée
      <br />
      Durée : 4 heures
      <br />
      <a href="/docs/excursion-1/Areuse_Fichier_A4_min.pdf" target="_blank">Télécharger la fiche didactique</a>
    </div>

    <h2 class="subtitle">
      SOURCE DE LA NOIRAIGUE ET GORGES DE L’AREUSE (NE)
    </h2>

    <!--
        trouver ou mettre carte de situation
        points d'intérets sous forme de collaps, cards (avec ou sans image de fond), cards avec image a coté ? cards simples ?
        ajouter le lien pour télécharger le pdf complet (ou imprimer la page web ?)
      -->

    <p>
      <b>La source de la Noiraigue</b> est une très belle source qui illustre idéalement le principe de la circulation souterraine des eaux dans un massif
      karstique.
    </p>
    <p>
      <b>Les gorges de l’Areuse</b> sont bien connues des randonneurs. Grâce aux nombreuses sources qui s’y trouvent, elles sont le château d’eau du canton de
      Neuchâtel. Cette excursion permet de les découvrir et de comprendre comment, vers la fin du XIXème siècle, les hommes ont su les capter pour alimenter la
      ville de La Chaux-de-Fonds, située 500 m plus haut et 20 km plus loin.
    </p>

    <!-- ITINERAIRE -->
    <h2 class="subtitle">
      Description de l’itinéraire
    </h2>

    <dl class="row" style="border: 1px solid gray; padding: 10px;">
      <dt class="col-sm-2">Départ</dt>
      <dd class="col-sm-4">Gare de Noiraigue</dd>
      <dt class="col-sm-2">Arrivée</dt>
      <dd class="col-sm-4">Gare de Chambrelien</dd>
      <dt class="col-sm-2">Distance</dt>
      <dd class="col-sm-4">10 km</dd>
      <!-- todo: Dénivellation -> Dénivelé ? -->
      <dt class="col-sm-2">Dénivellation</dt>
      <dd class="col-sm-4">+ 100 m / – 250 m</dd>
      <dt class="col-sm-2">Durée</dt>
      <dd class="col-sm-4">4 heures</dd>
      <dt class="col-sm-2">Restaurants</dt>
      <dd class="col-sm-4">Noiraigue / Champ du Moulin / Chambrelien</dd>
    </dl>

    <p>
      A partir de la gare de Noiraigue, se diriger vers le nord du village et remonté la rivière jusqu’à sa source qui se trouve au pied des falaises de la
      Clusette.
    </p>
    <p>
      Revenir une centaine de mètres sur ses pas et prendre le sentier pédestre qui longe la voie CFF en direction des gorges. Passer à côté de l’usine du
      Furcil, puis de celle du Plan de l’Eau devant laquelle on voit la prise d’eau motrice qui alimente l’usine des Moyats. Longer l’aqueduc couvert et
      continuer en rive gauche, puis franchir une passerelle qui enjambe la rivière avant de revenir en rive gauche en franchissant le magnifique Pont du Saut
      de Brot. Passer devant l’usine des Moyats et rester sur cette rive jusqu’à Champ du Moulin.
    </p>
    <p>
      A Champ du Moulin, traverser le pont et poursuivre la descente des gorges. 1 km plus loin, prendre la passerelle métallique et retourner en rive gauche
      avant de franchir le pont de la Verrerie (pt. 575). 600 m plus loin, passer à nouveau en rive gauche par un pont couvert en bois et dépasser l’usine de
    </p>
    <p>
      200 m après l’usine, rejoindre la route (rive droite). Suivre celle-ci jusqu’au moment où elle commence à monter. Là, prendre à gauche le chemin forestier
      qui longe la rivière. Franchir le Pont de Vert, passer sous un grand abri sous roche (Baume du Four).
    </p>
    <p>
      Après la partie la plus escarpée des gorges (chemin en hauteur, sur rive droite), traverser le pont et monter en direction de la gare de Chambrelien.
    </p>

    <!--<div>
        <b-table :items="items" class="col-md-5" stacked style="background-color: lightgray;"></b-table>
      </div>-->

    <div class="text-centesr" style="height: 650px;">
      <img src="/docs/excursion-1/map.jpg" style="position: absolute; right: 0; left: 0; width: 100%;" />
    </div>

    <!-- POINTS D INTERET -->
    <!--<h3 class="subtitle">
        Points d’intérêt
      </h3>

      <b-card-group deck>
        <div class="row" style="margin-top: 40px; margin-bottom: 40px;">
          <div class="col-6" style="margin-bottom: 40px;">
            <b-card
              overlay
              img-src="https://picsum.photos/900/250/?image=10"
              img-height="200px"
              img-alt="Card Image"
              text-variant="white"
              title="A. La source de la Noiraigue"
              sub-title="xxx"
            >
              <b-card-text>
                Emergence des eaux de la vallée de la Sagne, la source de la Noiraigue est caractérisée par la couleur sombre de son eau due aux terrains
                tourbeux qu’elle a traversé avant de s’enfouir sous terre près des Ponts-de-Martel.
              </b-card-text>
            </b-card>
          </div>
          <div class="col-6" style="margin-bottom: 40px;">
            <b-card
              overlay
              img-src="https://picsum.photos/900/250/?image=11"
              img-height="200px"
              img-alt="Card Image"
              text-variant="white"
              title="B. Les captages"
              sub-title="xxx"
            >
              <b-card-text>
                Le long des gorges, près d’une vingtaine de captages servent à l’alimentation en eau potable de la ville de La Chaux-de-Fonds et de 19 autres
                communes du canton de Neuchâtel.
              </b-card-text>
            </b-card>
          </div>
          <div class="col-6" style="margin-bottom: 40px;">
            <b-card
              overlay
              img-src="https://picsum.photos/900/250/?image=15"
              img-height="200px"
              img-alt="Card Image"
              text-variant="white"
              title="C. Le système d'adduction d'eau en direction de La Chaux-de-Fonds"
              sub-title="xxx"
            >
              <b-card-text>
                Grâce à une prouesse technique, l’eau des sources des gorges est conduite jusqu’à La Chaux-de-Fonds...
              </b-card-text>
            </b-card>
          </div>
          <div class="col-6" style="margin-bottom: 40px;">
            <b-card
              overlay
              img-src="https://picsum.photos/900/250/?image=18"
              img-height="200px"
              img-alt="Card Image"
              text-variant="white"
              title="D. La Gelyelle de Monard"
              sub-title="xxx"
            >
              <b-card-text>
                Crustacé minuscule mais exceptionnel, la Geylelle de Monard vit depuis des millions d’années dans les eaux souterraines des gorges de l’Areuse.
              </b-card-text>
            </b-card>
          </div>
        </div>
      </b-card-group>-->

    <b-list-group>
      <b-list-group-item href="#" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">A. La source de la Noiraigue</h5>
          <!--<small>3 days ago</small>-->
        </div>
        <p class="mb-1">
          Emergence des eaux de la vallée de la Sagne, la source de la Noiraigue est caractérisée par la couleur sombre de son eau due aux terrains tourbeux
          qu’elle a traversé avant de s’enfouir sous terre près des Ponts-de-Martel.
        </p>
        <!--<small>Donec id elit non mi porta.</small>-->
      </b-list-group-item>

      <b-list-group-item href="#" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">B. Les captages</h5>
          <!--<small>3 days ago</small>-->
        </div>
        <p class="mb-1">
          Le long des gorges, près d’une vingtaine de captages servent à l’alimentation en eau potable de la ville de La Chaux-de-Fonds et de 19 autres communes
          du canton de Neuchâtel.
        </p>
        <!--<small>Donec id elit non mi porta.</small>-->
      </b-list-group-item>

      <b-list-group-item href="#" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">C. Le système d'adduction d'eau en direction de La Chaux-de-Fonds</h5>
          <!--<small>3 days ago</small>-->
        </div>
        <p class="mb-1">
          Grâce à une prouesse technique, l’eau des sources des gorges est conduite jusqu’à La Chaux-de-Fonds...
        </p>
        <!--<small>Donec id elit non mi porta.</small>-->
      </b-list-group-item>

      <b-list-group-item href="#" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">D. La Gelyelle de Monard</h5>
          <!--<small>3 days ago</small>-->
        </div>
        <p class="mb-1">
          Crustacé minuscule mais exceptionnel, la Geylelle de Monard vit depuis des millions d’années dans les eaux souterraines des gorges de l’Areuse.
        </p>
        <!--<small>Donec id elit non mi porta.</small>-->
      </b-list-group-item>
    </b-list-group>

    <!-- BONNUS -->
    <h3 class="subtitle" style="margin-top: 40px;">
      Extras
    </h3>

    <b-card-group deck>
      <div class="row" style="margin-top: 40px; margin-bottom: 40px;">
        <image-link-card v-for="extra in extras" :key="extra.index" :content="extra" />
      </div>
    </b-card-group>

    <p>Pour en savoir plus : <a href="https://www.isska.ch" target="_blank">Gorges de l’Areuse. Guide d’excursions hydrogéologiques</a></p>
    <p>Lien vers l'horraire CFF : <a href="https://www.sbb.ch/fr/acheter/pages/fahrplan/fahrplan.xhtml?nach=Noiraigue" target="_blank">cliquez ici svp</a></p>

    <!-- A VOIR AUSSI -->
    <div style="margin-top: 20px; height: 500px;">
      <div style="position: absolute; left: 0; right: 0; padding-top: 40px; padding-bottom: 40px; background-color: #eee;">
        <b-container>
          <h2 style="margin-bottom: 30px;">A voir aussi dans la région</h2>
          <h4>La source de l’Areuse</h4>
          <p>
            Coordonnées 532220 / 196000. A l’ouest du village de St-Sulpice. Anciennes installations industrielles à proximité de la source.
          </p>

          <h4>La cascade et la grotte de Môtiers</h4>
          <p>
            Coordonnées 537650 / 195260. Au sud-est du village de Môtiers. Chute d’eau spectaculaire au pied de laquelle s’ouvre une grotte facile d’accès
            (équipement approprié tout de même requis).
          </p>

          <h4>La baume de Longeaigue</h4>
          <p>
            Coordonnées 529835 / 191670. A proximité de la route qui relie Buttes à Ste-Croix. Belle émergence karstique active uniquement lors de fortes crues.
          </p>
          <!--<b-button variant="primary" href="#">More Info</b-button>-->
        </b-container>
      </div>
    </div>

    <!-- LINKS -->
    <navigation :current-excursion="$route.params.id" />

    <!--
    <div class="map-source-position">
      <b-embed
        type="iframe"
        aspect="4by3"
        src="https://map.geo.admin.ch/embed.html?lang=fr&topic=ech&bgLayer=ch.swisstopo.swissimage&zoom=12&catalogNodes=532,614&E=2604063.20&N=1196879.81&layers_visibility=false,false,false,false&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege&layers_timestamp=18641231,,,"
        allowfullscreen
      ></b-embed>
    </div>
    -->
  </div>
</template>

<script>
import Navigation from '~/components/ExcursionNavigation.vue'
import ImageLinkCard from '~/components/ImageLinkCard.vue'

export default {
  components: {
    Navigation,
    ImageLinkCard
  },
  validate({ params }) {
    // Doit être un nombre
    return /^\d+$/.test(params.id) && params.id > 0 && params.id <= 12
  },
  data() {
    // console.log(this.$route.params.id, typeof this.$route.params.id)

    return {
      extras: [
        {
          index: 3,
          title: 'Extra 3',
          subTitle: 'xxx',
          description: 'ssssssss',
          img: 'https://picsum.photos/900/250/?image=14',
          link: `/excursions/${this.$route.params.id}/extras/3`
        },
        {
          index: 4,
          title: 'Extra 4',
          subTitle: 'xxx',
          description: '',
          img: 'https://picsum.photos/900/250/?image=18',
          link: `/excursions/${this.$route.params.id}/extras/4`
        },
        {
          index: 5,
          title: 'Extra 5',
          subTitle: 'L’alimentation en eau de La Chaux-de-Fonds',
          description: '',
          img: 'https://picsum.photos/900/250/?image=15',
          link: `/excursions/${this.$route.params.id}/extras/5`
        }
      ]
      /* items: [
        {
          Départ: 'Gare de Noiraigue',
          Arrivée: 'Gare de Chambrelien',
          Distance: '10 km',
          Dénivellation: '+ 100 m / – 250 m',
          Durée: '4 heures',
          Restaurants: 'Noiraigue / Champ du Moulin / Chambrelien'
        }
      ] */
    }
  }
}
</script>

<style>
/*
.map-source-position {
  max-width: 800px;
}
*/
</style>
