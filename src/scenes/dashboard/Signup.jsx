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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    console.log('Gender:', gender);
    // Reset form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
    setGender('');
  };

  return (
    <Box className={classes.container}>
      <Container maxWidth="xs">
        <Box className={classes.formContainer}>
          <img src={Logo} alt="Company Logo" className={classes.logo} />
          <Typography variant="h4" align="center" gutterBottom>
            Signup
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              type="text"
              className={classes.textField}
              value={firstName}
              onChange={handleFirstNameChange}
              required
              InputProps={{
                style: { color: '#FFFFFF' },
              }}
            />
            <TextField
              label="Last Name"
              type="text"
              className={classes.textField}
              value={lastName}
              onChange={handleLastNameChange}
              required
              InputProps={{
                style: { color: '#FFFFFF' },
              }}
            />
            <TextField
              label="Email"
              type="email"
              className={classes.textField}
              value={email}
              onChange={handleEmailChange}
              required
              InputProps={{
                style: { color: '#FFFFFF' },
              }}
            />
            <TextField
              label="Phone Number"
              type="text"
              className={classes.textField}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
              InputProps={{
                style: { color: '#FFFFFF' },
              }}
            />
            <TextField
              label="Password"
              type="password"
              className={classes.textField}
              value={password}
              onChange={handlePasswordChange}
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
                value={gender}
                onChange={handleGenderChange}
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
