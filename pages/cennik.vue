<template>
  <div class="inner_contact">
  <HeroImageVue text="Cennik" bgHero="cennik.jpg" sub="Ceny naszych usług"/>
    <section class="section">
    <div class="container pb-5">
      <div class="row">
        <div class="col-12 text-center element-animate">
          <h2>Ceny zdjęć</h2>
        </div>
      </div>

      <div id="zdjęcia-weselne" class="pl-5 pr-5 pt-5 row d-flex align-items-stretch justify-content-center element-animate">
        <div class="feature-1 d-md-flex ofert-item w-100" style="background: #c2dbad">
          <div class="align-self-center w-100">
            <h3 class="text-center">Zdjęcia weselne</h3>
            <hr>
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-md-8">Zdjęcia z uroczystości</div>
              <div class="col-md-4 text-right">800zł</div>
            </div>
            <hr>
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-md-8">Film z uroczystości</div>
              <div class="col-md-4 text-right">1000zł</div>
            </div>
            <hr>
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-md-8">Nagranie dojazdu do kościoła (np. limuzyną)</div>
              <div class="col-md-4 text-right">700zł</div>
            </div>
            <hr>
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-md-8">Film i zdjęcia z imprezy</div>
              <div class="col-md-4 text-right">1200zł</div>
            </div>
            <hr>
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-md-8">Nagrania dronem</div>
              <div class="col-md-4 text-right">+500zł</div>
            </div>
          </div>
        </div>
      </div>

      <div id="zdjęcia-indywidualne" class="pl-5 pr-5 pt-5 row d-flex align-items-stretch justify-content-center element-animate">
        <div class="feature-1 d-md-flex ofert-item w-100" style="background: #c2dbad">
          <div class="align-self-center w-100">
            <h3 class="text-center">Zdjęcia indywidualne</h3>
            <hr>
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-md-8">Sesja w plenerze</div>
              <div class="col-md-4 text-right">500zł</div>
            </div>
            <hr>
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-md-8">Zdjęcia kliszowe</div>
              <div class="col-md-4 text-right">300zł</div>
            </div>
            <hr>
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-md-8">Sesja z green screen</div>
              <div class="col-md-4 text-right">800zł</div>
            </div>
            <hr>
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-md-8">Sesja w studiu</div>
              <div class="col-md-4 text-right">1000zł</div>
            </div>
          </div>
        </div>
      </div>


      <div id="zdjęcia-okolicznościowe" class="pl-5 pr-5 pt-5 row d-flex align-items-stretch justify-content-center element-animate">
        <div class="feature-1 d-md-flex ofert-item w-100" style="background: #c2dbad">
          <div class="align-self-center w-100">
            <h3 class="text-center">Zdjęcia okolicznościowe</h3>
            <hr>
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-md-8">Pakiet usług urodzinowych (zdjęcia + krótki film)</div>
              <div class="col-md-4 text-right">900zł</div>
            </div>
            <hr>
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-md-8">Chrzciny/Komunia</div>
              <div class="col-md-4 text-right">800zł</div>
            </div>
            <hr>
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-md-8">Nagrania dronem</div>
              <div class="col-md-4 text-right">+500zł</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

   
  </div>
</template>

<script>
import HeroImageVue from '~/components/MainPicture.vue'
import GoogleMapsVue from '~/components/GoogleMaps.vue'
export default {
  components: {
    HeroImageVue,
    GoogleMapsVue
  },
   head() {
    return {
      title: 'Cennik',
    }
  },
  mounted(){
  this.$contentWayPoint();
  },
}
</script>

<style>
</style>
