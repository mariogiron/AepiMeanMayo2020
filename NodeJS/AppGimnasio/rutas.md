**routes/index.js**
GET /home
GET /contact
GET /info

**routes/clients.js**
GET /clients - Recupera todos los clientes y me los muestra en una tabla
GET /clients/7812 - Recupera el cliente con el id especificado
GET /clients/new - Formulario para insertar un nuevo cliente
GET /clients/edit - Formulario para editar un cliente
GET /clients/remove - Borrar un cliente

**routes/class.js**
GET /class - Recupera todas las clases disponibles
GET /class/323 - Recupera la clase con ese ID
GET /class/new - Formulario para insertar una clase
GET /class/edit - Formulario para editar una clase
GET /class/remove - Borra una clase