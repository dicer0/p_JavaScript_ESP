//MÓDULOS NO GLOBALES - FILE SYSTEM:
//Importación del módulo File System, el cual sirve para leer, escribir o modificar archivos del sistema.
const fs = require('node:fs');

/*Debemos considerar que todos los métodos de los módulos que importemos se van a ejecutar de forma asíncrona, 
osea todo al mismo tiempo y sin órden. 
Aunque la mayoría de los métodos de los módulos tienen una alternativa síncrona denotada por la palabra Sync 
en el nombre del método, no es recomendable usar esta opción, ya que bloqueará la ejecución del monohilo de 
Node.js, afectando así su funcionalidad de correr tareas en paralelo y reduciendo su velocidad de 
procesamiento.*/
function leerArchivo(ruta, callbackLeer){
    /*Para describir las acciones de las promesas o callbacks se pueden utilizar arrow functions, que funcionan 
    exactamente igual a las funciones normales, pero con una sintaxis más sencilla:
    -Función normal:
        function nombreFuncion(){
            //Contenido función.
        }
    -Arrow Function o función anónima:
        () => {
            //Contenido función.
        }
    En las reglas ECMA6 esta es la sintaxis predeterminada para promesas y callbacks.
    Además, cabe mencionar que siempre que se utilicen callbacks en los métodos de los módulos importados, 
    estos ya considerarán que la acción ha sido realizada, por lo cual como parámetros recibirán el posible 
    error que se haya ocasionado al fallar en completar la acción y del segundo parámetro en adelante, ya 
    dependerá de la acción en específico que esté realizando el método.*/
    /*fs.readFile(): Método que permite leer un archivo de forma asíncrona, para ello esta recibe el directorio 
    del archivo y un callback que indique la acción a ejecutar una vez que haya sido leído el archivo, en este 
    caso el callback considera en sus parámetros un posible error de lectura y la información extraída del 
    archivo.*/
    fs.readFile(ruta, (posibleError, dataArchivo) => {
        //Dentro del callback se considera que el archivo ya ha sido leído.
        /*Si se intenta imprimir directamente la data del archivo, se imprimirá en consola un Buffer, este 
        representa un área de memoria reservada para almacenar datos binarios de manera temporal durante su 
        manipulación, lectura o escritura y comúnmente se presentan utilizando números hexadecimales.*/
        //fs.toString(): Método que convierte datos Buffer en texto legible de tipo string.
        resultado = dataArchivo.toString();
        /*El callback de la función lo que hará es devolver un resultado y esto me obligará a que cuando 
        utilice la función, en su segundo parámetro indique la acción que quiero que se ejecute con este 
        resultado.*/
        callbackLeer(resultado);
    })
}
//__dirname: Atributo global que indica el directorio del archivo actual.
ruta = __dirname;
console.log("Directorio del archivo:\n" + ruta + "\n");
console.log("Contenido del archivo:");
//Ejecución de la función que lee un archivo:
leerArchivo(ruta + '/a3.-Archivo File System.txt', console.log);