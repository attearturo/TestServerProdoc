# Test Server Prodoc

[![GitHub version](https://badge.fury.io/gh/google%2Fmaterial-design-lite.svg)](https://badge.fury.io/gh/google%2Fmaterial-design-lite)
[![npm version](https://badge.fury.io/js/material-design-lite.svg)](https://badge.fury.io/js/material-design-lite)
[![Dependency Status](https://david-dm.org/google/material-design-lite.svg)](https://david-dm.org/google/material-design-lite)


## What is Prodoc?
We’re glad you asked! Prodoc is where design happens. It’s a digital workspace that powers your design teams — all the pieces and the people — so you can get things done.

> This is a public server for testing. It's building with Node.js using MongoDB Atlas.


## Folder Structure

After creation, your project should look like this:

```
TestServerProdoc/
  .git/
  README.md
  package.json
  api.js
  server.js

```

For the project to build, **these files must exist with exact filenames**:

* `server.js` is the JavaScript entry point.
* `api.js` is the route entries;

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

You just need to open the server on yout localhost with:

### `node server.js`

Open the server in the development mode.<br>
Check [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


## API Server

In the `api.js`, you can find the next routes for server:

### `post/api/login`
**Correo y contraseña:**
Revisa la existencia del usuario en la base de datos y retorna toda la información del usuario encontrado.

### `post/api/register`
**Nombre, correo, psw y foto de perfil:**
Agrega al usuario en la base de datos con todos los campos brindados.

### `post/api/:email/projects`
**Correo:**
Busca los proyectos relacionados con el usuario y retorna la lista resultante.

### `post/api/:ident`
**Identificación del proyecto:**
Obtiene toda la información de un proyecto en específico.

### `post/api/:ident/:email`
**Correo:**
Introduce a un nuevo usuario al proyecto.

### `post/api/:email/:ident`
**Correo e identificación del proyecto:**
Introduce el nuevo proyecto relacionado con el usuario.

### `post/api/:ident/linkList/:link`
**Link:**
Ingresa el nuevo link a la lista de urls de un proyecto específico

### `post/api/:ident/:chat/:msg`
**Mensaje:**
Envía un nuevo mensaje a la lista de mensajes del chat.

### `post/api/:ident/fileList/:file`
**Archivo:**
Agrega el archivo enviado a la lista de archivos de un proyecto en específico.

### `post/api/deleteUser/:email`
**Correo e identificación del proyecto:**
Elimina al usuario de un proyecto específico y de su lista de proyectos.


## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/attearturo/Prodoc) syntax features.


<h2>Core Team</h2>

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <img width="100" height="100" src="http://res.cloudinary.com/attearturo/image/upload/v1515449116/arturo3_ffrfuc.png">
        <br>
        <a href="https://github.com/attearturo">Arturo Gómez</a>
      </td>
      <td align="center" valign="top">
        <img width="100" height="100" src="http://res.cloudinary.com/attearturo/image/upload/v1515449112/jose_qbwutd.jpg">
        <br>
        <a href="https://github.com/josedavidgm1995">Jose David Giraldo</a>
      </td>
      <td align="center" width="20%" valign="top">
        <img width="100" height="100" src="http://res.cloudinary.com/attearturo/image/upload/v1515449093/camilo_e7punh.jpg">
        <br>
        <a href="https://github.com/korneas">Camilo Montoya</a>
      </td>
     </tr>
  </tbody>
</table>


## License

© Profeticos, 2017. Cali, Colombia.

