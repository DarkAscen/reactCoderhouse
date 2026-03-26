import React from 'react';
import Item from './Item.jsx';

const ItemList = ({productos, titulo})=> {

    const toCapital = (str)=> {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div>
            <h1>{toCapital(titulo)}</h1>
            <div className="cajitaItems">{
                    productos.map((producto) => {
                        return (
                            <Item key={producto.id} producto={producto}/>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default ItemList;
