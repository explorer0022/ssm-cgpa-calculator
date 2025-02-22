document.addEventListener("DOMContentLoaded", () => {
    // Create Dark Mode Toggle Button
    let button = document.createElement("button");
    button.innerHTML = "🌙";
    button.style.position = "fixed";
    button.style.top = "10px";
    button.style.right = "10px";
    button.style.padding = "10px";
    button.style.fontSize = "20px";
    button.style.borderRadius = "50%";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.transition = "all 0.3s ease";
    button.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
    document.body.appendChild(button);

    // Add Dark Mode Styles
    let style = document.createElement("style");
    style.innerHTML = `
        .dark-mode {
            background: #121212 !important;
            color: white !important;
            transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
        }

        .dark-mode button {
            background: white !important;
            color: black !important;
            box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8) !important;
        }

        .glow {
            box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.9) !important;
        }

        @keyframes gradientShift {
            0% { background: linear-gradient(135deg, #ff7eb3, #ff758c); }
            50% { background: linear-gradient(135deg, #ff758c, #ff7eb3); }
            100% { background: linear-gradient(135deg, #ff7eb3, #ff758c); }
        }

        .dark-mode .animated-bg {
            animation: gradientShift 3s infinite alternate;
        }
    `;
    document.head.appendChild(style);

    // Toggle Dark Mode Function
    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("animated-bg");

        if (document.body.classList.contains("dark-mode")) {
            button.innerHTML = "☀️"; // Change to sun
        } else {
            button.innerHTML = "🌙"; // Change to moon
        }

        button.classList.add("glow");
        setTimeout(() => button.classList.remove("glow"), 500);
    });
});
