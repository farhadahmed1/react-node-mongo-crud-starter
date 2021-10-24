import userEvent from '@testing-library/user-event';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';

const UpdateUser = () => {
    const [singleUser, setSingleUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/users/${id}`)
            .then(res => res.json())
            .then(data => setSingleUser(data))
    }, [])
    return (
        <div>
            <h2>Update {singleUser.name}</h2>
            <p><small>{id}</small></p>
        </div>
    );
};

export default UpdateUser;