import React from 'react';
import './Phone.css'
const Phone = (props) => {
    const {image, brand, phone_name, slug} = props;
    return (
        <div className='phone border border-warning p-4'>
            <img className='m-2' src={image} alt="" />
            <h5 className='mt-2'>{brand}</h5>
            <h3>{phone_name}</h3>
            <small>{slug}</small>
        </div>
    );
};

export default Phone;