// Get the current year and update the footer text
const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

// Log the full date to the console
console.log(new Date());

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

  //ALERT
const alertButton = document.getElementById("btn-alert");

alertButton.addEventListener("click", function() {
    alert("I TOLD YOU TO NOT PRESS!");
});

alertButton.addEventListener("mouseover", function() {
    alertButton.innerHTML = "Don't you dare!";
});

alertButton.addEventListener("mouseout", function() {
    alertButton.innerHTML = "Thank god!";
});

