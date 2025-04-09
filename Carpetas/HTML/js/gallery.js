document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("gallery-container");
    const imageInput = document.getElementById("image-input");
    const addButton = document.getElementById("add-image");
  
    // Recuperar imágenes guardadas del localStorage
    let savedImages = JSON.parse(localStorage.getItem("galleryImages")) || [];
  
    // Mostrar imágenes guardadas
    savedImages.forEach(imgObj => {
      addImageToGallery(imgObj.url, imgObj.title, imgObj.description);
    });
  
    // Un solo click listener para abrir modal
    addButton.addEventListener("click", () => {
      const imageUrl = imageInput.value.trim();
  
      if (imageUrl) {
        const img = new Image();
        img.src = imageUrl;
  
        img.onload = () => {
          // Mostrar el modal
          document.getElementById("preview-img").src = imageUrl;
          document.getElementById("image-title").value = "";
          document.getElementById("image-description").value = "";
          document.getElementById("captcha-check").checked = false;
          document.getElementById("confirm-button").disabled = true;
  
          document.getElementById("preview-modal").classList.remove("hidden");
  
          // Activar botón solo si se marca el captcha
          const captchaCheck = document.getElementById("captcha-check");
          captchaCheck.onchange = () => {
            document.getElementById("confirm-button").disabled = !captchaCheck.checked;
          };
  
          // Confirmar publicación
          document.getElementById("confirm-button").onclick = () => {
            const title = document.getElementById("image-title").value;
            const description = document.getElementById("image-description").value;
  
            const imageObject = {
              url: imageUrl,
              title: title,
              description: description
            };
  
            savedImages.push(imageObject);
            localStorage.setItem("galleryImages", JSON.stringify(savedImages));
            addImageToGallery(imageUrl, title, description);
            imageInput.value = "";
            document.getElementById("preview-modal").classList.add("hidden");
          };
  
          // Cancelar publicación
          document.getElementById("cancel-button").onclick = () => {
            document.getElementById("preview-modal").classList.add("hidden");
          };
        };
  
        img.onerror = () => {
          alert("La imagen no pudo cargarse. Verifica la URL.");
        };
      } else {
        alert("Por favor, ingresa una URL válida.");
      }
    });
  
    // Función para mostrar la imagen en la galería
    function addImageToGallery(url, title = "", description = "") {
      const container = document.createElement("section");
      container.classList.add("gallery-item");
  
      const img = document.createElement("img");
      img.src = url;
      img.alt = title;
      img.style.width = "200px";
  
      const titleElement = document.createElement("h3");
      titleElement.textContent = title;
  
      const descElement = document.createElement("p");
      descElement.textContent = description;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.classList.add("delete-btn");
  
      deleteButton.addEventListener("click", () => {
        galleryContainer.removeChild(container);
        savedImages = savedImages.filter(obj => obj.url !== url);
        localStorage.setItem("galleryImages", JSON.stringify(savedImages));
      });
  
      container.appendChild(img);
      if (title) container.appendChild(titleElement);
      if (description) container.appendChild(descElement);
      container.appendChild(deleteButton);
      galleryContainer.appendChild(container);
    }
  });
  