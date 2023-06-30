import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  makeStyles,
  Link,
  Box,
  Grid,
} from '@material-ui/core';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../dashboard/images/logo.png';
import { userLogin } from '../../apis/users';
import { useNavigate } from 'react-router-dom';

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
    [theme.breakpoints.between(412, 1024)]: {
        marginBottom: theme.spacing(60),
        marginTop: theme.spacing(10),
      },
  },
  textField: {
    
    width: '100%',
    '& label': {
      color: theme.palette.common.white,
    },
  },
  button: {
    margin: theme.spacing(1, 0),
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
  const navigate = useNavigate();

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  async function handleFormInput(e) {
    e.preventDefault();
    console.log(data);
    userLogin(data);
    console.log(userLogin(data) + 'databse');
    navigate('/dashboard');
  }

  return (
    <Box className={classes.container}>
      <Container maxWidth="xs">
        <Box className={classes.formContainer}>
          <img src={Logo} alt="Company Logo" className={classes.logo} />
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleFormInput}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email or Phone"
                  type="text"
                  className={classes.textField}
                  onChange={handleChange}
                  required
                  InputProps={{
                    style: { color: '#FFFFFF' },
                  }}
                  name="email or phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  className={classes.textField}
                  name="password"
                  onChange={handleChange}
                  required
                  InputProps={{
                    style: { color: '#FFFFFF' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" align="center">
                  <Link href="#" className={classes.link}>
                    Forgot password?
                  </Link>
                </Typography>
              </Grid>
              {/* <Grid item xs={12}>
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
              </Grid> */}
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
