// Contact Management System

// Variables and Data Types
let contactName = "Gideon Edoghotu";
let contactEmail = "edoghotu@gmail.com";
let contactPhone = "07031170092"; // No dashes in the phone number

// Array to store contacts
let contacts = [
    {
        name: "Daniel Ebuka",
        email: "danny@gmail.com",
        phone: "07031174589"
    },
    {
        name: "Adaobi Okeke",
        email: "adaobi@gmail.com",
        phone: "08031174567"
    },
];

// Control flow: Validate contact
function validateContact(email, phone) {
  if (email.includes("@") && phone.length === 11) {
    return true;
  } else {
    return false;
  }
}

// If the contact is valid, add it to the contacts array
if (validateContact(contactEmail, contactPhone)) {
  let newContact = {
    name: contactName,
    email: contactEmail,
    phone: contactPhone,
  };
  contacts.push(newContact);
  console.log("Valid contact. Added to the contact list.");
} else {
  console.log("Invalid contact information!");
}

// Display all contacts
contacts.forEach((contact, index) => {
  console.log(`Contact ${index + 1}: ${contact.name}, ${contact.email}, ${contact.phone}`);
});

// Asynchronous function to fetch contacts with a delay
async function fetchContacts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(contacts);
    }, 2000);
  });
}

// Fetch and display contacts asynchronously
fetchContacts().then((fetchedContacts) => {
  console.log("Fetched Contacts:");
  fetchedContacts.forEach((contact, index) => {
    console.log(`${index + 1}: ${contact.name}, ${contact.email}, ${contact.phone}`);
  });
});


// Summary:

// In this project, I built a Contact Management System using JavaScript, which incorporates key programming concepts like variables, control flow, arrays, objects, and asynchronous features. The goal of this application is to store, validate, and manage contact information for multiple users.

// To begin, I used variables and objects to hold the contact details, such as the contact’s name, email, and phone number. These variables were stored inside an object, representing each individual contact. The contact objects were then stored in an array, which allowed the system to manage multiple contacts efficiently.

// Next, I implemented control flow using an if/else statement to validate the user's email and phone number. The system checks whether the email contains an '@' symbol and if the phone number contains the correct number of digits. If the contact is valid, it is added to the array of contacts. Otherwise, an error message is shown, ensuring that only valid contact information is stored in the system.

// The asynchronous feature of the project was handled using a promise inside an asynchronous function. I used setTimeout to simulate a delay when fetching contact data, mimicking how real-world applications retrieve data from remote servers. This feature allowed me to demonstrate how asynchronous operations work in JavaScript without blocking the main thread.

// One of the key challenges was managing the asynchronous nature of the contact fetching process while ensuring that the rest of the application continues to function smoothly. By using async/await and promises, I was able to effectively handle this challenge. This project reinforced my understanding of core JavaScript concepts while offering practical experience in managing asynchronous data operations.