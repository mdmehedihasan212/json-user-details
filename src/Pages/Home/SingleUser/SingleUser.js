import React from 'react';
import { Link } from 'react-router-dom';

const SingleUser = ({ user, children }) => {
    const { name, id } = user || {};
    const { email, phone } = children || {};
    return (
        <div className='col-4 gy-3'>
            <div className="card shadow p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Id: {id}</p>
                    <p className="card-text">{phone}</p>
                    <p className="card-text">{email}</p>
                    <Link to={`/users/${id}`} >Users Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;