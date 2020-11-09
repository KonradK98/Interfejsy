# How to into unsupported plugins

1. Create a plugin
```
// @/plugins/vue-slider-component.js

import Vue from 'vue'
import VueSlider from 'vue-slider-component'

Vue.component('vue-slider', VueSlider)
```
2. Register the plugin, with ssr set to "false"

```
// @/nuxt.config.js

module.exports = {
  ...
  build: {
    vendor: [
      'vue-slider-component'
    ],
    ...
    plugins: [
      { src: '~/plugins/vue-slider-component', ssr: false }
    ]
  }
}
```
3. Use the component in a template
```
<template>
  <vue-slider>
  </vue-slider>
</template>

<script>
  export default {
  ...
  // don't register the vue-slider component
  }
</script>
```

Notes:

You do NOT need to nest it in a component (i.e. you don't need to install something like "vue-no-ssr")
You do NOT need any of that "if (process.browser)" stuff
You should NOT import or register the component in the script within your single file template since it's already being declared globally