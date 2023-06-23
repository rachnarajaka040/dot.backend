import React, { useState } from 'react';
import {
    TextField,
    Button,
    Container,
    Typography,
    makeStyles,
    Link,
    Box,
} from '@material-ui/core';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './logo.png';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    },
    formContainer: {
        backgroundColor: 'rgb(31, 42, 64)',
        padding: theme.spacing(4),
        borderRadius: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textField: {
        margin: theme.spacing(1),
        width: '100%',
        '& label': {
            color: theme.palette.common.white,
        },
    },
    button: {
        margin: theme.spacing(3, 0),
        width: '100%',
        borderRadius: theme.spacing(2),
    },
    link: {
        margin: theme.spacing(1),
        color: theme.palette.common.white,
    },
    logo: {
        marginBottom: theme.spacing(2),
        width: 80,
        height: 80,
        borderRadius: '50%',
    },
}));

const Login = () => {
    const classes = useStyles();
    const [data, setData] = useState({});

    function handleChange(e) {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }


    async function postUserLogin() {

        try {
            console.log("data1");
            const response = await axios.post('http://localhost:4001/api/v1/user/login', data);
            console.log("data");
            console.log('Response:', response.data);

            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                console.error('Error:', error.response.data);
            } else {
                console.error('Error:', error.message);
            }
            throw error;
        }
    }


    return (
        <Box className={classes.container}>
            <Container maxWidth="xs">
                <Box className={classes.formContainer}>
                    <img src={Logo} alt="Company Logo" className={classes.logo} />
                    <Typography variant="h4" align="center" gutterBottom>
                        Login
                    </Typography>
                    <form >
                        <TextField
                            label="Email or Phone"
                            type="text"
                            className={classes.textField}


                            onChange={handleChange}
                            required
                            InputProps={{
                                style: { color: '#FFFFFF' },
                            }}
                            name='email or phone'

                        />
                        <TextField
                            label="Password"
                            type="password"
                            className={classes.textField}

                            name='password'
                            onChange={handleChange}
                            required
                            InputProps={{
                                style: { color: '#FFFFFF' },
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={postUserLogin}
                            className={classes.button}
                        >
                            Login
                        </Button>
                        <Typography variant="body2" align="center">
                            <Link href="#" className={classes.link}>
                                Forgot password?
                            </Link>
                        </Typography>
                        <Button
                            component={RouterLink}
                            to="/signup"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            className={classes.button}
                            style={{ color: '#FFFFFF' }}
                        >
                            Create Account
                        </Button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Login;
