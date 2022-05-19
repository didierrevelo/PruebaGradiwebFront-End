<h1 align="center">PruebaGradiwebFront-End</h1>

## Objetivo

* Solicitar información a un API pública
* Realizar la maquetación de una ficha de producto (en base a los datos obtenidos en el API), la cual contiene información básica como:
Nombre
Precio real
Precio más alto (%)
Descripción
Galería de imágenes
Variantes de producto (S / M / L) y su respectivo precio
* Realizar un carrusel animado con las imágenes del producto
* Adaptar resultado a las diferentes versiones/tamaños de pantalla (Diseño Responsivo)
* Agregar un formulario que nos permita seleccionar una variante del producto
* Añadir funcionalidad a la acción de <añadir al carrito> mediante un botón. Esta acción/evento debe desplegar un mensaje con título y variante seleccionada.

## Requisitos y condiciones 💯
* Maquetar una aplicación web que permita suplir las necesidades del objetivo.
* Como mínimo la aplicación debe estar escrita en HTML, CSS y JavaScript.
* Se proporcionan mockups guía de la aplicación requerida y con este se puede proceder al desarrollo del prototipo de alta fidelidad.
* No se proporciona boceto del modal/pop-up accionado por evento <añadir al carrito> pero este debe adaptarse al lenguaje gráfico proporcionado en el prototipo (mockup).
* Se valorará el uso de buenas prácticas de programación, orden, creatividad, experiencia de usuario y documentación del trabajo.
* Puede utilizar únicamente tecnologías como (Vanilla JS, ReactJS, VueJS, SASS, CSS3, HTML5, SASS), el uso de jQuery no será válido para la prueba.
* Crear un repositorio público, en el cual evidencie buenas prácticas con un sistema de versiones y el código fuente del producto final. Debe poder instalarse y ejecutarse de forma fácil en un entorno de desarrollo local. *Incluir en la documentación.
* La prueba debe desarrollarse en un tiempo no mayor a cuatro (4) horas.
* La información básica del producto deberá solicitarla al siguiente endpoint:
https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js
* La documentación sobre cómo usar el API de Shopify la encuentras [aquí](https://shopify.dev/api/ajax/reference/product#get-products-product-handle-js)

## Mockups
<img src="./img/view1.jpg"/>
<img src="./img/view2.jpg"/>
<img src="./img/view3.jpg"/>

<!-- ## Table of Content
* [Installation](#installation)
* [Documentation](#documentation)
* [File Descriptions](#file-descriptions)
* [Authors](#authors)
* [License](#license)
* [Acknowledgment](#Acknowledgment)

## Installation
- [Nodejs](http://nodejs.org/es/ "Nodejs")
- [Firebase](http:firebase.google.com/docs/firestore/quickstart?hl=es-419 "Firebase")
- [Stripe](http://stripe.com/es-us/reports/idc-whitepaper-2018 "Stripe")

## Documentation
- [Nodejs](http://nodejs.org/es/docs/ "Nodejs Docs.")
- [Firebase](http://firebase.google.com/docs?gclid=CjwKCAjwn6GGBhADEiwAruUcKq0AG0-A_obGNyx5OXbnzYf7JXnfJxV8ZDY4ZO3CETQghmW64xtdpBoChl8QAvD_BwE&gclsrc=aw.ds "Firebase Docs.")
- [Strype](https://stripe.com/docs "Strype Docs.")

## File Description
[getTransaction](getTransaction.js) - getTransaction contains code that helps us call user transactions from the stripe API.:
* `getAllTransctions` - This is an asynchronous function, with which we have a list of transactions, from the app stripe, this information allows us to corroborate the existence of transactions on behalf of a cardholder.
* `createUsers` - createUsers is a function that goes through the information delivered by the asynchronous function getAllTransctions (), allowing to capture said information and create an array of users that contains user ID, an array of transactions, an array of values of said transactions and a spend that adds up all values to give a total. 
* `create` - create formats the transactions taken from the API so that they can be put in the format that the Bankity app uses in firebase, in this way it resembles the format in production. To keep in mind, this is also an asynchronous function so special attention must be paid to awaits since they will delay the result until the required information is not available.
* `usersAuth` - usersAuth compares the information obtained from the database in firestore with that provided by stripe in order to connect the transactions with each user

[createUserAndCard](createUserAndCard.js) - createUserAndCard create data in our database in firestore:
* `getUserStripe` - fetches a list of users through an asynchronous function.
* `usersGetForCreate` - usersGetForCreate brings the information of all users contained in firebase for comparison with stripe user data and thus knows if individual user creation should be executed or not.
* `compareUserSwB` - compares the information from the previous functions and makes the decision to create or not the users, the creation depends on whether or not it exists in the databases.
* `createCardHolders` - this function gives way to the creation of each carholder in stripe according to the parameters received in the previous functions.
* `createCard` - as its name implies, creates a card per user, this function is not called if the user already exists in stripe, which allows no more than one card to be created per user.
* `updateFirestore` - more than a function is a call to a function found in the path ../firestore/firestore.js that updates the users in firestore with the data obtained from its creation, this data is the user's id in stripe and the id of the card for future consultations, with the existence of these two data depends on the flow of the rest of the functions in this file, so the user who does not have it will not be created by default with their respective card.

### `models/`  directory contains classes used for this project:
[BCTransaction](/models/BCTransaction.js) - 
* `class user` - This constructor creates an array of transaction objects, and an array with the transaction values which are added with the sum function and proceeds to save the result in spent.

[constructorUser](/models/constructorUser.js) - 



[spentGet](/models/spentGet.js) - 



[transactionByUser](/models/transactionByUser.js) - 



### `firestore/` directory contains ... :
[firestore](/models/firestore.js) - 



## Authors
- [Didier Revelo](http://github.com/didierrevelo "Didier Revelo")
- [Jhon Alex Freyre](http://github.com/Jhonalex1199 "Jhon Alex Freyre")
- [Gustavo Tovar](http://github.com/tao08 "Gustavo Tovar")

## Acknowledgment
 - [Holberton School](http://www.holbertonschool.com/co/es "Holberton School")
 -  [Bankity](http://www.bankity.com/ "Bankity") -->