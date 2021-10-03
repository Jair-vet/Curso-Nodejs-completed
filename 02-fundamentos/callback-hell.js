
const empleados = [
    {
        id: 1,
        nombre: 'Carlos'
    },
    {
        id: 2,
        nombre: 'Antonio'
    },
    {
        id: 3,
        nombre: 'Sara'
    },
    {
        id: 4,
        nombre: 'Bryant'
    }
];


const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
    
];


const getEmpleado =  ( id, callback) => {
    const empleado = empleados.find( e => e.id === id)
    if ( empleado){
        callback(null, empleado);
    }else{
       callback( `Empleado con id: ${id} no existe`);
    }
}

const getSalario = (id, callback) => {

    const salario = salarios.find( s => s.id === id)?.salario;
    if ( salario){
        callback(null, salario);
    }else{
        callback(`No hay salario con el id: ${id}`)
    }
}
// console.log( getEmpleado(4) );
const id = 4;


getEmpleado(id, (err ,empleado) => {
    if ( err){
        console.log('ERROR');
        return console.log(err);
    }
    getSalario(id, (err ,salario) => {
        if ( err){
            return console.log(err);
        }
            console.log('El empleado:', empleado.nombre, 'tiene un salario de:', salario);
    })
    
}, )








