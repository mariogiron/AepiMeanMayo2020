const chalk = require('chalk');
const axios = require('axios');

console.log(chalk.bgWhite.blue('Mi primer proyecto!'));

// axios.get('https://rickandmortyapi.com/api/character')
//     .then(response => {
//         console.log(response);
//     }).catch(err => {
//         console.log(err);
//     });

console.log('Ha finalizado el script');

// Datos de directorio y fichero
console.log(__dirname);
console.log(__filename);

// Argumentos que recibe la aplicación
console.log(process.argv);