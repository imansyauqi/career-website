const jobs = [
  {
      title: "Project Manager",
      image: "project.png",
      details: "Responsible for planning, executing and closing projects on time and within budget.",
      openPositions: "2",
      link: "project.html",
  },
  {
      title: "Operator",
      image: "productmanager.png",
      details: "Responsible for operating the entire product life cycle, from ideation to launch and post-launch maintenance.",
      openPositions: "10",
      link: "operator.html",
  },
];

// DOM elements
const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

// Update heading based on number of jobs
const updateJobsHeading = () => {
  jobsHeading.innerHTML = `${jobs.length} ${jobs.length === 1 ? "Job" : "Jobs"}`;
};

// Function to create job listing cards
const createJobListingCards = () => {
  jobsContainer.innerHTML = ""; // Clear previous job listings

  const filteredJobs = jobs.filter((job) => 
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Update job heading based on filtered results
  updateJobsHeading();

  filteredJobs.forEach((job) => {
      // Job card container
      const jobCard = document.createElement("div");
      jobCard.classList.add("job");

      // Job image
      const image = document.createElement("img");
      image.src = job.image;

      // Job title
      const title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      // Job details
      const details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      // More details button
      const detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "More Details";
      detailsBtn.classList.add("details-btn");

      // Open positions
      const openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");
      openPositions.innerHTML = `${job.openPositions} open ${job.openPositions == 1 ? "position" : "positions"}`;

      // Append elements to job card
      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);
      jobCard.appendChild(openPositions);

      // Append job card to container
      jobsContainer.appendChild(jobCard);
  });
};

// Initialize job listings
updateJobsHeading();
createJobListingCards();

// Event listener for search input
jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  createJobListingCards();
});

// Function to add new job
function addNewJob(job) {
  jobs.push(job);
  createJobListingCards(); // Re-render job listings
}

// Uncomment below to test adding a new job
// addNewJob({
//     title: "New Job Title",
//     image: "newjob.png",
//     details: "Job description goes here.",
//     openPositions: "5",
//     link: "newjob.html"
// });
