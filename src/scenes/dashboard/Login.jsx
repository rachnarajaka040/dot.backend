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
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailPhoneChange = (e) => {
    setEmailPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email/Phone:', emailPhone);
    console.log('Password:', password);
    // Reset form fields
    setEmailPhone('');
    setPassword('');
  };

  return (
    <Box className={classes.container}>
      <Container maxWidth="xs">
        <Box className={classes.formContainer}>
          <img src={Logo} alt="Company Logo" className={classes.logo} />
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email or Phone"
              type="text"
              className={classes.textField}
              value={emailPhone}
              onChange={handleEmailPhoneChange}
              required
            />
            <TextField
              label="Password"
              type="password"
              className={classes.textField}
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
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
              variant="outlined"
              color="primary"
              fullWidth
              className={classes.button}
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
