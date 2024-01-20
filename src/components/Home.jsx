import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <div className='text-center text-primary my-5'>
                <h1><b>Home</b></h1>
                <h5 className='text-dark'>How do you proceed?</h5>
            </div>

            <div>
                <ul>
                    <li>
                        <Link className="links" to="/login">Sign In</Link>
                    </li>
                    <li>
                        <Link className="links" to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};
