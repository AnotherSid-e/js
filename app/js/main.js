'use strict'

var swiper = new Swiper(".swiper__cat", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: {
    sensitivity: 55,
    EventTarget: '.swiper-img'
  },
  touchRatio: 2,
  keyboard: true,
  autoHeight: true,
  centeredSlides: true,
  speed: 800,
  spaceBetween: 0,
});

let tab = function() {
  let   tabNav     = document.querySelectorAll('.tabs-item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;
  tabNav.forEach(item => {
    item.addEventListener('click', tabsF)
  });
  function tabsF() {
    tabNav.forEach(item => {
      item.classList.remove('is-active');
    })
    this.classList.add('is-active');
    tabName = this.getAttribute('data');
    actTabContent(tabName);
  };
  function actTabContent(tabName) {
    tabContent.forEach(item => {
      if (item.classList.contains(tabName)) {
        item.classList.add('is-active')
      }
      else{
        item.classList.remove('is-active')
      }
    });
  };
};
tab();

let acc = function() {
  let accNav = document.querySelectorAll('.accord-item'),
      accContent = document.querySelectorAll('.accord__content'),
      accName;
  accNav.forEach(item => {
    item.addEventListener('click', accF)
  });
  function accF() {
    accName = this.getAttribute('data');
    startAcc(accName);
  };
  function startAcc(accName) {
    accContent.forEach(item => {
      if (item.classList.contains(accName)) {
        item.classList.toggle('accord-none')
      }
    });
    }
};
acc();

function modal(){
  let modalNav = document.querySelectorAll('.modal__content'),
      modalBackGround = document.querySelector('.modal-bg'),
      modalOpenBtn = document.querySelectorAll('.modal-item-btn'),
      modalCloseBtn = document.querySelectorAll('.modal-close'),
      modalName;
  modalOpenBtn.forEach(item => {
    item.addEventListener('click', mdAct)
  });
  function mdAct() {
    modalName = this.getAttribute('data');
    mdOpenW(modalName);
  }
  function mdOpenW(modalName) {
    modalNav.forEach(item => {
      if (item.classList.contains(modalName)) {
        item.classList.remove('is-off')
        modalBackGround.classList.remove('is-off')
      }
      modalCloseBtn.forEach(item => {
        item.addEventListener('click', mdClose);
      function mdClose(){
        modalNav.forEach(item => {
          item.classList.add('is-off');
          modalBackGround.classList.add('is-off')
        })
      }
      })
    })
  }
}
modal();