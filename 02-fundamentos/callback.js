

// Es una funcion que se va a ejecutar eventualmente
// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 1000);

const getUsuarioID = ( id, callback ) => {

    const user ={
        id,
        nombre: 'Carlos'
    }

    setTimeout( () => {
        callback(user);
    }, 1500 )

}

getUsuarioID(10, (usuario) => {
    console.log('hola mundo');
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());

} );


