import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';
import './Phones.css'

const Phones = (props) => { // Receive props from parent component
    const [phones, setPhones] = useState([]);
    useEffect(() =>{
        fetch(`https://openapi.programming-hero.com/api/phones?search=${props.searchQuery}`) // Use search query from props
        .then(res => res.json())
        .then(data =>setPhones(data.data))
    } ,[props.searchQuery]) // Update only when searchQuery prop changes

    return (
        <div className=''>
            <div className='container-lg mt-3'>
            {
             phones.map(phone => 
             <Phone
              key={phone.id}
              brand={phone.brand}
              phone_name={phone.phone_name}
              image={phone.image}
              slug={phone.slug}

             ></Phone>)
            }
            </div>
        </div>
    );
};

export default Phones;
