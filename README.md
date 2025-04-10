# Proyecto-Lenguaje-de-Marcas-

El proyecto para esta unidad 2 va a consistir en una página web para hacerle review a los álbumes/singles/recopilatorios que vaya escuchando a lo largo del tiempo o que ya haya escuchado.

## Por qué?

En mi cuenta de Spotify, llevo guardando todo lo que he estado escuchando en una playlist bastante grande. Al no poder hacer absolutamente nada con eso y solo tenerlo ahí, he decidido aprovecharlo de cierta manera e ir recogiendolo todo a forma de review de manera más o menos extendida. Incluyendo las canciones, el género, los miebros y sus funciones dentro del álbum (tipo, vocalista, bajista, guitarrista, etc...).

## Estética

Voy a usar una estética parecida a la de las páginas de principio de siglo, una estética más o menos retro que provocaría nostalgia a cualquiera que haya vivido esa época temprana de la tecnología e internet público. Algunas páginas que voy a usar para inspirarme serían Vimm's Lair y Metal Archives (una página que tiene un concepto similar al de mi página pero increiblemente más extenso)

### Paleta de colores usada:

Rojo oscuro (Principal): #8B0000 Un rojo profundo y oscuro que puede ser el color dominante de tu página.

Negro carbón: #1C1C1C Un tono negro muy oscuro, pero no puro, que es perfecto para el fondo y para combinar con el rojo.

Gris acero: #2F4F4F Un gris oscuro con un toque frío que contrasta y equilibra los tonos intensos del rojo y negro.

## Funcionamiento del HTML

## FUNCIONAMIENTO DEL JS

### Gallery.js

Este código sirve para **buscar y filtrar álbumes** según lo que escribas en una barra de búsqueda y el género que elijas de una lista.

---

#### ¿Qué hace cada parte?

##### `DOMContentLoaded`

Espera a que la página cargue para que el código no se ejecute antes de tiempo.

---

##### Buscar por nombre del álbum

Cuando escribes en la barra de búsqueda (`#search-bar`), el código busca coincidencias con los nombres de los álbumes.

```js
searchBar.addEventListener("input", filterAlbums);
```

---

### Filtrar por género

Cuando cambias el género en la lista (`#genre-filter`), el código solo muestra los álbumes que sean de ese género.

```js
genreFilter.addEventListener("change", filterAlbums);
```

---

##### Mensaje si no hay resultados

Si no encuentra ningún álbum que coincida, muestra un mensaje que dice:

> "Lo siento, no he reseñado nada así todavía :("

Y también aparece un mensaje emergente (alerta).

```js
if (visibleCount === 0) {
  noResultsMessage.classList.remove("hidden");
  alert("Lo siento, no he reseñado nada así todavía :(");
}
```

### Form.js

Este código se encarga de **validar el formulario de búsqueda** para evitar que se envíe vacío, y de momento solo **muestra un mensaje** con lo que se busca.

---

#### ¿Qué hace cada parte?

##### Selecciona los elementos del formulario y la barra de búsqueda

```js
const form = document.getElementById("search-form");
const searchBar = document.getElementById("search-bar");
```

---

###### Escucha el evento de "submit" (cuando se pulsa Enter o se hace clic en Buscar)

```js
form.addEventListener('submit', (event) => {
```

---

##### Evita que se recargue la página

```js
event.preventDefault();
```

---

##### Toma el texto que escribió el usuario

```js
const searchTerm = searchBar.value.trim();
```

##### Si está vacío, muestra una alerta de error

```js
if (searchTerm === "") {
  alert("Por favor, ingresa un término de búsqueda.");
}
```

---

##### Si hay texto, muestra una alerta con el término

```js
else {
    alert(`Buscando: ${searchTerm}`);
}
```

¡Claro! Aquí tienes una **explicación clara y simple en Markdown** del código que me pasaste. Está comentado paso a paso para que lo entiendas fácilmente, sin rodeos.

---

### Search.js

- Buscar álbumes escribiendo en una barra de búsqueda.
- Filtrar álbumes por género (metal, punk, etc.).
- Mostrar un mensaje si no hay coincidencias.

#### ¿Qué hace cada parte?

##### Crear mensaje de "No se encontraron resultados"

```js
const noResultsMessage = document.createElement("p"); // Crea un elemento <p>
noResultsMessage.id = "no-results"; // Le pone un ID
noResultsMessage.textContent = "No se encontraron resultados."; // Le pone el texto
noResultsMessage.style.display = "none"; // Lo oculta al inicio
document.getElementById("album-covers").appendChild(noResultsMessage); // Lo mete dentro del contenedor de álbumes
```

---

##### Buscador por texto (nombre del álbum)

```js
document.getElementById('search-bar').addEventListener('input', function() {
    let filter = this.value.toLowerCase(); // Lo que escribe el usuario
    let albums = document.querySelectorAll('.album'); // Todos los álbumes
    let hasResults = false; // Sirve para saber si hubo coincidencias
```

---

##### Recorre todos los álbumes

```js
    albums.forEach((album, index) => {
        let title = album.querySelector('p').textContent.toLowerCase(); // El texto del nombre del álbum
```

- Si el texto coincide con la búsqueda, lo muestra
- Si no, lo oculta

```js
        if (title.includes(filter)) {
            album.classList.remove('hidden');
            album.style.order = 0; // Opcional: ordena para que los resultados se vean primero
            hasResults = true;
        } else {
            album.classList.add('hidden');
            album.style.order = 1 + index;
        }
    });
```

---

##### Mostrar u ocultar mensaje si no hay coincidencias

```js
    if (hasResults) {
        noResultsMessage.style.display = 'none';
    } else {
        noResultsMessage.style.display = 'block';
    }
});
```

---

##### Filtro por género musical

```js
document.addEventListener("DOMContentLoaded", () => {
  const genreFilter = document.getElementById("genre-filter"); // El <select>
  const albums = document.querySelectorAll(".album");
  const noResultsMessage = document.getElementById("no-results");
```

---

##### Reacciona cuando cambias el género

```js
  genreFilter.addEventListener("change", () => {
    const selectedGenre = genreFilter.value;
    let visibleCount = 0;
```

---

##### Muestra solo los álbumes que coincidan con ese género

```js
albums.forEach((album) => {
  const albumGenre = album.dataset.genero;

  if (selectedGenre === "all" || albumGenre === selectedGenre) {
    album.style.display = "inline-block";
    visibleCount++;
  } else {
    album.style.display = "none";
  }
});
```

---

##### Si no hay ninguno, muestra mensaje y alerta

```js
    if (visibleCount === 0) {
      noResultsMessage.classList.remove("hidden");
      alert("Lo siento, no he reseñado nada así todavía :(");
    } else {
      noResultsMessage.classList.add("hidden");
    }
  });
});
```

---

##### ¿Para qué sirve este código?

- Puedes buscar álbumes por nombre con el teclado.
- Puedes filtrar por género.
- Si no hay resultados, te avisa con un mensaje.
- Todo pasa al instante, sin recargar la página.

---

¿Quieres que te lo dé también en un `README.md` para subirlo a GitHub con tu proyecto? Te lo dejo listo si quieres 💾🔥
