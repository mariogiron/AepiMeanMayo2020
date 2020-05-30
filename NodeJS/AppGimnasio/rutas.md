**routes/index.js**
GET /home
GET /contact
GET /info

**routes/clients.js**
X GET /clients (index.pug) - Recupera todos los clientes y me los muestra en una tabla
X GET /clients/IDCLIENT - Recupera el cliente con el id especificado
X GET /clients/new (formulario.pug) - Formulario para insertar un nuevo cliente
X POST /clients/create - Gestiona la creación de un nuevo cliente
X GET /clients/edit/IDCLIENT - Formulario para editar un cliente
X POST /clients/update - Gestiona la actualización de un cliente
X GET /clients/remove/IDCLIENT - Borrar un cliente

**routes/api/clients.js**
X GET /api/clients - Recuperar todos los datos de los clientes
X POST /api/clients - Crear un nuevo cliente. Los datos del nuevo cliente vendrán en el BODY!
X PUT /api/clients - Editar un cliente. Los datos del cliente a editar vendrán en el BODY!
X DELETE /api/clients/IDCLIENT - Elimina un cliente

CRUD - Create, Read, Update, Delete

**routes/class.js**
GET /class (index.pug) - Recupera todas las clases disponibles
GET /class/323 - Recupera la clase con ese ID
GET /class/new (formulario.pug) - Formulario para insertar una clase
GET /class/edit - Formulario para editar una clase
GET /class/remove - Borra una clase

**routes/test.js**
GET /test - Pruebas sobre MongoDB