function hideCursor(el) {
    el.style.cursor = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
  let idleMouseTimer;
  let forceMouseHide = false;

  // Your wrapper here
  document.body.addEventListener("mousemove", () => {
    if (forceMouseHide) return;

    clearTimeout(idleMouseTimer);

    var elts = document.querySelectorAll(".fancybox__slide.is-selected .fancybox-image");
    if (elts && elts[0]) {
        elts[0].style.cursor = "";
    } else {
        return;
    }

    idleMouseTimer = setTimeout(() => {
      elts[0].style.cursor = 'none';

      forceMouseHide = true;

      setTimeout(() => {
        forceMouseHide = false;
      }, 200);
    }, 2000);
  });
});
