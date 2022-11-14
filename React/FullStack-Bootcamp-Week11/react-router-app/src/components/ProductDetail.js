import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const ProductDetail = (props) => {
    const params = useParams();
    const dataHandler = (data, id) => {
        const found = data.filter((element) => element.id === id);
        return found.map((item) => (
            <div>
                <h1>{item.title}</h1>
                <h2>{item.size}</h2>
                <img src={item.imageUrl} alt='{item.title}' />
                <h3>{item.price}</h3>
            </div>
        ));
    };

    return (
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
            {dataHandler(props.data, params.productId)}
            <button>
                <NavLink to={`/products`}>Back</NavLink>
            </button>
        </section>
    );
};

export default ProductDetail;
