<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{ $t('about.title') }}
      </h1>
      <div>
        <p>
          Ce site internet a été développé en complément au livre <em>Aux sources de la Suisse</em> édité en 2021 par Haupt Verlag sous la signature de Rémy
          Wenger, Jean-Claude Lalou et Roman Hapka.
        </p>

        <p>
          Il a été développé par l’Institut suisse de spéléologie et de karstologie (ISSKA) à La Chaux-de-Fonds.
        </p>

        <p>
          Une partie des informations contenues dans la description des itinéraires de randonnée proposés sur ce site sont extraites du livre.
        </p>

        <!-- CONTRIBUTEURS -->
        <h2 style="margin-top: 40px; margin-bottom: 30px;">Contributeurs</h2>

        <div class="row">
          <div class="col-md-6">
            <b-img blank blank-color="#ccc" height="100" width="200" style="margin-bottom: 20px;" /><br />
            <strong>FP / SL</strong><br />
            Fondation suisse pour la protection et l'aménagement du paysage<br />
            Stiftung Landschaftsschutz Schweiz<br />
            <a href="https://www.sl-fp.ch">www.sl-fp.ch</a>
          </div>
          <div class="col-md-6">
            <img src="img/logo_isska.png" height="100" style="margin-bottom: 20px;" /><br />
            <strong>ISSKA</strong><br />
            Institut suisse de spéléologie et de karstologie<br />
            <a href="https://www.isska.ch">www.isska.ch</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
