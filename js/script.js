// hamburger menu
const navbarLinks = document.querySelector(".nav__drawer");
const hamburgerMenu = document.querySelector(".nav__btn");
const overlay = document.querySelector("#overlay");
const navClose = document.querySelector("#nav-close");

hamburgerMenu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  hamburgerMenu.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
  overlay.classList.remove("active");
  hamburgerMenu.classList.remove("hidden");
});

if (navClose) {
  navClose.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    overlay.classList.remove("active");
    hamburgerMenu.classList.remove("hidden");
  });
}

const navbar = this.document.querySelector(".navbar__container");
const pageHeight = document.documentElement.scrollHeight;

window.addEventListener("scroll", function () {
  if (this.window.scrollY > pageHeight / 12) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// testimoni caraousel
const caraousel = document.querySelector(".testimoni__caraousel");
const caraouselChildrens = [...caraousel.children];

let isDragging = false,
  startX,
  startScrollLeft;

// Hitung card width + gap sesuai style CSS & responsive
const getCardWidth = () => {
  const card = caraousel.querySelector(".testimoni__card");
  const style = getComputedStyle(caraousel);
  const gap = parseInt(style.gap);
  return card.offsetWidth + gap;
};

// Hitung card per view untuk infinite scroll
let cardPerView = Math.round(caraousel.offsetWidth / getCardWidth());

// Clone card untuk infinite scroll
caraouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    caraousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });
caraouselChildrens.slice(0, cardPerView).forEach((card) => {
  caraousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Mulai drag
const dragStart = (e) => {
  isDragging = true;
  caraousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = caraousel.scrollLeft;
};

// Dragging
const dragging = (e) => {
  if (!isDragging) return;
  const walk = (e.pageX - startX) * 2; // faktor drag sensitif
  caraousel.scrollLeft = startScrollLeft - walk;
};

// Hentikan drag & snap ke full card
const dragStop = () => {
  if (!isDragging) return;
  isDragging = false;
  caraousel.classList.remove("dragging");

  const cardWidth = getCardWidth();
  const scroll = caraousel.scrollLeft;
  const remainder = scroll % cardWidth; // sisa scroll
  let snapped = scroll;

  // Threshold: jika sisa lebih dari setengah card → geser ke card berikutnya
  if (remainder > cardWidth / 2) {
    snapped = scroll + (cardWidth - remainder);
  } else {
    snapped = scroll - remainder;
  }

  caraousel.scrollTo({
    left: snapped,
    behavior: "smooth", // smooth snap
  });
};

// Infinite scroll
const infiniteScroll = () => {
  const maxScroll = caraousel.scrollWidth - caraousel.offsetWidth;
  if (caraousel.scrollLeft <= 0) {
    caraousel.classList.add("no-transition");
    caraousel.scrollLeft = maxScroll - caraousel.offsetWidth;
    caraousel.classList.remove("no-transition");
  } else if (Math.ceil(caraousel.scrollLeft) >= maxScroll) {
    caraousel.classList.add("no-transition");
    caraousel.scrollLeft = caraousel.offsetWidth;
    caraousel.classList.remove("no-transition");
  }
};

// Event listener
caraousel.addEventListener("mousedown", dragStart);
caraousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
caraousel.addEventListener("mouseleave", dragStop); // agar stop saat mouse keluar
caraousel.addEventListener("scroll", infiniteScroll);
