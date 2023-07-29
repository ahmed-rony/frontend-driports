import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div>
            <h1>PAYMENT SUCCESSFUL</h1>
            <Link to='/login'>
            <button>Login</button>
            </Link>
        </div>
    );
};

export default Success;