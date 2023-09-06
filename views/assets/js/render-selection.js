//This js file is to store object data about various ride, show, and food selections in order to render them based on average rating score

// Sample data structure (replace this with your actual data)
  
  // Sort the ride sections by average rating in descending order
  rideSections.sort((a, b) => b.averageRating - a.averageRating);
  
  // Get the container element where you want to render the sections
  const container = document.getElementById("ride-sections-container");
  
  // Loop through the sorted array and generate HTML for each section
  rideSections.forEach((section, index) => {
    const sectionHTML = `
      <!-- Ride Selection Start -->
      <div class="border border-gray-100 w-full h-40 overflow-auto box-border flex p-3 ride">
        <div class="w-1/12 flex justify-center items-center">
          <h3 class="text-4xl">${index + 1}</h3>
        </div>
        <div class="w-2/12 flex justify-center items-center">
          <img class="h-5/6 w-full" src="assets/image/Sunshine Attractions-logo/${section.name.toLowerCase()}.jpeg" alt="${section.name} Disney Magic Kingdom">
        </div>
        <div class="w-3/12 flex justify-center items-center">
          <h2 class="text-2xl flex-wrap text-center">${section.name}</h2>
        </div>
        <div class="w-3/12 flex justify-center items-center">
          <p class="text-1xl">${section.description}</p>
        </div>
        <div class="rating m-1 items-center justify-center w-3/12 flex justify-center items-center">
          <!-- Your code for rendering stars based on averageRating -->
        </div>
        <a class="w-1/12 flex justify-center items-center" href="/${section.name.toLowerCase().replace(" ", "-")}">
          <button class="bg-primaryButton border rounded-md shadow-sm font-merriweather w-full h-full hover:bg-black hover:text-white hover:border-white">EXPLORE</button>
        </a>
      </div>
      <!-- Ride Selection End -->
    `;
  
    // Append the section HTML to the container
    container.innerHTML += sectionHTML;
  });
  