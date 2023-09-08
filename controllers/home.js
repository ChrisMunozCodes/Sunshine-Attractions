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
    const pageNamesRide = ['space-mountain', 'thunder-mountain', 'haunted-mansion', 'seven-dwarfs-mine-train' /* Add more page names here */];
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
          buttonSrc: '/haunted-mansion' // Button source
      },
      {
        name: 'Seven Dwarfs Mine Train',
        rating: averageRatingsRide['seven-dwarfs-mine-train'],
        description: `Seven Dwarfs Mine Train is a popular roller coaster attraction at Disney World's Magic Kingdom, themed around Disney's classic film, Snow White and the Seven Dwarfs.`,
        src: 'assets/image/Sunshine Attractions-logo/mine-train.jpeg',
        buttonSrc: '/seven-dwarfs-mine-train' // Button source
    },
  
  
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

