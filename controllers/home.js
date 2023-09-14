const Review = require("../models/Review"); // Import the Review model
const Comment = require("../models/Comment"); // Import the Comment model



module.exports = {
  getIndex: (req, res) => {
    const loggedIn = req.isAuthenticated();
    const isDesktop = req.cookies.isDesktop === 'true'; // Access the cookie value
    res.render('index', { isDesktop, loggedIn });
  },
  getDisneySelectionHomepage: (req, res) => {
    const loggedIn = req.isAuthenticated();
    const isDesktop = req.cookies.isDesktop === 'true'; // Access the cookie value
    res.render('disney-selection-homepage', { user: req.user, isDesktop, loggedIn });
  },
  getDisneySelectionMagicKingdom: async (req, res) => {
    const loggedIn = req.isAuthenticated();
    const isDesktop = req.cookies.isDesktop === 'true'; // Access the cookie value

    // Define an object to store average ratings for different pages
    const averageRatingsRide = {};
    const averageRatingsFood = {};
    const averageRatingsShow = {};

    // Define an array of page names (you can add more as needed)
    const pageNamesRide = [
      'space-mountain',
      'thunder-mountain',
      'haunted-mansion',
      'seven-dwarfs-mine-train',
      'pirates-of-the-caribbean',
      'jungle-cruise',
      'dumbo-the-flying-elephant',
      'tomorrowland-transit-authority-peoplemover',
      'its-a-small-world',
      'prince-charming-regal-carrousel',
      "peter-pan's-flight",
      'under-the-sea-journey-of-the-little-mermaid',
      'the-barnstormer',
      'the-magic-carpets-of-aladdin'
      /* Add more page names here if needed */
    ];    
    const pageNamesFood = ['space-mountain', 'thunder-mountain', 'haunted-mansion' /* Add more page names here */];
    const pageNamesShow = ['space-mountain', 'thunder-mountain', 'haunted-mansion' /* Add more page names here */];

    // Loop through each page name
    for (const pageName of pageNamesRide) {
      // Query your database to retrieve all reviews for this page
      const reviews = await Review.find({ page: pageName });

      // Calculate the average rating for this page
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0); // Use a different variable name here
      const averageRatingRide = reviews.length > 0 ? totalRating / reviews.length : null;

      // Store the average rating in the object
      averageRatingsRide[pageName] = averageRatingRide;
      console.log(averageRatingRide)
    }

    // Loop through each page name
    for (const pageName of pageNamesFood) {
      // Query your database to retrieve all reviews for this page
      const reviews = await Review.find({ page: pageName });

      // Calculate the average rating for this page
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0); // Use a different variable name here
      const averageRatingFood = reviews.length > 0 ? totalRating / reviews.length : null;

      // Store the average rating in the object
      averageRatingsFood[pageName] = averageRatingFood;
    }    
    console.log(averageRatingsFood)

    // Loop through each page name
    for (const pageName of pageNamesShow) {
      // Query your database to retrieve all reviews for this page
      const reviews = await Review.find({ page: pageName });

      // Calculate the average rating for this page
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0); // Use a different variable name here
      const averageRatingShow = reviews.length > 0 ? totalRating / reviews.length : null;

      // Store the average rating in the object
      averageRatingsShow[pageName] = averageRatingShow;
    }
    const rideSections = [
      {
          name: 'Space Mountain',
          rating: averageRatingsRide['space-mountain'],
          description: 'Space Mountain is a space-themed dark ride indoor rollercoaster. Expect twists, turns, and sudden drops!',
          src: 'assets/image/Sunshine Attractions-logo/space-mountain.jpeg',
          buttonSrc: '/page/space-mountain' // Button source
      },
      {
          name: 'Thunder Mountain',
          rating: averageRatingsRide['thunder-mountain'],
          description: 'Big Thunder Mountain is a rollercoaster ride that takes place in an old western setting.',
          src: 'assets/image/Sunshine Attractions-logo/big-thunder-mountain.jpeg',
          buttonSrc: '/page/thunder-mountain' // Button source
      },
      {
          name: 'Haunted Mansion',
          rating: averageRatingsRide['haunted-mansion'],
          description: 'Haunted Mansion is a dark slow ride through a spooky mansion, get ready to see ghosts, and get immersed into a well crafted disney haunt.',
          src: 'assets/image/Sunshine Attractions-logo/haunted-mansion.jpg',
          buttonSrc: '/page/haunted-mansion' // Button source
      },
      {
        name: 'Seven Dwarfs Mine Train',
        rating: averageRatingsRide['seven-dwarfs-mine-train'],
        description: `Seven Dwarfs Mine Train is a popular roller coaster attraction at Disney World's Magic Kingdom, themed around Disney's classic film, Snow White and the Seven Dwarfs.`,
        src: '/assets/image/Sunshine Attractions-logo/mine-train.jpeg',
        buttonSrc: '/page/seven-dwarfs-mine-train' // Button source
    },
    {
      name: 'Pirates of the Caribbean',
      rating: averageRatingsRide['pirates-of-the-caribbean'],
      description: 'Pirates of the Caribbean is a thrilling boat ride that takes you through a pirate-infested Caribbean island. Get ready to encounter pirates, treasure, and adventure on the high seas.',
      src: "assets/image/Sunshine Attractions-logo/Pirates_of_the_Caribbean_at_Walt_Disney_World_January_2012.jpeg",
      buttonSrc: '/page/pirates-of-the-caribbean' // Button source
    },
    {
      name: 'Jungle Cruise',
      rating: averageRatingsRide['jungle-cruise'],
      description: 'Jungle Cruise is a scenic boat tour through exotic rivers and jungles. Prepare for a humorous and adventurous journey as you encounter exotic animals and witty tour guides.',
      src: "assets/image/Sunshine Attractions-logo/Hong_Kong_Disneyland_(10098310885).jpeg", // Leave this blank
      buttonSrc: '/page/jungle-cruise' // Button source
    },
    {
      name: 'Dumbo the Flying Elephant',
      rating: averageRatingsRide['dumbo-the-flying-elephant'],
      description: 'Dumbo the Flying Elephant is a timeless Disney classic ride that lets you soar above Fantasyland aboard your very own flying elephant. Enjoy gentle flights and take in panoramic views of the park from the sky.',
      src: "assets/image/Sunshine Attractions-logo/Dumbo_the_Flying_Elephant_Close-up.jpeg", // Leave this blank
      buttonSrc: '/page/dumbo-the-flying-elephant' // Button source
    },
    {
      name: 'Tomorrowland Transit Authority PeopleMover',
      rating: averageRatingsRide['tomorrowland-transit-authority-peoplemover'],
      description: 'The Tomorrowland Transit Authority PeopleMover is a relaxing, slow-moving tour of Tomorrowland that provides an elevated view of the attractions and futuristic cityscape. Sit back and enjoy the gentle ride as you explore the future.',
      src: "assets/image/Sunshine Attractions-logo/PeopleMover_Sign_(28581641953).jpeg", // Leave this blank
      buttonSrc: '/page/tomorrowland-transit-authority-peoplemover' // Button source
    },
    {
      name: "It's a Small World",
      rating: averageRatingsRide['its-a-small-world'],
      description: "It's a Small World is a classic boat ride that takes you on a global journey celebrating cultures from around the world. Enjoy a musical and visually stunning voyage through scenes filled with dancing dolls and iconic landmarks.",
      src: "assets/image/Sunshine Attractions-logo/640px-It's_a_Small_World_-_Magic_Kingdom4.jpeg", // Leave this blank
      buttonSrc: '/page/its-a-small-world' // Button source
    },
    {
      name: 'Prince Charming Regal Carrousel',
      rating: averageRatingsRide['prince-charming-regal-carrousel'],
      description: 'The Prince Charming Regal Carrousel is a classic carousel ride that allows you to take a spin on beautifully decorated horses and other fantasy creatures. Enjoy a timeless and enchanting ride fit for royalty.',
      src: "assets/image/Sunshine Attractions-logo/Cinderella's_Golden_Carrousel_TDL.jpeg", // Leave this blank
      buttonSrc: '/page/prince-charming-regal-carrousel' // Button source
    },
    {
      name: "Peter Pan's Flight",
      rating: averageRatingsRide["peter-pan's-flight"],
      description: "Peter Pan's Flight is a magical dark ride that allows you to embark on a whimsical journey to Neverland. Soar over London, encounter Captain Hook, and join Peter Pan in this enchanting adventure through the skies.",
      src: "assets/image/Sunshine Attractions-logo/peter-pan.jpeg", // Leave this blank
      buttonSrc: "/page/peter-pan's-flight" // Button source
    },
    {
      name: 'Under the Sea - Journey of the Little Mermaid',
      rating: averageRatingsRide['under-the-sea-journey-of-the-little-mermaid'],
      description: 'Under the Sea - Journey of the Little Mermaid is a delightful dark ride that immerses you in Ariel\'s underwater world. Join Ariel and her friends as you relive the story of Disney\'s The Little Mermaid through music and enchanting scenes.',
      src: "assets/image/Sunshine Attractions-logo/The_Little_Mermaid_~_Ariel's_Undersea_Adventure_(view_in_2023).jpeg", // Leave this blank
      buttonSrc: '/page/under-the-sea-journey-of-the-little-mermaid' // Button source
    },
    {
      name: 'The Barnstormer',
      rating: averageRatingsRide['the-barnstormer'],
      description: 'The Barnstormer is a family-friendly rollercoaster that takes you on a thrilling journey through the circus. Join Goofy as he takes you on a wild and comical ride aboard his stunt plane.',
      src: "assets/image/Sunshine Attractions-logo/Barnstormer_(Magic_Kingdom)_1.jpeg", // Leave this blank
      buttonSrc: '/page/the-barnstormer' // Button source
    },
    {
      name: 'The Magic Carpets of Aladdin',
      rating: averageRatingsRide['the-magic-carpets-of-aladdin'],
      description: 'The Magic Carpets of Aladdin is a whimsical spinner ride that allows you to board a magical flying carpet and soar above Agrabah. Join Aladdin and Jasmine on a high-flying adventure filled with fun and surprises.',
      src: "assets/image/Sunshine Attractions-logo/640px-Tokyo_DisneySea_The_Magic_Carpets_of_Aladdin_201306.jpeg", // Leave this blank
      buttonSrc: '/page/the-magic-carpets-of-aladdin' // Button source
    }
        
    

    
  
  
      // Add more ride sections here
    ];

    const foodSections = [
      {
          name: 'Space Mountain',
          description: 'Space Mountain is a space-themed dark ride indoor rollercoaster. Expect twists, turns, and sudden drops!',
          src: 'assets/image/Sunshine Attractions-logo/space-mountain.jpeg',
          buttonSrc: '/space-mountain' // Button source
      },
      {
          name: 'Thunder Mountain',
          description: 'Big Thunder Mountain is a rollercoaster ride that takes place in an old western setting.',
          src: 'assets/image/Sunshine Attractions-logo/big-thunder-mountain.jpeg',
          buttonSrc: '/thunder-mountain' // Button source
      },
      {
          name: 'Haunted Mansion',
          description: 'Haunted Mansion is a dark slow ride through a spooky mansion, get ready to see ghosts, and get immersed into a well crafted disney haunt.',
          src: 'assets/image/Sunshine Attractions-logo/haunted-mansion.jpg',
          buttonSrc: '/haunted-mansion' // Button source
      },

      
  
      // Add more ride sections here
    ];

    const showSections = [
      {
          name: 'Space Mountain',
          description: 'Space Mountain is a space-themed dark ride indoor rollercoaster. Expect twists, turns, and sudden drops!',
          src: 'assets/image/Sunshine Attractions-logo/space-mountain.jpeg',
          buttonSrc: '/space-mountain' // Button source
      },
      {
          name: 'Thunder Mountain',
          description: 'Big Thunder Mountain is a rollercoaster ride that takes place in an old western setting.',
          src: 'assets/image/Sunshine Attractions-logo/big-thunder-mountain.jpeg',
          buttonSrc: '/thunder-mountain' // Button source
      },
      {
          name: 'Haunted Mansion',
          description: 'Haunted Mansion is a dark slow ride through a spooky mansion, get ready to see ghosts, and get immersed into a well crafted disney haunt.',
          src: 'assets/image/Sunshine Attractions-logo/haunted-mansion.jpg',
          buttonSrc: '/haunted-mansion' // Button source
      },
  
  
      // Add more ride sections here
    ];

    // Sort the ride sections by average rating in descending order
    rideSections.sort((a, b) => b.rating - a.rating);
    foodSections.sort((a, b) => b.rating - a.rating);
    showSections.sort((a, b) => b.rating - a.rating);
    console.log(rideSections)

    console.log(rideSections)

    res.render('disney-selection-magickingdom', { user: req.user, isDesktop, loggedIn, averageRatingsRide, averageRatingsFood, averageRatingsShow, pageNamesRide, pageNamesFood, pageNamesShow, rideSections, foodSections, showSections});
  },

  getPage: async (req, res) => {
    const loggedIn = req.isAuthenticated();
    const isDesktop = req.cookies.isDesktop === 'true';
    // pageId stores the :id to track the page id
    const pageId = req.params.id;

    const pageData = {
      'space-mountain': {
        tags: ['dark-ride', 'rollercoaster', 'thrill', 'immersive'],
        name: 'Space Mountain',
        wait: 'space-wait',
        about: `Space Mountain is a space themed dark ride indoor rollercoaster. Expect twists, turns, and sudden drops! Space Mountain is a beloved roller coaster attraction at Disney World's Magic Kingdom. It's set within a massive, iconic white dome, resembling a futuristic space station.`,
        height: 'To ride Space Mountain, you must be at least 44 inches (112 cm) tall.',
        duration: '3 Minutes',
        drop: '26′',
        inversions: 'No',
        opening: 'Space Mountain first opened its doors to thrill-seekers on January 15, 1975. Since then, it has been a staple of the Magic Kingdom experience.',
        fact: 'Space Mountain operates with two separate tracks that often run simultaneously, providing riders with slightly different experiences, adding to its replay value.',
        src: '/assets/image/Sunshine Attractions-logo/space-mountain.jpeg',
        alt: 'Photo of Space Mountain'
      },
      'thunder-mountain': {
        tags: ['Family-Friendly Thrills', 'rollercoaster', 'immersive'],
        name: 'Thunder Mountain',
        wait: 'thunder-wait',
        about: `Thunder Mountain is designed to mimic a thrilling mine train ride through the Wild West. The attraction's most iconic feature is the towering red rock formation known as "Big Thunder Mountain," which serves as the backdrop for the ride's thrilling adventure.`,
        height: 'To ride Space Mountain, you must be at least 3′ 8″',
        duration: '4 Minutes',
        drop: '26′',
        inversions: 'No',
        opening: 'The ride officially opened to the public on November 15, 1980, adding a new dimension of excitement to the park.',
        fact: 'Big Thunder Mountain has earned its status as a classic Disney attraction, loved by visitors for its combination of family-friendly thrills and immersive theming.',
        src: '/assets/image/Sunshine Attractions-logo/big-thunder-mountain.jpeg',
        alt: 'Photo of Thunder Mountain'
      },
      'haunted-mansion': {
        tags: ['Dark Ride', 'Haunted', 'Immersive'],
        name: 'Haunted Mansion',
        wait: 'haunted-wait',
        about: `The Haunted Mansion is a classic dark ride attraction that invites visitors to explore a haunted estate filled with ghosts, ghouls, and spooky surprises. This eerie adventure combines chilling effects with Disney's signature storytelling for a ghostly good time.`,
        height: `There are no height restrictions for the Haunted Mansion. It's suitable for guests of all ages.`,
        duration: '8 Minutes',
        drop: 'No drops or inversions',
        inversions: 'No',
        opening: 'The Haunted Mansion made its spooky debut on October 1, 1971, welcoming brave souls to experience its ghostly encounters.',
        fact: 'One of the unique features of the Haunted Mansion is its famous "Stretching Room," where guests are given chillingly humorous instructions for their supernatural journey.',
        src: '/assets/image/Sunshine Attractions-logo/haunted-mansion.jpg', // Leave this blank
        alt: 'Photo of haunted mansion' // Leave this blank
      },
      'seven-dwarfs-mine-train': {
        tags: ['Family-Friendly', 'Rollercoaster', 'Immersive'],
        name: 'Seven Dwarfs Mine Train',
        wait: 'dwarfs-wait',
        about: `The Seven Dwarfs Mine Train is a family-friendly rollercoaster that takes you on a journey into the heart of a diamond mine, where you'll encounter scenes and characters from Disney's Snow White and the Seven Dwarfs. This enchanting ride combines thrills and storytelling in a magical setting.`,
        height: 'To ride the Seven Dwarfs Mine Train, you must be at least 38 inches tall.',
        duration: '3 Minutes',
        drop: '18 feet',
        inversions: 'No',
        opening: 'The attraction opened on May 28, 2014, adding a new dimension of fun to Fantasyland.',
        fact: 'The ride offers a unique swaying motion as you travel through the mine, adding an extra layer of excitement to your journey.',
        src: "/assets/image/Sunshine Attractions-logo/mine-train.jpeg", // Leave this blank
        alt: 'Photo of Seven Dwarfs Mine Train' // Leave this blank
      },
      'pirates-of-the-caribbean': {
        tags: ['Dark Ride', 'Adventure', 'Immersive'],
        name: 'Pirates of the Caribbean',
        wait: 'pirates-wait',
        about: `Pirates of the Caribbean is a classic dark ride that immerses you in the world of swashbuckling pirates. Sail through treacherous waters, explore hidden caves, and encounter pirate adventures on this thrilling and immersive voyage.`,
        height: `There are no height restrictions for Pirates of the Caribbean. It's suitable for all ages.`,
        duration: '8 Minutes',
        drop: 'No drops or inversions',
        inversions: 'No',
        opening: `The attraction made its debut on March 18, 1967, making it one of the park's original and enduring favorites.`,
        fact: 'Keep an eye out for Captain Jack Sparrow, a character added to the attraction in recent years, adding a new layer of adventure to the ride.',
        src: "/assets/image/Sunshine Attractions-logo/Pirates_of_the_Caribbean_at_Walt_Disney_World_January_2012.jpeg" , // Leave this blank
        alt: 'Photo of Pirates of The Caribbean' // Leave this blank
      },
      'jungle-cruise': {
        tags: ['Adventure', 'Boat Ride', 'Humor'],
        name: 'Jungle Cruise',
        wait: 'jungle-wait',
        about: `The Jungle Cruise is a delightful boat ride through exotic rivers filled with animatronic animals, lush scenery, and the witty commentary of your jungle guide. This comedic adventure takes you on a humorous and scenic journey through the jungle wilderness.`,
        height: `There are no height restrictions for the Jungle Cruise. It's suitable for all ages.`,
        duration: '10 Minutes',
        drop: 'No drops or inversions',
        inversions: 'No',
        opening: 'The attraction opened on October 1, 1971, offering a different type of Disney adventure.',
        fact: 'The Jungle Cruise is known for its entertaining skippers who add their own unique flair to each cruise with their jokes and puns.',
        src: "/assets/image/Sunshine Attractions-logo/Hong_Kong_Disneyland_(10098310885).jpeg", // Leave this blank
        alt: 'Photo of Jungle Cruise' // Leave this blank
      },
      'dumbo-the-flying-elephant': {
        tags: ['Family-Friendly', 'Spinner Ride', 'Classic'],
        name: 'Dumbo the Flying Elephant',
        wait: 'dumbo-wait',
        about: `Dumbo the Flying Elephant is a beloved spinner ride that lets you soar through the air with Dumbo, the flying elephant. Take a whimsical journey high above Fantasyland and enjoy the magical view from your own flying Dumbo.`,
        height: `There are no height restrictions for Dumbo the Flying Elephant. It's suitable for guests of all ages.`,
        duration: '2 Minutes',
        drop: 'No drops or inversions',
        inversions: 'No',
        opening: 'The attraction opened with the Magic Kingdom on October 1, 1971, and has been a classic ever since.',
        fact: 'The iconic Dumbo ride is a must-visit for families, offering a gentle and enchanting experience for all.',
        src: "/assets/image/Sunshine Attractions-logo/Dumbo_the_Flying_Elephant_Close-up.jpeg", //src
        alt: 'Photo of Dumbo The Flying Elephant from Disney World Magic Kingdom' //alt
      },
      'tomorrowland-transit-authority-peoplemover': {
        tags: ['Slow Ride', 'Scenic Tour', 'Futuristic'],
        name: 'Tomorrowland Transit Authority PeopleMover',
        wait: 'peoplemover-wait',
        about: `The Tomorrowland Transit Authority PeopleMover is a relaxing and futuristic tour that takes you on a leisurely ride through Tomorrowland. Glide through the city of the future, passing by iconic attractions and enjoying breathtaking views.`,
        height: `There are no height restrictions for the Tomorrowland Transit Authority PeopleMover. It's suitable for guests of all ages.`,
        duration: '10 Minutes',
        drop: 'No drops or inversions',
        inversions: 'No',
        opening: 'The attraction has been operating since July 1, 1975, offering a unique perspective on Tomorrowland.',
        fact: 'The PeopleMover provides an excellent opportunity to sit back, relax, and take in the sights and sounds of Tomorrowland.',
        src: "/assets/image/Sunshine Attractions-logo/PeopleMover_Sign_(28581641953).jpeg", //src
        alt: 'Photo of Tomorrowland Transir Authority PeopleMover' //alt
      },
      'its-a-small-world': {
        tags: ['Classic', 'Boat Ride', 'Cultural'],
        name: `It's a Small World`,
        wait: 'smallWorld-wait',
        about: `It's a Small World is a classic boat ride that takes you on a global journey celebrating the unity and diversity of cultures around the world. Experience charming scenes, catchy music, and the joy of international harmony.`,
        height: `There are no height restrictions for It's a Small World. It's suitable for guests of all ages.`,
        duration: '10 Minutes',
        drop: 'No drops or inversions',
        inversions: 'No',
        opening: 'The attraction made its debut on October 1, 1971, becoming a beloved Disney classic.',
        fact: `The iconic song, "It's a Small World (After All)," is a central part of the attraction and is sung in various languages throughout the ride.`,
        src: "/assets/image/Sunshine Attractions-logo/640px-It's_a_Small_World_-_Magic_Kingdom4.jpeg", // Leave this blank
        alt: 'Photo of Its a Small World Magic Kingdom' // Leave this blank
      },
      'prince-charming-regal-carrousel': {
        tags: ['Classic Ride', 'Carousel', 'Fantasy'],
        name: 'Prince Charming Regal Carrousel',
        wait: 'carrousel-wait',
        about: `The Prince Charming Regal Carrousel is a classic carousel ride that allows you to take a spin on beautifully decorated horses and other fantasy creatures. Enjoy a timeless and enchanting ride fit for royalty.`,
        height: `There are no height restrictions for the Regal Carrousel. It's suitable for guests of all ages.`,
        duration: '3 Minutes',
        drop: 'No drops or inversions',
        inversions: 'No',
        opening: 'The carousel has been a part of Fantasyland since the park opened on October 1, 1971, offering a charming and picturesque experience.',
        fact: 'Each horse on the carousel is uniquely adorned with ornate details and provides a magical and nostalgic ride for all ages.',
        src: "/assets/image/Sunshine Attractions-logo/Cinderella's_Golden_Carrousel_TDL.jpeg",
        alt: 'Photo of Prince Charming Regal Carrousel' //alt
      },
      'peter-pans-flight': {
        tags: ['Family-Friendly', 'Fantasy', 'Dark Ride'],
        name: "Peter Pan's Flight",
        wait: 'peterPan-wait',
        about: `Peter Pan's Flight is a magical dark ride that allows you to embark on a whimsical journey to Neverland. Soar over London, encounter Captain Hook, and join Peter Pan in this enchanting adventure through the skies.`,
        height: `To ride Peter Pan's Flight, you must be at least 40 inches tall.`,
        duration: '3 Minutes',
        drop: 'No drops or inversions',
        inversions: 'No',
        opening: 'The attraction opened with the park on October 1, 1971, and continues to be a beloved classic.',
        fact: `The attraction's flying pirate ship ride vehicles provide a unique perspective of the story and scenery.`,
        src: "/assets/image/Sunshine Attractions-logo/peter-pan.jpeg", // Leave this blank
        alt: 'Photo of Peter Pan Disney World' // Leave this blank
      },
      'under-the-sea-journey-of-the-little-mermaid': {
        tags: ['Family-Friendly', 'Dark Ride', 'Musical'],
        name: 'Under the Sea - Journey of the Little Mermaid',
        wait: 'mermaid-wait',
        about: `Under the Sea - Journey of the Little Mermaid is a delightful dark ride that immerses you in Ariel's underwater world. Join Ariel and her friends as you relive the story of Disney's The Little Mermaid through music and enchanting scenes.`,
        height: `There are no height restrictions for this ride. It's suitable for guests of all ages.`,
        duration: `6 Minutes`,
        drop: 'No drops or inversions',
        inversions: 'No',
        opening: 'The attraction opened on December 6, 2012, offering a whimsical adventure for fans of Ariel and her underwater kingdom.',
        fact: 'The ride features a memorable musical score and animatronic characters that bring the beloved characters to life.',
        src: "/assets/image/Sunshine Attractions-logo/The_Little_Mermaid_~_Ariel's_Undersea_Adventure_(view_in_2023).jpeg", // Leave this blank
        alt: 'Photo of Under The Sea Journey of The Little Mermaid' // Leave this blank
      },
      'the-barnstormer': {
        tags: ['Family-Friendly', 'Rollercoaster', 'Adventure'],
        name: 'The Barnstormer',
        wait: 'barnstormer-wait',
        about: `The Barnstormer is a family-friendly rollercoaster that takes you on a thrilling journey through the circus. Join Goofy as he takes you on a wild and comical ride aboard his stunt plane.`,
        height: 'To ride The Barnstormer, you must be at least 35 inches tall.',
        duration: '2 Minutes',
        drop: 'No drops or inversions',
        inversions: 'No',
        opening: 'The attraction opened on October 1, 1996, and provides a kid-friendly rollercoaster experience.',
        fact: 'The ride is designed for young adventurers and offers a taste of the excitement of rollercoasters.',
        src: "/assets/image/Sunshine Attractions-logo/Barnstormer_(Magic_Kingdom)_1.jpeg", // Leave this blank
        alt: 'Photo of The Barnstormer' // Leave this blank
      },
      'the-magic-carpets-of-aladdin': {
        tags: ['Family-Friendly', 'Spinner Ride', 'Fantasy'],
        name: 'The Magic Carpets of Aladdin',
        wait: 'aladdin-wait',
        about: `The Magic Carpets of Aladdin is a whimsical spinner ride that allows you to board a magical flying carpet and soar above Agrabah. Join Aladdin and Jasmine on a high-flying adventure filled with fun and surprises.`,
        height: `There are no height restrictions for this ride. It's suitable for guests of all ages.`,
        duration: '2 Minutes',
        drop: 'No drops or inversions',
        inversions: 'No',
        opening: 'The attraction opened on May 24, 2001, offering a delightful and colorful experience in Adventureland.',
        fact: 'The ride allows guests to control the height of their carpets, adding an interactive element to the experience.',
        src: "/assets/image/Sunshine Attractions-logo/640px-Tokyo_DisneySea_The_Magic_Carpets_of_Aladdin_201306.jpeg", // Leave this blank
        alt: 'Photo of The Magic Carpets of Aladdin' // Leave this blank
      }      

      // Add more pages and their data here
    };

  // Initialize variables for filtering
  let filter = req.query.filter || 'all'; // Default to 'all' filter
  let filteredReview = [];
  
  if (filter === 'all') {
    // Fetch all reviews without any specific filtering
    filteredReview = await Review.find({ page: `${pageId}` })
      .populate('user')
      .populate({
        path: 'comments',
        populate: { path: 'user' }
      });
  } else if (filter === 'your') {
    // Fetch reviews submitted by the logged-in user
    if (!req.user) {
      // Redirect or handle as needed when user is not logged in
      return res.redirect("back");
    }
    filteredReview = await Review.find({ user: req.user.id })
      .populate('user')
      .populate({
        path: 'comments',
        populate: { path: 'user' }
      });
  } else if (filter === 'highest-rated') {
    // Fetch reviews sorted by highest rating
    filteredReview = await Review.find({ page: `${pageId}` })
      .sort('-rating')
      .populate('user')
      .populate({
        path: 'comments',
        populate: { path: 'user' }
      });
  } else if (filter === 'most-critical') {
  // Fetch reviews sorted by lowest rating
  filteredReview = await Review.find({})
    .sort('rating')
    .populate('user')
    .populate({
      path: 'comments',
      populate: { path: 'user' }
    });
} else if (filter === 'most-recent') {
  // Fetch reviews sorted by most recent
  filteredReview = await Review.find({ page: `${pageId}` })
    .sort('-createdAt')
    .populate('user')
    .populate({
      path: 'comments',
      populate: { path: 'user' }
    });
}
    const pageName = `${pageId}`
    const comments = await Comment.find({ page: `${pageId}` })
    .populate('user')
    .populate({
      path: 'comments', // Populate the 'comments' field for each review
      populate: { path: 'user' } // Populate the 'user' field for comments
    });
    const review = await Review.find({ page: `${pageId}` })
      .populate('user')
      .populate({
        path: 'comments', // Populate the 'comments' field for each review
        populate: { path: 'user' } // Populate the 'user' field for comments
      });
  
    const totalReviews = review.length;
    
    // Calculate the total rating sum
    const totalRatingSum = review.reduce((sum, review) => sum + review.rating, 0);
    
    // Calculate the average rating
    const averageRating = totalRatingSum / totalReviews;
  
    // Initialize the disableReviewButton variable
    let disableReviewButton = false;

    let existingReview = null;
    
    if (req.user) {
        existingReview = await Review.findOne({
          page: `${pageId}`,
          user: req.user.id,
          reviewedBy: { $in: [req.user.id] },
        });
    }
  
    if (existingReview) {
      // User has already submitted a review for this page
      disableReviewButton = true;
    }
  
    res.render('page', { user: req.user, isDesktop, loggedIn, review: filteredReview, averageRating, disableReviewButton, comments: comments, filter: filter, pageName: pageName, pageId, pageData });

  },

  getHauntedMansion: async (req, res) => {
    const loggedIn = req.isAuthenticated();
    const isDesktop = req.cookies.isDesktop === 'true'; // Access the cookie value
    // Initialize variables for filtering
    let filter = req.query.filter || 'all'; // Default to 'all' filter
    let filteredReview = [];
  
    if (filter === 'all') {
      // Fetch all reviews without any specific filtering
      filteredReview = await Review.find({ page: 'haunted-mansion' })
        .populate('user')
        .populate({
          path: 'comments',
          populate: { path: 'user' }
        });
    } else if (filter === 'your') {
    // Fetch reviews submitted by the logged-in user
      if (!req.user) {
        // Redirect or handle as needed when user is not logged in
        return res.redirect("back");
      }
      filteredReview = await Review.find({ user: req.user.id })
        .populate('user')
        .populate({
          path: 'comments',
          populate: { path: 'user' }
        });
    } else if (filter === 'highest-rated') {
      // Fetch reviews sorted by highest rating
      filteredReview = await Review.find({ page: 'haunted-mansion' })
        .sort('-rating')
        .populate('user')
        .populate({
          path: 'comments',
          populate: { path: 'user' }
        });
    } else if (filter === 'most-critical') {
    // Fetch reviews sorted by lowest rating
    filteredReview = await Review.find({ page: 'haunted-mansion' })
      .sort('rating')
      .populate('user')
      .populate({
        path: 'comments',
        populate: { path: 'user' }
      });
    } else if (filter === 'most-recent') {
      // Fetch reviews sorted by most recent
      filteredReview = await Review.find({ page: 'haunted-mansion' })
        .sort('-createdAt')
        .populate('user')
        .populate({
          path: 'comments',
          populate: { path: 'user' }
        });
    }
    
    const pageName = 'haunted-mansion'
    const comments = await Comment.find({ page: 'haunted-mansion' })
    .populate('user')
    .populate({
      path: 'comments', // Populate the 'comments' field for each review
      populate: { path: 'user' } // Populate the 'user' field for comments
    });
    const review = await Review.find({ page: 'haunted-mansion' })
      .populate('user')
      .populate({
        path: 'comments', // Populate the 'comments' field for each review
        populate: { path: 'user' } // Populate the 'user' field for comments
      });
  
    const totalReviews = review.length;
    
    // Calculate the total rating sum
    const totalRatingSum = review.reduce((sum, review) => sum + review.rating, 0);
    
    // Calculate the average rating
    const averageRating = totalRatingSum / totalReviews;
  
    // Initialize the disableReviewButton variable
    let disableReviewButton = false;

    let existingReview = null;
    
    if (req.user) {
      existingReview = await Review.findOne({
        page: 'haunted-mansion',
        user: req.user.id,
        reviewedBy: { $in: [req.user.id] },
      });
    }
  
    if (existingReview) {
      // User has already submitted a review for this page
      disableReviewButton = true;
    }
  
    res.render('haunted-mansion', { user: req.user, isDesktop, loggedIn, review: filteredReview, averageRating, disableReviewButton, comments: comments, filter: filter, pageName: pageName });
  },
  getSevenDwarfsMineTrain: async (req, res) => {
    const loggedIn = req.isAuthenticated();
    const isDesktop = req.cookies.isDesktop === 'true'; // Access the cookie value
  // Initialize variables for filtering
  let filter = req.query.filter || 'all'; // Default to 'all' filter
  let filteredReview = [];
  
  if (filter === 'all') {
    // Fetch all reviews without any specific filtering
    filteredReview = await Review.find({ page: 'seven-dwarfs-mine-train' })
      .populate('user')
      .populate({
        path: 'comments',
        populate: { path: 'user' }
      });
  } else if (filter === 'your') {
    // Fetch reviews submitted by the logged-in user
    if (!req.user) {
      // Redirect or handle as needed when user is not logged in
      return res.redirect("back");
    }
    filteredReview = await Review.find({ user: req.user.id })
      .populate('user')
      .populate({
        path: 'comments',
        populate: { path: 'user' }
      });
  } else if (filter === 'highest-rated') {
    // Fetch reviews sorted by highest rating
    filteredReview = await Review.find({ page: 'seven-dwarfs-mine-train' })
      .sort('-rating')
      .populate('user')
      .populate({
        path: 'comments',
        populate: { path: 'user' }
      });
  } else if (filter === 'most-critical') {
  // Fetch reviews sorted by lowest rating
  filteredReview = await Review.find({})
    .sort('rating')
    .populate('user')
    .populate({
      path: 'comments',
      populate: { path: 'user' }
    });
} else if (filter === 'most-recent') {
  // Fetch reviews sorted by most recent
  filteredReview = await Review.find({ page: 'seven-dwarfs-mine-train' })
    .sort('-createdAt')
    .populate('user')
    .populate({
      path: 'comments',
      populate: { path: 'user' }
    });
}
    const pageName = 'space-mountain'
    const comments = await Comment.find({ page: 'seven-dwarfs-mine-train' })
    .populate('user')
    .populate({
      path: 'comments', // Populate the 'comments' field for each review
      populate: { path: 'user' } // Populate the 'user' field for comments
    });
    const review = await Review.find({ page: 'seven-dwarfs-mine-train' })
      .populate('user')
      .populate({
        path: 'comments', // Populate the 'comments' field for each review
        populate: { path: 'user' } // Populate the 'user' field for comments
      });
  
    const totalReviews = review.length;
    
    // Calculate the total rating sum
    const totalRatingSum = review.reduce((sum, review) => sum + review.rating, 0);
    
    // Calculate the average rating
    const averageRating = totalRatingSum / totalReviews;
  
    // Initialize the disableReviewButton variable
    let disableReviewButton = false;

    let existingReview = null;
    
    if (req.user) {
        existingReview = await Review.findOne({
          page: 'seven-dwarfs-mine-train',
          user: req.user.id,
          reviewedBy: { $in: [req.user.id] },
        });
    }
  
    if (existingReview) {
      // User has already submitted a review for this page
      disableReviewButton = true;
    }
  
    res.render('seven-dwarfs-mine-train', { user: req.user, isDesktop, loggedIn, review: filteredReview, averageRating, disableReviewButton, comments: comments, filter: filter, pageName: pageName });
  },
};

