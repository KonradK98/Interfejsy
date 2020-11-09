if (window && window.matchMedia('(prefers-color-scheme: dark)')) {
    var link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement('link')
    link.type = 'image/png'
    link.rel = 'icon'
   
    // public url of your dark mode favicon here
    link.href = '/apple-touch-icon-60x60-precomposed.png'
 
    document.getElementsByTagName('head')[0].prepend(link)
  }