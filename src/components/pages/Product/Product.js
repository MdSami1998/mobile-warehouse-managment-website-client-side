import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, price, supplier, quantity } = product;

    const navigate = useNavigate();

    const navigateToPhoneUpdate = (id) => {
        navigate(`inventory/${id}`);
    }

    return (
        <div className='bg-slate-300 p-10 text-black relative rounded-md'>
            <img className='w-1/2 mx-auto' src={img} alt="" />
            <h1 className='text-3xl font-bold'>{name}</h1>
            <small>{description}</small>
            <p className='text-2xl font-semibold'>Price: ${price}</p>
            <p className='text-2xl font-semibold'>Supplier: {supplier}</p>
            <p className='text-2xl font-semibold'>Quantity: {quantity}</p>
            <button onClick={() => navigateToPhoneUpdate(_id)} className='absolute bottom-0 left-0 bg-slate-600 p-3 w-full text-white text-xl font-semibold'>Update</button>
        </div>
    );
};

export default Product;