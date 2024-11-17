document.addEventListener("DOMContentLoaded", () => {
    // Animate Rainbow Header Colors
    const rainbowText = document.querySelector(".rainbow-text");
    let hue = 0;

    setInterval(() => {
        rainbowText.style.color = `hsl(${hue}, 100%, 50%)`;
        hue = (hue + 1) % 360;
    }, 50);

    // Easter Egg: Secret Message on Footer Click
    const footer = document.querySelector("footer");
    footer.addEventListener("click", () => {
        alert("🎉 Easter Egg Unlocked! You're awesome! 🎉");
    });

    // Rainbow Progress Bar at the Top of the Page
    const progressBar = document.createElement("div");
    progressBar.style.position = "fixed";
    progressBar.style.top = "0";
    progressBar.style.left = "0";
    progressBar.style.height = "5px";
    progressBar.style.width = "0%";
    progressBar.style.background = "linear-gradient(90deg, #ff0000, #ff7300, #47ff00, #00ffee, #2a67ff, #8f00ff)";
    progressBar.style.zIndex = "9999";
    progressBar.style.transition = "width 0.25s";
    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const documentHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / documentHeight) * 100;
        progressBar.style.width = `${scrollPercentage}%`;
    });

    // Interactive Pulsating Background on Hover
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        section.addEventListener("mouseenter", () => {
            section.style.boxShadow = "0 0 30px #00ff00, 0 0 60px #2a67ff";
        });
        section.addEventListener("mouseleave", () => {
            section.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.1)";
        });
    });
});
