let navToggleMenu = document.querySelector(".nav_toggle-menu");
let navWrap = document.querySelector(".nav_wrap");

navToggleMenu.addEventListener("click", function () {
  if (navWrap.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrap.classList.remove("active");
  } else {
    navWrap.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
})

const signs = document.querySelectorAll('x-sign')
const randomIn = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
)

const mixupInterval = el => {
  const ms = randomIn(2000, 4000)
  el.style.setProperty('--interval', `${ms}ms`)
}

signs.forEach(el => {
  mixupInterval(el)
  el.addEventListener('webkitAnimationIteration', () => {
    mixupInterval(el)
  })
})

function googleForm() {
  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeROUFw0iosd3xWHyAGFZoC45dAxv3d6y2H4goEDyxrCBbj5g/viewform';
}

function notifications() {
  let date = new Date();
  alert(date.toLocaleDateString() + "現在、開発中につき閲覧不可");
}