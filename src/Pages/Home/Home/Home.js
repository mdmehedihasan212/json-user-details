import React from 'react';
import useUsers from '../../../Hooks/useUsers';

const Home = () => {
    const usersData = useUsers('https://jsonplaceholder.typicode.com/users')
    return (
        <div>
            <h1>total users: {usersData.length}</h1>
        </div>
    );
};

export default Home;