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











*/