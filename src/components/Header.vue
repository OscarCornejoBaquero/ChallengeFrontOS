<template>
  <div id="app">

    <div>
      <b-navbar toggleable="lg" type="light " variant="warning">
        <b-navbar-brand class="menuItem" href="/">Challenger  Home</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="menuItem" href="TicketFinder">TicketFinder</b-nav-item>
            <b-nav-item class="menuItem" href="SearchResults">SearchResults</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Busqueda"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscador de Contenido</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped>
#app{
  font-family: Bahnschrift;

}
.menuItem:hover{
color: red !important;
}
a {
  color: #42b983;
}
</style>