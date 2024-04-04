const innerCircle = document.querySelector('.inner-circle');
const outerCircle = document.querySelector('.outer-circle');
const basic = document.querySelector('#p1');
const premium = document.querySelector('#p2');
const per = document.querySelectorAll('.per');
const button = document.querySelector('.button');
let isClicked = false;

function changeCSSOnClick() {
    if (!isClicked) {
        innerCircle.style.background = 'transparent';
        outerCircle.style.background = '#ffffff';
        basic.innerHTML = '$900';
        premium.innerHTML = '$3100';
        per.forEach((e) => e.innerHTML = '/annualy');
    } else {
        innerCircle.style.background = '#ffffff';
        outerCircle.style.background = 'transparent';
        basic.innerHTML = '$77';
        premium.innerHTML = '$275';
        per.forEach((e) => e.innerHTML = '/monthly');
    }
    isClicked = !isClicked;
    
  }

  button.addEventListener('click', changeCSSOnClick);
