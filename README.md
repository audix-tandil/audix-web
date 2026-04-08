# Página web de Audix

Página web estática para Audix hosteada en [GitHub](https://audix-tandil.github.io/audix-web/) (de forma que tengamos independencia en caso de querer cambiar de servicios).

## Instrucciones de mama

La página tiene una foto del negocio y 4 pestañas:
- Nosotros
    Con fotos del negocio, de los que trabajan ahí, y algún texto.
    Quizas lo mejor sea un texto arriba y centrado y abajo fotos de quienes trabajan ahí con pequeñas descripciones.
- Servicios
  - Estudios auditivos
  - Seleccion y venta de audífonos
  - Taller de reparaciones 
  - Venta de accesorios para hipoacusico
  Textos con explicación también vendrían bien.
- Audífonos
    Fotos de diferentes audífonos, con descripciones imagino
- Contacto
    mail, whatsapp, etc. Por ahí la opción de enviarles un mail, no se.

La gama de colores esta en la foto [colores](img/colores.jpeg).

### Descripción para armar la descripción

La página en realidad esta compuesta por 3 páginas (no se que seran... 3 archivos .html?) Una es la bienvenida, con una foto de bienvenida, información del negocio y sus integrantes, y datos de contacto (relamente, un título y abajo un ícono de whatsapp con el número de telefono y un ícono de mail con el correo electrónico, un ícono de gps con la dirección y hyperlink a la página de google street view o algo así...). Otra es una página llamada estudios auditivos donde habrá una lista de estudios auditivos, cada uno quizás acompañado con una foto y una descripción (lo imagino como una lista de bloques horizontales, foto a la izquierda (todas las fotos del mismo tamaño), descripción breve a la derecha), y abajo del todo, como siempre, la sección de contacto. La última página es una llamada Servicios que, al igual que "Estudios auditivos" tiene una lista de servicios con fotos y descripciones breves y, abajo del todo, la información de contacto. Todas estas páginas deben tener el mismo encabezado: un menú horizontal (que se deslice con el usuario cuando scrolleamos, así siempre puede clickear sus botones, o por ahí vos tenes una mejor sugerencia de cómo hacer esto) que tenga el logo de audix chiquitito a la izquierda y 4 opciones sobre el lado derecho: "Nosotros", "Servicios", "Estudios auditivos" (o "Estudios" para hacerlo mas corto) y "Contacto". Al clickear en nosotros, que te lleve a la información de título "Nosotros" que estará abajo de la foto de bienvenida, al clickear "Contacto", que te lleve al final de la página, donde está la información de contacto. Si clickeas en servicios o estudios, que te lleve a las otras dos páginas.

Para poner en nosotros habría 3 fotos con textos, la primera es la foto del negocio con un texto que diga "este es el negocio, llevamos trabajando desde hace 1932 años" (yo después lo cambio por otra cosa, probablemente linkeada a google maps) con la dirección. La segunda es una foto de la licenciada en fonoaudiología "Natalia Bustos, lic en fonoaudiología, costurera, pastelera, diseñadora de interiores, cosmetóloga, no negocia con terroristas." y la tercera es una foto del "Gastón Giordani, ingeniero en electrónica, dotor" (dotor va sin c, es un título meme).

Para poner en "Servicios" tenemos
- Estudios auditivos
- Seleccion y venta de audífonos
- Taller de reparaciones 
- Venta de accesorios para hipoacusico

Cada uno de estos servicios va con foto y texto como describí antes. Voy a poner en /img en el repositorio una foto llamada placeholder.png para todas estas cosas, pero es importante que las fotos se vean todas del mismo tamaño por consistencia (no se si eso es algo que tenes que controlar en el código html cuando importas la foto, o queda a cargo de quien sube la foto subirla en un ratio específico...) Creo que lo mejor sería que importes esa foto tipo placeholder y que el texto a su derecha sea un título con el nombre de servicio y abajo del título "texto descriptivo".

Algo parecido con audífonos. Pone 3 o 4 bloques de prueba "Audífono 1" "Audifono 2" etc.

La gama de colores debería ser un azul/violeta clarito, como el de la foto que te estoy pasando (aunque podría cambiar si a mi mama no le gusta, así que estaría bueno que las cosas esten bien organizadas y modularizadas para hacer cambios estéticos sencillos). El tipo de letra debería ser profesional, pensaba en un Helvetica, aunque creo que esa es paga, por ahí un arial se le parece... vos diras.

La página tiene que verse bien en tablet y teléfono ademas de en computadora. En ese caso, dejo que hagas con el menú lo que mejor te parezca, porque la pantalla del teléfono es pequeña como para tener un menú horizontal gigante, probablemente un menú lateral sea mejor idea, pero no se nada de diseño.

Además me gustaría que la sección bienvenida sea la foto de bienvenida, luego la sección nosotros sea de un fondo distinto, y la sección contacto de otro fondo, y lo mismo con las otras páginas, me parece buena idea que los fondos vayan cambiando para dar una pista visual de que estamos cambiando de sección. Y me gustaría que tenga todos esos detalles de que cuando hover-eas por un boton cambia de color, indicando que lo podes clickear... etc. vos sabras, todo eso que hace que la interacción se sienta bien.

### Descripción del chat

#### Documento de Especificación: Proyecto Web "Audix"

##### 1. Identidad Visual y Estética
*   **Concepto:** Profesionalismo, claridad auditiva, cercanía y tecnología médica.
*   **Paleta de Colores (Basada en la imagen de referencia):**
    *   *Color Primario:* Azul Profundo/Cobalto (#2C3E50) para textos y encabezados.
    *   *Color Secundario:* Violeta Suave / Lavanda Perla (#E6E6FA) para fondos alternados.
    *   *Color de Acción (CTA):* Azul Eléctrico o Celeste Vibrante (#3498DB) para botones y estados *hover*.
    *   *Fondo Neutro:* Blanco Puro o Gris Humo muy ligero (#F9F9F9).
*   **Tipografía:**
    *   Cuerpo y Títulos: **"Inter"** o **"Montserrat"** (vía Google Fonts). Son fuentes gratuitas, modernas y de altísima legibilidad, superiores a Arial y con el "aire" de la Helvetica.
*   **Efectos:** Transiciones suaves (0.3s) en botones y enlaces. Uso de bordes redondeados (8px) para una sensación amigable.

##### 2. Arquitectura de Información (Mapa del Sitio)
El sitio se divide en 3 documentos HTML independientes con una estructura de navegación compartida:
1.  **Home (`index.html`):** Bienvenida, sección "Nosotros" (con ancla) y Pie de página "Contacto" (con ancla).
2.  **Estudios Auditivos (`estudios.html`):** Listado detallado de prácticas médicas.
3.  **Servicios (`servicios.html`):** Listado de soluciones comerciales y técnicas.

##### 3. Componentes Globales (Presentes en todas las páginas)
###### A. Header (Navegación Sticky)
*   **Comportamiento:** `position: sticky; top: 0`. Debe permanecer visible al hacer scroll.
*   **Diseño Desktop:** Logo a la izquierda (máx. 50px de alto). Menú a la derecha con enlaces: *Nosotros, Estudios, Servicios, Contacto*.
*   **Diseño Mobile:** Conversión a "Menú Hamburguesa" (ícono de tres líneas) que despliega un menú lateral o a pantalla completa para facilitar el uso con el pulgar.
*   **Interacción:** El enlace activo debe tener un subrayado o cambio de color sutil.

###### B. Footer (Sección Contacto)
*   **Diseño:** Tres columnas en desktop, una columna centrada en mobile.
*   **Contenido:**
    *   Ícono de WhatsApp + Número (Link directo a `wa.me`).
    *   Ícono de Email + Correo (Link `mailto:`).
    *   Ícono de GPS + Dirección (Link a Google Maps/Street View).
*   **Fondo:** Color oscuro (Azul Primario) con texto blanco para dar un cierre visual fuerte.

##### 4. Detalle de Secciones y Contenido
###### 4.1. Página de Bienvenida (Home)
*   **Hero Section:** Imagen de impacto a ancho completo con un "overlay" (capa de color semitransparente) para que el texto de bienvenida sea legible.
*   **Sección "Nosotros":** 
    *   Diseño de cuadrícula (Grid) de 3 columnas.
    *   Tarjetas de perfil: Foto circular o con bordes redondeados, nombre, título y descripción breve.
    *   *Nota:* Las descripciones de Natalia y Gastón se tratarán con jerarquía tipográfica (Nombre en negrita, título en cursiva).
*   **Alternancia de Fondos:** Fondo blanco para Bienvenida, Fondo Lavanda para "Nosotros", Fondo Blanco para una sección intermedia si existiera.

###### 4.2. Páginas de Listados (Estudios y Servicios)
*   **Patrón de Diseño:** "Media Object" o Filas Horizontales.
*   **Restricciones de Imagen:** Las imágenes deben estar contenidas en contenedores con `aspect-ratio: 16/9` o `4/3` y usar la propiedad CSS `object-fit: cover`. Esto garantiza que, aunque subas fotos de distintos tamaños, todas se vean uniformes en la web.
*   **Estructura de Bloque:** 
    *   Desktop: Foto (40% ancho) | Texto (60% ancho).
    *   Mobile: Foto (100% arriba) | Texto (100% abajo).
*   **Contenido:** Título del servicio (H3) + Párrafo descriptivo.

##### 5. Requerimientos Técnicos y UX
*   **Responsividad:** Mobile-first. En teléfonos, los botones deben tener un tamaño mínimo de 44x44px para ser fáciles de tocar.
*   **Optimización de Imágenes:** Uso de formatos modernos (WebP) para carga rápida.
*   **Interactividad (Hover):** Los botones deben cambiar su opacidad o oscurecerse un 10% al pasar el cursor. Los enlaces del menú deben tener una transición de color.
*   **Modularización:** Uso de Variables CSS (`:root`) para colores y fuentes, permitiendo cambios globales instantáneos si los padres deciden cambiar el tono de azul.
