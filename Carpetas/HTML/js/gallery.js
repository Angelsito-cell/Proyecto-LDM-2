document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("gallery-container");
    const imageInput = document.getElementById("image-input");
    const addButton = document.getElementById("add-image");

    if (!galleryContainer || !imageInput || !addButton) {
        console.error("Error: No se encontraron los elementos en el DOM.");
        return;
    }

    addButton.addEventListener("click", (event) => {
        event.preventDefault(); // Evita que el botón recargue la página

        const imageUrl = imageInput.value.trim();
        if (imageUrl) {
            const img = new Image();
            img.src = imageUrl;
            img.alt = "Imagen de la galería";
            img.style.width = "200px";

            img.onload = () => {
                const imageContainer = document.createElement("div");
                imageContainer.classList.add("gallery-item");
                imageContainer.appendChild(img);

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Eliminar";
                deleteButton.classList.add("delete-btn"); // Agregar clase CSS
                deleteButton.addEventListener("click", () => {
                    galleryContainer.removeChild(imageContainer);
                });

                imageContainer.appendChild(deleteButton);
                galleryContainer.appendChild(imageContainer);
                imageInput.value = "";
            };

            img.onerror = () => {
                alert("Error: La imagen no pudo cargarse. Verifica la URL.");
            };
        } else {
            alert("Por favor, ingresa una URL válida.");
        }
    });
});
