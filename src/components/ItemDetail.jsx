import React, { useContext, useState } from 'react';
import CartContext from '../context/CartContext';
import ItemCount from './ItemCount.jsx'
import Item from './Item.jsx';

const ItemDetail = ({item}) => {

    const {carrito, agregarAlCarrito} = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    const restarCantidad = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const sumarCantidad = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
        <div className="item-detail">
            <img src={`${import.meta.env.BASE_URL}/images/${item.imagen}`} alt={item.nombre} />
            <h2>{item.nombre}</h2>
            <h4>${item.valor} ARS</h4>
            <p>{item.descripcion}</p>
            <p>Categoría: {item.categoria}</p>
            <ItemCount 
                cantidad={cantidad} 
                restarCantidad={restarCantidad} 
                sumarCantidad={sumarCantidad}
                agregarAlCarrito={()=> {agregarAlCarrito(item, cantidad)}}/>
        </div>
    )
}

export default ItemDetail;
