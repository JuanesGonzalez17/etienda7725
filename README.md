# NOTAS DEL PROYECTO

- Tener en cuenta si no corre el node js habilitar ejecución de scripts en WIN 11
- Ejecutamos en la consola el modo administrador: Set-ExecutionPolicy Unrestricted
- Otra opción es: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser ​

==================

- Usaremos 2 arquitecturas: Orientada a Servicios (API REST) para el backend
- Internamente usaremos MVC (Tenga en cuenta que las vistas se reemplazan por rutas)

1- Creamos las carpetas para el MVC (Controllers, Models, Routes)
2- Instalamos los paquetes base: npm i nodemon express cors mongoose

* Documentación de MONGO
- MongoDB: https://www.mongodb.com/docs/manual/reference/method/
- Mongoose (Librería que interactúa entre node js y MongoDB): https://mongoosejs.com/docs/guide.html#methods 