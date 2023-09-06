const backendApiUrl = 'http://localhost:2155/wait-times';

fetch(backendApiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Your existing logic for handling the data received from the backend
    let frontierland = data.lands[2];
    let libertySquare = data.lands[3];
    let ridesLibertySquare = libertySquare.rides;
    let ridesFrontierland = frontierland.rides;
    // Thunder Mountain Wait Time Code
    let thunderMountain = ridesFrontierland.find((ride) => ride.name === "Big Thunder Mountain Railroad");

    if (thunderMountain) {
      let thunderWaitTime = thunderMountain.wait_time;
      let thunderWaitElement = document.getElementById("thunder-wait");
      if (thunderWaitElement) {
        thunderWaitElement.innerHTML = thunderWaitTime;
      }
    } else {
      console.log("Thunder Mountain not found in Frontierland.");
    }
    // Haunted Mansion Wait Time Code
    let hauntedMansion = ridesLibertySquare.find((ride) => ride.name === "Haunted Mansion");

    if (hauntedMansion) {
      let hauntedWaitTime = hauntedMansion.wait_time;
      let hauntedWaitElement = document.getElementById("haunted-wait");
      if (hauntedWaitElement) {
        hauntedWaitElement.innerHTML = hauntedWaitTime;
      }
    } else {
      console.log("Haunted Mansion not found in Frontierland.");
    }
    // Space Mountain Wait Time Code
    let tomorrowland = data.lands[5];
    let ridesTomorrowland = tomorrowland.rides;

    let spaceMountain = ridesTomorrowland.find((ride) => ride.name === "Space Mountain");

    if (spaceMountain) {
      let spaceWaitTime = spaceMountain.wait_time;
      let spaceWaitElement = document.getElementById("space-wait");
      if (spaceWaitElement) {
        spaceWaitElement.innerHTML = spaceWaitTime;
      }
    } else {
      console.log("Space Mountain not found in Tomorrowland.");
    }
  })
  .catch((error) => console.error("Error fetching data:", error));
