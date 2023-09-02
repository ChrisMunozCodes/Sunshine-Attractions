// This script will be used for showing / hiding the selections for rides, food, and shows when the correlating button is clicked.


//psuedo code
//
const sText = document.getElementById('selection-text')
const sArea = document.getElementById('selection-area')
const mSelection = document.getElementById('typed-text2')
//grab three button ids in variables selection-btn


const rideBtn = document.getElementById('ride-selection')
const foodBtn = document.getElementById('food-selection')
const showBtn = document.getElementById('show-selection')
//grab three ids for the different types of selections, rides, food, and shows
const ride = document.querySelectorAll('.ride')
const food = document.querySelectorAll('.food')
const show = document.querySelectorAll('.show')
// Button for clicked styles
const selectionRidesBtn = document.querySelector('.selection-rides-btn')
const selectionFoodBtn = document.querySelector('.selection-food-btn')
const selectionShowsBtn = document.querySelector('.selection-shows-btn')
//if button is clicked remove hidden class from correlating selections, add hidden class to the other two

rideBtn.addEventListener('click', rideSelection);

function rideSelection() {

    selectionRidesBtn.classList.remove('bg-primaryButton', 'text-black', 'border-white');
    selectionRidesBtn.classList.add('bg-black', 'border-white', 'text-white');

    selectionFoodBtn.classList.add('bg-primaryButton', 'text-black', 'border-white');
    selectionFoodBtn.classList.remove('text-white');

    selectionShowsBtn.classList.add('bg-primaryButton', 'text-black', 'border-white');
    selectionShowsBtn.classList.remove('text-white');


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

    selectionFoodBtn.classList.remove('bg-primaryButton', 'text-black', 'border-white');
    selectionFoodBtn.classList.add('bg-black', 'border-white', 'text-white');

    selectionRidesBtn.classList.add('bg-primaryButton', 'text-black', 'border-white');
    selectionRidesBtn.classList.remove('text-white');

    selectionShowsBtn.classList.add('bg-primaryButton', 'text-black', 'border-white');
    selectionShowsBtn.classList.remove('text-white');


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
    selectionShowsBtn.classList.remove('bg-primaryButton', 'text-black', 'border-white');
    selectionShowsBtn.classList.add('bg-black', 'border-white', 'text-white');

    selectionFoodBtn.classList.add('bg-primaryButton', 'text-black', 'border-white');
    selectionFoodBtn.classList.remove('text-white');

    selectionRidesBtn.classList.add('bg-primaryButton', 'text-black', 'border-white');
    selectionRidesBtn.classList.remove('text-white');

    sText.innerHTML = 'All Shows'
    sText.classList.remove('hidden')
    sArea.classList.remove('hidden')
    mSelection.classList.add('hidden')
    ride.forEach(element => element.classList.add('hidden'));
    food.forEach(element => element.classList.add('hidden'));
    show.forEach(element => element.classList.remove('hidden'));
}