/*           PARA EL CSS

* { Este es el selector universal, por defecto, los navegadores agregan un margen y padding
    a los sitios web
    box-sizing: border-box; hace que los bordes y los paddings no se agreguen a las cajas que se 
        especifican para una caja
}

body {
    Aquí siempre se definen las fuentes, no en el selector universal
}

height: 95vh; La altura ocupará el 95% de la pantalla. Las imágenes cambian dinámicamente al cambiar
de tamaño la pantalla
background-size: cover; arregla la img para que se vea toda en el contenedor

.clase {

}

///////////// ANIMACIONES ///////////////
Se crea una animación con @keyframes nombreDeLaAnimación { dentro se especifica el avance en % de 
    la animación } Para que ésta se vea bien, es conveniente poner sólo dos animaciones: 
    opacity y transform. 
Luego, se manda a llamar la animación dentro del elemento que se quiere animar y se establece duración

animation-delay: 2s; Tiempo para que inicie una animación
animation-iteration-count: 2; # de veces que se ejecutará la animación
animation-timing-function: ease-in; establece la velocidad de la animación, puede empezar rápido y luego
    lento o viceversa
animation-timing-function: cubic-bezier(1, 0, 0, 1); nuestra f personalizada
75% {
        transform: rotate(50deg);        Rotación
    }

Las pseudoclases son un estado det de un selector (link, hover, visited)

.btn:link,
.btn:visited {
    Para poner los estados juntos y que el btn visitado sea el mismo que cuando no ha sido clickeado
}

padding: 15px 40px; 1er valor: arriba y abajo   2do valor: derecha e izquierda.
    Si se escriben 4 valores: 1arriba 2abajo 3izquierda 4derecha

box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
    sombra en x | sombra en y | desenfoque rgba()

La pseudoclase hace referencia al estado de un elemento

Pseudoelementos: siempre se debe especicicar el content, aunque sea vacío; y el display (de preferencia
    igual al elemento que se le quiere aplicar el after)

z-index: -1; si dos elementos están encimados, z-index define cuál está detrás
transform: scale(2); Veces que el elemento será más grande

animation-fill-mode: backwards; la animación correrá al revés

============ LOS TRES PILARES PARA ESCRIBIR HTML Y CSS ================

1) responsive design (diseño receptivo) (el sitio web funcionará en calquier pantalla)
    Uso correcto de unidades, vista en desktop y móvil
2) código mantenible y escalable (limpio, fácil de entender, escalable a futuro, reutilizable)
3) rendimiento web (rápido y pequeño en datos para que el usuario descargue menos datos)
    Uso de Sass, reducir el uso de imágenes

Al cargar un sitio web, el archivo CSS se ejecuta en dos partes 1: En estilo cascada (las declaraciones
en conflicto se resulven) y 2: Procesar los valores CSS (ej de % a px (tamaños de pantalla)). Una vez
ejecutados estos pasos, el CSS se almacena en CSSOM (CSS Object Model, similar al DOM del HTML; estos
dos forman el RENDER TREE que rendereiza la pág (la muestra) el Navegador usa el Modelo de Formato Visula)
y finalmente se renderiza el sitio web.

CSS: Cascade Style Sheet.
Cascada: Resuelve los onflictos entre las reglas y declaraciones de la hoja de estilos. Revisa la 
--------importancia, especificidad y orden de las declaraciones------------- Para det qué estilo
tendrá prioridad para ser mostrado

========IMPORTANCIA==========
1.- User: important declarations
2.- Author: important declarations
3.- Author declarations
4.- User declarations
5.- Default browser declarations

======ESPECIFICIDAD DE LOS SELECTORES=======
1.- Estilos en línea: Se escriben en el HTML
2.- id's: #id
3.- clases, pseudo-clases, atributos: .clase
4.- elementos, pseudo-elementos: nav div, :hover :focus

Se definirá el selector a usar en función de la especificidad de este (#,#,#,#) número de ocurrencias
Se leerán de izquierda a derecha. Este es el valor de la cascada.
Si hay un empate entre los selectores, se aplicará la última declaración CSS escrita en el código
El selector universal *{} no tiene un valor de especificidad (0,0,0,0) por lo que todos los demás 
selectores tienen prioridad sobre él.
En caso de incluir más de una hoja de estilos, al útlimo del HTML se incluirá la nuestra, o la que
queramos que mande en las hojas, en caso de que sólo queramos modificar algunos aspectos de la
pág con las hojas de estilo externas.

background-color: purple !important; Por la palabra !important se aplicará esta declaración

//////////VALORES PROCESADOS//////////////
Dimensiones, al final, todas las dimensiones establecidas se convertirán a px
El ancho de los elementos padres es la referencia en % de sus elementos hijo
"em": usa el elemento padre o actual como ref (font-size=3em; 3 veces el tamaño de fuente principal); esto
es cuando se utiliza "em" para el tamaño de fuente.
Utilizando "em" como longitud utiliza el tamaño de fuente del elemento actual como ref.
(paddind=2em;) = el padding será de 48px si la fuente es de 24px
"rem": usa el tamaño de fuente raíz como referencia. Si la fuente es de 16px y se tiene un 
margin-botton=10rem; entonces se trendrá un margen de 160px.
vh y vw se basan en el puerto de visualización del navegador
view height y view width; 90vh es el 90% de la vista a lo alto de la pantalla.

////HERENCIA/////
Forma de propagar valores de un elemento padre a sus elementos hijo
Si no hay un valor en cascada, se aplica la herencia. Algunas propiedades se pueden heredar y otras no.
line-height se hereda (font-familie,color,font-size)
padding no se hereda (margin)
Lo que se hereda es el valor calculado y no el valor declarado
inherit: para heredar
initial: para reestablecer a su valor inicial

El tamaño de fuente raíz se establece en el selector HTML; un rem es el tamaño de la fuente raíz.

Al establecer un tamaño de fuente en px, se elimina la posibilidad de hacer zoom a la pág, porque
siempre tendrá un tamaño definido. Por lo tanto, se usa un porcentaje, por defecto el navegador
otorgará 16px como tamaño de fuente.

El modelo de formato visual de CSS es un algoritmo que calcula las cajas y el diseño de estas
para c/elemento en el árbol de representación, con el fin de det el diseño final de la pág:
-box-type: inline, block...
-position cheme: float, relative, absolute
...

box-sizing: border-box; Incluirá el padding de la caja.

El tipo de la caja siempre está definido por la propiedad de visualización.

display: block; ocupan el 100% del width, se colocan verticalmente uno después de otro

display:inline; ocupa sólo el espacio del contenido, el contenido se distribuye en líneas, no 
    tiene ancho ni altura, sólo se pueden especificar márgenes y paddings sólo a la izq y der,
    no causa saltos de línea

display: inline-block; mezcla entre block e inline, ocupa sólo el espacio del contenido y no causan
    saltos de línea.

Se puede establecer un bloque dentro de un inline-block

////////////////
POSITIONS:

Normal float: se presentan en el orden natural del código

Floats: hace que los elementos se desplacen a la izq o der (float: left; float: right;) lo más posible,
hasta que toquen el borde de su caja

Absolute position: (position: fixed;). Este elemento no tiene impacto con los elementos que lo rodean
(incluso se pueden superponer a elementos que ocupan el mismo espacio, usando staking context (contextos
de apilamiento, determinan en qué orden los elementos serán mostrados en la pág (z-index))) 
se usa top, left, rigth, bottom.
z-index=2; el que tenga el # más alto: aparecerá encima de los otros. Pero también la opacidad 
provocan contextos (apilamientos)

B E M :
        Block                       .block{}
        Block-Elemnt                .block-element{}
        Block-Element-Modifier      .block-element-modifier{}

    block__element--modifier           <-- Así en HTML

                ===============================================================
                                            S A S S
                ===============================================================

Es un preprocesador de CSS (CSS con superpoderes)
Se escribe código SASS y luego se usa un compilador para transformarlo a código CSS.

SASS proporciona:

-variables: colores, tamaño de fuente, espacios.
-anhidación: para anhidar selectores (permite escribir menos código).
-operadores: permite operaciones matemáticas dentro de CSS.
-partials & imports: para escribir CSS en diferentes archivos y luego importándolos dentro de otro.
-mixins: para escribir piezas de código reutilizables.
-funciones: similar a mixins, pero las funciones producen un valor que puede ser utilizado.
-extends: hace que diferentes selectores hereden declaraciones comunes a ellos.
-directivas de control: para escribir código con condicionales y ciclos.

Existe dos sintaxis:
1.- Sass Syntax: no utiliza ";" y honra la sangría, no usa "{}"

2.- SCSS Syntax: conserva la apariencia original del CSS

*{    Común ponerlo
    margin: 0;
    padding: 0;
}

ESCRIBIENDO EN SASS
$variable: valor; -> ej -> $color-primario:red; -> background-color:$color-primario;

nav {
    li { PARA ANHIDAR
        list-style:none;  Quita los puntos que se generan en una <li>

        &:first-child { 
            margin: 0px;
        }
    }
}

// Para hacer comentarios en SASS
display:inline-block; pone los elementos como si fueran bloques uno enseguida de otro, de manera horizontal


<nav class="clearfix">
  <ul class="navigation">
    <li><a href="#">About me</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">About her</a></li>
  </ul>
  <div class="buttons">
    <a class="btn-main" href="#">Sebastian</a>
    <a class="btn-second" href=#>Palacios</a>
  </div>
</nav>

*{    
    margin: 0;
    padding: 0;
}
$color-primary:yellow;
$color-secondary:orange;
$color-tertiary:pink;
$color-text-dark:#333;
$color-text-light:#fff;

$width-btn:150px;

nav {
  background-color:$color-primary;
  margin:30px;
}

.clearfix::after { //ya que está dentro del nav se puede poner como: &::after, esto dentro del nav
  content:"";
  clear:both;
  display:table;
}

.navigation {
  list-style:none;
  float:left; //el color de fondo amarillo desaparece porque
    //todos los elementos hijo de este contenedor (del nav) están flotando, el elemento colapsa y pierde su altura, así que se usa el método "clearfix": agregará un pseudoelemento después del elemento colapsado y limpiará el flotador. Este método se usa cuando se usan elementos flotantes (float). Se crea esta clase en el HTML, en el contenedor. En CSS, se define el content como empty
  
  li {
    display: inline-block;
    margin-left: 30px;
    
    &:first-child { //=.navigation li:first-child
      margin: 0px;
    }
    
    a:link { //preferible a poner solo "a"
      text-decoration:none;
      text-transform:uppercase;
      color:$color-text-dark;
    }
  }
}

.buttons {
  float:right;
}

.btn-main:link,
.btn-second:link {
  text-decoration:none;
  padding:10px;
  display:inline-block;
  text-align:center;
  border-radius:50px;
  width:$width-btn;
  color:$color-text-light;
}

.btn-main {
  &:link {
    background-color:$color-secondary;
  }
  &:hover {
    background-color:darken($color-secondary,5%); //oscurece
  }
}

.btn-second {
  &:link {
    background-color:$color-tertiary;
  }
  &:hover {
    background-color:lighten($color-tertiary,5%); //ilumina
  }
}

               ==========================================
                 Utilizando mixins, extends y funciones
               ==========================================
               
@mixin nombreDelMixin {
    código reutilzable
}

A los mixins se les pueden pasar argumentos que usarán como una var, donde se mande a llamar el
mixin, dentro se le pasa el argumento que queramos tenga por propiedad, que también puede ser una
var de SASS. Para esto, dentro del mixin se define la var (ej: color:$color;) el argumento que
se pasará en el mixin delcarado es: $color

//Para mandarlo a llamar en donde se desee: declararlo en el código antes de mandarlo a llamar:

@include clearfix;

Funciones: 
    darken
    lighten

EXTENDS:
    Se hereda código a los elemtos hijo

    %nombreDelExtend {
        código repetitivo
    }

    Para mandarlo a llamar:
    @extend @nombreDelExtend; dentro del elemento que se quiere herede las características

La diferencia entre el mixin y el extend, es que en ambos se escribe un bloque de código; el 
mixin se duplicará donde se indique, y al contrario de esto, donde se mande a llamar el extend
se copiará en el bloque de código que se ha definido en él.
Para usar un extend, en demás selectores, éstos deben se estar relacionados.

///////////////////////

Utilizando node para instalar SASS
Comprobar que está instalado con: node -v
Crear el package.json con: npm init
Instalar SASS con: npm i node-sass --save-dev  -> xq es una herramienta de desarrollo, no se requiere para producción
En el package.json aparece en Dev-dependency

PARA VOLVER A INSTALAR LA CARPETA NODE_MODULES: npm install
ESTO REVISARÁ EL PACKAGE.JSON, E INCLUIRÁ LOS MÓDULOS NECESARIOS PARA EL PROYECTO

=============================
Para compilar un archivo SASS:
    En el package.json se agrega un script
    "compile:sass":"node-sass sass/main.scss css/style2.css"
    "nombre":"función"
    En este caso se necesita un archivo de entrada (el archivo SASS) y un archivo de salida
    (el archivo .css) y ahí saldrá el archivo compilado
    Luego, en la terminal escribir el comando que se definió con el nombre del script:
    npm run nombreScript
    Al escribir:
    "compile:sass":"node-sass sass/main.scss css/style2.css -w"
    La w indica que estará viendo si hay algún cambio en el archivo, lo ejecutará y no será
    necesario volver a escribir el nombre del script en la consola.

    Instalando globalmente live-server: , la "g" significa globalmente
    npm i live-server -g

    =================================================
    Para poner una var de color en una notación rgba:
      color: rgba(%color-black,.2);

    ==================================================
    Usar la metodología 7-1. Crear 7 folders dentro de la carpeta SASS
    Donde al final, un sólo archivo principal será el que se mande a llamar.
    Dentro de estas carpetas estarán sus archivos parciales, nombrándolos comenzando por
    un "_nombre.scss" y luego importarlos en el main.scss ... sólo eso.
    1.- base
    2.- abstracts -> código que no genera código css (mixins, variables, funciones)
    3.- componentes -> bloques reutilizables de código (c/componente tendrá su propio archivo)
    4.- layout -> partes de la pág (header, footer) que es código independiente
    5.- pages -> diferentes páginas
    6.- temas
    7.- código css de terceros

    =================================================
    Principios de Responsive Design

    1.- Pantalla fluida: usar porcentajes en vez de px (permitirá adaptar el tamaño de la pantalla)
    2.- Imágenes flexibles y responsivas: las img se comportan diferente a los textos, asegurarnos
      que su fluido sea óptimo. Ya que no se escalan automáticamente. Por lo tanto, también
      definir sus medidas como porcentajes.
    3.- Consultas de medios (media queries): para cambiar el estilo del ancho de una cierta vista,
      permitiendo crear diferentes versiones del sitio con diferentes anchos.
      
    Existen 3 formas de diseñar un sitio web:
    1.- float layouts
    2.- felx-box
    3.- css grid


<main> //Se usa para indicar que es la parte principal del sitio web. Va debajo del header
    y luego sigue el footer

    darken - lighten

    background-color:lighten($color-tertiary,5%);

Al establecer el main, éste comienza justo donde termina el header y al establecer
un color de fondo, se ve el triángulo que queda debido al corte que tiene la imagen principal.
Entonces hay que "subir" el main utilizando un margen negativo
Pero, cuánto hay que subirlo?
  clip-path: polygon( 0 0, 100% 0, 100% 80vh, 0 100%);
  la vista principal tiene 95vh (height: 95vh;). La esquina sup derecha termina al 80% 
  (le falta 15% para ocupar el 95%). Entonces: para subir el main:
  95vh-80vh=15vh: un margen negativo de 1.5rem.

  https://bennettfeely.com/clippy/   ----> Para hacer diferentes polígonos

Estilo de degradado en el texto:
  Establecer un background-gradient al h2:
    background-image: linear-gradient(to right, $color-primary,$color-primary-light);
    text-shadow: .5rem .5rem .5rem lighten($color-black,20%);
      (dirección x, y, desenfoque)

Clases de utilidad: Sólo tienen un obj, en este caso, centrar el texto y se pueden reutilizar
en otras partes del código. Ponerla en la sección de utilities en la carpeta "base"
 crear un div (u-center-text) que envuelva al heading-secondary.

Se usan para evitar poner un margin bottom

    Definir otra clase de utilidad para definir un espacio en blanco entre el texto de 
    heading-secondary y las dos columnas de float layout
    "u-margin-bottom-80"

box-shadow: 0 1rem 1.5rem rgba($color-black, 0.2);
: direccionX Y desenfoque color;

Cuando se usa un transform, se debe usar un transition en el elemento padre

Para las imágenes, crear un archivo nuevo en components (compositions.scss)
Para encimarlas, usar posicionamiento absoluto. Recordar que cuando se usa posicionamiento
absoluto, el primer padre de este "contenedor" debe tener posicionamiento relativo

Para hacer imágenes responsivas, su ancho se debe definir en %

Para hacer el efecto de que una imagen se alze sobre las otras, se le define un z-index
a todas y en el hover se establece un índice más alto al que está por defecto.

Para establecer el marco de las imgs, se usa outline y outline-offset (la separación del
  borde de la imagen al marco)


============================
Sección de características
============================

Construir una fila con 4 columnas (las filas guardan las columnas)

Es recomendable utilizar los íconos como font, porque estos son vectores y no se verán alterados
al acercar la página, siempre permanecerán nítidos: copiar el folder fonts y el archivo iconfont.css
a la carpeta CSS. Luego importar este estilo (iconfont.css) en el html.
En el archivo css hay una clase para c/ícono.

Crear una nueva sección con la clase section-features. 
Para incluir un ícono, por convención se ha acordado que en el html sea un elemento "i" que significa
italic o cursiva, antes se usaba para darle ese estilo a las letras.
Buscar en el archivo iconfont la clase del símbolo que queremos usar:
  <i class="icofont-lion-head-1"></i>
La clase feature-box del div que contiene estas columnas se tratará como un componente (crearlo en
  la carpeta e importarlo en el main scss)
Agregar la sección section-features al archivo _home.scss

background-size: cover;    Para que se vea toda la imagen

> *
  Indica que seleccionará a los hijos, y el * indica que se seleccionarán a todos los hijos, no
  sólo a los inmediatos.
Ahora, para subir la sección, usar un margin-top negativo

============================
      Sección Tours
============================
Sección Tours en HTML
Crear la tarjeta como un componente.
La perspectiva, se define en el padre que contiene al elemento.

Mientras menor sea el número en: perspective: 150rem; mayor será la perspectiva.

Mientras el lado frontal es mostrado (0°) (aún sin hover), la parte posterior digamos que está rotada
180°. Por lo tanto, al hacer hover, sólo la parte frontal rotará -180 y la trasera 0°.
Position relative y absolute harán que se encimen (el padre debe tener posicionamiento relativo
  y se definen sus coordenadas con top y left 0 de los elementos hijo (absolute)).
Las alturas de las tarjetas han colapsaso y se ha perdido la perspectiva, aquí no se puede usar 
clearfix debido al posicionamiento abs, entonces se establece la misma altatura que tienen los
lados a la tarjeta principal. -> height: 40rem;
Agregar la propiedad ease para que el giro de la tarjeta no se vea tan marcado


=======================================
      Sección de historias
=======================================

Crear en el html una nueva sección, section-stories.
Agregar story como componente e importarlo al main

Para hacer que el texto rodee la forma del círculo, se usa shape-outside

Para mover un objeto flotante, no es recomendable hacerlo con márgenes. Entonces usar 
translate: transform: translateX(-3rem);
Ahora el círculo ocupa una distancia más allé del padding definido, usar padding-left en
_story -> shape

Para un diseño responsivo, las imágenes SIEMPRE necesitan un width. Para arreglar la imagen
de los testimonios, agregarles una clase.

& > * {//los hijos de este elemento

No se puede tener más de un transform en una propiedad

Para poner texto en figuras se usa figcaption:
  Para centrar el texto del hover
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); (x,y)
        text-align: center;

Para centrar la imagen nosotros mismos: usar transform: translateX(-3rem);

backface-visibility: hidden;//Común usarla para solucionar problemas con las animaciones

=====================================
    Para poner el video de fondo
=====================================

Crear un elemento dentro de la sección, el cual será el video y hacer que tenga las mismas dimensiones
que la sección, luego ponerlo de fondo.
Para los atributos del video: autoplay muted loop, loop hará que se repita
Crear _bg_video como un nuevo componente e importarlo, para que se pueda usar esta función
en otras partes del programa.
Para que tenga las mismas dimensiones que el padre, se hace: width y height =100% (del padre)

Para que el video esté por encima de todos los elementos se le pone un índice z (-)

object-fit: cover;//similar al de las img, pero este funciona para elementos html, en este caso
para el video de fondo., también funciona para las img

Cuando un elemento se desborda, se usa overflow: hidden;

==================================
          Sección Book
==================================

Crear la sección book. Y trabajando con el archivo _form.scss
background-image: linear-gradient(75deg, rgba($color-white,.8), hotpink), url(../img/Nesbyen.jpg);
Se pone primero el que irá encima, en este caso, el gradiente. Es opcional especificar los grados
de inclinación.
También se puede especificar con porcentajes
background-size: 100%;//es lo mismo que cover

Los porcentajes van al lado del color, el degradado se aplica en el intervalo de porcentajes 
que no está definido
background-image: linear-gradient(75deg, 
                    rgba($color-white,.8) 0%, 
                    hotpink 50%), 
                    url(../img/Nesbyen.jpg);

Para los formularios se usa form en html
La etiqueta input no se cierra.

<!--El id del input se asocia con el for del label, si se da click en 
    el label, el input también se seleccionará--> en el HTML

Agregar el componente form e importarlo

font-familie: inherit; Para que herede la familia de fuente

Se puede usar el atributo válido o inválido, y definir cada uno. En este caso para los inputs

margin-left: 2rem;
margin-top: 5rem;
display: block;//necesario ponerlo para que funcionen las propiedades del margen (modelos de caja)

Selector de elementos hermanos:
  + Selecciona el elemento siguiente al que se ha seleccionado.
  ~ Selecciona todos los elementos hermanos que están dentro de un contenedor
Siempre tienen que estar después del elemento que se selecciona primero

placeholder-shown indica cuando el placeholder es visible.

opacity: 0;
visibility: hidden;
//opacity y visibility se deben usar juntas porque la visibilidad no se puede animar, y al
//establecer visibility hidden: el label desaparece de la pág, si sólo se usara opacity, el 
//label seguiría estando en la pág

Para los radio buttons:-------------------------------------------
Para que al seleccionar uno, el otro se des seleccione, en el html ponerles el mismo nombre con name
Adentro del label crear un span, éste será el diseño del radio button

-------------------------------------------------------------------
Los pseudoelementos se consideran hijos del elemento que los contiene ($ 10 .00)
Donde: "$" es before
       ".00" es after
       Y el elemento padre es el contenedor (p, div, h2...) que contiene al "10"
Siempre requieren la propiedad content, ya sea con contenido o vacía -> content:""; content:"$";
Son in-line, por defecto
Siempre requieren la propiedad display, ya que los in-line, no tienen dimensiones.
Se comportan como un div.
display: block; -> los elementos se ponen en columna
display: inline-block; -> los elementos se ponen en línea

En el html checked="checked" hará que el botón aparezca ya seleccionado.

Siempre que se use un pseudo-elemento se establece content y display

Para el envío de formulario se usan botones no anclajes (a)

====================================================
            FOOTER
====================================================

Crear el footer en el html debajo del main.
Agregar _footer a la carpeta layout e importarlo en el main


====================================================
            Para el menú hamburguesa
====================================================

Tener casilla de verificación
Tener una etiqueta conectada a esa casilla
Presentar la navegación cuando la casilla está en check

Crear al inicio del body un div con la clase navigation
Crear archivo navigation en layout e importarlo en el main

Para centrar vertical y horizontalmente:
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

Para crear el efecto hover, usar el gradiente de color.
  background-position: determinará cuando entre en cambio el color negro, y background-size
  det la inclinación del color que entra en el hover

Para activar el menú dando click en el botón hambirguesa, se tocará el label y automáticamente
el check se activa

====================================================
          Para el botón del menú hamburguesa
====================================================

Se utilizará un span, luego sus pseudoelementos before y after, al hacer click, el span principal
desaparecerá y los otros dos rotarán para formar una cruz

Transform origin------------------------
Describe donde ocurre la transformación


====================================================
          Ventana desplegable
====================================================

En el html crear después del footer un div llamado popup.
En la carpeta components crear un archivo llamado popup e importarlo al main
position: fixed; para que un elemento quede fijo en la pantalla
Para que dos elementos tengan la misma altura, en ellos se usa display: table-cell y en el 
contenedor se usa display: table
1em siempre es el tamaño de la fuente actual en el contenedor que se esté trabajando.

hyphens: auto; separa las palabras en sílabas. En auto, automáticamente descubrirá donde poner
el guión. En manual, nosotros lo especificamos. 
Para que funcione, se debe especificar el lengaueje al inicio de la etiqueta html.

Anclas para la ventana despegable:
  Se le coloca un id a una sección, y luego con un ancla (a) se manda a llamar ese id:

<a href="#section-tours"

Añadir a la hoja scss la pseudoclase "target" (el objetivo) 

opacity: 1;
visibility: visible;

Añadir el id popup a la sección popup y anclarlo en la parte posterior de las tarjetas

Display: none; para dejar de ver un elemento.
recomendable usar: opacity: 0;
                    visibility: hidden;












*/