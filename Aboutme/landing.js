function burgerClicked(brg) {
  brg.classList.toggle("change")
  brg.classList.toggle("burger-menu-absolute")
  qkl.classList.toggle("wrap-burger-quicklink")
  mwr.classList.toggle("show-menu")
  document.querySelector('.quicklink').hidden = !document.querySelector('.quicklink').hidden
}

document.querySelectorAll('.row-title').forEach(summary => {
  summary.addEventListener('click', function () {
    const plusEl = this.querySelector('.plus');
    plusEl.textContent = plusEl.textContent === '+' ? '−' : '+';
  });
});
