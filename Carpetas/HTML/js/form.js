// Selección de elementos
// Selección de elementos
const form = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');

// Validación del formulario
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe
    const searchTerm = searchBar.value.trim();

    if (searchTerm === '') {
        alert('Por favor, ingresa un término de búsqueda.');
    } else {
        alert(`Buscando: ${searchTerm}`);
        // Aquí podrías implementar la lógica de búsqueda
        // Por ejemplo, filtrar las reviews o álbumes que coincidan con el término de búsqueda.
    }
});