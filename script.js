document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Feature
    let button = document.createElement("button");
    button.innerText = "Toggle Dark Mode";
    button.style.position = "fixed";
    button.style.top = "10px";
    button.style.right = "10px";
    button.style.padding = "10px";
    button.style.background = "black";
    button.style.color = "white";
    button.style.border = "none";
    button.style.cursor = "pointer";
    document.body.appendChild(button);

    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Add Dark Mode Style
    let style = document.createElement("style");
    style.innerHTML = `
        .dark-mode {
            background: #121212 !important;
            color: white !important;
        }
    `;
    document.head.appendChild(style);
});
