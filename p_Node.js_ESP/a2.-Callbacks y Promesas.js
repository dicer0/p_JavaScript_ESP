/*CALLBACKS: Se le llama callback a cualquier función que se utilice como parámetro de otra y que además se utilice 
dentro de ella. Hemos estado utilizando callbacks sin saberlo, ya que el método setInterval() recibe como parámetro 
una función anónima que ejecuta repetidamente. 
La gran funcionalidad de los callbacks es que ayudan a organizar la ejecución de tareas en un programa que trabaja 
de forma asíncrona (gestión de funciones asíncronas).*/

/*GESTIÓN DE FUNCIONES ASÍNCRONAS: Esto se refiere a elegir el flujo de ejecución de un programa en Node.js, el cual 
por default siempre se ejecuta de forma asíncrona (todo al mismo tiempo), pero ¿que pasa si queremos que una parte 
del código se ejecute primero o después que otra? Para eso sirve la gestión de funciones asíncronas y los callbacks.
Para colocar un callback en una función solamente se debe indicar su nombre en el parámetro y posteriormente 
ejecutarlo dentro de la misma función.*/
function soyAsincrona1(miCallback1){
    /*Todas las tareas que contenga una función de Node.js cualquiera se ejecutarán de forma asíncrona, osea todas 
    al mismo tiempo sin ningún órden. Aunque existen métodos como setTimeout() que sirven demorar la ejecución de 
    una acción, esto no controlará al 100% el flujo de ejecución, solo le colocará un temporizador. Para ello es 
    que se utiliza una herramienta de JavaScript llamada callback.*/
    console.log("1.1.-Hola, soy una funcionalidad asíncrona cualquiera");
    /*setTimeout(): Método que en Node.js se utiliza para ejecutar una función después de un tiempo de espera dado 
    en milisegundos. Es similar al método setInterval(), pero en lugar de ejecutar la función repetidamente, 
    setTimeout() ejecuta la función solo una vez después de que haya transcurrido el tiempo especificado.*/
    setTimeout(function(){
        console.log("1.2.-Funcionalidad retrasada con setTimeout.");
        /*La funcionalidad del programa termina hasta este punto, cuando llegue aquí lo que pasará es que 
        ejecutará la función que se declare como parámetro de la función soyAsincrona().*/
        miCallback1();
    }, 1000);
}
console.log("\n1.0.-Iniciando proceso asíncrono....\n");
soyAsincrona1(function(){
    /*Lo que se describa dentro de la función que se pase como parámetro de la función asíncrona es el cuerpo del 
    callback, el cual se ejecutará hasta la línea de código que dice el mismo nombre del callback.*/
    console.log("1.3.-Terminando proceso asíncrono... Ejecución del callback, es la unica que en verdad acaba.\n\n");
});

/*Si ahora se quiere ejecutar una tercera copia de la misma función pasada pero moviendo de lugar la ejecución del 
callback dentro de la función, se observará un flujo de ejecución diferente al de la primera función.*/
//Cabe mencionar que cuando se utilizan callbacks también se pueden usar otros parámetros en la función.
function soyAsincrona2(numfun2, miCallback2){
    console.log("2.1.-Hola, soy una funcionalidad asíncrona cualquiera numero " + numfun2);
    setTimeout(function(){
        console.log("2.2.-Funcionalidad retrasada con setTimeout numero " + numfun2 + ".");
    }, 1000);
    /*Función con el callback declarado en un lugar distinto al */
    miCallback2();
}
console.log("\n2.0.-Iniciando proceso asíncrono que no llama al callback....\n");
soyAsincrona2(2, function(){
    console.log("2.3.-'Terminando' el proceso asíncrono donde se movió de lugar el callback fuera del temporizador.\n");
});

/*Si ahora se quiere ejecutar una segunda copia de la misma función pasada pero sin ejecutar el callback dentro de 
la función, nunca se llegará a correr lo que hayta dentro de la función que se le pase como parámetro.*/
function soyAsincrona3(numfun3, miCallback3, mensaje){
    console.log("3.1.-Hola, soy una funcionalidad asíncrona cualquiera numero " + numfun3 + " con dos parámetros. " + mensaje);
    setTimeout(function(){
        console.log("3.2.-Funcionalidad retrasada con setTimeout numero " + numfun3 + ".");
        /*Función sin declarar el callback que recibe como parámetro
        miCallback2();*/
    }, 1000);
}
console.log("\n3.0.-Iniciando proceso asíncrono que no llama al callback....\n");
soyAsincrona3(3, function(){
    console.log("3.3.-Terminando proceso asíncrono... donde nunca se declaró el callback.\n");
}, "Mensaje externo: Olis crayolis.");

/*Ejemplo callbacks: Ahora crearemos una función con callback que llame a otra función con callback para así ordenar 
correctamente el flujo de ejecución de un programa.*/
function hola(nombre, primerCallback){                      //Primera función asíncrona con callback.
    setTimeout(function(){                                  //Temporizador.
        console.log("\t\t\t\tHola\t" + nombre);             //Tarea a ejecutar de la función.
        /*El callback que se ejecuta primero puede recibir un parámetro cuando se sabe que este será pasado a la 
        segunda función asíncrona, y como este es el caso, se puede hacer esto.*/
        primerCallback(nombre);                             //Ejecución callback, este puede recibir un parámetro.
    }, 1000);
}
function adios(nombreHeredado, ultimoCallback){             //Última función asíncrona con callback.
    setTimeout(function(){                                  //Temporizador.
        console.log("\t\t\t\tAdiós\t" + nombreHeredado);    //Tarea a ejecutar de la función.
        ultimoCallback();                                   //Ejecución callback.
    }, 1000);
}
//Proceso correctamente ordenado con callbacks, se usa un temporizador debido a la ejecución del ejemplo previo.
setTimeout(function(){
    console.log("\n\n\n------a.1.-Inicializando proceso correctamente ordenado con callbacks------")
    hola("di_cer0", function(nombreRepetido){
        /*En esta parte en vez de pasar el mismo parámetro dos veces, cuando hay un valor que se pasa de una 
        función a otra, se puede declarar que el callback de la primera función (la de mayor jerarquía), recibe 
        un parámetro y este a su vez se pasa a la segunda función asíncrona.*/
        //adios("di_cer0", function(){
        adios(nombreRepetido, function(){
            console.log("------a.2.-Terminando proceso correctamente ordenado con callbacks---------")
        });
    });
}, 2000);


/*CALLBACK HELL: Si llegamos a abusar de los callbacks se puede enredar demasiado el código y leerlo o trabajarlo 
puede ser un verdadero infierno, además sin querer podemos terminar "harcodeandolo", lo que significa que ciertas 
acciones que deberían ser manejadas por una función adicional, están siendo ejecutadas de forma manual.*/
function saludoCallback_Hell(primerCallback_Hell){                          //Función asíncrona con callback hell.
    setTimeout(function(){                                                  //Temporizador.
        console.log("\t\t\tQue pedo callback hell 🔥");                     //Tarea a ejecutar de la función.
        primerCallback_Hell();                                              //Ejecución de callback.
    }, 1000);
}
function cuerpoCallback_Hell(callbackHell_Intermedio){                      //Función asíncrona con callback hell.
    setTimeout(function(){                                                  //Temporizador.
        console.log("\t\t🔥🔥🔥🔥🔥 Infierno desatadooo 🔥🔥🔥🔥🔥");   //Tarea a ejecutar de la función.
        callbackHell_Intermedio();                                          //Ejecución de callback.
    }, 1000);
}
function despedidaCallback_Hell(ultimoCallback_Hell){                       //Función asíncrona con callback.
    setTimeout(function(){                                                  //Temporizador.
        console.log("\t\t\t🔥 Bye callback hell 🔥🔥");                     //Tarea a ejecutar de la función.
        ultimoCallback_Hell();                                              //Ejecución de callback.
    }, 1000);
}
//Proceso correctamente ordenado con callbacks, se usa un temporizador debido a la ejecución del ejemplo previo.
setTimeout(function(){
    console.log("\n\n\n^^^^^^^^^^^^^^^b.1.-Inicializando proceso de CALLBACK HELL 🔥^^^^^^^^^^^^^^")
    saludoCallback_Hell(function(){
        /*Ejecutar 3 veces la misma función de forma manual es harcodear el código y eso está mal hecho, causando
        así que se cree el callback hell.*/
        cuerpoCallback_Hell(function(){
            cuerpoCallback_Hell(function(){
                cuerpoCallback_Hell(function(){
                    cuerpoCallback_Hell(function(){
                        /*Estas 4 últimas ejecuciones de forma manual de la misma función asíncrona es un ejemplo de 
                        callback hell, para solucionarlo se debe crear una función adicional que maneje el número de 
                        veces que queremos que se ejecute esta función.*/
                        despedidaCallback_Hell(function(){
                            console.log("^^^^^^^^^^^^^^^^b.2.-Terminando proceso de CALLBACK HELL 🔥^^^^^^^^^^^^^^^^")
                        });
                    });
                });
            });
        });
    });
}, 5000);

/*SOLUCIÓN DE CALLBACK HELL: Cuando veamos que un código está ocasionando un callback hell, aunque este funcione, lo 
que se debe hacer es crear una función intermedia que maneje el número de ejecuciones de dicha función, si es que 
esta se utiliza más veces dentro de un callback, ya que esto podría ocasionar problemas si se busca escalar el 
proyecto; hacer su ejecución manualmente como se vió en este ejemplo no es de buenas prácticas y se debe evitar.*/
function solucionCallback_Hell(vecesEjecucion, callbackHell_Solucion){
    /*Función recursiva: Es común que incluyan un condicional para definir un caso base y a través de él se 
    realizen llamadas repetitivas a la misma función para cumplir una tarea hasta que su condición se deje de 
    cumplir a través de un contador, creando así un tipo de bucle for pero con condicionales if/else.*/
    if(vecesEjecucion > 0){
        cuerpoCallback_Hell(function(){
            //Recursividad: Este fenómeno ocurre cuando una función se define en términos de sí misma.
            solucionCallback_Hell(vecesEjecucion = vecesEjecucion - 1, callbackHell_Solucion);
        });
    }else{
        despedidaCallback_Hell(callbackHell_Solucion);
    }
}
//Ejecución de la solución del callback hell.
setTimeout(function(){
    console.log("\n\n\n~~~~~~~~~~c.1.-Inicializando proceso correcto de CALLBACK HELL 🔥~~~~~~~~~~")
    saludoCallback_Hell(function(){
        /*Por medio de la función recursiva se puede evitar la creación de callback hells.*/
        solucionCallback_Hell(2, function(){
            console.log("~~~~~~~~~~~~~c.2.-Terminando correctamente el CALLBACK HELL 🔥~~~~~~~~~~~~~")
        })
    });
}, 12000);






//PROMESAS