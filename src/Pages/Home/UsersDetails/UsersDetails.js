import React from 'react';
import { Link } from 'react-router-dom';

const UsersDetails = ({ user }) => {
    const { name, id } = user || {};
    return (
        <div className='col-4 gy-3'>
            <div className="card shadow p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Id: {id}</p>
                    <Link to='/' >Users</Link>
                </div>
            </div>
        </div>
    );
};

export default UsersDetails;