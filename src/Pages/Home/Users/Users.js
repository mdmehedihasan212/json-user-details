import React from 'react';
import useUsers from '../../../Hooks/useUsers';
import UsersDetails from '../UsersDetails/UsersDetails';

const Users = () => {
    const usersData = useUsers('https://jsonplaceholder.typicode.com/users')

    return (
        <div className='container'>
            <div className="row">
                {
                    usersData?.map(user => <UsersDetails
                        key={user.id}
                        user={user}
                    ></UsersDetails>)
                }
            </div>
        </div>
    );
};

export default Users;