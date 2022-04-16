import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../../Hooks/useUsers';
import SingleUser from '../SingleUser/SingleUser';

const Home = () => {
    const usersData = useUsers('https://jsonplaceholder.typicode.com/users')

    if (usersData.length) {
        usersData.length = 4;
    }
    return (
        <div className='container'>
            <div className="row">
                {
                    usersData?.map(user => <SingleUser
                        key={user.id}
                        user={user}
                    ></SingleUser>)
                }
                <Link className='mt-3' to={'/users'}>Load more...</Link>
            </div>
        </div>
    );
};

export default Home;