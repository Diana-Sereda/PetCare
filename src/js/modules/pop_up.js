export const pop = function () {
  const showpopUpBtn = document.querySelector(".pop-up-btn");
  const popUp = document.querySelector(".pop-up");
  const overlay = document.querySelector(".overlay");
  const closepopUpBtn = document.querySelector(".close-btn");
  const submitBtn = document.querySelector(".submit");
  const form = document.querySelector(".form");

  const openpopUp = () => {
    overlay.classList.remove("hidden");
    popUp.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  const closepopUp = () => {
    overlay.classList.add("hidden");
    popUp.classList.add("hidden");
    document.body.style.overflow = "auto";
  };

  showpopUpBtn.addEventListener("click", openpopUp);

  overlay.addEventListener("click", closepopUp);
  closepopUpBtn.addEventListener("click", closepopUp);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !popUp.classList.contains("hidden")) {
      closepopUp();
    }
  });

  submitBtn.addEventListener("click", () => {
    const inputs = form.querySelectorAll("input[required]");
    let isValid = true;

    inputs.forEach(function (input) {
      if (input.value.trim() === "") {
        isValid = false;
      }
    });

    if (!isValid) {
      alert("Пожалуйста, заполните все обязательные поля!");
    } else {
      closepopUp();
    }
  });
};
