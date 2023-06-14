"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

1)
Leer el título del "header" del post e imprimirlo en consola.   
 
2)
Cambiar título utilizando javascript por otro cualquiera.

/* muestra el contenido del documento; */ 

const tituloprincipal = document.querySelector(".post-header");
document.write(tituloprincipal.textContent); /*muestra el contenido en navegador */
console.log(tituloprincipal.textContent);  /* muestra contenido en consola. */

/* cambio de titulo */

const hoy = new Date();
tituloprincipal.textContent = ` Publica tus contenidos : Aca se te muestra fecha, hora y minutos :${hoy.getDate()}/${hoy.getMonth() + 1}/${hoy.getFullYear()}`;
document.write(tituloprincipal.textContent);  
console.log(tituloprincipal.textContent);
document.write(tituloprincipal.textContent);

