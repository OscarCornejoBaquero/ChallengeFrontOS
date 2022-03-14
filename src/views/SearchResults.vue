<template>
  <div class="container">
    <div>
      <b-card title="Resultados de búsqueda de tickets aéreos" sub-title="Oscar Cornejo">
        <b-row>
          <b-col cols="12">
            <div class="formato"><h3>Principales Resultados para tu Vuelo</h3></div>
          </b-col>
          <b-col cols="4">
            <div class="formatoCard">
              <b-card
                  no-body
                  style="max-width: 20rem;"
                  img-src="https://s.latamairlines.com/images/seo/logo_latam.jpg"
                  img-alt="Image"
                  img-top
              >
                <template #header>
                  <h4 class="mb-0">{{ $store.getters.result1.aerolinea }}</h4>
                </template>

                <b-card-body>
                  <b-card-title>Vuelo Tipo Económico</b-card-title>
                  <b-card-sub-title class="mb-2">Guayaquil - Quito</b-card-sub-title>
                  <b-card-text>
                    Detalles: Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                  </b-card-text>
                </b-card-body>

                <b-list-group flush>
                  <b-list-group-item>Precio: {{ $store.getters.result1.precio }}</b-list-group-item>
                  <b-list-group-item>Escala: {{ $store.getters.result1.n_escalas }}</b-list-group-item>
                  <b-list-group-item>Duración Vuelo: {{ $store.getters.result1.duracion }}</b-list-group-item>
                </b-list-group>

                <b-card-body>
                  <b-button type="button" v-on:click="reservar" pill variant="outline-success">Reservar</b-button>
                </b-card-body>


              </b-card>
            </div>
          </b-col>
          <b-col cols="4">
            <div class="formatoCard">
              <b-card
                  no-body
                  style="max-width: 20rem;"
                  img-src="https://upload.wikimedia.org/wikipedia/commons/f/f0/LogoAvianca.png"
                  img-alt="Image"
                  img-top
              >
                <template #header>
                  <h4 class="mb-0">{{ $store.getters.result2.aerolinea }}</h4>
                </template>

                <b-card-body>
                  <b-card-title>Vuelo Tipo Económico</b-card-title>
                  <b-card-sub-title class="mb-2">Guayaquil - Quito</b-card-sub-title>
                  <b-card-text>
                    Detalles: Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                  </b-card-text>
                </b-card-body>

                <b-list-group flush>
                  <b-list-group-item>Precio: {{ $store.getters.result2.precio }}</b-list-group-item>
                  <b-list-group-item>Escala: {{ $store.getters.result2.n_escalas }}</b-list-group-item>
                  <b-list-group-item>Duración Vuelo: {{ $store.getters.result2.duracion }}</b-list-group-item>
                </b-list-group>

                <b-card-body>
                  <b-button type="button" v-on:click="reservar" pill variant="outline-success">Reservar</b-button>
                </b-card-body>


              </b-card>
            </div>
          </b-col>
          <b-col cols="4">
            <div class="formatoCard">
              <b-card
                  no-body
                  style="max-width: 25rem;"
                  img-src="https://logos-marcas.com/wp-content/uploads/2020/11/American-Airlines-Logo.png"
                  img-alt="Image"
                  img-top
              >
                <template #header>
                  <h4 class="mb-0">{{ $store.getters.result3.aerolinea }}</h4>
                </template>

                <b-card-body>
                  <b-card-title>Vuelo Tipo Económico</b-card-title>
                  <b-card-sub-title class="mb-2">Guayaquil - Quito</b-card-sub-title>
                  <b-card-text>
                    Detalles: Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                  </b-card-text>
                </b-card-body>

                <b-list-group flush>
                  <b-list-group-item>Precio: {{ $store.getters.result3.precio }}</b-list-group-item>
                  <b-list-group-item>Escala: {{ $store.getters.result3.n_escalas }}</b-list-group-item>
                  <b-list-group-item>Duración Vulo: {{ $store.getters.result3.duracion }}</b-list-group-item>
                </b-list-group>

                <b-card-body>
                  <b-button type="button" v-on:click="reservar" pill variant="outline-success">Reservar</b-button>
                </b-card-body>


              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResults.vue",
  methods: {

    reservar: function () {
      Swal.fire({
        title: 'Esta Seguro que desea Reservar el Vuelo',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si Reservar Vuelo!',
        cancelButtonText: 'No, voy a seguir revisando!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
              'Reservado!',
              'Su vuelo se ha reservado de forma correcta',
              'success'
          )
          setTimeout( function() { window.location.href = "/"; }, 2000 );
        }

      })
    },
  }
}
</script>

<style scoped>
.formato{
  text-align: center;
  font-weight: bold;
  color: saddlebrown;
}
.formatoCard{
  padding-top: 2rem;
  padding-right: 1rem;
}
</style>