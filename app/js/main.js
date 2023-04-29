'use strict'

//let inputIn = document.querySelector('.input-in');

// const button1 = document.querySelector('.btn-1');
// const input1  = document.querySelector('.age');
// const h1 = document.querySelector('.h1')

// input1.oninput = () => {
//   console.log(input1.value);
//   document.querySelector('#span').innerHTML = input1.value;
//   input
// }

// let i1    = document.querySelector('.i-1'),
//     i2    = document.querySelector('.i-2'),
//     out1  = document.querySelector('.out-1'),
//     b1    = document.querySelector('.b-1');

// b1.onclick = function() {
//   this.classList.toggle('b1--act')
// }


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
    console.log(accName);
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