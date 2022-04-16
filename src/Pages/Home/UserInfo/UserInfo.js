import React from 'react';
import { useParams } from 'react-router-dom';
import useUsers from '../../../Hooks/useUsers';
import SingleUser from '../SingleUser/SingleUser';

const UserInfo = () => {
    const { userId } = useParams();
    const allData = useUsers(`https://jsonplaceholder.typicode.com/users?id=${userId}`)

    const data = allData[0];

    return (
        <div className='container'>
            <h1>User information {userId}</h1>
            <SingleUser
                user={data}
            >{{ email: data?.email, phone: data?.phone }}</SingleUser>
        </div>
    );
};

export default UserInfo;