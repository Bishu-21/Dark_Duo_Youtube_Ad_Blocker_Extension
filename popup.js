// Dark mode toggle functionality
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("change", function() {
    if (this.checked) {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#ffffff";
    } else {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
    }
});

// Redirect to GitHub repository
document.getElementById("githubLink").addEventListener("click", () => {
    window.open('https://github.com/Bishu-21/Dark_Duo_Screenshot_Extension', '_blank');
});
