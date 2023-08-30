// This script will be used for showing / hiding the selections for rides, food, and shows when the correlating button is clicked.


//psuedo code
//
const sText = document.getElementById('selection-text')
const sArea = document.getElementById('selection-area')
const mSelection = document.getElementById('typed-text2')
//grab three button ids in variables
const rideBtn = document.getElementById('ride-selection')
const foodBtn = document.getElementById('food-selection')
const showBtn = document.getElementById('show-selection')
//grab three ids for the different types of selections, rides, food, and shows
const ride = document.querySelectorAll('.ride')
const food = document.querySelectorAll('.food')
const show = document.querySelectorAll('.show')
//if button is clicked remove hidden class from correlating selections, add hidden class to the other two
rideBtn.addEventListener('click', rideSelection);

function rideSelection() {
    sText.innerHTML = 'All Rides'
    sText.classList.remove('hidden')
    sArea.classList.remove('hidden')
    mSelection.classList.add('hidden')
    ride.forEach(element => element.classList.remove('hidden'));
    food.forEach(element => element.classList.add('hidden'));
    show.forEach(element => element.classList.add('hidden'));
}

//repeat
foodBtn.addEventListener('click', foodSelection);

function foodSelection() {
    sText.innerHTML = 'All Food'
    sText.classList.remove('hidden')
    sArea.classList.remove('hidden')
    mSelection.classList.add('hidden')
    ride.forEach(element => element.classList.add('hidden'));
    food.forEach(element => element.classList.remove('hidden'));
    show.forEach(element => element.classList.add('hidden'));
}

//repeat
showBtn.addEventListener('click', showSelection);

function showSelection() {
    sText.innerHTML = 'All Shows'
    sText.classList.remove('hidden')
    sArea.classList.remove('hidden')
    mSelection.classList.add('hidden')
    ride.forEach(element => element.classList.add('hidden'));
    food.forEach(element => element.classList.add('hidden'));
    show.forEach(element => element.classList.remove('hidden'));
}