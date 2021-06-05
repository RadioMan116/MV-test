//main-swiper
const swiper = new Swiper(".swiper-container", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//list hidden/vissible
const listLi = Array.from(document.querySelectorAll(".content-body__li"));
const listLiChild = Array.from(document.querySelectorAll(".content-body__hiding"));
const main = document.querySelector('.main');

listLi.forEach((li, i) => {
  li.addEventListener("mouseover", () => {
    listLiChild[i].classList.add("active");
    main.classList.add('active')
  });
  li.addEventListener("mouseout", () => {
    listLiChild[i].classList.remove("active");
    main.classList.remove('active')
  });
});

//footer-rooms toggle active
const roomsArr = Array.from(document.querySelectorAll('.footer-rooms__button'));
roomsArr.forEach( item => {
  item.addEventListener('click', () => {
    roomsArr.forEach( elem => {
      if(elem.classList.contains('active')) {
        elem.classList.remove('active');
      };
    });
    item.classList.add('active');
  })
});

//range-slider-area
(() => {
  let $range = $(".range-slider");
  let $inputFrom = $(".range-input-area-from");
  let $inputTo = $(".range-input-area-to");
  let instance;
  let min = 0;
  let max = 1000;
  let from = 0;
  let to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 800,
    hide_min_max: true,
    hide_from_to: true,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs,
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val,
    });

    $(this).prop("value", val);
  });

  $inputTo.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val,
    });

    $(this).prop("value", val);
  });
})();

//range-slider-cost
(() => {
  let $rangeCost = $(".range-slider-cost");
  let $inputCostFrom = $(".range-input-cost-from");
  let $inputCostTo = $(".range-input-cost-to");
  let instanceCost;
  let min = 0;
  let max = 1000;
  let from = 0;
  let to = 0;

  $rangeCost.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 800,
    hide_min_max: true,
    hide_from_to: true,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs,
  });
  instanceCost = $rangeCost.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputCostFrom.prop("value", from);
    $inputCostTo.prop("value", to);
  }

  $inputCostFrom.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instanceCost.update({
      from: val,
    });

    $(this).prop("value", val);
  });

  $inputCostTo.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instanceCost.update({
      to: val,
    });

    $(this).prop("value", val);
  });
})();
