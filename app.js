//1----------------------------------------------------------------------------------------------------------------------
  function sumaTodosImpares(array00) {
    // La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
    // y debe devolver la suma total entre todos los numeros impares.
    // ej:
    // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15
  
    // Tu código aca:

    let suma = 0;
    
    for (let i = 0; i<array00.length; i++) {
        if (array00[i] % 2 !=0) {
            suma += array00[i];
        }
    }
    return suma;
    }
    
    let array00 = [1, 5, 2, 9, 6, 4];
    console.log(sumaTodosImpares(array00));
  
//2-----------------------------------------------------------------------------------------------------------------------
  function stringMasLarga(str) {
    // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
    // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
    // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
    // Tip: podes usar el metodo de String 'split'
  
    // Tu código aca:

    let palabra = str.split(" ");
    let stringMasLarga = " ";

    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i].length > stringMasLarga.length) {
        stringMasLarga = palabra[i]
      }
    }
    return stringMasLarga;
    }
    let str = "probando el codigo"
    console.log(stringMasLarga(str))
  
//3-----------------------------------------------------------------------------------------------------------------------
  function estaOffline(usuarios, nombre) {
    // La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
    // cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
    // La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
    // ej:
    // var usuarios = [
    //     {
    //       nombre: 'toni',
    //       online: true
    //     },
    //     {
    //       nombre: 'emi',
    //       online: true
    //     },
    //     {
    //       nombre: 'agus',
    //       online: false
    //     }
    // ];
    // estaOffline(usuarios, 'agus') retorna true
    // estaOffline(usuarios, 'emi') retorna false
    // Tu código aca:

    for (let i = 0; i <usuarios.length; i++) {
      if (usuarios[i].nombre === nombre) {
        return !usuarios[i].online;
      }
      }
      return false;
    }
  
    let usuarios = [
      {
        nombre: 'toni',
        online: true
      },
      {
        nombre: 'emi',
        online: true
      },
      {
        nombre: 'agus',
        online: false
      }
    ];

  console.log(estaOffline(usuarios, 'agus'));
  console.log(estaOffline(usuarios, 'emi'));
  
//4-----------------------------------------------------------------------------------------------------------------------
    function actividadesEnComun(persona1, persona2) {
    // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
    // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
    // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
    //     persona2 = ['comer', 'dormir', 'futbol']
    // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
    // Tip: podes usar ciclos for anidados.
    // Tu código aca:

      let actividadEnComun = [];
      for (i=0; i<persona1.length;i++) {
        for (x=0; x<persona2.length;x++) {
          if (persona1[i]===persona2[x]) {
            actividadEnComun.push(persona1[i])
          }
        }
      }
      return actividadEnComun;
    }

    let persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];
    let persona2 = ['comer', 'dormir', 'futbol'];

    console.log(actividadesEnComun(persona1,persona2))
  
//5-----------------------------------------------------------------------------------------------------------------------
  function buscaDestruye(arreglo, num) {
    // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
    // Esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
    // La función debe retornar el array sin los números sacados.
    // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
    // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
    // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
    //
    // Tu código aca:

   for (i=0; i<arreglo.length;i++) {
    if (arreglo[i]===num) {
      arreglo.splice(i,1);
    }
    }
    return arreglo;
    }
    let arreglo = [1, 2, 3, 4, 1];
    let num = 1;
    console.log(buscaDestruye(arreglo,num))

//6-----------------------------------------------------------------------------------------------------------------------
  function sumaDeArrays(array) {
      // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
      // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
      // Sumando los elementos de cada array que contenga dos elementos,
      // y devolviendo la suma del mismo
      // OJO: Si el elemento dentro del array que ingresa por prop, 
      //ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
      //let a = [[5, 5], 4, [10, 15], [25, 10]]. 
    
    let nuevoArray = [];
    let suma = 0;

    for (i=0; i<array.length;i++) {
      if (array[i].length>0) {
        suma=0;
          for (x=0;x<array[i].length;x++) {
            suma+=array[i][x];
          }
      } else {
        suma=array[i];
      }
      nuevoArray.push(suma);
    }
      return nuevoArray
  };

  let array = [[5, 5], 4, [10, 15], [25, 10]];
  console.log(sumaDeArrays(array));

//7-----------------------------------------------------------------------------------------------------------------------
  function mismoValorMismosElementos(numero, divisor) {
      // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
      // Todos los elementos deben tener el mismo valor
      // OJO: Si el resultado de la division no es un entero, deben devolver false
  
    let total = numero/divisor;
    let array = [];

    if (numero%divisor==0){
      for(i=0; i<divisor;i++){
        array.push(total);
      }
    } else {
        array=false;
    }
      return array;
    };

    console.log(mismoValorMismosElementos(8,3)); 
  
//8-----------------------------------------------------------------------------------------------------------------------
  function map(array0, cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    //Tu código: (Consulté a un compañero)

    let nuevoArray = [];
    for (let i=0; i<array0.length; i++) {
      nuevoArray.push(cb(array0[i]));
    }
    return nuevoArray;
  };

  let array0 = [2, 1, 5, 7, 8, 9,];
  let uno = x => x+1;

  console.log(map(array0,uno));
  
//9-----------------------------------------------------------------------------------------------------------------------
  function filter(array1) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
    let nuevoArray1 = array1.filter(palabra => palabra[0] == "a");
    return nuevoArray1
    };

    let array1 = ["amanece", "fuego", "asoma", "sol", "amor"];
    console.log(filter(array1));

//10-----------------------------------------------------------------------------------------------------------------------
  function sumarElTipo(arreglo1) {
    // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento que contiene tipos de vehiculos
    // y debe devolver un objeto con la cantidad de veces que se repita cada tipo.
    // El objeto que devuelve tiene como propiedades el nombre de cada vehiculo y su valor es la cantidad de veces que se repite.
    // Ej:
    // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
    // Tip: podes usar el ciclo for o el metodo de Array 'reduce'
    // Tu código aca: 
   
    let contador = {};
    arreglo1.forEach(vehiculo => (contador[vehiculo] = contador[vehiculo] + 1 || 1));
    return contador;
    };

    let arreglo1 = ["auto", "moto", "auto", "bicicleta"];
    console.log(sumarElTipo(arreglo1))
  
//11--------------------------------------------------------------------------------------------------------------------
    function crearGato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código: 
      let gato = {
        nombre: nombre,
        edad: edad,
        meow: function () {
          return "Meow!";
        }
      };
      return gato;
      }
      
      var miGato = crearGato('Ñoqui', 4);
      console.log(miGato);
  
//12-----------------------------------------------------------------------------------------------------------------------
  function agregarPropiedad(objeto, property) {
    // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
    // Devuelve el objeto 
    // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
    // Tu código: 
    //objeto ["property"]= "null";  
     objeto.property = property;
     return objeto;
  }
  let objeto = {};
  console.log(agregarPropiedad(objeto,null)); 

//13-----------------------------------------------------------------------------------------------------------------------
  function invocarMetodo(objeto1, metodo) {
    // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
    // Invoca ese método
    // Nada necesita ser devuelto ("returned")
    // Tu código: (No encuentro info para comprender mejor lo solicitado)
  }
  
//14-----------------------------------------------------------------------------------------------------------------------
  function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
    // Multiplica el numeroMisterioso por 5 y devuelve el producto
    // Tu código:
   let total = objetoMisterioso.numeroMisterioso*5;
   return total
  }
  let objetoMisterioso={
    numeroMisterioso:8
  }
  console.log(multiplicarNumeroDesconocidoPorCinco(objetoMisterioso));

//15-----------------------------------------------------------------------------------------------------------------------
  function eliminarPropiedad(objeto2, unaPropiedad) {
    // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
    // tip: tenes que usar bracket notation = Notacion de corchetes. 
    // Devuelve el objeto 
    // Tu código: (Consulté)
   delete objeto2 [unaPropiedad];
  }
  let objeto2 ={
    propiedad:null
  }
  console.log(objeto)
  eliminarPropiedad(objeto,"propiedad");
  console.log(objeto)

//16-----------------------------------------------------------------------------------------------------------------------
  function nuevoUsuario(nombre1, email, password) {
    // Crea un nuevo objeto con las propiedades coincidiendo con los 
    // argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
  let objetoUsuario = {
    nombre1: nombre1,
    email:email,
    password:password
  }
  return objetoUsuario
  };
   let nombre1 = "Marina";
   let email = "suarezmarina.e@gmail.com";
   let password= "clave123";

   console.log(nuevoUsuario(nombre1, email, password));

//17-----------------------------------------------------------------------------------------------------------------------
  function tieneEmail(usuario0) {
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código
    if (usuario0.email === "") {
      return false
    } else {
      return true
    }
  };

  let usuario0 = {
    nombre: "Marina",
    email: "marina@gmail.com"
  }; 
  
  console.log(tieneEmail(usuario0))
  
//18----------------------------------------------------------------------------------------------------------------
  function tienePropiedad(objeto3, propiedad) {
    // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) 
    //cuyo nombre es igual al valor del argumento "propiedad"
    // "propiedad" es un string
    // De lo contrario, devuelve "false"
    // Tu código: (consulté)
   if (objeto3.hasOwnProperty(propiedad)){
    return true
   }else{
    return false
   }
  }
  let objeto3 ={
    nombre: "Marina"
  }
  console.log(tienePropiedad(objeto3,"nombre"));
  
//19----------------------------------------------------------------------------------------------------------------
  function verificarPassword(usuario00, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código: 
    if (usuario00.password === password) {
      return true
    } else {
      return false
    }
  }
  let usuario00 = {
    usuario: "Marina",
    password: "clave123"
  }
console.log(verificarPassword(usuario00,"clave12"))

//20----------------------------------------------------------------------------------------------------------------
  function actualizarPassword(usuario01, nuevaPassword) {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    // Tu código:
   usuario01.password=nuevaPassword;
   return usuario01
   }
   let usuario01={
     usuario: "Marina",
     password:"clave123"
   }
   let nuevaPassword = "clave23";

   console.log(actualizarPassword(usuario01,nuevaPassword));

//21----------------------------------------------------------------------------------------------------------------
  function agregarAmigo(usuario1, nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código: 
    usuario1.amigos.push(nuevoAmigo);
    return usuario1;
  }
  let usuario1 = {
    amigos: []
  }
  let nuevoAmigo="Tomi";

  console.log(agregarAmigo(usuario1,nuevoAmigo));

//22----------------------------------------------------------------------------------------------------------------
  function pasarUsuarioAPremium(usuarios1) {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el  array de usuarios
    // Tu código: 
    for (i in usuarios1){
      usuarios1[i].esPremium=true;
    }
    return usuarios1
  }

  let usuarios1 = [
    usuario0 = {
      esPremium: ""
    },
    usuario1 = {
      esPremium: ""
    },
    usuario2 = {
      esPremium: ""
    }
  ];
  
  console.log(pasarUsuarioAPremium(usuarios1))

//23----------------------------------------------------------------------------------------------------------------
  function sumarLikesDeUsuario(usuario02) {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código: 
    let totalLikes = 0;

    for (let i=0; i<usuario02.posts.length; i++){
      totalLikes += usuario02.posts[i].likes;
    }
  };

  let usuario02 = {
     posts:[{
       likes: 50
     }],
     posts:[{
       likes: 85
     }],
     posts:[{
       likes: 73
     }]
    }

 console.log(sumarLikesDeUsuario(usuario02)); //Me da undefined

//24----------------------------------------------------------------------------------------------------------------
//Funcion precio descuento
  function calcularPrecioDescuento(producto){
    let resultado = producto.precio - (producto.precio*producto.porcentajeDeDescuento);
    return resultado
  }

  function agregarMetodoCalculoDescuento(producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código: 
    producto = calcularPrecioDescuento(producto)
    return producto
  }
  let producto = {
    precio: 20,
    porcentajeDeDescuento: 0.2
  }
  console.log(agregarMetodoCalculoDescuento(producto));

//25-------------------------------------------------------------------------------------------------------------------------
  //-------------------------------------------Interacción con el DOM--------------------------------------------------------
  // En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
  // Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
  // agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
  // Tu código acá: 

    let createdBy = document.querySelector("#createdBy");
    createdBy.innerHTML+="Marina Suárez"

//26-----------------------------------------------------------------------------------------------------------------------
  // La función debe realizar lo siguiente:
  //    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
  //    2) Asignarle a 'toDoShell' la clase 'toDoShell'
  //    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
  //    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
  //       asignándole el valor de la propiedad 'description' del objeto ToDo.
  //    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
  //    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
  //          - Si es true: asignarle a 'toDoText' la clase 'completeText'
  //          - Si es false: no asignarle ninguna clase
  //    7) Agregar 'toDoText' como hijo de 'toDoShell'
  //    8) Devolver la variable toDoShell

  function buildToDo(todo, index) { //todo es un objeto de la clase TODO. //index numerico 
    // Tu código acá:
    let toDoShell = document.createElement('div');
      toDoShell.classList.add("toDoShell");
    // Consigna 3
    let toDoText = document.createElement('span');
    // Consigna 4
    toDoText.innerHTML = todo.description;
    // Consigna 5
    toDoText.id = index;
    // Consigna 6
    if (todo.complete) {
      toDoText.classList.add("completeText");
    }
    // Consigna 7
    toDoShell.appendChild(toDoText);
    // Consigna 8
    return toDoShell;
  }
  let todo = {
    description:"descripción",
    complete: true
  }
  let index = 24;

  console.log(buildToDo(todo, index));

//27-----------------------------------------------------------------------------------------------------------------------
  // La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
  //  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
  //  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
  //  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
  //  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregando cada elemento a 'toDoContainer'
  //  5) Al final de este archivo, escribe una línea para hacer el llamado a esta funcion (displayToDos)
  //  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página
  
  // function builToDos(toDoItems){
  //   toDoItems = [1,2,3,4,5,6];
  //   return toDoItems;
  // };
  
  function displayToDos() {
  // // Tu código acá:
  // //Paso 1;
  // let toDoContainer = document.getElementById('toDoContainer'); 
  // // Paso 2:
  // toDoContainer.innerHTML = ""; 
  // // Paso 3;
  // let toDos = builToDos(toDoItems);
  // //Paso 4; 
  // for (i=0; i<toDos.length; i++){
  //   toDoContainer.appendChild(toDos[i]);
  // }
  };
  //displayToDos()
//Me perdí..