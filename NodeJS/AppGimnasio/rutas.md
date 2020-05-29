**routes/index.js**
GET /home
GET /contact
GET /info

**routes/clients.js**
X GET /clients (index.pug) - Recupera todos los clientes y me los muestra en una tabla
X GET /clients/7812 - Recupera el cliente con el id especificado
X GET /clients/new (formulario.pug) - Formulario para insertar un nuevo cliente
X POST /clients/create - Gestiona la creación de un nuevo cliente
GET /clients/edit - Formulario para editar un cliente
POST /clients/update - Gestiona la actualización de un cliente
GET /clients/remove - Borrar un cliente

CRUD - Create, Read, Update, Delete

**routes/class.js**
GET /class (index.pug) - Recupera todas las clases disponibles
GET /class/323 - Recupera la clase con ese ID
GET /class/new (formulario.pug) - Formulario para insertar una clase
GET /class/edit - Formulario para editar una clase
GET /class/remove - Borra una clase

**routes/test.js**
GET /test - Pruebas sobre MongoDB