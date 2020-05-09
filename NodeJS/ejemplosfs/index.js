const fs = require('fs');

// readFile Síncrono
console.log('inicio');
const datos = fs.readFileSync('./files/uno.txt', 'utf-8');
console.log(datos);
console.log('final');

// readFile Asíncrono
console.log('inicio');
fs.readFile('./files/uno.txt', 'utf-8', (err, datos) => {
    console.log(datos);
});
console.log('final');

// readdir síncrono
const dirs = fs.readdirSync('.');
console.log(dirs);

// readdir asíncrono
fs.readdir('.', (err, files) => {
    if (err) return err;
    console.log(files);
});

fs.appendFile('.files/uno.txt', '\nContenido que agrego', (err) => {
    // if (err) return console.log(err);
    if (err) throw err;
    console.log('Se ha escrito en el fichero');
});