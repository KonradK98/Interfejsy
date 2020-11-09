<template>
  <div class="root">
    <MainSlider :text='texts' image1="tło1.jpg" image2="tło2.jpg" image3="tło3.jpg"/>
    <section id="advs-section" style="background: #bababa">
      <div class="container">
        <div class="row">

          <div class="col element-animate ">
            <div class="media block-6 d-block text-center">
              <div class="icon mb-3"><span class="ion-thumbsup text-success"></span></div>
              <div class="media-body">
                <h3 class="heading">Wizerunek</h3>
                <p>Nasi klienci zawsze są zadowoleni z usług. Wielokrotnie nowi klienci trafiali do nas z polecenia znajomych.</p>
              </div>
            </div> 
          </div>

          
          <div class="col element-animate ">
            <div class="media block-6 d-block text-center">
              <div class="icon mb-3"><span class="ion-ios-time text-success"></span></div>
              <div class="media-body">
                <h3 class="heading">Punktualność</h3>
                <p>Zawsze dotrzymujemy terminu zdjęć. Gwarancja dostarczenia obrobionych zdjęć, maksymalnie 2 tygodnie po wydarzeniu.</p>
              </div>
            </div>
          </div>

          <div class="col element-animate ">
            <div class="media block-6 d-block text-center">
              <div class="icon mb-3"><span class="ion-card text-success"></span></div>
              <div class="media-body">
                <h3 class="heading">Jakość</h3>
                <p>Nasze zdjęcia są zawsze dostosowane do wymagań klienta. Satysfakcja z efektów gwarantowana.</p>
              </div>
            </div>
          </div>

          <div class="col element-animate ">
            <div class="media block-6 d-block text-center">
              <div class="icon mb-3"><span class="ion-paper-airplane text-success"></span></div>
              <div class="media-body">
                <h3 class="heading">Wyjątkowe ujęcia</h3>
                <p>Nasza firma jest wyposażona w drony, które gwarantują niezwykłe ujęcia z lotu ptaka.</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MainSlider from '@/components/MainSlider.vue'

// import carousel from 'vue-owl-carousel'
export default {
  components: {
    MainSlider,
  },
  head() {
    return {
      title: 'Photomiracle',
      titleTemplate: null,
      meta: [
        {hid: 'description', name: 'description', content: 'Firma Photomiracle profesjonalnie zajmuje się fotografią'}
      ]
    }
  },
  mounted(){
  this.$contentWayPoint();
  },
  data() {
    return {
    texts: [["Photomiracle","Sesje indywidualne"],["Photomiracle","Imprezy tematyczne"],["Photomiracle","Zdjęcia ślubne"]]
    }
  },

}
</script>

<style>
  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }
</style>
