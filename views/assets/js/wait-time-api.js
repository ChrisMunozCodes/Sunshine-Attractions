const backendApiUrl = 'https://sunshine-attractions-mkbs.onrender.com//wait-times';

fetch(backendApiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    // API Lands data
    let frontierland = data.lands[2];
    let libertySquare = data.lands[3];
    let tomorrowland = data.lands[5];
    let fantasyland = data.lands[1];
    let adventureland = data.lands[0];
    // API Rides for specific lands
    let ridesFantasyland = fantasyland.rides;
    let ridesTomorrowland = tomorrowland.rides;
    let ridesLibertySquare = libertySquare.rides;
    let ridesFrontierland = frontierland.rides;
    let ridesAdventureland = adventureland.rides;
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
    //

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
    //

    // Space Mountain Wait Time Code
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
    //

    // Seven Dwarfs Mine Train Wait Time Code 
    let mineTrain = ridesFantasyland.find((ride) => ride.name === "Seven Dwarfs Mine Train");

    if (mineTrain) {
      let dwarfsWaitTime = mineTrain.wait_time;
      let dwarfsWaitElement = document.getElementById("dwarfs-wait");
      if (dwarfsWaitElement) {
        dwarfsWaitElement.innerHTML = dwarfsWaitTime;
      }
    } else {
      console.log("Seven Dwarfs Mine Train not found in FantasyLand.");
    }
    //

    // Pirates of the Caribbean Wait Time Code 
    let pirates = ridesAdventureland.find((ride) => ride.name === "Pirates of the Caribbean");

    if (pirates) {
      let piratesWaitTime = pirates.wait_time;
      let piratesWaitElement = document.getElementById("pirates-wait");
      if (piratesWaitElement) {
        piratesWaitElement.innerHTML = piratesWaitTime;
      }
    } else {
      console.log("Pirates of the Caribbean not found in AdventureLand.");
    }
    //    

    // Jungle Cruise Wait Time Code 
    let jungle = ridesAdventureland.find((ride) => ride.name === "Jungle Cruise");

    if (jungle) {
      let jungleWaitTime = jungle.wait_time;
      let jungleWaitElement = document.getElementById("jungle-wait");
      if (jungleWaitElement) {
        jungleWaitElement.innerHTML = jungleWaitTime;
      }
    } else {
      console.log("Jungle Cruise not found in Adventureland.");
    }
    //
    
    // Dumbo the Flying Elephant Wait Time Code 
    let dumbo = ridesFantasyland.find((ride) => ride.name === "Dumbo the Flying Elephant");

    if (dumbo) {
      let dumboWaitTime = dumbo.wait_time;
      let dumboWaitElement = document.getElementById("dumbo-wait");
      if (dumboWaitElement) {
        dumboWaitElement.innerHTML = dumboWaitTime;
      }
    } else {
      console.log("Dumbo the Flying Elephant not found in FantasyLand.");
    }
    //
    
    // Tomorrowland Transit Authority PeopleMover Wait Time Code 
    let peoplemover = ridesTomorrowland.find((ride) => ride.name === "Tomorrowland Transit Authority PeopleMover");

    if (peoplemover) {
      let peoplemoverWaitTime = peoplemover.wait_time;
      let peoplemoverWaitElement = document.getElementById("peoplemover-wait");
      if (peoplemoverWaitElement) {
        peoplemoverWaitElement.innerHTML = peoplemoverWaitTime;
      }
    } else {
      console.log("Tomorrowland Transit Authority PeopleMover not found in FantasyLand.");
    }
    //

    // It's a small world Wait Time Code 
    let smallWorld = ridesFantasyland.find((ride) => ride.name === `"it's a small world"`);

    if (smallWorld) {
      let smallWorldWaitTime = smallWorld.wait_time;
      let smallWorldWaitElement = document.getElementById("smallWorld-wait");
      if (smallWorldWaitElement) {
        smallWorldWaitElement.innerHTML = smallWorldWaitTime;
      }
    } else {
      console.log("Its a Small World not found in FantasyLand.");
    }
    //

    // Prince Charming Regal Carrousel Wait Time Code 
    let carrousel = ridesFantasyland.find((ride) => ride.name === "Prince Charming Regal Carrousel");

    if (carrousel) {
      let carrouselWaitTime = carrousel.wait_time;
      let carrouselWaitElement = document.getElementById("carrousel-wait");
      if (carrouselWaitElement) {
        carrouselWaitElement.innerHTML = carrouselWaitTime;
      }
    } else {
      console.log("Prince Charming Regal Carrousel not found in FantasyLand.");
    }
    //

    // Peter Pan's Flight Wait Time Code 
    let peterPan = ridesFantasyland.find((ride) => ride.name === "Peter Pan's Flight");

    if (peterPan) {
      let peterPanWaitTime = peterPan.wait_time;
      let peterPanWaitElement = document.getElementById("peterPan-wait");
      if (peterPanWaitElement) {
        peterPanWaitElement.innerHTML = peterPanWaitTime;
      }
    } else {
      console.log("Peter Pan's Flight not found in FantasyLand.");
    }
    //

    // Under the Sea - Journey of the Little Mermaid Wait Time Code 
    let mermaid = ridesFantasyland.find((ride) => ride.name === "Under the Sea - Journey of The Little Mermaid");

    if (mermaid) {
      let mermaidWaitTime = mermaid.wait_time;
      let mermaidWaitElement = document.getElementById("mermaid-wait");
      if (mermaidWaitElement) {
        mermaidWaitElement.innerHTML = mermaidWaitTime;
      }
    } else {
      console.log("Under the Sea - Journey of the Little Mermaid not found in FantasyLand.");
    }
    //

    // The barnstormer Wait Time Code 
    let barnstormer = ridesFantasyland.find((ride) => ride.name === "The Barnstormer");

    if (barnstormer) {
      let barnstormerWaitTime = barnstormer.wait_time;
      let barnstormerWaitElement = document.getElementById("barnstormer-wait");
      if (barnstormerWaitElement) {
        barnstormerWaitElement.innerHTML = barnstormerWaitTime;
      }
    } else {
      console.log("The Barnstormer not found in FantasyLand.");
    }
    //

    // The Magic Carpets of Aladdin Wait Time Code 
    let aladdin = ridesAdventureland.find((ride) => ride.name === "The Magic Carpets of Aladdin");

    if (aladdin) {
      let aladdinWaitTime = aladdin.wait_time;
      let aladdinWaitElement = document.getElementById("aladdin-wait");
      if (aladdinWaitElement) {
        aladdinWaitElement.innerHTML = aladdinWaitTime;
      }
    } else {
      console.log("The Magic Carpets of Aladdin not found in FantasyLand.");
    }
    //

  })
  .catch((error) => console.error("Error fetching data:", error));

