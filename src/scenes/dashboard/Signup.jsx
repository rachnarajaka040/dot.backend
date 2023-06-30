import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  makeStyles,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
} from '@material-ui/core';
import Logo from '../dashboard/images/logo.png';
import { userSignup } from '../../apis/users';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  genderLabel: {
    color: theme.palette.common.white,
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
      marginTop: theme.spacing(1),
    },
  },
  textField: {
    
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

const Signup = () => {
  const classes = useStyles();
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormInput = (e) => {
    e.preventDefault();
    console.log(data);
    userSignup(data);
    console.log(userSignup(data) + 'database');
  };

  return (
    <Box className={classes.container}>
      <Container maxWidth="xs">
        <Box className={classes.formContainer}>
          <img src={Logo} alt="Company Logo" className={classes.logo} />
          <Typography variant="h4" align="center" gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleFormInput}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  type="text"
                  className={classes.textField}
                  onChange={handleChange}
                  name="firstName"
                  required
                  InputProps={{
                    style: { color: '#FFFFFF' },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  type="text"
                  className={classes.textField}
                  onChange={handleChange}
                  name="lastName"
                  required
                  InputProps={{
                    style: { color: '#FFFFFF' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  type="email"
                  className={classes.textField}
                  onChange={handleChange}
                  name="email"
                  required
                  InputProps={{
                    style: { color: '#FFFFFF' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  type="text"
                  className={classes.textField}
                  onChange={handleChange}
                  name="mobile"
                  required
                  InputProps={{
                    style: { color: '#FFFFFF' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  className={classes.textField}
                  onChange={handleChange}
                  name="password"
                  required
                  InputProps={{
                    style: { color: '#FFFFFF' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Role"
                  type="text"
                  className={classes.textField}
                  onChange={handleChange}
                  name="role"
                  required
                  InputProps={{
                    style: { color: '#FFFFFF' },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.textField}>
                  <FormLabel component="legend" className={classes.genderLabel}>
                    Gender
                  </FormLabel>
                  <RadioGroup aria-label="gender" name="gender" onChange={handleChange} row>
                    <FormControlLabel
                      value="male"
                      control={<Radio color="primary" />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio color="primary" />}
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
            Register
            </Button>
            {/* <Typography variant="body2" align="center">
              Already have an account?{' '}
              <Link component={RouterLink} to="/" className={classes.link}>
                Login
              </Link>
            </Typography> */}
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
