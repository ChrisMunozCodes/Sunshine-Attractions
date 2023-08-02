const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://queue-times.com/en-US/parks/6/queue_times.json';
const url = corsProxy + apiUrl;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
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

