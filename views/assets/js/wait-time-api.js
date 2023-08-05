const backendApiUrl = 'http://localhost:2155/wait-times'; // Replace with your backend endpoint

fetch(backendApiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Your existing logic for handling the data received from the backend
    let tomorrowland = data.lands[5];
    let rides = tomorrowland.rides;
    let spaceMountain = rides.find((ride) => ride.name === "Space Mountain");

    if (spaceMountain) {
      let spaceWaitTime = spaceMountain.wait_time;
      document.getElementById("space-wait").innerHTML = spaceWaitTime;
    } else {
      console.log("Space Mountain not found in Tomorrowland.");
    }
  })
  .catch((error) => console.error("Error fetching data:", error));