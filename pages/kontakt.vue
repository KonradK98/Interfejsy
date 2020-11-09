<template>
  <div class="inner_contact">
  <HeroImageVue text="Kontakt" bgHero="oferta2.jpg" sub="Dane kontaktowe"/>
    <section class="section border-bottom">
      <div class="container">
        <div class="row element-animate">
          
          <!-- Dane kontaktowe -->
          <div class="col-md-6 order-2 mb-5">
            <div class="row justify-content-right">
              <div class="col-md-8 mx-auto contact-form-contact-info">
                <h4>Dane kontaktowe:</h4>
                <p class="d-flex">
                  <span id="icon" class="ion-ios-location text-success icon mr-5"></span>
                  <span class="mb-1 align-self-center"><a href="https://goo.gl/maps/9TrQ3KqZupV9AqrP6">Zdjęciowa 11, 99-000 Łódź, Polska</a></span>
                </p>
                <div>
                  <p id="nametag" class="d-flex" style="margin-bottom: 0px; margin-top: 0px">
                    <span class="ml-5 align-self-center">Sekretariat:</span>
                  </p>
                  <p class="d-flex">
                    <span id="icon" class="ion-ios-telephone text-success icon mr-5"></span>
                    <span class="mb-1 align-self-center"><a href="tel:000000000">000 000 000</a></span>
                  </p>
                </div>
                <!-- Mail do konaktu -->
                <p class="d-flex danekont align-self-center">
                  <span id="icon" class="ion-android-mail text-success icon mr-5"></span>
                  <span class="mb-2 align-self-center">
                    <a href="mailto:dentox@wp.pl">photomiracle@gmail.com</a></span>
                </p>
                <!-- nip -->
                <p class="d-flex danekont align-self-center">
                  <span id="icon" class="ion-briefcase text-success icon mr-5"></span>
                  <span class="mb-1 align-self-center">
                    NIP: 111-222-33-44</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-5 order-2">
            <form action="mailto:pwkonstal@wp.pl" method="post">
              <div class="row">
                <div class="col-md-6 form-group">
                  <label for="name">Imię i nazwisko</label>
                  <input type="text" id="name" class="form-control ">
                </div>
                <div class="col-md-6 form-group">
                  <label for="phone">Telefon</label>
                  <input type="text" id="phone" class="form-control ">
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" class="form-control ">
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="message">Wiadomość</label>
                  <textarea name="text" id="message" class="form-control " cols="30" rows="8"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-8 form-group">
                  <input type="submit" value="Wyślij wiadomość" class="btn btn-success px-3 py-3">
                </div>
              </div>
            </form>
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
      title: 'Kontakt',
    }
  },
  mounted(){
  this.$contentWayPoint();
  },
}
</script>

<style>
</style>
