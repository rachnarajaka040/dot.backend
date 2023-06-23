import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  makeStyles,
  Link,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './logo.png';
import axios from 'axios';
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

const Signup = () => {
    const classes = useStyles();
    const [data ,setData]=useState({});
  function handleChange(e){
    setData({
      ...data,[e.target.name]:e.target.value
    })
    
  }
  async function postUserSignUp() {
    try {
      console.log("data1");
      const response = await axios.post('http://localhost:4001/api/v1/user/register',data);
      console.log("data");
      console.log('Response:', response.data);
      return response.data;
    }
    catch (error) { console.error('Error:', error.response.data); throw error; }
  }

   return (
    <Box className={classes.container}>
      <Container maxWidth="xs">
        <Box className={classes.formContainer}>
          <img src={Logo} alt="Company Logo" className={classes.logo} />
          <Typography variant="h4" align="center" gutterBottom>
            Signup
          </Typography>
          <form>
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
            <FormControl component="fieldset" className={classes.textField}>
              <FormLabel component="legend" className={classes.genderLabel}>Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                onChange={handleChange}
                row
              >
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={postUserSignUp}
            >
              Signup
            </Button>
            <Typography variant="body2" align="center">
              Already have an account?{' '}
              <Link component={RouterLink} to="/login" className={classes.link}>
                Login
              </Link>
            </Typography>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
