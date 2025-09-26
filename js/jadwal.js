//jadwal
document.querySelectorAll(".list__find").forEach((find) => {
  const btnSearch = find.querySelector(".search__jadwal");
  const boxContent = find.querySelector(".search__content");
  btnSearch.addEventListener("click", () => {
    boxContent.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!btnSearch.contains(e.target) && !boxContent.contains(e.target)) {
      boxContent.classList.remove("active");
    }
  });
});

document.querySelectorAll(".jadwal__note").forEach((note) => {
  const text = note.textContent.trim().toLowerCase();

  if (text === "full booked") {
    note.classList.add("full");

    // sembunyikan tombol pesan
    const boxExtra = note
      .closest(".list__jadwal__container")
      .querySelector(".detail__extra-");
    if (boxExtra) {
      boxExtra.style.display = "none";
    }
  } else {
    note.classList.add("available");
  }
});

// detail show

const btnShowExtra = document.querySelectorAll(".detail__extra");
const boxContent = document.querySelectorAll(".jadwal__extra__box");

btnShowExtra.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    boxContent[index].classList.toggle("active");
  });
});

document.addEventListener("click", function (e) {
  btnShowExtra.forEach((btn, index) => {
    if (!btn.contains(e.target) && !boxContent.contains(e.target)) {
      boxContent[index].classList.remove("active");
    }
  });
});
