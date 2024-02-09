function handleIndividualFormSubmit(event) {
    event.preventDefault();

    // Capture data from the individual form
    const individualName = document.querySelector("#individualName").value;
    const individualGender = document.querySelector("#individualGender").value;
    const individualSkill = document.querySelector("#individualSkill").value;
    const individualLocation = document.querySelector("#individualLocation").value;

    // You can process or send the data to a server here
    console.log("Individual Sign-Up Data:");
    console.log("Name:", individualName);
    console.log("Gender:", individualGender);
    console.log("Preferred Skill:", individualSkill);
    console.log("Location:", individualLocation);

    // Reset the form
    event.target.reset();
}

// Function to handle volunteer tutor sign-up form submission
function handleVolunteerFormSubmit(event) {
    event.preventDefault();

    // Capture data from the volunteer tutor form
    const volunteerName = document.querySelector("#volunteerName").value;
    const volunteerSkill = document.querySelector("#volunteerSkill").value;
    const volunteerQualification = document.querySelector("#volunteerQualification").value;
    const volunteerContact = document.querySelector("#volunteerContact").value;

    // You can process or send the data to a server here
    console.log("Volunteer Tutor Sign-Up Data:");
    console.log("Name:", volunteerName);
    console.log("Skill:", volunteerSkill);
    console.log("Qualification:", volunteerQualification);
    console.log("Contact Information:", volunteerContact);

    // Reset the form
    event.target.reset();
}

// Function to handle employer sign-up form submission
function handleEmployerFormSubmit(event) {
    event.preventDefault();

    // Capture data from the employer form
    const employerName = document.querySelector("#employerName").value;
    const employerLocation = document.querySelector("#employerLocation").value;
    const employerPosition = document.querySelector("#employerPosition").value;
    const employerContact = document.querySelector("#employerContact").value;

    // You can process or send the data to a server here
    console.log("Employer Sign-Up Data:");
    console.log("Company Name:", employerName);
    console.log("Location:", employerLocation);
    console.log("Position:", employerPosition);
    console.log("Contact Information:", employerContact);

    // Reset the form
    event.target.reset();
}

// Add event listeners to the forms
document.querySelector("#individualForm").addEventListener("submit", handleIndividualFormSubmit);
document.querySelector("#volunteerForm").addEventListener("submit", handleVolunteerFormSubmit);
document.querySelector("#employerForm").addEventListener("submit", handleEmployerFormSubmit);