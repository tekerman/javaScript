// Esto es un comentario

/*
Esto es un comentario
de varias líneas.
*/
//var
var nombreDeLaVariable;
var carName = "Volvo";

//let se puede reacignar el valor de una varieble
function foo() {
    let i = 0;
    if(true) {
        i = 1;
     }
}
// no se puede reacignar
     const i = 0;
// undefined
     console.assert( typeof undefined === 'undefined' );
     console.assert( undefined instanceof Object === false );
     console.assert( Object.prototype.toString.call(undefined) === '[object Undefined]' );
// null
var testNull = null;
console.assert( typeof testNull === 'object' );
console.assert( testNull instanceof Object === false );
console.assert( Object.prototype.toString.call(testNull) === '[object Null]' );

//
var mySymbol = Symbol();
console.assert( typeof mySymbol === 'symbol' );
console.assert( mySymbol instanceof Object === false );
console.assert( Object.prototype.toString.call(mySymbol) === '[object Symbol]' );
console.assert( mySymbol.constructor.name === 'Symbol' );

	
// Primitive boolean
var testBoolean = true;
console.assert( typeof testBoolean === 'boolean' );
console.assert( testBoolean instanceof Object === false );
console.assert( testBoolean instanceof Boolean === false );
console.assert( Object.prototype.toString.call(testBoolean) === '[object Boolean]' );
console.assert( testBoolean.constructor.name === 'Boolean' );
 
// Object Boolean
var testBooleanObject = new Boolean(true);
console.assert( typeof testBooleanObject === 'object' );
console.assert( testBooleanObject instanceof Object === true );
console.assert( testBooleanObject instanceof Boolean === true );
console.assert( Object.prototype.toString.call(testBooleanObject) === '[object Boolean]' );
console.assert( testBooleanObject.constructor.name === 'Boolean' );
 
// Primitive type number
var testNumber = 10;
console.assert( typeof testNumber === 'number' );
console.assert( testNumber instanceof Object === false );
console.assert( testNumber instanceof Number === false );
console.assert( Object.prototype.toString.call(testNumber) === '[object Number]' );
console.assert( testNumber.constructor.name === 'Number' );
 
// Object Number
var testNumberObject = new Number(10);
console.assert( typeof testNumberObject === 'object' );
console.assert( testNumberObject instanceof Object === true );
console.assert( testNumberObject instanceof Number === true );
console.assert( Object.prototype.toString.call(testNumberObject) === '[object Number]' );
console.assert( testNumberObject.constructor.name === 'Number' );
 
// Primitive type string
var testString = 'text';
console.assert( typeof testString === 'string' );
console.assert( testString instanceof Object === false );
console.assert( testString instanceof String === false );
console.assert( Object.prototype.toString.call(testString) === '[object String]' );
console.assert( testString.constructor.name === 'String' );
 
// Object String
var testStringObject = new String('text');
console.assert( typeof testStringObject === 'object' );
console.assert( testStringObject instanceof Object === true );
console.assert( testStringObject instanceof String === true );
console.assert( Object.prototype.toString.call(testStringObject) === '[object String]' );
console.assert( testStringObject.constructor.name === 'String' );

//object
// Literal
var testObjectLiteral = {};
console.assert( typeof testObjectLiteral === 'object' );
console.assert( testObjectLiteral instanceof Object === true );
console.assert( Object.prototype.toString.call(testObjectLiteral) === '[object Object]' );
console.assert( testObjectLiteral.constructor.name === 'Object' );
 
// new Object
var testObjectConstructor = new Object();
console.assert( typeof testObjectConstructor === 'object' );
console.assert( testObjectConstructor instanceof Object === true );
console.assert( Object.prototype.toString.call(testObjectConstructor) === '[object Object]' );
console.assert( testObjectConstructor.constructor.name === 'Object' );
 
// new Object
var testObjectCreateNull = Object.create(null);
console.assert( typeof testObjectCreateNull === 'object' );
console.assert( testObjectCreateNull instanceof Object === false ); // !!! It's false !!!!
console.assert( Object.prototype.toString.call(testObjectCreateNull) === '[object Object]' );
// TypeError: Cannot read property 'name' of undefined

// Ejemplos de literales enteros en distintas bases 

var edad_Persona1 = 30; 
var edad_Persona2 = 036;
var edad_Persona3 = 0x1E;


// Ejemplos de literales en punto flotante

var dato_1 = 3.1415;
var dato_2 = -3.1E12;
var dato_3 = .1e12;

// Definición del objeto en javascript

var Coche = {
     ruedas : 4,
     color: "rojo",
     "max velocidad" : 120,
     combustible : "Diesel"
   }
   
   console.log( Coche.ruedas );
   console.log( Coche.color );
   console.log( Coche[2] );
   console.log( Coche.combustible );

   // Ejemplos de literales string

var nombrePersona = "José Sáez";
var direccionWeb = 'http://www.aprendoencasa.com';
var mensaje = "Hola \"Mundo\", Que tal!";

// Ejemplo de inicialización de array con literales
var animales = ["Perro", ,"Gato"];

// Ejemplo de if y else
var helado = 'chocolate';
if (helado === 'chocolate') {
  alert('¡Si, amo el helado de chocolate!');    
} else {
  alert('Awwww, pero mi favorito es el de chocolate...');    
}

// Ejemplo de switch
switch (new Date().getDay()) {
     case 0:
         day = "Sunday";
         break;
     case 1:
         day = "Monday";
         break;
     case 2:
         day = "Tuesday";
         break;
     case 3:
         day = "Wednesday";
         break;
     case 4:
         day = "Thursday";
         break;
     case 5:
         day = "Friday";
         break;
     case 6:
         day = "Saturday";
 }

// Ejemplo de throw
 function getNombreMes(mes) {
     mes = mes - 1; // Ajustar el número de mes al índice del arreglo (1 = Ene, 12 = Dic)
     var meses = new Array("Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul",
        "Ago", "Sep", "Oct", "Nov", "Dic");
     if (meses[mes] != null) {
        return meses[mes];
     } else {
        miExcepcionUsuario = new ExceptionUsuario("NumeroMesNoValido");
        throw miExcepcionUsuario;
     }
  }

  // Ejemplo de try catch
  try {
     // sentencias para try
     nombreMes = getNombreMes(miMes);
  } catch (excepcion) {
     nombreMes = "desconocido";
     registrarMisErrores(excepcion.mensaje, excepcion.nombre); // pasa el objeto exception al manejador de errores
  }


  //ejemplo de for
  var paso;
for (paso = 0; paso < 5; paso++) {
  // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
  console.log('Dando un paso al Este');
};

     //Ejemplo de while
     n = 0;
     x = 0;
     while (n < 3) {
     n++;
     x += n;
}
//ejemplo do while
do {
    i += 1;
    console.log(i);
  } while (i < 5);

  // ejemplo label
markLoop:
while (theMark == true) {
    doSomething();
 }

//ejemplo break
for (i = 0; i < a.longitud; i++) {
    if (a[i] == elValor) {
      break;
    }
  }

  //ejemplo continue
    i = 0;
    n = 0;
    while (i < 5) {
    i++;
    if (i == 3) {
    continue;
    }
  n += i;
}

//ejemplo for ..in
function volcar_propiedades(obj, obj_nombre) {
    var resultado = "";
    for (var i in obj) {
      resultado += obj_nombre + "." + i + " = " + obj[i] + "<br>";
    }
    resultado += "<hr>";
    return resultado;
  }

  //ejemplo for of
    let arr = [3, 5, 7];
    arr.foo = "hello";

    for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

    for (let i of arr) {
    console.log(i); // logs "3", "5", "7"
}

//ejemplo de exprecion de funciones
var myFunc;
if (num == 0){
  myFunc = function(theObject) {
    theObject.make = "Toyota"
  }
}

//ejemplo llamando funciones

var a, b, c, d, e;
a = factorial(1); // a obtiene el valor 1
b = factorial(2); // b obtiene el valor 2
c = factorial(3); // c obtiene el valor 6
d = factorial(4); // d obtiene el valor 24
e = factorial(5); // e obtiene el valor 120

//ejemplo de ambito de funciones
// Las siguientes variables están  definidas en el ámbito global
var num1 = 20,
    num2 = 3,
    nombre = "Messi";

// Esta función se define en el ámbito global
function multiplicar() {
  return num1 * num2;
}

multiplicar(); // Retorna 60

// Un ejemplo de función anidada
function obtenerPuntaje () {
  var num1 = 2,
      num2 = 3;
  
  function agregar() {
    return nombre + " puntaje " + (num1 + num2);
  }
  
  return agregar();
}

obtenerPuntaje(); // Retorna "Messi puntaje 5"


//ejemplo de recursividad

function factorial(num)
{
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    var tmp = num;
    while (num-- > 2) {
        tmp *= num;
    }
    return tmp;
}

var result = factorial(8);
document.write(result);

//ejemplo de closures

var pet = function(name) {          // La funcion externa define una variable llamada "name"
      var getName = function() {
        return name;                // La funcion interna tiene aceso a la variable "name" de la funcion externa
      }

      return getName;               // Devolver la funcion interna, por lo tanto exponiendola a un ambito exterior
    },
    myPet = pet("Vivie");
    
myPet();                            // Devuelve "Vivie"

//ejemplo de arguments
function myConcat(separator) {
    var result = "", // initialize list
        i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
       result += arguments[i] + separator;
    }
    return result;
 }

 // ejemplo de parametros
 function multiply(a, b) {
    b = typeof b !== 'undefined' ?  b : 1;
    
    return a*b;
  }
  
  multiply(5); // 5

  //Parámetros rest
  function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
  }
  
  var arr = multiply(2, 1, 2, 3);
  console.log(arr); // [2, 4, 6]

  //funcion flecha
  var a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryl­lium"
  ];
  
  var a2 = a.map(function(s){ return s.length });
  
  var a3 = a.map( s => s.length );

  //funcion predefinida

  //Método eval
  eval(cadenadecaracteresostring);

  //Funcion global isFinite
  isFinite(number);

  if(isFinite(ClientInput)){
    /* tomar pasos espeficos */
 }

  //Funcion isNaN
  var floatValue = parseFloat(toFloat);

if (isNaN(floatValue)) {
   notFloat();
} else {
   isFloat();
}

//Funciones parseInt and parseFloat
parseFloat(str);
parseInt(str [ radix]);

//Funciones Number y String

var objRef;
objRef = Number(objRef);
objRef = String(objRef);

//objeto date a cadena legible conversion
var D = new Date(430054663215),
    x;
x = String(D); // x equivale a "Thu Aug 18 04:37:43 GMT-0700 (Pacific Daylight Time) 1983"

//objeto String a un objeto Number.
var str = "12",
    num;
num = Number(str);

//Funciones escape y unescape
escape(string);
unescape(string);
// Asignación
var numero = 5;
// Asignacion destructurada
[a, b] = [1, 2]
//Comparación 
color1 = new String("verde")
color1 instanceof String //instanceof
"PI" in Math //in
9 < 10 //menor que
4 > 1 //mayor que
12 <= 5 //menor o igual 
6 >= 6 //mayor o igual
10 == '10'(true) //Igualdad
10 != 8 //Desigualdad
10 === '10'(false) //Igualdad Estricta
10 !== 10 //Desigualdad Estricta
//Operadores Aritméticos
5 + 4 //Suma
3 - 2 //Resta
6 / 2 //División
60 * 20 //Multiplicación
10 % 3// Operador de residuo
//Operadores Lógicos
a && b // operador AND
a || b // operador OR
!a // operador de negacion (NOT)
//Operadores String 
console.log("hola " + "Mundo");
//Condicional Ternario
var stop = false, age = 16;
age > 18 ? location.assign("continue.html") : stop = true;
//Operador Delete
delete x;
//Operador Typeof
typeof miFuncion === 'function'

//Operador In
    "PI" in Math
//Operador instanceOf
color1 = new String("verde")
color1 instanceof String
//Precedencia de Operadores
3 + 4 * 5 // retorna 23
// Operador This
this.a = 37;
console.log(window.a);
//Operador Super
class Square extends Rectangle {
    constructor() { }
    static logDescription() {
        return super.logNbSides() + ' which are all equal';
    }
}
Square.logDescription();
//Operador de Propagación
function f(x, y, z) { }
var args = [0, 1, 2];
f.apply(null, args);


//Array
var cars = ["Saab", "Volvo", "BMW"];
//Métodos array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString(); //Metodo toString ()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");// Metodo Join

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); //Método Pop

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); // Método Push

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();  //Método Shift

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); //Método unshift

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi"; //Método index

var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; //Método Delete

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // Método Splice()

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys); //Método Concat()

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1); //slice()

//Maps
var miMapa = new Map();
miMapa.set(NaN, "no es un número");

//Sets
const mySet = new Set();

//Objetos 
var miAuto = new Object(); // Declaracion de objetos
miAuto.marca = "Ford"; //Propiedades de los objetos

function listaTodasLasPropiedades(o){
    var objetoAInspeccionar;
    var resultado = [];
    for(objetoAInspeccionar = o; objetoAInspeccionar !== null; objetoAInspeccionar = Object.getPrototypeOf(objetoAInspeccionar)){
       resultado = resultado.concat(Object.getOwnPropertyNames(objetoAInspeccionar)) + "\n";
    }   
    return resultado; 
 } // Funciones de listado

 function Auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
  }
  var miAuto = new Auto("Eagle", "Talon TSi", 1993); //Constructores

  Rectangle.prototype = Object.create(Shape.prototype);//Create

  function mostrarAutos() {
    var resultado = "Un bonito " + this.marca + " " + this.modelo
      + " " + this.annio;
    imprimir_con_estilo(resultado);
  } //Método

  var o = {
    a: 2,
    m: function(b){
      return this.a + 1;
    }
  }; //Herencia

  var o = {a: 7, get b() {return this.a + 1;}, set c(x) {this.a = x / 2}};//Getters y Setters

  var obj1 = {a: 1, b: 2};
var obj2 = {a: 1, b: 2};
var obj3 = obj1;
console.assert( obj1 !== obj2 );
console.assert( obj1 === obj3 ); //Comparacion de objetos
