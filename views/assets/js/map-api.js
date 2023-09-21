function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 28.418741718041893, lng: -81.58121440549618},
        zoom: 16.5,
        mapId: '67f6a68d9f0f5af7',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    })

    // Name
    // Latitude, Longitude
    const rideMarkers= [
        [
            "Space Mountain",
            28.4191,
            -81.5772,
        ],
        [
            "Haunted Mansion",
            28.4209, 
            -81.5829,
        ]
    ];

    for(let i = 0; i<rideMarkers.length; i++) {
        const currMarker = rideMarkers[i];

        const marker = new google.maps.Marker({
            position:  {lat: currMarker[1], lng: currMarker[2]},
            map,
            title: currMarker[0],
            animation: google.maps.Animation.DROP
        })
    
        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0]
        })
    
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        })

    }
}

//28.418741718041893, -81.58121440549618