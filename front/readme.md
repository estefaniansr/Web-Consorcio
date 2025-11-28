Requisitos previos

Visual Studio Code instalado.
Navegador (Chrome/Firefox).
Conexión a Internet.
Cuenta en Netlify (para deploy).
Cuenta en Formspree (para recibir los envíos de formulario).

1. Abrir el proyecto en Visual Studio Code
Coloca el proyecto (carpeta front) en una ubicaión accesible.
Abrí Visual Studio Code.
Selecciona File → Open Folder... y abrí la carpeta del proyecto.
En el panel lateral verás los archivos (index.html, styles.css(dentro de carpeta css) etc.).

2. Levantar la página localmente (modo rápido)
Usar extensión Live Server (recomendada)
En VS Code, abrí la pestaña Extensions (icono de cuadrados).
Busca Live Server (extensión de Ritwick Dey) e instalar.
Abrí index.html.
Hacer clic derecho en el archivo y seleccionar Open with Live Server.
Se abrirá el proyecto.
Cada vez que guardes cambios en HTML/CSS se recarga automáticamente.

3. Configurar el formulario con Formspree
    Ir a https://formspree.io y registrarte.
    Crear un nuevo Form (o proyecto) en el dashboard.
    Formspree te dará un endpoint tipo:
    https://formspree.io/f/tu-codigo
    En tu archivo HTML cambia el <form> para usar ese action y method="POST". Ejemplo:
    <form class="datos" action="https://formspree.io/f/tu-codigo" method="POST">
    contenido del formulario
    </form>

4. Deploy a Netlify — opción mediante Git (recomendado para iterar)
    Subí tu proyecto a un repo en GitHub / GitLab / Bitbucket.
    En Netlify → Sites → Add new site → Import from Git.
    Conectá tu cuenta de Git (GitHub/GitLab/Bitbucket) y seleccioná el repo.
    Para un sitio estático sin compilación:
    Build command: dejar vacío.
    Publish directory: dejar ./ o public si tu estructura usa esa carpeta.
    Hacé deploy — Netlify construirá y publicará automáticamente cada vez que hagas push al branch seleccionado (por ejemplo main).