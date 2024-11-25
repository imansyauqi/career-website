// Initialize EmailJS with your User ID
emailjs.init("QCZuazU-bi9QJ8Lw8"); // Replace "YOUR_USER_ID" with your actual EmailJS User ID

// Get the form element
const form = document.getElementById("contact-form");

// Add an event listener to handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Use EmailJS to send form data
    emailjs.sendForm("service_bfmzxgt", "jonwo", form)
        .then(() => {
            alert("Message sent successfully!");
            form.reset(); // Clear the form after submission
        })
        .catch((error) => {
            console.error("Failed to send message:", error);
            alert("Failed to send message. Please try again later.");
        });
});
