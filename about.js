document.addEventListener("DOMContentLoaded", () => {
    // 3D Mouse Interaction
    const sections = document.querySelectorAll("section");
    const nav = document.querySelector("nav");
    const body = document.body;

    body.style.perspective = "1000px"; // Add 3D perspective to the page

    document.addEventListener("mousemove", (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

        sections.forEach((section) => {
            section.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        nav.style.transform = `rotateY(${xAxis / 2}deg) rotateX(${yAxis / 2}deg)`;
    });

    // Random Color Splash Background
    const splashColors = ["#ff8c00", "#00ffcc", "#ff99cc", "#ff00ff", "#00ff99"];
    setInterval(() => {
        body.style.backgroundColor =
            splashColors[Math.floor(Math.random() * splashColors.length)];
        body.style.transition = "background-color 1.5s ease";
    }, 3000);

    // Interactive Heading Text Animation
    const headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach((heading) => {
        let originalText = heading.textContent;
        heading.addEventListener("mouseover", () => {
            heading.style.color = "#ff00ff";
            heading.textContent = [...originalText]
                .map((letter) => (Math.random() > 0.5 ? letter.toUpperCase() : letter))
                .join("");
        });
        heading.addEventListener("mouseout", () => {
            heading.style.color = "#b0ffb0";
            heading.textContent = originalText;
        });
    });

    // Circular Content Reveal Animation
    const revealElements = document.querySelectorAll("p, ol li");
    revealElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "scale(0.8) rotate(15deg)";
        element.style.transition = "transform 1s ease, opacity 1s ease";

        const revealOnScroll = () => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.style.opacity = "1";
                element.style.transform = "scale(1) rotate(0)";
            }
        };

        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll(); // Initial check
    });

    // Firework Effect on Click
    const createFirework = (x, y) => {
        const fireworkContainer = document.createElement("div");
        fireworkContainer.classList.add("firework");
        fireworkContainer.style.left = `${x}px`;
        fireworkContainer.style.top = `${y}px`;

        for (let i = 0; i < 15; i++) {
            const particle = document.createElement("span");
            particle.classList.add("particle");
            fireworkContainer.appendChild(particle);
        }

        body.appendChild(fireworkContainer);

        setTimeout(() => {
            fireworkContainer.remove();
        }, 1500);
    };

    document.addEventListener("click", (e) => {
        createFirework(e.clientX, e.clientY);
    });
});
