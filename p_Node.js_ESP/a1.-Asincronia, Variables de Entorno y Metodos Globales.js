//FUNCIONALIDAD ASÍNCRONA DE NODE.JS
/*para correr un programa de JavaScript con Node.js debemos ejecutar el siguiente comando en consola:
node \directorio\archivoJavaScript.js*/

/*El hecho de que los programas de Node.js se ejecuten solamente en un hilo (monohilo) es tanto una ventaja, como 
una desventaja, ya que si llegara a fallar alguna línea de código del programa, todas sus funcionalidades asíncronas
se detienen.*/
//EJECUCIÓN DE UN PROCESO NODE.JS:
/*Cada que se ejecuta un programa con Node.js a través del motor V8, se inicializará y terminará un proceso de node 
de la siguiente manera:
Inicio de proceso node → Código JavaScript.js → Código bytecodes → Motor JIT (Compilación Just-In-Time) → Partes 
del código bytecode a código máquina → Fin de proceso node.*/
console.log("Hola Mundo!");

//EJECUCIÓN DE UN PROCESO QUE SE EJECUTA AUTOMÁTICAMENTE CADA CIERTO TIEMPO:
/*setInterval(): Método que en Node.js se utiliza para ejecutar repetidamente una función o un fragmento de código, 
con un intervalo de tiempo de espera entre cada ejecución indicado en milisegundos.*/
setInterval(function(){
    console.log("Sigo activo!!");
}, 1000);

/*Cuando queramos que una tarea se ejecute solo un cierto número de veces, podemos utilizar el método 
clearInterval(), el cual debe ser aplicado a una variable que guarde el número de ejecuciones del método 
setInterval().*/
let ejecuciones = 0;
let intervalo = setInterval(function(){
    console.log("Olis crayolis " + ejecuciones);
    if(ejecuciones === 3){
        //clearInterval(): Método que detiene la ejecución de una función inicializada con el método setInterval.
        clearInterval(intervalo);
    }
    ejecuciones++;
}, 1000);

/*setImmediate(): Mérodo que establece una acción a ser ejecutada tan pronto como sea posible, pero después de que 
se haya completado el procesamiento del código actual.*/
setImmediate(function(){
    console.log("Ejecución inmediata antes de que ocurra un posible error.");
    /*__dirname: Es una instrucción global (que no necesita ser importada) de Node.js que permite saber en que 
    directorio se encuentra este programa actualmente.
    __filename: Atributo global que indica el directorio, nombre y extensión del archivo actual.*/
    console.log(__dirname);
    console.log(__filename);
})

/*Uno de los problemas que se puede causar por ejemplo al utilizar el método setInterval es que si la función que 
ejecuta falla, todo el programa se detiene, esto ocurre porque Node.js es monohilo.*/
let i = 0;
setInterval(function(){
    console.log(i);
    i++;
    if(i === 5){
        console.log("Forzamos error...");
        var a = 3 + z //Se ha forzado que ocurra un error porque no existe la variable z.
    }
}, 1000);

/*Pero no importando qué venga debajo de la función que falle, hasta que alguna función del monohilo tenga un error, 
todo su contenido se ejecutará de forma asíncrona y primero se ejecutarán las instrucciones que menos tiempo les 
tome correrse.*/
console.log("Instrucción asíncrona ;)");




/*IMPORTACIÓN DE VARIABLES DE ENTORNO: Cuando se quiera utilizar una API u otro elemento externo que utilice un key, 
un token, una contraseña, una variable o constante cuyo valor no deba cambiar, etc. por seguridad es de buenas 
prácticas declararla en un archivo externo o simplemente que esta no se encuentre en el programa de forma explícita, 
a esto se le llama variable de entorno y para crearla debemos acceder al proceso de node que estamos utilizando y 
luego al entorno para finalmente asignar un valor, cabe mencionar que el nombre de las variables de entornos 
usualmente se pone con maýusculas:
variable = process.env.NOMBRE_VARIABLE_DE_ENTORNO*/
let variableDeEntorno1 = process.env.VARIABLE_DE_ENTORNO;
let variableDeEntorno2 = process.env.VARIABLE_DE_ENTORNO_VALOR_PREVIO || "Olis por default";
/*Si ejecuto mi código sin definir el valor de la variable de entorno, esta saldrá como undefined, para asignar un 
valor a la variable de entorno se pueden hacer dos cosas:
1.- Asignar el valor de la variable de entorno de forma manual al inicio del comando node en la terminal:
    VARIABLE_DE_ENTORNO_1 = Valor   VARIABLE_DE_ENTORNO_n = Valor     node \directorio\archivoJavaScript.js
2.- Definir el valor de la variable de entorno de forma separada antes de ejecutar el comando node en la terminal,
    para que este valor asignado sea borrado, deberé utilizar una nueva terminal:
    $env:VARIABLE_DE_ENTORNO_1 = Valor
    $env:VARIABLE_DE_ENTORNO_2 = Valor
    node \directorio\archivoJavaScript.js
3.- Se utiliza la compuerta OR (||) para asignar un valor por defecto a la variable de entorno si es que esta no es 
    cambiada de forma manual como se mostró en las dos opciones previas.
    node \directorio\archivoJavaScript.js*/
console.log("Primera variable de entorno: " + variableDeEntorno1)
console.log("Variable de entorno con valor por defecto asignado previamente: " + variableDeEntorno2)