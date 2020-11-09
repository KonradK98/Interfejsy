<template>
  <div class="root">
      <MainPicture text="Usługi" bgHero="tło4.jpg" sub="Jakie zdjęcia wykonujemy?"/>

  <section class="section">
    <div class="container pb-5">
      <div class="row mb-5">
        <div class="col-12 text-center element-animate">
          <h2>Nasza oferta zdjęć</h2>
        </div>
      </div>

      <div class="row">
        <div class="card w-50">
          <div class="card-body ofert-item element-animate" style="background: #c2dbad" >
            <h5 class="card-title">Zdjęcia weselne</h5>
            <p class="card-text">Ślub to niezapomniane wydarzenie w życiu każdego człowieka. Nasze zdjęcia uwiecznią te piękne chwile. Oferujemy zdjęcia i filmy, zarówno z uroczystości, jak i z imprezy. Ponadto oferujemy nagranie dojazdu na ceremonię oraz nagrania z drona.</p>
            <nuxt-link to='/cennik#zdjęcia-weselne' class="p-0 nav-link">Ceny</nuxt-link>
          </div>
        </div>
        <div class="col w-50">
        ​<picture>
          <img src="../assets/images/oferta.jpg" class="img-fluid img-thumbnail" alt="...">
        </picture>
        </div>
      </div>

      <div class="row">
        <div class="card w-50">
          <div class="card-body ofert-item element-animate" style="background: #c2dbad">
            <h5 class="card-title">Zdjęcia indywidualne</h5>
            <p class="card-text">Idealne dla aspirujących modelek/modeli, ale także odpowiednie dla osób z większym doświadczeniem w modelingu. Oferujemy zdjęcia w profesjonalnym studio, z użyciem greenscreen, a także zdjęcia w plenerze. Każdy znajdzie ofertę dla siebie.</p>
            <nuxt-link to='/cennik#zdjęcia-indywidualne' class="p-0 nav-link">Ceny</nuxt-link>
          </div>
        </div>
        <div class="col w-50">
          ​<picture>
            <img src="../assets/images/oferta2.jpg" class="img-fluid img-thumbnail" alt="...">
          </picture>
        </div>
      </div>
      
      <div class="row">
        <div class="card w-50">
          <div class="card-body ofert-item element-animate" style="background: #c2dbad" >
            <h5 class="card-title">Zdjęcia okolicznościowe</h5>
            <p class="card-text">Uwiecznij wyjątkowe wydarzenia w życiu, takie jak chrzest, komunia czy osiemnaste urodziny. Oferujemy pakiety na każdą okazję, gwarantujemy najwyższą jakość i zadowolenie gości jak i celebrujących.</p>
            <nuxt-link to='/cennik#zdjęcia-okolicznościowe' class="p-0 nav-link">Ceny</nuxt-link>
          </div>
        </div>
        <div class="col w-50">
          ​<picture>
            <img src="../assets/images/oferta3.jpg" class="img-fluid img-thumbnail" alt="...">
          </picture>
        </div>
      </div>
    </div>
  </section>
  </div>

</template>

<script>
import MainPicture from '~/components/MainPicture.vue'
export default {
  components: {
    MainPicture
  },
  head() {
    return {
      title: 'Oferta'
    }
  },
  mounted() {
    this.$contentWayPoint()
  }
}
</script>

<style>
section.section {
  padding: 4em 0 0 !important;
}
</style>