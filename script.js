window.addEventListener('scroll', function() {
    var irArriba = document.querySelector('.ir-arriba');
    if (window.scrollY > 300) {
      irArriba.style.opacity = '1';
    } else {
      irArriba.style.opacity = '0';
    }
  });
  