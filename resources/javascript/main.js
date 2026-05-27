// Wait for DOM to be fully loaded before running script
document.addEventListener("DOMContentLoaded", function() {
    // Hover effect for header icons
    const headerIcons = document.querySelectorAll("header nav a");

    headerIcons.forEach(link => {
        const icon = link.querySelector("i");
        
        if (icon) {
            // Set up smooth transitions
            icon.style.transition = "font-size 0.3s ease, color 0.3s ease";
            
            // Handle mouse interactions
            link.addEventListener("mouseover", () => {
                icon.style.fontSize = "1.5em";
                icon.style.color = "#565656";
                link.style.cursor = "pointer";
            });
            
            link.addEventListener("mouseout", () => {
                icon.style.fontSize = "";
                icon.style.color = "";
                link.style.cursor = "";
            });
            
            // Handle keyboard focus
            link.addEventListener("focus", () => {
                icon.style.fontSize = "1.5em";
                icon.style.color = "#565656";
            });
            
            link.addEventListener("blur", () => {
                icon.style.fontSize = "";
                icon.style.color = "";
            });
        }
    });
});