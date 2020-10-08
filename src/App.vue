<template>
  <div id="app">
      <Header/>
      <div id="main">
          <router-view/>
      </div>
      <Footer/>
  </div>
</template>




<script>
  import Header from 'components/content/Header.vue'
  import Footer from 'components/content/Footer.vue'

  export default {
      components: {
          Header,
          Footer
      }
  }

</script>
<style>
#app {
    display: flex;
    flex-flow: column;
    min-height: 95vh;
}
#main {
    flex: 1;
}
</style>
