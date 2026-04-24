// MENU
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// ARROW SCROLL
function scrollCards(id, amount) {
  var el = document.getElementById(id);
  el.scrollLeft += amount;
}

// AUTO SCROLL — mobile only, per card group
(function() {
  var panels = document.querySelectorAll('.cards');

  panels.forEach(function(el) {
    el._paused = false;
    el.addEventListener('touchstart', function() {
      el._paused = true;
    }, { passive: true });
    el.addEventListener('touchend', function() {
      setTimeout(function() { el._paused = false; }, 2000);
    }, { passive: true });
  });

  setInterval(function() {
    if (window.innerWidth > 768) return;
    panels.forEach(function(el) {
      if (el._paused) return;
      var max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      if (el.scrollLeft >= max - 1) { el.scrollLeft = 0; }
      else { el.scrollLeft += 1; }
    });
  }, 20);
})();

// SCROLL REVEAL
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});
document.querySelectorAll('.service-block').forEach(function(el) {
  observer.observe(el);
});