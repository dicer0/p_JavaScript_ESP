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
    /*Función con el callback declarado fuera del temporizador, por eso se ejecuta de forma "asíncrona".*/
    miCallback2();
}
console.log("\n2.0.-Iniciando proceso asíncrono que llama al callback fuera del temporizador....\n");
soyAsincrona2(2, function(){
    console.log("2.3.-'Terminando' el proceso asíncrono donde se movió de lugar el callback fuera del temporizador.\n");
});

/*Si ahora se quiere ejecutar una segunda copia de la misma función pasada pero sin ejecutar el callback dentro de 
la función, nunca se llegará a correr lo que hayta dentro de la función que se le pase como parámetro.*/
function soyAsincrona3(numfun3, miCallback3, mensaje){
    console.log("3.1.-Hola, soy una funcionalidad asíncrona cualquiera numero " + numfun3 + " con dos parámetros. " + mensaje);
    setTimeout(function(){
        console.log("3.2.-Funcionalidad retrasada con setTimeout numero " + numfun3 + ".");
        /*Función sin declarar el callback que recibe como parámetro.
        miCallback3();*/
    }, 1000);
}
console.log("\n3.0.-Iniciando proceso asíncrono que no llama al callback....\n");
soyAsincrona3(3, function(){
    console.log("3.3.-Terminando proceso asíncrono... donde nunca se declaró el callback.\n");
}, "Mensaje parámetro función asíncrona: Olis crayolis.");

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
    console.log("\n\n\n------------a.1.-Inicializando proceso correctamente ordenado con callbacks-----------")
    hola("di_cer0", function(nombreHeredado){
        /*En esta parte en vez de pasar el mismo parámetro dos veces, cuando hay un valor que se pasa de una 
        función a otra, se puede declarar que el callback de la primera función (la de mayor jerarquía), recibe 
        un parámetro y este a su vez se pasa a la segunda función asíncrona.*/
        //adios("di_cer0", function(){
        adios(nombreHeredado, function(){
            console.log("-------------a.2.-Terminando proceso correctamente ordenado con callbacks-------------")
        });
    });
}, 2000);


/*CALLBACK HELL: Si llegamos a abusar de los callbacks se puede enredar demasiado el código y leerlo o trabajarlo 
puede ser un verdadero infierno, además sin querer podemos terminar "harcodeandolo", lo que significa que ciertas 
acciones que deberían ser manejadas por una función adicional, están siendo ejecutadas de forma manual.*/
function saludoCallback_Hell(primerCallback_Hell){                          //Función asíncrona con callback hell.
    setTimeout(function(){                                                  //Temporizador.
        console.log("\t\t\t\tQue pedo callback hell 🔥");                     //Tarea a ejecutar de la función.
        primerCallback_Hell();                                              //Ejecución de callback.
    }, 1000);
}
function cuerpoCallback_Hell(callbackHell_Intermedio){                      //Función asíncrona con callback hell.
    setTimeout(function(){                                                  //Temporizador.
        console.log("\t\t\t🔥🔥🔥🔥🔥 Infierno desatadooo 🔥🔥🔥🔥🔥");   //Tarea a ejecutar de la función.
        callbackHell_Intermedio();                                          //Ejecución de callback.
    }, 1000);
}
function despedidaCallback_Hell(ultimoCallback_Hell){                       //Función asíncrona con callback.
    setTimeout(function(){                                                  //Temporizador.
        console.log("\t\t\t\t🔥 Bye callback hell 🔥🔥");                     //Tarea a ejecutar de la función.
        ultimoCallback_Hell();                                              //Ejecución de callback.
    }, 1000);
}
//Proceso correctamente ordenado con callbacks, se usa un temporizador debido a la ejecución del ejemplo previo.
setTimeout(function(){
    console.log("\n\n\n^^^^^^^^^^^^^^^^^^^^b.1.-Inicializando proceso de CALLBACK HELL 🔥^^^^^^^^^^^^^^^^^^^^")
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
                            console.log("^^^^^^^^^^^^^^^^^^^^^^b.2.-Terminando proceso de CALLBACK HELL 🔥^^^^^^^^^^^^^^^^^^^^^")
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
    console.log("\n\n\n~~~~~~~~~~~~~~~~c.1.-Inicializando proceso correcto de CALLBACK HELL 🔥~~~~~~~~~~~~~~~")
    saludoCallback_Hell(function(){
        /*Por medio de la función recursiva se puede evitar la creación de callback hells.*/
        solucionCallback_Hell(1, function(){
            console.log("~~~~~~~~~~~~~~~~~~~c.2.-Terminando correctamente el CALLBACK HELL 🔥~~~~~~~~~~~~~~~~~~")
        })
    });
}, 12000);






//GESTIÓN DE EXCEPCIONES EN FUNCIONES ASÍNCRONAS:
/*PROMESAS: Las promesas son una alternativa a los callbacks para gestionar funciones asíncronas en Node.js cuando 
pueda existir un error durante su ejecución, ya que a diferencia de los callbacks, estas se basan en estados para 
indicar si una tarea se ha completado o ha fallado porque ocurrió un error, para ello hacen uso de la instrucción 
return y de la clase Promise, que recibe un callback con dos parámetros:
    - resolve: Este parámetro del callback que recibe la promesa como parámetro se utiliza cuando la tarea ha sido 
      completada exitosamente sin excepciones (errores).
    - reject: Este parámetro del callback que recibe la promesa como parámetro se utiliza cuando la tarea ha sido 
      rechazada porque ha ocurrido una excepción.
A continuación se utilizará una misma función que se realizó con callbacks pero ahora con promesas:*/
function holaPromise(nombre, parametro_exito){                          //Función asíncrona con manejo de errores.
    return new Promise(function(resolve, reject){                       //Sintaxis de promesa.
        setTimeout(function(){                                          //Temporizador.
            if(parametro_exito == true){                                //Condicional que avalúa si hubo errores.
                console.log("\t\t\tHola\t" + nombre);                   //Tarea a ejecutar de la función.
                resolve(nombre);                                        //resolve = Resultado de promesa sin errores.
            } else{
                console.log("\t\t\tHouston, empezamos con problemas...");//Tarea de la función si hubo excepciones.
                reject(nombre);                                         //reject = Resultado de promesa con errores.
            }
        }, 1000);
    });
}
function hablarPromise(nombre){                                         //Función asíncrona con manejo de errores.
    return new Promise(function(resolve, reject){                       //Sintaxis de promesa.
        setTimeout(function(){                                          //Temporizador.
            //El condicional que avalúa si hubo errores no debe existir en todas las promesas, solo donde sirva.
            console.log("\t\t\t\tBla, bla, bla, bla...");                 //Tarea a ejecutar de la función.
            resolve(nombre);                                            //resolve = Resultado de promesa sin errores.
        }, 1000);
    });
}
function adiosPromise(nombreHeredado){                                  //Función asíncrona con manejo de errores.
    /*Para describir las acciones de las promesas se pueden utilizar arrow functions, que funcionan exactamente 
    igual a las funciones normales, pero con una sintaxis más sencilla:
    -Función normal:
        function nombreFuncion(){
            //Contenido función.
        }
    -Arrow Function o función anónima:
        () => {
            //Contenido función.
        }
    En las reglas ECMA6 esta es la sintaxis predeterminada para promesas.*/
    return new Promise((resolve, reject) => {                           //Sintaxis de promesa.
        setTimeout(function(){                                          //Temporizador.
            console.log("\t\t\tAdiós\t" + nombreHeredado);              //Tarea a ejecutar de la función.
            resolve(nombreHeredado);                                    //resolve = Resultado de promesa sin errores.
        }, 1000);
    });
}
/*Proceso hecho con promises para el manejo de excepciones, se usa un temporizador debido a la ejecución de los 
ejemplos previos.*/
setTimeout(function(){
    console.log("\n\n\n------d.1.-Inicializando proceso con manejo de excepciones por medio de promesas------");
    /*Cabe mencionar que los callbacks y promesas solo pueden devolver un único valor al resolverse o detectar una 
    excepción. Sin embargo, se cuenta con la opción de crear un objeto que contenga múltiples valores como resultado 
    de la promesa o callback, pero esto no siempre funciona.*/
    holaPromise("di_cer0 = Diego Cervantes", true)  //Se le pasa como parámetro a la función si hay errores o no.
        .then(hablarPromise)
        .then(hablarPromise)
        .then(adiosPromise)
        .then(function(){
            console.log("------d.2.-Terminando proceso sin excepciones detectadas por medio de promesas--------");
        })
        .catch(function(){
            console.error("--d.2.-Ocurrió un error en el proceso con manejo de excepciones por medio de promesas-");
        });
}, 16000);






//GESTIÓN DE EXCEPCIONES EN FUNCIONES ASÍNCRONAS:
/*Async Await: Es una forma de forzar que algunas de mis funciones funcionen de forma síncrona una tras la otra, 
esto se utiliza más que nada cuando una operación no se puede realizar sin antes haber acabado otra. Aunque en 
realidad la instrucción Async/Await no convierte literalmente la función en síncrona, simplemente hace que esta 
retorne una promesa. Esto significa que dentro de una función marcada como async, se puede usar la palabra clave 
await para esperar la resolución de una promesa, logrando así que una función asíncrona funcione como síncrona 
y a nivel técnico cabe mencionar que esto no bloqueará la ejecución del hilo principal (monohilo).
Para aplicar la sintaxis de async/await se siguen los siguientes pasos: 
    - Antes de declarar las promesas que se quiera volver síncronas, se utiliza la palabra reservada async.
    - Luego cuando la quiera utilizar debo crear otra función asíncrona que ejecute todas mis funciones asíncronas.
    - Dentro de esa última función asíncrona declaro a través de la instrucción await todas las funciones async en 
      el órden que quiera que se ejecuten.
    - Finalmente utilizo la función asíncrona donde se estén ejecutando las demás, logrando que se corran en ese 
      órden específico como si fueran síncronas.
A continuación, se demuestra el uso de las funciones async/await con un ejemplo:*/
async function holaPromiseAsyncAwait(nombre, parametro_exito){          //Función "síncrona" (async/await).
    return new Promise(function(resolve, reject){                       //Sintaxis de promesa.
        setTimeout(function(){                                          //Temporizador.
            if(parametro_exito == true){                                //Condicional que avalúa si hubo errores.
                console.log("\t\t\tHola\t" + nombre);                   //Tarea a ejecutar de la función.
                resolve(nombre);                                        //resolve = Resultado de promesa sin errores.
            } else{
                console.log("\t\t\tHouston, empezamos con problemas...");//Tarea de la función si hubo excepciones.
                reject(nombre);                                         //reject = Resultado de promesa con errores.
            }
        }, 1000);
    });
}
async function hablarPromiseAsyncAwait(nombre){                         //Función "síncrona" (async/await).
    return new Promise(function(resolve, reject){                       //Sintaxis de promesa.
        setTimeout(function(){                                          //Temporizador.
            //El condicional que avalúa si hubo errores no debe existir en todas las promesas, solo donde sirva.
            console.log("\t\t\t\tBla, bla, bla, bla...");                 //Tarea a ejecutar de la función.
            resolve(nombre);                                            //resolve = Resultado de promesa sin errores.
        }, 1000);
    });
}
async function adiosPromiseAsyncAwait(nombreHeredado){                  //Función "síncrona" (async/await).
    return new Promise((resolve, reject) => {                           //Sintaxis de promesa.
        setTimeout(function(){                                          //Temporizador.
            console.log("\t\t\tAdiós\t" + nombreHeredado);              //Tarea a ejecutar de la función.
            resolve(nombreHeredado);                                    //resolve = Resultado de promesa sin errores.
        }, 1000);
    });
}
/*Proceso hecho con async/await promises para forzar que funciones asíncronas funcionen como síncronas, siguiendo 
cierto órden, se usa un temporizador setTimeout() debido a la ejecución de los ejemplos previos.*/
setTimeout(function(){
    //Función asíncrona que ejecutará todas mis otras funciones async.
    async function ejecutarAsync(){
        /*Dentro de la función asíncrona que ejecuta las demás declaro a través de la instrucción await el órden en 
        el que quiera que se ejecuten.
        Cabe mencionar que cuando se devuelve un reject en la promesa dentro de una función async/await, se genera 
        una excepción que se propaga al código y lo crashea, por lo cual, si se busca que ese error sea manejado, se 
        debe crear una estructura de try/catch en la función async que ejecuta todas las funciones async para que ese 
        error sea manejado.*/
        try{
            /*Dentro del try es donde se colocará el órden de la ejecución del código si todo sale bien, osea cuando 
            la promesa devuelva el resultado de resolve. 
            Además, es importante saber que lo que devuelve la promesa se puede almacenar en una variable, manejando 
            así de forma más clara los parámetros que se comparten entre funciones, en vez de estar adivinando como 
            se hacía ese intercambio con los callbacks y promesas, donde ese proceso es medio rebuscado.*/
            let nombreAsyncAwait = await holaPromiseAsyncAwait("di_cer0 = MechaGod", true);
            await hablarPromiseAsyncAwait();
            /*Si por alguna razón queremos que una de estas funciones se ejecute en paralelo a la ejecución 
            secuencial de las demás, simplemente no le añadimos la instrucción await, pero lo que si hará es respetar
            el órden indicado aquí, en este caso, el segundo hablar, se ejecutará al mismo tiempo que el tercero por 
            la posición en el código donde se encuentra esta instrucción sin await.*/
            hablarPromiseAsyncAwait();          
            await hablarPromiseAsyncAwait();
            await adiosPromiseAsyncAwait(nombreAsyncAwait);
            console.log("-------e.3.-Terminando proceso sin excepciones detectadas por medio de promesas-------");
        }catch (error){
            //Dentro del catch es donde se manejará la excepción cuando la promesa devuelva un reject.
            console.error("Ocurrió un error debido al estado de la bandera al llamar la función: ", error);
        }
        
    }

    console.log("\n\n\n------e.1.-Inicializando proceso con funciones async/await por medio de promesas------");
    ejecutarAsync();
    console.log("---------e.2.-Tarea asíncrona cualquiera para demostrar el órden de ejecución---------");
}, 21000);