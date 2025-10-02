// JavaScript code for the gallery functionality
document.addEventListener("DOMContentLoaded", () => {
    const mainSection = document.querySelector(".main-section");
    const photosSection = document.querySelector(".photos-section");

    // Collect all sidebar buttons (primary and secondary)
    const sidebarButtons = [
        ...document.querySelectorAll(".sidebar-containers"),
        ...document.querySelectorAll(".secundary-sidebar")
    ];

    // Create a secondary screen for each button except "photos-view"
    sidebarButtons.forEach(btn => {
        if (btn.id !== "photos-view" && btn.id) {
            const section = document.createElement("section");
            section.className = "photos-section secondary-screen";
            section.id = `${btn.id}-screen`;
            section.style.display = "none";
            section.innerHTML = `
            <div style="display:flex;justify-content:center;align-items:center;height:100%;font-size:2rem;color:#bcbebf;
            ">${btn.textContent.trim()} Content</div>`;
            mainSection.appendChild(section);
        }
    });

    // Show Photos section by default
    photosSection.style.display = "block";

    // Add click listeners to all sidebar buttons
    sidebarButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Hide all screens
            document.querySelectorAll(".photos-section.secondary-screen").forEach(sec => {
                sec.style.display = "none";
            });
            photosSection.style.display = "none";

            // Remove active from all buttons
            sidebarButtons.forEach(b => b.classList.remove("active"));

            // Show the selected screen or photos section
            if (btn.id === "photos-view") {
                photosSection.style.display = "block";
                btn.classList.add("active");
            } else {
                const selectedScreen = document.getElementById(`${btn.id}-screen`);
                if (selectedScreen) {
                    selectedScreen.style.display = "block";
                    btn.classList.add("active");
                }
            }
        });
    });

    // Set "photos-view" as active on load
    const photosBtn = document.getElementById("photos-view");
    if (photosBtn) photosBtn.classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
 

    // After all sections are created, add custom content to News
    const newsSection = document.getElementById("news-view-screen");
    if (newsSection) {
        newsSection.innerHTML = `
            <div class="news-content">
                <h2>Latest News</h2>
                <ul>
                    <li>Photo contest starts next week!</li>
                    <li>New albums feature released.</li>
                    <li>Storage upgrade available.</li>
                </ul>
            </div>
        `;
    }


});