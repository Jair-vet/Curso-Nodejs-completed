

const deadpool = {
    nombre: 'Wade',
    appellido: 'Windston',
    poder: 'Regeneracion',
    getNombre () {
        return `${ this.nombre} ${ this.appellido} ${this.poder}`
    }
}


// const nombre     = deadpool.nombre;
// const appellido  = deadpool.appellido;
// const poder      = deadpool.poder;

// Desestructurando un arreglo
function imprimeHeroe({nombre, appellido, poder, edad = 0 } ){

    // Dentro de la Funcion 
    nombre = 'Carlos';
    console.log(nombre, appellido, poder, edad);
}
// imprimeHeroe(deadpool);


// Desestructuracion 
// const {nombre, appellido, poder } = deadpool;
// console.log(nombre, appellido, poder);

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// Para solo traer lo que nos interesa
const [ , , h3 ] = heroes;

console.log(h3)









