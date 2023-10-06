const Review = require("../models/Review"); // Import the Review model
const Comment = require("../models/Comment"); // Import the Comment model



module.exports = {
  getIndex: (req, res) => {
    const loggedIn = req.isAuthenticated();
    const isDesktop = req.cookies.isDesktop === 'true'; // Access the cookie value
    res.render('index', { user: req.user, isDesktop, loggedIn });
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
      "peter-pans-flight",
      'under-the-sea-journey-of-the-little-mermaid',
      'the-barnstormer',
      'the-magic-carpets-of-aladdin'
      /* Add more page names here if needed */
    ];    
    const pageNamesFood = [
      'cinderellas-royal-table',
      'be-our-guest-restaurant',
      'the-crystal-palace',
      'liberty-tree-tavern',
      'tonys-town-square-restaurant',
      'the-plaza-restaurant',
      'caseys-corner',
      'pecos-bill-tall-tale-inn-and-cafe',
      'columbia-harbour-house',
      'aloha-isle',
      'sleepy-hollow',
      'gastons-tavern',
      'cosmic-rays-starlight-cafe',
      'the-friars-nook',
      'pinocchio-village-haus',
      'storybook-treats',
      /* Add more page names here */
    ];
    
    const pageNamesShow = [
      "happily-ever-after",
      "festival-of-fantasy-parade",
      "enchanted-tiki-room",
      "hickey's-philharMagic",
      "country-bear-jamboree",
      "walt-disney's-carousel-of-progress",
      "monsters,-inc.-laugh-floor",
      "a-pirate's-adventure-treasures-of-the-seven-seas",
      "the-muppets-present...-great-moments-in-american-history",
      "main-street-trolley-show",
      "character-meet-and-greets",
      "the-dapper-dans"
      /* Add more show names here */
    ];

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
      src: "/assets/image/Sunshine Attractions-logo/peter-pan.jpeg", // Leave this blank
      buttonSrc: "/page/peter-pans-flight" // Button source
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
        name: 'Columbia Harbour House',
        rating: averageRatingsFood['columbia-harbour-house'],
        description: 'Columbia Harbour House offers seafood, sandwiches, and more in a nautical-themed setting. Enjoy a maritime meal in Liberty Square.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: '/page/columbia-harbour-house' // Button source
      },
      {
        name: 'Aloha Isle',
        rating: averageRatingsFood['aloha-isle'],
        description: 'Aloha Isle is your destination for Dole Whip treats and refreshments. Experience a taste of the tropics in Adventureland.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: '/page/aloha-isle' // Button source
      },
      {
        name: "Casey's Corner",
        rating: averageRatingsFood['caseys-corner'],
        description: "Casey's Corner serves classic ballpark fare, including hot dogs and corn dog nuggets. Experience the spirit of baseball on Main Street, U.S.A.",
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: "/page/caseys-corner" // Button source
      },
      {
        name: "Cosmic Ray's Starlight Cafe",
        rating: averageRatingsFood['cosmic-rays-starlight-cafe'],
        description: "Cosmic Ray's Starlight Cafe offers a variety of quick-service options and live entertainment from Sonny Eclipse. Enjoy an out-of-this-world meal in Tomorrowland.",
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: "/page/cosmic-rays-starlight-cafe" // Button source
      },
      {
        name: 'The Crystal Palace',
        rating: averageRatingsFood['the-crystal-palace'],
        description: 'The Crystal Palace offers character dining and a buffet with American cuisine. Dine with Winnie the Pooh and friends in a Victorian greenhouse setting on Main Street, U.S.A.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: '/page/the-crystal-palace' // Button source
      },
      {
        name: 'Liberty Tree Tavern',
        rating: averageRatingsFood['liberty-tree-tavern'],
        description: 'Liberty Tree Tavern serves colonial-inspired meals and an all-you-can-eat feast. Dine in a historic setting in Liberty Square.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: '/page/liberty-tree-tavern' // Button source
      },
      {
        name: "Tony's Town Square Restaurant",
        rating: averageRatingsFood['tonys-town-square-restaurant'],
        description: "Tony's Town Square Restaurant offers Italian dishes in an Italian trattoria setting. Dine with Lady and the Tramp on Main Street, U.S.A.",
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: "/page/tonys-town-square-restaurant" // Button source
      },
      {
        name: 'Sleepy Hollow',
        rating: averageRatingsFood['sleepy-hollow'],
        description: 'Sleepy Hollow offers delicious snacks and treats in a charming colonial-style setting. It\'s the perfect stop for a quick bite in Liberty Square.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: '/page/sleepy-hollow' // Button source
      },
      {
        name: "Gaston's Tavern",
        rating: averageRatingsFood['gastons-tavern'],
        description: "Gaston's Tavern is a rustic quick-service spot inspired by Gaston from Beauty and the Beast. Enjoy snacks and a cozy atmosphere in Fantasyland.",
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: "/page/gastons-tavern" // Button source
      },
      {
        name: "The Friar's Nook",
        rating: averageRatingsFood['the-friars-nook'],
        description: "The Friar's Nook offers comfort food with a fairytale twist. Enjoy your meal in a charming nook in Fantasyland.",
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: "/page/the-friars-nook" // Button source
      },
      {
        name: 'Pinocchio Village Haus',
        rating: averageRatingsFood['pinocchio-village-haus'],
        description: 'Pinocchio Village Haus offers Italian-inspired quick-service meals in a charming Fantasyland setting. It\'s a great spot for pizza and more.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: '/page/pinocchio-village-haus' // Button source
      },
      {
        name: "Cinderella's Royal Table",
        rating: averageRatingsFood['cinderellas-royal-table'],
        description: 'Cinderella\'s Royal Table offers a character dining experience inside Cinderella Castle. Enjoy a royal meal fit for a princess!',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: "/page/cinderellas-royal-table" // Button source
      },
      {
        name: "Be Our Guest Restaurant",
        rating: averageRatingsFood['be-our-guest-restaurant'],
        description: 'Be Our Guest Restaurant is inspired by Beauty and the Beast, offering French-inspired cuisine in a magical setting.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: "/page/be-our-guest-restaurant" // Button source
      },    
      {
        name: "The Plaza Restaurant",
        rating: averageRatingsFood['the-plaza-restaurant'],
        description: 'The Plaza Restaurant offers casual American dining located on Main Street, U.S.A. Enjoy a delightful meal on Main Street.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: "/page/the-plaza-restaurant" // Button source
      },
      {
        name: 'Pecos Bill Tall Tale Inn and Cafe',
        rating: averageRatingsFood['pecos-bill-tall-tale-inn-and-cafe'],
        description: 'Pecos Bill Tall Tale Inn and Cafe serves Tex-Mex favorites in a Wild West setting. Saddle up and enjoy a meal in Frontierland.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: '/page/pecos-bill-tall-tale-inn-and-cafe' // Button source
      },
      {
        name: 'Storybook Treats',
        rating: averageRatingsFood['storybook-treats'],
        description: 'Storybook Treats offers sweet treats and soft-serve ice cream in a fairytale setting. Satisfy your sweet tooth in Fantasyland.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        buttonSrc: '/page/storybook-treats' // Button source
      }    
    ];

    const showSections = [
        {
          name: "Happily Ever After",
          rating: averageRatingsShow["happily-ever-after"],
          description: "Happily Ever After is a spectacular nighttime fireworks and projection show that takes place over Cinderella Castle. Be prepared to be enchanted by Disney's most beloved stories.",
          src: "/assets/image/Sunshine Attractions-logo/black.jpeg",
          buttonSrc: "/page/happily-ever-after"
        },
        {
          name: "Festival of Fantasy Parade",
          rating: averageRatingsShow["festival-of-fantasy-parade"],
          description: "The Festival of Fantasy Parade is a colorful and musical parade featuring Disney characters and floats. Join the celebration on Main Street, U.S.A.",
          src: "/assets/image/Sunshine Attractions-logo/black.jpeg",
          buttonSrc: "/page/festival-of-fantasy-parade"
        },
        {
          name: "Enchanted Tiki Room",
          rating: averageRatingsShow["enchanted-tiki-room"],
          description: "The Enchanted Tiki Room is a classic attraction featuring animatronic birds and a tropical show. Enjoy a taste of the South Pacific right in the heart of Adventureland.",
          src: "/assets/image/Sunshine Attractions-logo/black.jpeg",
          buttonSrc: "/page/enchanted-tiki-room"
        },
        {
          name: "Mickey's PhilharMagic",
          rating: averageRatingsShow["mickeys-philharmagic"],
          description: "Mickey's PhilharMagic is a 3D musical adventure featuring classic Disney songs and characters. Don your opera glasses and join the fun in Fantasyland.",
          src: "/assets/image/Sunshine Attractions-logo/black.jpeg",
          buttonSrc: "/page/mickeys-philharmagic"
        },
        {
          name: "Country Bear Jamboree",
          rating: averageRatingsShow["country-bear-jamboree"],
          description: "The Country Bear Jamboree is a humorous musical show featuring animatronic bears. Visit Grizzly Hall in Frontierland for some good old-fashioned country fun.",
          src: "/assets/image/Sunshine Attractions-logo/black.jpeg",
          buttonSrc: "/page/country-bear-jamboree"
        },
        {
          name: "Walt Disney's Carousel of Progress",
          rating: averageRatingsShow["carousel-of-progress"],
          description: "Walt Disney's Carousel of Progress is a rotating theater show that takes you through the progress of technology and American life. Step into the future in Tomorrowland.",
          src: "/assets/image/Sunshine Attractions-logo/black.jpeg",
          buttonSrc: "/page/carousel-of-progress"
        },
        {
          name: "Monsters, Inc. Laugh Floor",
          rating: averageRatingsShow["monsters-inc-laugh-floor"],
          description: "Monsters, Inc. Laugh Floor is an interactive comedy show featuring the hilarious antics of Mike Wazowski and other Monsters, Inc. characters. Have a laugh in Tomorrowland.",
          src: "/assets/image/Sunshine Attractions-logo/black.jpeg",
          buttonSrc: "/page/monsters-inc-laugh-floor"
        },
        {
          name: "A Pirate's Adventure - Treasures of the Seven Seas",
          rating: averageRatingsShow["pirates-adventure"],
          description: "A Pirate's Adventure - Treasures of the Seven Seas is an interactive quest where you join Captain Jack Sparrow's crew and search for hidden treasures in Adventureland.",
          src: "/assets/image/Sunshine Attractions-logo/black.jpeg",
          buttonSrc: "/page/pirates-adventure"
        },
        {
          name: "The Muppets Present... Great Moments in American History",
          rating: averageRatingsShow["muppets-great-moments"],
          description: "The Muppets Present... Great Moments in American History is a humorous show that retells historical moments with the Muppets' unique twist. Laugh and learn on Liberty Square.",
          src: "/assets/image/Sunshine Attractions-logo/black.jpeg",
          buttonSrc: "/page/muppets-great-moments"
        },
        {
          name: "Main Street Trolley Show",
          rating: averageRatingsShow["main-street-trolley-show"],
          description: "The Main Street Trolley Show is a delightful performance featuring the Dapper Dans and other Main Street entertainers. Catch this show at the entrance to Magic Kingdom.",
          src: "/assets/image/Sunshine Attractions-logo/black.jpeg",
          buttonSrc: "/page/main-street-trolley-show"
        },
        {
          name: "Character Meet and Greets",
          rating: averageRatingsShow["character-meet-greets"],
          description: "Character Meet and Greets allow you to meet your favorite Disney characters and take photos with them. Find them throughout Magic Kingdom.",
          src: "/assets/image/Sunshine Attractions-logo/black.jpeg",
          buttonSrc: "/page/character-meet-greets"
        },
        {
          name: "The Dapper Dans",
          rating: averageRatingsShow["dapper-dans"],
          description: "The Dapper Dans are a barbershop quartet that performs on Main Street, U.S.A. Enjoy their harmonious tunes and classic songs.",
          src: "/assets/image/Sunshine Attractions-logo/black.jpeg",
          buttonSrc: "/page/dapper-dans"
        } 
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
      },
      //FOOD AREA STARTS HERE
      'cinderellas-royal-table': {
        tags: ['Character Dining', 'Fine Dining', 'Cinderella Castle'],
        name: "Cinderella's Royal Table",
        about: "Cinderella's Royal Table offers a royal character dining experience inside the iconic Cinderella Castle. Meet Disney princesses while enjoying a fine dining meal.",
        pricing: 'Prices vary by meal and time of day. Check the official Disney website for current pricing.',
        atmosphere: 'Experience a regal and enchanting atmosphere with castle interiors and character interactions.',
        specialty: 'Signature dishes include the Royal Feast and dessert selections.',
        reservation: 'Reservations are highly recommended due to popularity.',
        dietaryOptions: 'Special dietary requests can be accommodated with advance notice.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      'be-our-guest-restaurant': {
        tags: ['Beauty and the Beast', 'French Cuisine', 'Fine Dining'],
        name: 'Be Our Guest Restaurant',
        about: 'Be Our Guest Restaurant is inspired by Beauty and the Beast and offers French-inspired cuisine. Dine in the grand ballroom or the Beast’s enchanted castle.',
        pricing: 'Prices vary by meal and time of day. Check the official Disney website for current pricing.',
        atmosphere: 'Step into the magical world of Beauty and the Beast with themed dining rooms and immersive decor.',
        specialty: 'Try the Grey Stuff for a delicious dessert treat.',
        reservation: 'Reservations are highly recommended due to popularity.',
        dietaryOptions: 'Special dietary requests can be accommodated with advance notice.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      'aloha-isle': {
        tags: ['Snacks', 'Dole Whip', 'Tropical'],
        name: 'Aloha Isle',
        about: 'Aloha Isle is famous for its Dole Whip, a delicious pineapple soft-serve treat. Enjoy a taste of the tropics in the heart of Magic Kingdom.',
        pricing: 'Prices vary by item. Check the official Disney website for current pricing.',
        atmosphere: 'Escape to a tropical paradise with tiki-inspired decor and outdoor seating.',
        specialty: 'Try the classic Dole Whip or indulge in a Dole Whip float.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      'caseys-corner': {
        tags: ['Quick Service', 'American Classics', 'Baseball'],
        name: "Casey's Corner",
        about: "Casey's Corner is a classic American eatery known for hot dogs and baseball-themed fare. It's a taste of Americana at the heart of Magic Kingdom.",
        pricing: 'Prices vary by item. Check the official Disney website for current pricing.',
        atmosphere: 'Step into a vintage baseball-inspired setting with classic tunes and memorabilia.',
        specialty: 'Try the famous Foot-long Hot Dog or the Chili Cheese Dog.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      'columbia-harbour-house': {
        tags: ['Seafood', 'New England', 'Nautical'],
        name: 'Columbia Harbour House',
        about: 'Columbia Harbour House offers seafood and comfort food in a charming New England-style setting. Enjoy a maritime meal in Liberty Square.',
        pricing: 'Prices vary by item. Check the official Disney website for current pricing.',
        atmosphere: 'Dine in a nautical-themed eatery with cozy corners and seaside decor.',
        specialty: 'Try the Lobster Roll or the Fried Shrimp Platter.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      'cosmic-rays-starlight-cafe': {
        tags: ['Quick Service', 'Space', 'Entertainment'],
        name: "Cosmic Ray's Starlight Café",
        about: "Cosmic Ray's Starlight Café is an out-of-this-world dining experience with burgers and entertainment. It's a space-age adventure in Tomorrowland.",
        pricing: 'Prices vary by item. Check the official Disney website for current pricing.',
        atmosphere: 'Enjoy a cosmic atmosphere with animatronic entertainment by Sonny Eclipse.',
        specialty: 'Try the Bacon Cheeseburger or the Rotisserie Chicken.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      'the-crystal-palace': {
        tags: ['Character Dining', 'Buffet', 'Victorian'],
        name: 'The Crystal Palace',
        about: 'The Crystal Palace offers character dining with Winnie the Pooh and friends in a beautiful Victorian greenhouse. Enjoy a buffet meal with Disney charm.',
        pricing: 'Prices vary by meal and time of day. Check the official Disney website for current pricing.',
        atmosphere: 'Dine in an elegant Victorian setting surrounded by lush greenery and natural light.',
        specialty: 'Indulge in a buffet with classic American and international dishes.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      'liberty-tree-tavern': {
        tags: ['American Classics', 'Colonial', 'Family Style'],
        name: 'Liberty Tree Tavern',
        about: 'Liberty Tree Tavern serves colonial-inspired family-style meals in a historic setting. Step back in time to the days of early America.',
        pricing: 'Prices vary by meal and time of day. Check the official Disney website for current pricing.',
        atmosphere: 'Experience the charm of colonial America with themed dining rooms and period decor.',
        specialty: `Enjoy hearty family-style dishes like the Patriot's Platter.`,
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      'tonys-town-square-restaurant': {
        tags: ['Italian', 'Lady and the Tramp', 'Romantic'],
        name: "Tony's Town Square Restaurant",
        about: "Tony's Town Square Restaurant offers Italian cuisine in a charming setting inspired by Lady and the Tramp. It's perfect for a romantic meal.",
        pricing: 'Prices vary by meal and time of day. Check the official Disney website for current pricing.',
        atmosphere: 'Dine in an Italian-inspired trattoria with a romantic ambiance.',
        specialty: 'Try the Spaghetti and Meatballs, a nod to the iconic Lady and the Tramp scene.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      'the-plaza-restaurant': {
        tags: ['American Classics', 'Victorian', 'Casual'],
        name: 'The Plaza Restaurant',
        about: 'The Plaza Restaurant offers American classics in a charming Victorian setting on Main Street, U.S.A. Enjoy a casual meal with a view of Cinderella Castle.',
        pricing: 'Prices vary by meal and time of day. Check the official Disney website for current pricing.',
        atmosphere: 'Relax in a casual Victorian-style restaurant with a view of Main Street.',
        specialty: 'Try the Plaza Club or the Plaza Loaded Fries.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      'pecos-bill-tall-tale-inn-and-cafe': {
        tags: ['Quick Service', 'Tex-Mex', 'Wild West'],
        name: 'Pecos Bill Tall Tale Inn and Cafe',
        about: 'Pecos Bill Tall Tale Inn and Cafe serves Tex-Mex favorites in a Wild West setting. Saddle up and enjoy a meal in Frontierland.',
        pricing: 'Prices vary by item. Check the official Disney website for current pricing.',
        atmosphere: 'Step into a Wild West saloon with rustic decor and cowboy charm.',
        specialty: 'Try the Fajita Platter or the Southwest Salad.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      'sleepy-hollow': {
        tags: ['Quick Service', 'Snacks', 'Colonial'],
        name: 'Sleepy Hollow',
        about: `Sleepy Hollow offers delicious snacks and treats in a charming colonial-style setting. It's the perfect stop for a quick bite in Liberty Square.`,
        pricing: 'Prices vary by item. Check the official Disney website for current pricing.',
        atmosphere: 'Enjoy your snack in a colonial-inspired setting with a view of Cinderella Castle.',
        specialty: 'Try the Sweet and Spicy Chicken Waffle Sandwich or the Nutella and Fresh Fruit Waffle Sandwich.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      'gastons-tavern': {
        tags: ['Quick Service', 'Gaston', 'Tavern'],
        name: "Gaston's Tavern",
        about: "Gaston's Tavern is a rustic quick-service spot inspired by Gaston from Beauty and the Beast. Enjoy snacks and a cozy atmosphere in Fantasyland.",
        pricing: 'Prices vary by item. Check the official Disney website for current pricing.',
        atmosphere: `Step into a rustic tavern with antler decor and Gaston's charm.`,
        specialty: 'Try the LeFou\'s Brew or the Warm Cinnamon Roll.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      'the-friars-nook': {
        tags: ['Quick Service', 'Comfort Food', 'Fairytale'],
        name: "The Friar's Nook",
        about: "The Friar's Nook offers comfort food with a fairytale twist. Enjoy your meal in a charming nook in Fantasyland.",
        pricing: 'Prices vary by item. Check the official Disney website for current pricing.',
        atmosphere: 'Dine in a fairytale-inspired nook with whimsical decor.',
        specialty: 'Try the Loaded Buffalo Chicken Tots or the Brat and Tots.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      'pinocchio-village-haus': {
        tags: ['Quick Service', 'Italian', 'Fantasy'],
        name: 'Pinocchio Village Haus',
        about: `Pinocchio Village Haus offers Italian-inspired quick-service meals in a charming Fantasyland setting. It's a great spot for pizza and more.`,
        pricing: 'Prices vary by item. Check the official Disney website for current pricing.',
        atmosphere: 'Dine in a whimsical village setting with a view of "it\'s a small world."',
        specialty: 'Try the Flatbreads or the Caprese Flatbread Sandwich.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      'storybook-treats': {
        tags: ['Quick Service', 'Ice Cream', 'Fairytale'],
        name: 'Storybook Treats',
        about: 'Storybook Treats offers ice cream and sweet treats in a fairytale-themed setting. Satisfy your sweet tooth in Fantasyland.',
        pricing: 'Prices vary by item. Check the official Disney website for current pricing.',
        atmosphere: 'Indulge in sweet delights in a charming fairytale setting.',
        specialty: 'Try the Peter Pan Float or the Soft-Serve Ice Cream Sundae.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '' // Leave this blank
      },
      // SHOWS START HERE
      'happily-ever-after': {
        tags: ['fireworks', 'music', 'fantasy'],
        name: 'Happily Ever After',
        about: 'Happily Ever After is a nighttime fireworks spectacular featuring Disney music and storytelling. Witness the magic in front of Cinderella Castle.',
        'show-schedule': 'Check the daily schedule for showtimes.',
        duration: 'Approximately 18 minutes',
        fact: 'The show features more than 50 choreographed spotlights, and the fireworks launch from 18 different launch points across the Magic Kingdom park.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '', // Leave this blank
      },
      'festival-of-fantasy-parade': {
        tags: ['parade', 'entertainment', 'music'],
        name: 'Festival of Fantasy Parade',
        about: 'The Festival of Fantasy Parade is a colorful and musical parade featuring Disney characters and floats. Join the celebration on Main Street, U.S.A.',
        'show-schedule': 'Check the daily schedule for parade times.',
        duration: 'Approximately 12 minutes',
        fact: 'The parade includes intricately designed floats, including the steampunk-inspired Maleficent Dragon float, which breathes fire during the show.',
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '', // Leave this blank
      },
      'enchanted-tiki-room': {
        tags: ['tropical', 'animatronics', 'musical'],
        name: 'Enchanted Tiki Room',
        about: 'The Enchanted Tiki Room is a classic attraction featuring animatronic birds and a tropical show. Enjoy a taste of the South Pacific right in the heart of Adventureland.',
        'show-schedule': 'Check the daily schedule for showtimes.',
        duration: 'Approximately 10 minutes',
        fact: "The Enchanted Tiki Room was the first attraction to feature audio-animatronic technology when it opened at Disneyland in 1963.",
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '', // Leave this blank
      },
      'mickeys-philharmagic': {
        tags: ['3D', 'musical', 'fantasy'],
        name: "Mickey's PhilharMagic",
        about: "Mickey's PhilharMagic is a 3D musical adventure featuring classic Disney songs and characters. Don your opera glasses and join the fun in Fantasyland.",
        'show-schedule': 'Check the daily schedule for showtimes.',
        duration: 'Approximately 12 minutes',
        fact: "The show features 3D effects and scents to immerse the audience in the Disney magic, making it a sensory experience.",
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '', // Leave this blank
      },
      'country-bear-jamboree': {
        tags: ['musical', 'comedy', 'animatronics'],
        name: 'Country Bear Jamboree',
        about: "The Country Bear Jamboree is a humorous musical show featuring animatronic bears. Visit Grizzly Hall in Frontierland for some good old-fashioned country fun.",
        'show-schedule': 'Check the daily schedule for showtimes.',
        duration: 'Approximately 16 minutes',
        fact: "The show features a cast of singing bears, including Big Al, Liver Lips McGrowl, and the Sun Bonnets, and it has been entertaining audiences since 1971.",
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '', // Leave this blank
      },
      'monsters-inc-laugh-floor': {
        tags: ['comedy', 'interactive', 'monsters'],
        name: "Monsters, Inc. Laugh Floor",
        about: "Monsters, Inc. Laugh Floor is an interactive comedy show featuring characters from Disney-Pixar's Monsters, Inc. Share your laughs with the monsters in Tomorrowland.",
        'show-schedule': 'Check the daily schedule for showtimes.',
        duration: 'Approximately 15 minutes',
        fact: "The show features real-time audience interaction, and your jokes and laughter become part of the performance.",
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '', // Leave this blank
      },
      'a-pirates-adventure-treasures-of-the-seven-seas': {
        tags: ['adventure', 'interactive', 'pirates'],
        name: "A Pirate's Adventure - Treasures of the Seven Seas",
        about: "Embark on a pirate adventure and solve mysteries in Adventureland. Join Captain Jack Sparrow in the quest for hidden treasures.",
        'show-schedule': 'Check the daily schedule for showtimes.',
        duration: 'Varies (multiple missions)',
        fact: "This interactive adventure allows you to use a pirate map and magic talisman to uncover hidden treasures throughout Adventureland.",
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '', // Leave this blank
      },
      'the-muppets-present-great-moments-in-american-history': {
        tags: ['comedy', 'history', 'muppets'],
        name: "The Muppets Present... Great Moments in American History",
        about: "Join the Muppets for a humorous take on American history in Liberty Square. Enjoy the wit and wisdom of the Muppets in a patriotic show.",
        'show-schedule': 'Check the daily schedule for showtimes.',
        duration: 'Approximately 10 minutes',
        fact: "This show features favorite Muppet characters like Sam Eagle, Kermit the Frog, Miss Piggy, Fozzie Bear, and Gonzo as they reenact historic moments.",
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '', // Leave this blank
      },
      'main-street-trolley-show': {
        tags: ['entertainment', 'music', 'parade'],
        name: "Main Street Trolley Show",
        about: "Enjoy a delightful musical performance on Main Street, U.S.A. as the trolley performers entertain you with classic songs and dance.",
        'show-schedule': 'Check the daily schedule for showtimes.',
        duration: 'Approximately 10 minutes',
        fact: "The Main Street Trolley Show brings a touch of nostalgia with its vintage costumes and charming performances.",
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '', // Leave this blank
      },
      'character-meet-and-greets': {
        tags: ['meet-and-greet', 'characters', 'photo-op'],
        name: "Character Meet and Greets",
        about: "Meet your favorite Disney characters throughout the park for photos, autographs, and magical moments.",
        'show-schedule': 'Check the daily schedule for character locations and times.',
        duration: 'Varies',
        fact: "Character Meet and Greets allow you to create cherished memories by interacting with beloved Disney characters.",
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '', // Leave this blank
      },
      'the-dapper-dans': {
        tags: ['music', 'barbershop', 'acapella'],
        name: "The Dapper Dans",
        about: "The Dapper Dans are a talented barbershop quartet that performs on Main Street, U.S.A. Enjoy their harmonious acapella melodies and comedy.",
        'show-schedule': 'Check the daily schedule for showtimes.',
        duration: 'Approximately 20 minutes (multiple sets)',
        fact: "The Dapper Dans have been performing on Main Street, U.S.A. since the park's opening, and their music is a beloved part of Disney's history.",
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '', // Leave this blank
      },
      'walt-disneys-carousel-of-progress': {
        tags: ['theater', 'history', 'audio-animatronics'],
        name: "Walt Disney's Carousel of Progress",
        about: "Experience the history of innovation and technology through the lens of one American family in this classic theater show. Witness the progress of technology from the turn of the 20th century to today.",
        'show-schedule': 'Check the daily schedule for showtimes.',
        duration: 'Approximately 21 minutes',
        fact: "Walt Disney's Carousel of Progress was originally created by Walt Disney himself for the 1964 New York World's Fair. It showcases how technology has improved our lives over the years.",
        src: '/assets/image/Sunshine Attractions-logo/black.jpeg', // Leave this blank
        alt: '', // Leave this blank
      },
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
  getMaps: (req, res) => {
    const loggedIn = req.isAuthenticated();
    const isDesktop = req.cookies.isDesktop === 'true'; // Access the cookie value
    res.render('maps', { isDesktop, loggedIn });
  },
  getMagicKingdomMaps: (req, res) => {
    const loggedIn = req.isAuthenticated();
    const isDesktop = req.cookies.isDesktop === 'true'; // Access the cookie value

    GOOGLE_MAP_API = process.env.GOOGLE_MAP_API
    GOOGLE_MAP_ID = process.env.GOOGLE_MAP_ID

    const mapAPIURL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API}&map_ids=${GOOGLE_MAP_ID}&callback=initMap`
    res.render('magickingdom-maps', { isDesktop, loggedIn, mapAPIURL});
  },
};

