// Footer - Display the current year
const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;
console.log(new Date());

// Greeting - Display a message based on the time of day
const greetingElement = document.getElementById("greeting");
const hours = new Date().getHours();

if (hours < 12) {
    greetingElement.innerHTML = "Good morning!";
    greetingElement.classList.add("morning");
} else if (hours < 17) {
    greetingElement.innerHTML = "Good afternoon!";
    greetingElement.classList.add("afternoon");
} else {
    greetingElement.innerHTML = "Good evening!";
    greetingElement.classList.add("evening");
}

// Alert Button - Show an alert when clicked
const alertButton = document.getElementById("btn-alert");

alertButton.addEventListener("click", function() {
    alert("I Told you not to!");
});

// Hover Button - Change button text on hover
alertButton.addEventListener("mouseover", function() {
    alertButton.innerHTML = "Don't you dare!";
});

alertButton.addEventListener("mouseout", function() {
    alertButton.innerHTML = "Thank God!";
});

// For Loop - Populate ordered list with even/odd
const numbersList = document.getElementById("numbers");

for (let i = 1; i <= 12; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i % 2 === 0 ? "even" : "odd";
    numbersList.appendChild(listItem);
}
