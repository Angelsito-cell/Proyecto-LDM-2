# ⚠️IMPORTANTE⚠️ SE INICIA SESIÓN CON:
  - USUARIO: Alejandro_Profe777
  - CONTRASEÑA: diseño_responsive_123

# ⚠️IMPORTANTE⚠️ EL PAGES NO ME FUNCIONA Y NO ME QUEDA YA TIEMPO. LA PAGINA FUNCIONAR FUNCIONA, PERO NECESITO TIEMPO PARA CONFIGURARLA PARA PAGES. 


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

Aquí explicaré más o menos como he estructurado el HTML de la página y no mucho más puesto que el HTML es la base, lo más simple y sencillo del proyecto.

---

## Estructura general de mi página web

He diseñado y estructurado mi página web de forma **clara y organizada**, usando las etiquetas semánticas recomendadas (`header`, `main`, `section`, `footer`) para que el contenido esté bien distribuido y sea fácil de mantener.

---

### 1. `<header>` – Cabecera de la página

En esta parte:

- El **logo principal del sitio**
- Un **menú de navegación** con enlaces:
  - Inicio
  - Tienda
  - Contacto
  - Blog
  - Cuenta / Galería

La idea es que el usuario pueda moverse rápidamente entre las secciones más importantes.

---

### 2. `<main>` – Contenido principal

Dentro de `<main>` se encuentra todo:

- Una **bienvenida con texto personalizado**, presentando el estilo del blog.
- Un **bloque de secciones** donde:
  - Reseñas de música
  - Reseñas de cine
  - Reseñas de videojuegos
- Una **sección de novedades** con un formato tipo blog, donde aparece contenido reciente.

Todo esto lo organicé en `section` y `article` para mantener una estructura clara y semántica.

---

### 3. Página de música (`música.html`)

Es la página más completa:

- Un **filtro por género musical** (metal, punk, etc.)
- Una **barra de búsqueda** que permite encontrar álbumes por nombre
- Los álbumes se muestran en formato de **cuadrícula**, con su portada e información
- Hay una **paginación simple** para navegar entre más discos si se añaden

---

### 4. Página de galería (`gallery.html`)

Una sección interactiva donde los usuarios pueden:

- **Añadir imágenes** a una galería pegando una URL
- Escribir un **título** y una **descripción**
- Ver un **modal de confirmación** antes de publicar
- **Eliminar imágenes** que ya no quieren mostrar
- Y lo mejor: **todo se guarda automáticamente** usando `localStorage`, así que si vuelves a entrar, las imágenes siguen ahí

---

### 5. Formulario de contacto

Incluye campos básicos:

- Nombre
- Email
- Mensaje

Con validación dinámica hecha en JavaScript, donde se muestran **mensajes de error si algún campo está mal** y un **mensaje de éxito si todo está correcto**.

---

### 6. Modal de inicio de sesión

Al entrar por primera vez en la página aparece un **recuadro flotante (modal)** que pide iniciar sesión. Tiene varias opciones:

- Iniciar sesión con usuario y contraseña reales (validados en JavaScript)
- Acceder con Google, Facebook o X (redirige a sus páginas de login)
- O continuar sin iniciar sesión (si eliges esto, **el modal no vuelve a aparecer nunca** gracias a `localStorage`)

---

### 7. `<footer>` – Pie de página

En esta parte incluyo:

- Enlaces rápidos para moverse por la web
- Información de contacto (email, dirección, teléfono)
- Enlaces a redes sociales (Facebook, X, Instagram)

El footer aparece en todas las páginas y mantiene el mismo diseño.


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

### formulario.js

Este código muestra un **modal de login** solo la primera vez que entras en la web. Te permite:

- Iniciar sesión con usuario y contraseña
- Mostrar un mensaje de error si están mal
- Usar botones para login con Google, Facebook o X
- Continuar sin iniciar sesión

Todo queda **guardado en el navegador** para no volver a molestarte la próxima vez.

---

#### ¿Qué hace cada parte del código?

```js
document.addEventListener("DOMContentLoaded", () => {
```

---

##### Selección de elementos del DOM

```js
const modal = document.getElementById("login-modal");
const skip = document.getElementById("skip-login");
const login = document.getElementById("login-btn");
const register = document.getElementById("register-btn");
const userInput = document.getElementById("login-user");
const passInput = document.getElementById("login-pass");
const errorMessage = document.getElementById("login-error");
```

---

##### Mostrar el modal solo la primera vez

```js
if (!localStorage.getItem("loginDismissed")) {
  modal.style.display = "flex";
} else {
  modal.style.display = "none";
}
```

---

##### Botón "Continuar sin iniciar sesión"

```js
skip.addEventListener("click", () => {
  localStorage.setItem("loginDismissed", "true");
  modal.style.display = "none";
});
```
---

##### Validación de usuario y contraseña

```js
login.addEventListener("click", () => {
  const user = userInput.value.trim();
  const pass = passInput.value.trim();
```
---

##### Comparación con los datos correctos

```js
if (user === "Alejandro_Profe777" && pass === "diseño_responsive_123") {
  alert("¡Inicio de sesión exitoso! Bienvenido, Alejandro.");
  localStorage.setItem("loginDismissed", "true");
  modal.style.display = "none";
}
```

✅ Si los datos son correctos:
- Muestra un saludo
- Cierra el modal
- Guarda en `localStorage` que ya ha iniciado sesión

---

##### Si están mal, muestra error y limpia los campos

```js
else {
  userInput.value = "";
  passInput.value = "";
  errorMessage.textContent = "Nombre o contraseña incorrectos.";
}
```
---

##### Botón "Crear cuenta" (No lo he hecho)

```js
register.addEventListener("click", () => {
  alert("Función de registro no implementada.");
});
```
---

##### Botones de redes sociales

```js
document.querySelector(".google").addEventListener("click", () => {
  window.open("https://accounts.google.com/signin", "_blank");
});
```
En definitiva
---

# Ejemplos de Manipulación del DOM

 
## Galería interactiva de imágenes

Se crean nuevos elementos en el HTMl (section, img, h3, p, button) dinámicamente con el JS al introducir la URL de la imagen. Estos elementos se insertan en el DOM con el appendChild, y con el boton de elminiar, se eliminan del mismo

### Codigo que lo demuestra: 
```js

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
```
### Y para eliminar:

``` js
    deleteButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que al hacer clic en eliminar se abra el modal
        galleryContainer.removeChild(container);
        savedImages = savedImages.filter(obj => obj.url !== url);
        localStorage.setItem("galleryImages", JSON.stringify(savedImages));
      });
    }
``` 

# Demo funcional

Puedes ver una versión funcional del proyecto aquí:  

[https://Angelsito-cell.github.io/hells-vault/](https://Angelsito-cell.github.io/Proyecto-LDM-2/)
