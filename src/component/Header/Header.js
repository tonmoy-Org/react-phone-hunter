import React, { useState } from 'react';

const Header = (props) => {
    const [name, setName] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(name); // Pass the name value to the onSearch prop
    };
    
    return (
        <div>
            <nav className="navbar bg-success-subtle px-5">
                <div className="container-fluid">
                    <a href='/home' className="navbar-brand fw-bolder fs-3">Phone Hunter</a>
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input
                         
                         value={name}
                         onChange={(e) => setName(e.target.value)} 
                         className="form-control me-2" type="text" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;
