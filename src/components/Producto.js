import React from 'react';

const Producto = ({producto}) => {

    const {nombre, precio, id} = producto;

    //Agrgar producto
    const selecionarProducto = id => {
        console.log('comprando...', id)
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