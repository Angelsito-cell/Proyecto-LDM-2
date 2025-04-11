const noResultsMessage = document.createElement('p');
noResultsMessage.id = 'no-results';
noResultsMessage.textContent = 'No se encontraron resultados.';
noResultsMessage.style.display = 'none'; // Inicialmente oculto
document.getElementById('album-covers').appendChild(noResultsMessage);

document.getElementById('search-bar').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let albums = document.querySelectorAll('.album');
    let hasResults = false;

    albums.forEach((album, index) => {
        let title = album.querySelector('p').textContent.toLowerCase();
        if (title.includes(filter)) {
            album.classList.remove('hidden');
            album.style.order = 0;
            hasResults = true;
        } else {
            album.classList.add('hidden');
            album.style.order = 1 + index;
        }
    });

    // Muestra u oculta el mensaje de "No se encontraron resultados"
    if (hasResults) {
        noResultsMessage.style.display = 'none';
    } else {
        noResultsMessage.style.display = 'block';
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const genreFilter = document.getElementById("genre-filter");
  const albums = document.querySelectorAll(".album");
  const noResultsMessage = document.getElementById("no-results");

  genreFilter.addEventListener("change", () => {
    const selectedGenre = genreFilter.value;
    let visibleCount = 0;

    albums.forEach(album => {
      const albumGenre = album.dataset.genero;

      if (selectedGenre === "all" || albumGenre === selectedGenre) {
        album.style.display = "inline-block";
        visibleCount++;
      } else {
        album.style.display = "none";
      }
    });

    if (visibleCount === 0) {
      noResultsMessage.classList.remove("hidden");
      alert("Lo siento, no he reseñado nada así todavía :(");
    } else {
      noResultsMessage.classList.add("hidden");
    }
  });
});


  