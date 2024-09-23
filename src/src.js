document
  .querySelectorAll(".swiper-slide")
  .forEach((el) => el.classList.add("interactive--pointer"));

document
  .querySelector(".swiper-prices")
  .querySelectorAll(".swiper-slide")
  .forEach((el) => el.classList.remove("interactive--pointer"));

(() => {
  const readMoreBrands = document
    .querySelector(".swiper-brands")
    .querySelector(".button-read-more");

  let items = 6;
  let clicked = false;
  const arr = Array.from(
    document.querySelector(".swiper-brands").querySelector(".swiper-wrapper")
      .children,
  );
  readMoreBrands.addEventListener("click", () => {
    if (!clicked) {
      console.log("fff", arr)
      items = arr.length;
      const visBrands = arr.slice(0, items);
      visBrands.forEach((el) => el.classList.add("visibale"));
      readMoreBrands.textContent = "Скрыть";
      clicked = true;
    } else {
      const visBrands = arr.slice(0, items);
      visBrands.forEach((el) => el.classList.remove("visibale"));
      readMoreBrands.textContent = "Показать все";
      clicked = false;
    }
  });
})();

(() => {
  const readMoreRepair = document
    .querySelector(".swiper-repair")
    .querySelector(".button-read-more");

  let items = 3;
  let clicked = false;
  const arr = Array.from(
    document.querySelector(".swiper-repair").querySelector(".swiper-wrapper")
      .children,
  );

  readMoreRepair.addEventListener("click", () => {
    if (!clicked) {
      items = arr.length;
      const visBrands = arr.slice(0, items);
      visBrands.forEach((el) => el.classList.add("visibale"));
      readMoreRepair.textContent = "Скрыть";
      clicked = true;
    } else {
      const visBrands = arr.slice(0, items);
      visBrands.forEach((el) => el.classList.remove("visibale"));
      readMoreRepair.textContent = "Показать все";
      clicked = false;
    }
  });
})();

const burgerButton = document.querySelector(".upper-menu__burger");
burgerButton.addEventListener("click", () => {
  document
    .querySelector(".services-aside")
    .classList.remove("services-aside--pop-out");
  document.querySelector(".aside--background").classList.remove("hidden-block");
  document.querySelector(".services-aside").classList.remove("hidden-block");
  document
    .querySelector(".services-aside")
    .classList.add("services-aside--pop-up");
  document.querySelector(".services").style.setProperty("overflow", "hidden");
});

const asideBurgerButtonClose = document
  .querySelector(".services-aside")
  .querySelector(".burger-close");
asideBurgerButtonClose.addEventListener("click", () => {
  document.querySelector(".aside--background").classList.add("hidden-block");
  document
    .querySelector(".services-aside")
    .classList.remove("services-aside--pop-up");
  document
    .querySelector(".services-aside")
    .classList.add("services-aside--pop-out");
  document.querySelector(".services").style.setProperty("overflow", "");
});

const links = document.querySelectorAll(".scroll-menu__li");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    links.forEach(function (otherLink) {
      otherLink.classList.remove("scroll-menu__li--current");
    });

    this.classList.add("scroll-menu__li--current");
  });
});

const menuOptions = document.querySelectorAll(".aside-menu__option");

menuOptions.forEach(function (link) {
  link.addEventListener("click", function () {
    menuOptions.forEach(function (otherLink) {
      otherLink.classList.remove("aside-menu__option--active-option");
    });

    this.classList.add("aside-menu__option--active-option");
  });
});

const modalFeedbackBurgerButtonClose = document
  .querySelector(".modal-feedback")
  .querySelector(".burger-close");
const modalFeedBack = document.querySelector(".modal-feedback");
modalFeedbackBurgerButtonClose.addEventListener("click", () => {
  document.querySelector(".services").style.setProperty("overflow", "");

  if (window.innerWidth <= 1440) {
    modalFeedBack.classList.remove("modal_popup");
    modalFeedBack.classList.add("modal_popout");
  } else {
    modalFeedBack.classList.remove("modal--pop-up");
    modalFeedBack.classList.add("modal--pop-out");
    document.querySelector(".aside--background").classList.add("hidden-block");
  }
  document.querySelector(".services").style.setProperty("overflow", "");
});

const backButtons = document.querySelectorAll(".back");
backButtons.forEach((el) =>
  el.addEventListener("click", () => {
    modalFeedBack.classList.remove("hidden-block");
    document.querySelector(".services").style.setProperty("overflow", "hidden");
    if (window.innerWidth <= 1440) {
      modalFeedBack.classList.remove("modal_popout");
      modalFeedBack.classList.add("modal_popup");

      console.log(1000);
    } else {
      document
        .querySelector(".aside--background")
        .classList.remove("hidden-block");

      modalFeedBack.classList.remove("modal--pop-out");
      modalFeedBack.classList.add("modal--pop-up");
    }
  }),
);

const modalCall = document.querySelector(".modal-call");
const callButtons = document.querySelectorAll(".call");
callButtons.forEach((el) =>
  el.addEventListener("click", () => {
    modalCall.classList.remove("hidden-block");
    document.querySelector(".services").style.setProperty("overflow", "hidden");
    if (window.innerWidth <= 1440) {
      modalCall.classList.remove("modal_popout");
      modalCall.classList.add("modal_popup");
      console.log(1000);
    } else {
      document
        .querySelector(".aside--background")
        .classList.remove("hidden-block");

      modalCall.classList.remove("modal--pop-out");
      modalCall.classList.add("modal--pop-up");
    }
  }),
);

const modalCallBurgerButtonClose = document
  .querySelector(".modal-call")
  .querySelector(".burger-close");

modalCallBurgerButtonClose.addEventListener("click", () => {
  document.querySelector(".services").style.setProperty("overflow", "");

  if (window.innerWidth <= 1440) {
    modalCall.classList.remove("modal_popup");
    modalCall.classList.add("modal_popout");
  } else {
    modalCall.classList.remove("modal--pop-up");
    modalCall.classList.add("modal--pop-out");
    document.querySelector(".aside--background").classList.add("hidden-block");
  }
  document.querySelector(".services").style.setProperty("overflow", "");
});

document.querySelector(".aside--background").addEventListener("click", () => {
  if (window.innerWidth <= 1440) {
    document
      .querySelector(".services-aside")
      .classList.remove("services-aside--pop-up");
    document
      .querySelector(".services-aside")
      .classList.add("services-aside--pop-out");
  } else {
    modalFeedBack.classList.remove("modal--pop-up");
    modalFeedBack.classList.add("modal--pop-out");

    modalCall.classList.remove("modal--pop-up");
    modalCall.classList.add("modal--pop-out");
  }

  document.querySelector(".aside--background").classList.add("hidden-block");
  document.querySelector(".services").style.setProperty("overflow", "");
});

document
  .querySelector(".read-more-text")
  .addEventListener("click", function () {
    document
      .querySelectorAll(".main-info__description")
      .forEach((el) => el.style.setProperty("display", "none"));
    document
      .querySelector(".main-info__full-description")
      .style.setProperty("display", "block");
    this.style.setProperty("display", "none");
  });

const langOptions = document.querySelectorAll(".lang-block__language");
langOptions.forEach((el) =>
  el.addEventListener("click", function () {
    langOptions.forEach((el) =>
      el.classList.remove("lang-block__language--current-lang"),
    );
    this.classList.add("lang-block__language--current-lang");
  }),
);
