import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {nombre, precio, id} = producto;

    //Agrgar producto
    const selecionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id);
        agregarProducto([
            ...carrito,
            producto
        ]);
    };

    return (

        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <button
                type="button"
                onClick={() => selecionarProducto(id)}
                >
                    Comprar
            </button>
        </div>

    );
}

export default Producto;