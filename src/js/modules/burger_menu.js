export const burger = function () {
  const burgerBtn = document.querySelector(".burger-btn");
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerClose = document.querySelector(".buger-close");

  const closeMenu = () => {
    burgerMenu.classList.add("hidden");
    document.body.style.overflow = "auto";
  };
  burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
  burgerMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      closeMenu();
    }
  });
  burgerClose.addEventListener("click", closeMenu);
};
