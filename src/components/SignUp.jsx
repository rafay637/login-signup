import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

export const SignUp = () => {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div>
                            <h1><b>Sign Up</b></h1>
                            <p>Have an account? &nbsp;
                                <span><Link className="links" to="/login">SignIn</Link></span> &nbsp;
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
                                <TextField id="standard-basic" label="First Name" variant="standard" />
                            </Box>

                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '60ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" label="Last Name" variant="standard" />
                            </Box>

                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '60ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" label="Country" variant="standard" />
                            </Box>

                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '60ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" label="Email" variant="standard" />
                            </Box>

                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '60ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" label="Password" variant="standard" />
                            </Box>

                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '60ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" label="Confirm Password" variant="standard" />
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};