const navToggle = document.getElementById('navi-toggle')
const navLinks = document.getElementsByClassName('navigation__link')

for (let a of navLinks) {
  a.addEventListener('click', () => {
    navToggle.checked = false
  })
}

// Measure page load performance
const timeToLoad = function() {
  let perfData = window.performance.timing
  // console.log('[perf] loadEventEnd:', perfData.loadEventEnd)
  // console.log('[perf] navigationStart:', perfData.navigationStart)
  return perfData.loadEventEnd - perfData.navigationStart
}

// per: https://stackoverflow.com/questions/7606972/measuring-site-load-times-via-performance-api
window.onload = function() {
  setTimeout(() => {
    let elapsed = timeToLoad()
    let video
    let sources
    // let videoElems

    console.log(`time took to load: ${elapsed}`)
    if (elapsed <= 2500) {
      console.log('fast enough!')
      // videoElems = document.getElementsByTagName('video')

      video = document.querySelector('#video-1')
      sources = document.querySelectorAll('#video-1 source')
      for (let i = 0; i < sources.length; i++) {
        sources[i].setAttribute('src', sources[i].getAttribute('data-src'))
      }

      // for (const el of videoElems) {
      //   // console.log(el)
      // }
      // console.log(video)
      // console.log(sources)
      video.load()
    }
  }, 0)
}
