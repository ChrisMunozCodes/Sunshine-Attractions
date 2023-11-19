function redirectToSelectedLocation(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the selected option
    const locationSelect = document.getElementById("locationSelect");
    const selectedOption = locationSelect.options[locationSelect.selectedIndex];

    
    // Redirect to the selected URL
    if (selectedOption && selectedOption.value) {
        window.location.href = selectedOption.value;
    }
}