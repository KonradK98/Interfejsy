<template>
  <header role="banner">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <nuxt-link class="navbar-brand ml-auto" to="/" aria-label="Photomiracle">
        <img alt="Photomiracle" title="Przenieś na stronę główną" src="~/assets/images/logo.png" height="100px" />
        </nuxt-link>
        <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav pl-md-5">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link">Główna</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to='/oferta' class="nav-link">Oferta</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to='/cennik' class="nav-link">Cennik</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to='/kontakt' class="nav-link">Kontakt</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  watch: {
    '$route' () {
      $('#navbar-collapse').collapse('hide');
    }
  }
}
</script>

<style scoped>
a.nav-link.nuxt-link-exact-active.nuxt-link-active { 
  color: #fff;
}
</style>