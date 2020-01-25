import React from 'react';

const Producto = ({producto}) => {

    const {nombre, precio, id} = producto;

    //Agrgar producto
    const selecionarProducto = () => {
        console.log('comprando...')
    };

    return (

        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <button
                type="button"
                onClick={() => selecionarProducto()}
                >
                    Comprar
            </button>
        </div>

    );
}

export default Producto;