import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div>
                            <h1><b>Sign In</b></h1>
                            <p>Please Fill this form or create an account. &nbsp;
                            <span><Link className="links" to="/signup">SignUp</Link></span> &nbsp;
                            <span><Link className="links" to="/">Home</Link></span>
                            </p>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '60ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField type='email' id="standard-basic" label="Email" variant="standard" />
                            </Box>

                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '60ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField type='password' id="standard-basic" label="Password" variant="standard" />
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};