<template>

  <div class="container">
    <div>
      <div>
        <b-card title="Buscador de Tickets Aereos" sub-title="" >
          <b-card-text>
            <i class="fas fa-ticket-alt"></i>
            Los campos con un <span class="color">*</span> son obligatorios.
          </b-card-text>
          <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-row>
              <b-col cols="6">
                <b-form-group id="input-group-1" label="Ciudad de Origen:" label-for="input-1">

                  <b-form-select
                      id="input-1"
                      v-model="form.hometown"
                      :options="city"
                      required
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group id="input-group-2" label="Ciudad de Destino:" label-for="input-2">
                  <b-form-select
                      id="input-2"
                      v-model="form.destination_city"
                      :options="citydestination"
                      required
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <div>
                  <b-form-group id="input-group-3" label="Fecha de Salida:" label-for="input-3">
                  <b-form-datepicker id="input-3" :state="true"  v-model="form.departure_date" class="mb-2"></b-form-datepicker>
                  </b-form-group>
                </div>

              </b-col>
              <b-col cols="6">
                <div>
                  <b-form-group id="input-group-4"  label="Fecha de Retorno:" label-for="input-3">
                  <b-form-datepicker id="input-4" :state="true" v-model="form.return_date" class="mb-2"></b-form-datepicker>
                  </b-form-group>
                </div>
              </b-col>
            </b-row>






              <b-button type="submit" pill variant="outline-success">Enviar Reserva</b-button>
              <span class="botones"></span>
              <b-button type="reset" pill variant="outline-danger">Nueva Busqueda</b-button>
            </b-form>

          </div>

        </b-card>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      form: {
        hometown: '',
        selected: 'Seleccione una Opcion',
        destination_city: '',
        departure_date: '',
        return_date: ''
      },
      city: [{  text: 'Seleccione un destino' , value: null,  }, 'Guayaquil', 'Quito', 'Cuenca', 'Machala', 'Esmeraldas','Salinas'],
      citydestination: [{  text: 'Seleccione un destino' , value: null,  }, 'Guayaquil', 'Quito', 'Cuenca', 'Machala', 'Esmeraldas','Salinas'],
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.hometown = ''
      this.form.destination_city = ''
      this.form.departure_date = ''
      this.form.return_date = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>
.color{
  color:red;
}.botones{
  padding-left: 5rem;
 }
</style>