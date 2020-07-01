import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import firebase, { auth } from '../assets/firebase';
import { colors } from '../assets/constants';

const useStyles = makeStyles({
  root: {
    margin: '100px auto 20px',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    border: `1px solid ${colors.GOLD}`,
    borderRadius: '5px',
    backgroundColor: `${colors.BACKGROUND_COLOR}`,
  },
  button: {
    margin: '0 auto',
    width: '100px',
  },
  label: {
    position: 'fixed',
    color: `${colors.GOLD}`,
    fontSize: '12px',
    padding: '0 5px',
    backgroundColor: `${colors.BACKGROUND_COLOR}`,
    transform: 'translate(-160px, -7px)',
  },
  input: {
    marginBottom: '20px',
  },
});

const emptyCredentials = {
  email: '',
  password: '',
};

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [credentials, setCredentials] = useState(emptyCredentials);

  const updateCredintials = (key, value) => {
    let newCredentials = {...credentials};
    newCredentials[key] = value;
    setCredentials(newCredentials);
  };

  const handleChange = event => {
    updateCredintials(event.target.name, event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try { 
      await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      const { user } = await auth.signInWithEmailAndPassword(credentials.email, credentials.password);
      if (user) {
        history.push('/');
      }
    } catch(err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* <span className={classes.label}>Login</span> */}
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField className={classes.input} variant="outlined" name="email" label="Email" type="email" value={credentials.email} onChange={handleChange} />
        <TextField className={classes.input} variant="outlined" name="password" label="Password" type="password" value={credentials.password} onChange={handleChange} />
        <Button className={classes.button} type="submit" variant="outlined">
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
