(function () {
  "use strict";

  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var total = slides.length;
  var current = 0;

  var elBar = document.getElementById("progressBar");
  var elCur = document.getElementById("cur");
  var elTotal = document.getElementById("total");
  var btnPrev = document.getElementById("btnPrev");
  var btnNext = document.getElementById("btnNext");
  var btnMenu = document.getElementById("btnMenu");
  var btnMenuClose = document.getElementById("btnMenuClose");
  var menu = document.getElementById("menu");
  var menuList = document.getElementById("menuList");

  var BLOCKS = {
    "0": "Bienvenida",
    "1": "Bloque 1 · Diagnóstico",
    "2": "Bloque 2 · Desmitificación",
    "3": "Bloque 3 · Evolución de la herramienta",
    "4": "Bloque 4 · Seguridad y sistemas",
    "5": "Bloque 5 · Laboratorio y demos",
    "6": "Bloque 6 · Hoja de ruta y cierre"
  };

  if (elTotal) elTotal.textContent = String(total);

  // ---- Construir el índice agrupado por bloque ----
  var menuItems = [];
  (function buildMenu() {
    var lastBlock = null;
    slides.forEach(function (s, i) {
      var block = s.getAttribute("data-block") || "0";
      if (block !== lastBlock) {
        var gt = document.createElement("div");
        gt.className = "menu-group-title";
        gt.textContent = BLOCKS[block] || "";
        menuList.appendChild(gt);
        lastBlock = block;
      }
      var item = document.createElement("button");
      item.className = "menu-item";
      item.type = "button";
      item.innerHTML =
        '<span class="menu-num">' + (i + 1) + "</span>" +
        "<span>" + (s.getAttribute("data-title") || "Diapositiva " + (i + 1)) + "</span>";
      item.addEventListener("click", function () {
        go(i);
        closeMenu();
      });
      menuList.appendChild(item);
      menuItems.push(item);
    });
  })();

  // ---- Navegación ----
  function clamp(n) { return Math.max(0, Math.min(total - 1, n)); }

  function render() {
    slides.forEach(function (s, i) { s.classList.toggle("active", i === current); });
    elBar.style.width = ((current + 1) / total) * 100 + "%";
    elCur.textContent = String(current + 1);
    btnPrev.disabled = current === 0;
    btnNext.disabled = current === total - 1;
    menuItems.forEach(function (it, i) { it.classList.toggle("current", i === current); });
    // reiniciar el scroll interno de la diapositiva
    if (slides[current]) slides[current].scrollTop = 0;
  }

  function go(n, skipHash) {
    current = clamp(n);
    render();
    if (!skipHash) {
      if (history.replaceState) history.replaceState(null, "", "#" + (current + 1));
      else location.hash = "#" + (current + 1);
    }
  }
  function next() { if (current < total - 1) go(current + 1); }
  function prev() { if (current > 0) go(current - 1); }

  // ---- Menú ----
  function openMenu() {
    menu.hidden = false;
    var cur = menuItems[current];
    if (cur) cur.scrollIntoView({ block: "nearest" });
  }
  function closeMenu() { menu.hidden = true; }
  function menuOpen() { return !menu.hidden; }

  btnPrev.addEventListener("click", prev);
  btnNext.addEventListener("click", next);
  btnMenu.addEventListener("click", function () { menuOpen() ? closeMenu() : openMenu(); });
  btnMenuClose.addEventListener("click", closeMenu);
  menu.addEventListener("click", function (e) { if (e.target === menu) closeMenu(); });

  // ---- Teclado ----
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    switch (e.key) {
      case "ArrowRight":
      case "PageDown":
      case " ":
        e.preventDefault(); next(); break;
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault(); prev(); break;
      case "Home": e.preventDefault(); go(0); break;
      case "End": e.preventDefault(); go(total - 1); break;
      case "m": case "M": menuOpen() ? closeMenu() : openMenu(); break;
      case "f": case "F": toggleFullscreen(); break;
      case "Escape": if (menuOpen()) closeMenu(); break;
    }
  });

  // ---- Pantalla completa ----
  function toggleFullscreen() {
    var d = document;
    if (!d.fullscreenElement) {
      var el = d.documentElement;
      (el.requestFullscreen || el.webkitRequestFullscreen || function () {}).call(el);
    } else {
      (d.exitFullscreen || d.webkitExitFullscreen || function () {}).call(d);
    }
  }

  // ---- Gestos táctiles ----
  var tsX = 0, tsY = 0, touching = false;
  document.addEventListener("touchstart", function (e) {
    if (menuOpen()) return;
    var t = e.changedTouches[0]; tsX = t.clientX; tsY = t.clientY; touching = true;
  }, { passive: true });
  document.addEventListener("touchend", function (e) {
    if (!touching || menuOpen()) return;
    touching = false;
    var t = e.changedTouches[0];
    var dx = t.clientX - tsX, dy = t.clientY - tsY;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.6) {
      dx < 0 ? next() : prev();
    }
  }, { passive: true });

  // ---- Hash / enlaces directos ----
  function fromHash() {
    var h = (location.hash || "").replace(/[^0-9]/g, "");
    var n = parseInt(h, 10);
    if (!isNaN(n) && n >= 1 && n <= total) { current = n - 1; }
  }
  window.addEventListener("hashchange", function () {
    var h = (location.hash || "").replace(/[^0-9]/g, "");
    var n = parseInt(h, 10);
    if (!isNaN(n) && n >= 1 && n <= total && (n - 1) !== current) go(n - 1, true);
  });

  // ---- Init ----
  fromHash();
  render();
})();
