import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { auth } from '../assets/firebase';

const useStyles = makeStyles({
  root: {
    margin: '100px auto 20px',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    border: '1px solid #CBCBCB',
    borderRadius: '5px',
    backgroundColor: '#FFF',
  },
  button: {
    margin: '0 auto',
    width: '100px',
  },
  label: {
    position: 'fixed',
    color: '#CBCBCB',
    fontSize: '12px',
    padding: '0 5px',
    backgroundColor: '#FFF',
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

const Login = props => {
  const classes = useStyles();
  const { setIsSignedIn } = props;
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
      const { user } = await auth.signInWithEmailAndPassword(credentials.email, credentials.password);
      if (user) {
        setIsSignedIn(true);
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
