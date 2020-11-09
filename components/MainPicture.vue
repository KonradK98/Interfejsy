<template>
  <!-- <div class="hero-image" :style="style"> -->
  <div class="hero-image" :style="{ backgroundImage: 'url(' + require('@/assets/images/'+bgHero) + ')' }">
      <div class="container h-100">
        <div class="row h-100 align-items-center element-animate">
          <div class="col-sm-12 text-center pt-5">
            <h1 class="hero-text">{{text}}</h1>
            <p v-if="sub" class="hero-sub w-75 text-center">{{sub}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        text: {type: String, default:"Text", required: false},
        bgHero: {type: String,  default: "inherit", required: false},
        sub: {type: String,  default: "", required: false}
    },
    computed: {
      style () {
        return bgHero
      }
    },
}
</script>

<style scoped>
.hero-image {
  /* background-image: var(--bg-Hero); */
  background-size: cover;
  position: relative;
  height: calc(50vh - 117px);
  min-height: 550px;
  background-repeat: no-repeat;
  background-position: center center;
}
.hero-image:before {
  content: '';
  position: absolute;
  top: 0;
  height: 500px;
  width: 100%;
  background: linear-gradient(to bottom, black 0%, rgba(145, 232, 66, 0) 100%);
}

.hero-text {
  font-size: 50px;
  color: #fff;
  line-height: 1.2;
  font-weight: 300 !important;
  text-transform: uppercase;
}
.hero-sub{
    font-size: 20px;
    line-height: 1.5;
    font-weight: 300;
    color: white;
    margin: 0 auto;
}
</style>