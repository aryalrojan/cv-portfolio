document.addEventListener('DOMContentLoaded', function () {
  var iframe = document.querySelector('iframe')
  iframe.onerror = function () {
    iframe.style.display = 'none'
    document.querySelector('.fallback').style.display = 'block'
  }
})
