# Test Server Prodoc
This is a public server for testing.


## What is Prodoc?
We’re glad you asked! Prodoc is where design happens. It’s a digital workspace that powers your design teams — all the pieces and the people — so you can get things done.


## API Server

In the `server.js`, you can find:

### `post/api/login`
**Correo y contraseña:**

Revisa la existencia del usuario en la base de datos y retorna toda la información del usuario encontrado.

### `post/api/register`
**Nombre, correo, psw y foto de perfil:**

Agrega al usuario en la base de datos con todos los campos brindados.

### `post/api/:email/projects`
**Correo:**

Busca los proyectos relacionados con el usuario y retorna la lista resultante

### `post/api/:ident`
**Identificación del proyecto:**

Obtiene toda la información de un proyecto en específico

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/attearturo/Prodoc) syntax features.
