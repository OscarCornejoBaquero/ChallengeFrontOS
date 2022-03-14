<template>
  <div id="app">
    <div id="header">
      <Header/>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
    <div id="footer">
      <Footer/>
    </div>

    </div>
</template>


<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
  components: {
    Header,
    Footer
  },
};

</script>

<style>
html, body {
  height: 100%;
}

#app {
  min-height: 100%;
  position: relative;
}
#content {
  padding-bottom: 81px;
}
#footer {
  width: 100%;
  height: 81px;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>