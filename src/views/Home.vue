<template>

  <div class="container">
    <div>
      <b-card title="Challenger FrontEnd" sub-title="Oscar Cornejo Baquero">
        <b-card-text>
          Descripción:<br>
          Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
          content. Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
          content.
        </b-card-text>
        <b-card-text>Mapa del Sitio</b-card-text>
        <div>
          <div>
            <b-card-group deck>
              <b-card title="TicketFinder" href="TicketFinder" img-src="https://previews.123rf.com/images/originalwork/originalwork1608/originalwork160800454/61889124-airline-bordkarte-karten-tickets-buchen-zwei-tickets-an-bord-von-flugzeugen-web-template.jpg" img-alt="Image" img-top>
                <b-card-text>
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
                <template #footer>
                  <small class="text-muted">Last updated 3 mins ago </small>
                  <small class="text-muted"><  -  ></small>
                  <b-button pill variant="success" href="TicketFinder" >TicketFinder</b-button>
                </template>
              </b-card>

              <b-card title="SearchResults" href="SearchResults" img-src="https://conpilar.es/wp-content/uploads/2021/04/Consulta-la-informacion-de-vuelo-en-el-iPhone-con-un.jpg" img-alt="Image" img-top>
                <b-card-text>
                  This card has supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <template #footer>
                  <small class="text-muted">Last updated 3 mins ago</small>
                  <small class="text-muted"><  -  ></small>
                  <b-button pill variant="warning" href="TicketFinder" >TicketFinder</b-button>
                </template>
              </b-card>

            </b-card-group>
          </div>
        </div>

      </b-card>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>