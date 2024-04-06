const rideMarkers= [
    [
        "Space Mountain",
        'N/A',
        28.4191,
        -81.5772,
    ],
    [
        "Haunted Mansion",
        'N/A',
        28.4209, 
        -81.5829,
    ],
    [
        "Thunder Mountain",
        'N/A',
        28.4202, 
        -81.5844,
    ]
];

//function to handle all of map generation
async function generateMap(rideMarkers){
    //function that inits the map
    function initMap(){
        map = new google.maps.Map/ {
            center: {lat: 28.418741718041893, lng: -81.58121440549618},
            zoom: 16.5,
            mapId: '67f6a68d9f0f5af7',
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false
        }
    }
    initMap()

    for(let i = 0; i < rideMarkers.length; i++) {
        let currMarker = rideMarkers[i];

            const marker = new google.maps.Marker({
                position:  {lat: currMarker[2], lng: currMarker[3]},
                map,
                title: currMarker[0],
                animation: google.maps.Animation.DROP
            })
        
            // const infowindow = new google.maps.InfoWindow({
            //   content: document.getElementById(`custom-info-window${i}`)
            // })

            // if (currMarker[1] !== undefined && currMarker[1] !== 'N/A') {
            //   document.getElementById(`custom-info-window${i}`).innerHTML = `
            //     <section class="flex flex-col justify-center align-center">
            //       <h1 class="text-xl">${currMarker[0]}</h1>
            //       <p class="text-sm">Wait Time: ${currMarker[1].toString()}</p>
            //     </section>
            //   `;
            // } else {
            //   document.getElementById(`custom-info-window${i}`).innerHTML = `
            //     <section class="flex flex-col justify-center align-center">
            //       <h1 class="text-xl">${currMarker[0]}</h1>
            //       <p class="text-sm">Wait Time: N/A</p>
            //     </section>
            //   `;
            // }
        
            // marker.addListener("click", () => {
            //     document.getElementById(`custom-info-window${i}`).classList.remove('hidden')
            //     infowindow.open(map, marker);
            // })
    }
}

generateMap(rideMarkers)


// function initMap(hauntedMansionWait, spaceMountainWait, thunderMountainWait){

//           // Name
//           // Latitude, Longitude



//         const infoWindow = new google.maps.InfoWindow();
//         const locationButton = document.createElement("button");

//         locationButton.textContent = "FIND YOUR NEXT RIDE";
//         locationButton.classList.add("custom-map-control-button");
//         locationButton.classList.add("text-white");
//         locationButton.classList.add("background-black");
//         locationButton.classList.add("w-50");
//         locationButton.classList.add("h-50");

//         map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
//         locationButton.addEventListener("click", () => {
//           // Try HTML5 geolocation.
//           if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//               (position) => {
//                 const pos = {
//                   lat: position.coords.latitude,
//                   lng: position.coords.longitude,
//                 };

//                 infoWindow.setPosition(pos);
//                 infoWindow.setContent("Location found.");
//                 infoWindow.open(map);
//                 map.setCenter(pos);
//               },
//               () => {
//                 handleLocationError(true, infoWindow, map.getCenter());
//               },
//             );
//           } else {
//             // Browser doesn't support Geolocation
//             handleLocationError(false, infoWindow, map.getCenter());
//           }
//         });
//       }

