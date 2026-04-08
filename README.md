# Página web de Audix

Página web estática para Audix hosteada en [GitHub](https://audix-tandil.github.io/audix-web/).

## Estructura

El sitio web tiene 3 páginas (3 archivos .html)
- Bienvenida (index)
- Servicios
- Audífonos

aunque en un futuro podríamos agregar más. Cada página tiene como _header_ un menú de navegación con el nombre "Audix" a la izquierda y las opciones (botones) "Nosotros", "Servicios", "Audífonos" y "Contacto" a la derecha; y como _footer_ una zona oscura con información de contacto.

La página de bienvenida muestra una foto de bienvenida grande con un texto/frase. Debajo hay un título "Nosotros" y una serie de bloques horizontales formados por una imágen (a la izquierda) y un título y descripción breve (a la derecha). Estos bloques muestran el negocio y los profesionales que trabajan ahí. Las páginas de servicios y audífonos son también una serie de bloques del mismo tipo que antes, cada uno describiendo un servicio o audífono. El footer de contacto es una lista de de datos con logo a la izquierda e información a la derecha, tiene teléfono, mail, whatsapp, instagram, facebook, google maps, etc.

Como prototipo, hicimos un archivo [bloques.json](docs/bloques.json) con la información para mostrar en cada bloque.

## Estética

La gama de colores anda por el _azul profundo_, _lavanda perla_ o algo así. Creo que hay que elegir algunos colores (primario, secundario, color de acción) y con eso se arma todo después. Tenemos que afinar este trabajo. Como el sitio web tiene páginas formadas por bloques, estaría bueno que el fondo sea diferente para cada bloque (que se vayan intercalando el blanco y el lavanda, por ejemplo), dando pistas visuales de que está cambiando el bloque de información.

Botones cuadrados, reactivos (cuando el mouse pase por encima que cambien de color), bloques con fondos intercalados (por ahí cambiando entre lila y blanco). Que cuando cliqueémos en los botones del menú se muestre una anumación de que la página se desliza hasta el título correspondiente.

La página tiene que ser visible en teléfono y tablet también, así que ahí el menú va a tener que cambiar por algo tipo "tres barritas" que al tocarlas se despliegue un menú vertical al costado. Y lo que antes eran bloques con foto a la izquierda y texto a la derecha, ahora cambiarían por foto arriba y texto abajo.

Las imágenes deberían er todas del mismo tamaño y ratio.

## Ideas y comentarios

- Agregar una sección de preguntas frecuentes.
- Agregar un contador de audífonos vendidos.
- Agregar links a los institutos de fonoaudiología.
- Agregar testimonios de pacientes satisfechos.
- Agregar muchas mas fotos del consultorio por dentro.
- Agregar facebook e instagram en los contactos.
- Agregar íconos reales de whatsapp, facebook, instagram, maps, etc.
- Hacer los botones más cuadrados.
