import React from 'react';
import { Link } from 'react-router-dom';

const SingleUser = ({ user }) => {
    return (
        <div className='col-4 gy-3'>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Id: {user.id}</h5>
                    <p class="card-text">Name: {user.name}</p>
                    <Link to="/" class="">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;