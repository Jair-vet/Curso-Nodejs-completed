require('dotenv').config()

const { leerInput, 
    inquirerMenu,
     pausa,
     listarLugares
     } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
    
    const busquedas = new Busquedas();
    let opt;

    do{

        opt = await inquirerMenu();

        switch(opt){
            case 1:
                // Mostrar mensaje 
                const termino = await leerInput('Ciudad: ');
                
                // Buscar los lugares
                const lugares = await busquedas.ciudad(termino);
                
                // Seleccionar el lugar
                const id = await listarLugares(lugares);
                if(id === '0') continue;

                const lugarSel = lugares.find( l => l.id === id );
                
                // Guardar en Archivo o DB
                busquedas.agregarHistorial(lugarSel.nombre );
                
                // Datos del Clima
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);

                // Mostrar Resultados
                console.clear();
                console.log('\nInformación de la Ciudad\n'.white);
                console.log('Ciudad: '      .green, lugarSel.nombre.cyan);
                console.log('Latitud: '     .green, lugarSel.lat);
                console.log('Longitud: '    .green, lugarSel.lng);
                console.log('Temperatura: ' .green, clima.temp);
                console.log('Minima: '      .green, clima.min);
                console.log('Maxima: '      .green, clima.max);
                console.log('Como esta e Clima: '.green, clima.desc);

            break;
         
            case 2:
                busquedas.historialCapitalizado.forEach((lugar , i)=>{
                
                // busquedas.historial.forEach((lugar , i)=>{
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${lugar}`);
                });
            break;


        }
        // console.log({opt});



        if (opt !== 0)  await pausa();

    }while( opt !== 0)
}


main();