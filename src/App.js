import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';


function App() {

  //Lista de productos - arr con obj
  const [productos, guardarProductos] = useState([
    {id: 1, nombre: 'Camisa ReactJs', precio: 50},
    {id: 2, nombre: 'Camisa Redux', precio: 40},
    {id: 3, nombre: 'Camisa JS', precio: 30},
    {id: 4, nombre: 'Camisa Angular', precio: 20},

  ]);

  //State para carrito de compras
  const [ carrito, agregarProducto ] = useState([]);


  const fecha = new Date().getFullYear();
  return (
      <Fragment>

        <Header
          titulo='Tienda Virtual'
        />

        <h1>Lista de productos</h1>
        {productos.map(producto => (
          <Producto
              key={producto.id}
              producto={producto}
              productos={productos}
              carrito={carrito}
              agregarProducto={agregarProducto}
          />
        ))}

          <Carrito
            carrito={carrito}
            agregarProducto={agregarProducto}
          />

        <Footer
        fecha={fecha}
        />

      </Fragment>
  );
}

export default App;
