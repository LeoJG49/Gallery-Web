document.addEventListener("DOMContentLoaded", () => {
    createImageModal();

    function createImageModal() {
        // Create modal HTML
        const modal = document.createElement("div");
        modal.className = "image-modal";
        modal.id = "image-modal";
        modal.innerHTML = `
            <div class="image-modal-content">
                <img id="modal-image" src="" alt="Enlarged image" />
                <div class="image-modal-info">
                    <h2 class="image-modal-title" id="modal-title">Image Title</h2>
                    <p class="image-modal-description" id="modal-description">Image description</p>
                    <div class="image-modal-buttons">
                        <button class="image-modal-button" id="download-btn">Download</button>
                        <button class="image-modal-button" id="close-modal-btn">Close</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Add click listeners to images
        const images = document.querySelectorAll(".photos-container .image");
        images.forEach(img => {
            img.addEventListener("click", () => {
                const modalImage = document.getElementById("modal-image");
                const modalTitle = document.getElementById("modal-title");
                const modalDescription = document.getElementById("modal-description");
                const imageModal = document.getElementById("image-modal");

                modalImage.src = img.src;
                modalTitle.textContent = img.title || "Photo";
                modalDescription.textContent = img.getAttribute("aria-label") || "No description available";

                imageModal.classList.add("active");
            });
        });

        // Close modal on backdrop click
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });

        // Close button
        document.getElementById("close-modal-btn").addEventListener("click", () => {
            modal.classList.remove("active");
        });

        // Download button
        document.getElementById("download-btn").addEventListener("click", () => {
            const imgSrc = document.getElementById("modal-image").src;
            const link = document.createElement("a");
            link.href = imgSrc;
            link.download = document.getElementById("modal-title").textContent + ".webp";
            link.click();
        });
    }
});