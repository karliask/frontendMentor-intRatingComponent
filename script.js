const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const submit = document.getElementById('submit');
const numbers = document.querySelector('.numbers');
let selected = 0;
const selectedNum = document.getElementById('selectedNum');
const card = document.getElementById('card');
const end = document.getElementById('end');
one.addEventListener('click', () => {
    selected = 1;
    selectedNum.textContent = selected;
})

two.addEventListener('click', () => {
    selected = 2;;
    selectedNum.textContent = selected;
})

three.addEventListener('click', () => {
    selected = 3;;
    selectedNum.textContent = selected;
})

four.addEventListener('click', () => {
    selected = 4;;
    selectedNum.textContent = selected;
})

five.addEventListener('click', () => {
    selected = 5;;
    selectedNum.textContent = selected;
})

submit.addEventListener('click', () => {
    card.style.zIndex = '0'
    end.style.zIndex = '1'
    end.style.visibility = 'visible'
    card.style.visibility = 'hidden'
})