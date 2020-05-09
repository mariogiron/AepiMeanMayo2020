// Requerimos las librerías que vamos a user 
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');

// Requerimos ficheros de gestión de rutas
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

// Creamos la app con Express
const app = express();

// Configuración del motor de plantillas
// Dónde esta el directorio de vistas de mi aplicación
app.set('views', path.join(__dirname, 'views'));
// Cuál es el motor de plantillas
app.set('view engine', 'pug'); // hbs, moustache, ejs, erb, twig

// Configuraciones varias
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ****************
// GESTIÓN DE RUTAS
// ****************

// Los manejadores de rutas deben RESPONDER a la petición que reciben
// Si es un middleware, o RESPONDO, o NEXT (sigo el flujo normal de la app)

app.use((req, res, next) => {
  console.log(new Date());
  next();
});

app.use((req, res, next) => {
  const contenido = `${new Date()} - Método: ${req.method} - Url: ${req.url}\n`;
  // const contenido = (new Date()) + ' - ' + req.method + ' - ' + req.url + '\n';
  fs.appendFile('./app.log', contenido, (err) => {
    if (err) {
      res.send('Ha ocurrido un error con el servidor');
    } else {
      next();
    }
  });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
