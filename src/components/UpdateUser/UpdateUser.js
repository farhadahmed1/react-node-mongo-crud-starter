
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
    }, []);



    // update User

    const handleNameChange = e => {
        const updatedName = e.target.value;
        const userUpdated = { name: updatedName, email: singleUser.email };
        setSingleUser(userUpdated);

    }

    const handleEmailChange = e => {
        const updatadEmail = e.target.value;
        const userUpdated = { ...singleUser };
        userUpdated.email = updatadEmail;
        setSingleUser(userUpdated);
    }

    const handleUpdateUser = e => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(singleUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('update Successfully')
                    setSingleUser({})
                }
            })

        e.preventDefault();

    }
    return (
        <div>
            <h2>Update {singleUser.name} {singleUser.email}</h2>
            <p><small>{id}</small></p>
            <form onSubmit={handleUpdateUser}>

                <input type="text" onChange={handleNameChange} value={singleUser.name || ''} />
                <input type="email" onChange={handleEmailChange} value={singleUser.email || ''} />

                <input type="submit" value="Update" />
            </form>

        </div>
    );
};

export default UpdateUser;