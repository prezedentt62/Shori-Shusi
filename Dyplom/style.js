const ImgFish = document.getElementById("ImgFish");
const BtnMenu = document.getElementById("Btn");

function RotateFish() {

    ImgFish.addEventListener("mouseenter", () => {
        ImgFish.style.transition = "transform 2s ease";
        ImgFish.style.transform = "rotate(360deg)";
    });

    ImgFish.addEventListener("mouseleave", () => {
        ImgFish.style.transition = "transform 1s ease";
        ImgFish.style.transform = "rotate(0deg)";
    });
}

document.addEventListener("DOMContentLoaded", RotateFish);

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
      effect: "fade",
    autoplay: {
      delay: 5000, 
    },
  });
});

  function MenuUp() {
    BtnMenu.textContent = "Poznać nas";
    BtnMenu.style.fontSize = "23px";
    BtnMenu.style.transition = "width 1s ease";
    BtnMenu.style.width = (BtnMenu.offsetHeight + 100) + "px";
  }
  function MenuBack() {
    BtnMenu.innerHTML = "&#9776;";
    BtnMenu.style.fontSize = "23px";
    BtnMenu.style.transition = "width 1s ease";
    BtnMenu.style.width = "50px";
  }