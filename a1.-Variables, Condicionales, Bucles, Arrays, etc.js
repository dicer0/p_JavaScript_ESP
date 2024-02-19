/*JavaScript se creó con la intención de hacer más dinámicas las páginas web y está orientado 100% al 
desarrollo web, tanto en el manejo de su frontend con librerías como React.js como al manejo del backend 
con frameworks como Node.js.
JavaScript es un lenguaje interpetado, orientado a objetos, débilmente tipado y dinámico.
    - Lenguajes de programación interpretados: Son aquellos cuyo código fuente no se compila directamente 
      a lenguaje binario de máquina, sino que se ejecuta por un intérprete (RunTime) que lee y ejecuta el 
      código fuente directamente (usualmente es el navegador), sin necesidad de compilar el código para 
      cada plataforma específica de forma distinta, por lo cual es muy portable. 
      Algunos ejemplos de lenguajes interpretados populares incluyen Python, JavaScript, Ruby, PHP y Perl. 
        - El motor V8 fue creado por Google para mejorar el rendimiento de la ejecución de JavaScript en el 
          navegador web Google Chrome y en la ejecución de su framework Node.js, para ello el motor V8 
          primero interpreta el código para generar un código intermedio llamado bytecode y luego usa su 
          motor de compilación JIT (Just-In-Time Compilation) para compilar selectivamente partes del código 
          en código máquina, lo que mejora significativamente la velocidad de ejecución.
    - Lenguajes de programación tipados: Son aquellos en los que se requiere especificar el tipo de 
      dato de cada variable antes de su uso o declaración.*/



//VARIABLES Y CONSTANTES:
//Tipos primitivos: Tipo de dato que puede adoptar una variable o constante.
//var: Permite declarar dos variables con el mismo nombre y cambiar sus valores. Tiene alcance de función.
//let: No permite declarar dos variables con el mismo nombre, pero sí cambiar sus valores. Tiene alcance de bloque.
//const: No permite declarar dos variables con el mismo nombre ni cambiar su valor. También tiene alcance de bloque.
/*- Alcance de función: Significa que las variables están disponibles para usarse en toda la función en la que 
    fueron declaradas, incluso dentro de bloques como if o for dentro de esa función.
  - Alcance de bloque: Significa que las variables o constantes están disponibles solo dentro del bloque en el que 
    fueron declaradas, ya sea dentro de un if, for, o cualquier otro bloque de código delimitado por llaves {}.*/
var num = 40;                       //Var: Es una variable de alcance global.
text = "Diego Cervantes = di_cer0"; //Si no se indica nada en la variable, también es tipo var.
let booleano1 = true;               //Let: Es una variable de alcance local.
let booleano2 = false;
/*Valor placeholder: Es un término utilizado en programación para referirse a un valor temporal o ficticio que 
se utiliza para reservar un espacio de memoria hasta que se sustituya por un valor real o definitivo.*/
const emptyValue1 = null;         //Valores placeholder
const emptyValue2 = undefined;    //Valores placeholder
/*Tipos no primitivos (objetos): Tipo de dato que hereda de alguna clase para definirse, por lo cual tiene 
asociados ciertos atributos (características) y métodos (funciones).*/
var array = [1,2,3,[4,5,6]];      //Array
var array = {
    key1: "Value1", 
    key2: "Value2"
};                                //Diccionario o JSON

//COERCIÓN: Es la conversión de valores realizada de forma automática por JavaScript.
var coercion1 = 4 + "7";   // = 47.
var coercion2 = 4 * "7";   // = 28.
var coercion3 = 4 + true;  // = 5. Los valores booleanos se consideran como 0 o 1 en operaciones matemáticas.
var coercion4 = 4 + false; // = 4. Los valores booleanos se consideran como 0 o 1 en operaciones matemáticas.



//FUNCIONES: Existen dos tipos proncipales, declarativas y de expresión.
/*HOISTING: Es un fenómeno que sucede al ejecutar JavaScript donde las declaraciones de funciones y variables se ejecutan 
primero por sí solas durante la fase de compilación, esto significa que se pueden usar variables y funciones antes de 
declararlas en el código, pero siempre considerando que se les asignará un tipo de dato undefined a las variables que no 
hayan sido previamente declaradas. Para evitar problemas con el hoisting, se recomienda seguir estas buenas prácticas:
1.- Declarar variables al inicio del código: Declara todas las variables al principio de la función o bloque donde se 
    utilizarán. Esto hace que el código sea más legible y ayuda a evitar confusiones causadas por el hoisting.
2.- Inicializar variables cuando se declaran: Asigna un valor inicial a las variables al declararlas. Esto evita que se 
    utilicen variables no inicializadas y ayuda a evitar comportamientos inesperados.
3.- Usar const y let en lugar de var: Utiliza const y let en lugar de var siempre que sea posible. Esto reduce el alcance 
    de las variables y evita problemas relacionados con el hoisting.
4.- Evitar depender del hoisting para el orden de ejecución: Escribe el código de manera que no dependa del hoisting para 
    el orden de ejecución. Esto hace que el código sea más predecible y fácil de entender para otros desarrolladores.
Siguiendo estas buenas prácticas, se puede escribir código JavaScript más limpio y menos propenso a errores relacionados con 
el hoisting.*/
/*FUNCIONES DECLARATIVAS: Utilizan la palabra reservada function seguida del nombre de la función y su cuerpo entre 
llaves {}.*/
function miFuncion(){
    return 3;
}
/*FUNCIONES DE EXPRESIÓN: En una función de expresión, se asigna una función anónima a una variable.*/
var miFuncion = function(a, b){
    return a+b;
}
/*SCOPE: Es un concepto que se refiere al alcance que tienen las variables, osea desde donde si y no se pueden utilizar. 
El scope local más que nada se crea cuando se declaren variables dentro de una clase o función, por lo que no se podrán 
utilizar fuera de ellas.*/
var nombre = "Diego";               //Variable global: Se puede acceder desde cualquier lugar del programa.
function fun(){
    var apellido = "Cervantes";     //Variable local: Solo se puede acceder desde dentro de la función.
    return nombre + " " + apellido;
}
//console.log(): Método de impresión en consola.
console.log(fun())



//CONDICIONALES Y BUCLES:
//OPERADORES MATEMÁTICOS:
let operador_mat1 = 3 + 2;
let operador_mat2 = 3 - 2;
let operador_mat3 = 3 * 2;
let operador_mat4 = 3 / 2;
//OPERADORES LÓGICOS:
let operador_log2 = 3 == "3";       //== :Igual a.
let operador_log3 = 3 === 3;        //=== :Exactamente igual a (tipo de dato y valor).
let operador_log4 = 3 < 2;          //<, >, <=, >= : Mayor, menor, mayor o igual, menor o igual.
let operador_log1 = !false;         //!  :Diferente de u operador lógico Not.
let operador_log5 = true && false;  //&&: Operador lógico And.
let operador_log6 = true || false;  //||: Operador lógico Or.

//CONDICIONAL IF/ ELSE IF/ ELSE:
var edad = 18;
if(edad == 18){
    console.log("Puedes votar.")
}else if(edad > 18){
    console.log("Puedes votar de nuevo.")
}else{
    console.log("Aún no puedes votar.")
}
/*Operador ternario: Es una simplificación del condicional if/else, el cual se declara en una línea:
variable_resultado = condición ? resultado_si_verdadero : resultado_si_falso;*/
var edad = 18;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

/*TRUTHLY Y FALSY: Algunos valores por default dan como resultado verdadero o falso cuando se utilizan en 
operaciones lógicas, para comprobar su estado se puede utilizar un objeto Boolean.*/
//Ejemplos en los que Boolean devuelve Falso:
Boolean();          // = false.
Boolean(0);         // = false.
Boolean(null);      // = false.
Boolean(NaN);       // = false = Nan = Not a Number.
Boolean(undefined); // = false.
Boolean(false);     // = false.
Boolean("");        // = false.
//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1);             // = true = Para 1 o cualquier número diferente de cero (0).
Boolean("a");           // = true = Para cualquier caracter o espacio en blanco en el string.
Boolean([]);            // = true = Aunque el array esté vacío.
Boolean({});            // = true = Aunque el JSON esté vacío.
Boolean(function(){});  // = true = Cualquier función es verdadera también.
Boolean(true);          // = true.
/*CONDICIONAL SWITCH: Este se utiliza más que nada cuando se evalúan varias opciones a la vez, se basa 
primero en que la condición de su paréntesis sea true y luego se evalúa las opciones de ejecución.*/
var numerop = 1;
switch(numero){
    case 1:
        console.log("Soy un 1.");
        break;
    case 10:
        console.log("Soy un 10.");
        break;
    case 100:
        console.log("Soy un 100.");
        break;
    default:
        console.log("No soy nada importante.")
}