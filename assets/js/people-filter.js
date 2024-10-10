function filterSelection(category) {
  let items = document.getElementsByClassName("person-page__grid");

  let alumniCategories = [
    "phd-alumni", "masters-alumni", "undergrad-alumni"
  ];

  if (category === "all") {
    for (let i = 0; i < items.length; i++) {
      let isNotAlumnus = alumniCategories.every(
        c => !items[i].classList.contains(c)
      );
      if (isNotAlumnus) {
        items[i].style.display = "block";
      } else {
        items[i].style.display = "none";
      }
    }
  } else {
    for (let i = 0; i < items.length; i++) {
      if (items[i].classList.contains(category)) {
        items[i].style.display = "block";
      } else {
        items[i].style.display = "none";
      }
    }
  }

  let buttons = document.getElementsByClassName("filter-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  document.querySelector('.filter-btn[onclick="filterSelection(\'' + category + '\')"]').classList.add("active");
}

function scrollLeftAction() {
  const filterContainer = document.getElementById('filterContainer');
  filterContainer.scrollBy({ left: -400, behavior: 'smooth' });
  setTimeout(checkArrows, 400);
}

function scrollRightAction() {
  const filterContainer = document.getElementById('filterContainer');
  filterContainer.scrollBy({ left: 400, behavior: 'smooth' });
  setTimeout(checkArrows, 400);
}

function checkArrows() {
  const filterContainer = document.getElementById('filterContainer');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  if (filterContainer.scrollLeft > 0) {
    leftArrow.style.display = 'block';
  } else {
    leftArrow.style.display = 'none';
  }

  if (filterContainer.scrollLeft + filterContainer.clientWidth >= filterContainer.scrollWidth) {
    rightArrow.style.display = 'none';
  } else {
    rightArrow.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  checkArrows(); 

  document.querySelector('.left-arrow').addEventListener('click', scrollLeftAction);
  document.querySelector('.right-arrow').addEventListener('click', scrollRightAction);

  document.getElementById('filterContainer').addEventListener('scroll', checkArrows);
});