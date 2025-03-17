document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const imageInput = document.getElementById("image-input");
    const addButton = document.getElementById("add-image");

    if (!gallery || !imageInput || !addButton) {
        console.error("Error: No se encontraron los elementos en el DOM.");
        return;
    }

    addButton.addEventListener("click", () => {
        const imageUrl = imageInput.value.trim();
        
        if (imageUrl) {
            const img = new Image();
            img.src = imageUrl;
            img.alt = "Imagen de la galería";
            img.style.width = "200px";

            img.onload = () => { // Solo agrega la imagen si la URL es válida
                const imageContainer = document.createElement("div");
                imageContainer.classList.add("gallery-item");
                imageContainer.appendChild(img);

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Eliminar";
                deleteButton.addEventListener("click", () => {
                    gallery.removeChild(imageContainer);
                });

                imageContainer.appendChild(deleteButton);
                gallery.appendChild(imageContainer);
                imageInput.value = "";
            };

            img.onerror = () => {
                alert("Error: La imagen no pudo cargarse. Verifica la URL.");
            };
        } else {
            alert("Por favor, ingresa una URL válida");
        }
    });
});
