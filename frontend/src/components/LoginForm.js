import React, { useState } from 'react';
import Logo from '../images/logo.svg';
import { TextField, Typography, Button, InputAdornment, makeStyles, CssBaseline, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.type,
      padding: theme.spacing(3),
    },
    svg: {
        fill: theme.palette.secondary.main,
    },
  }));

export default function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const classes = useStyles();
    //const onSubmit = (e) => {
    //    e.preventDefault();
    //}

    const onEmailChange = (e) => setEmail(e.target.value)
    const onPasswordChange = (e) => setPassword(e.target.value)
    const onSubmit = (e) => props.tryLogin(email, password)

    return (
        <main className={classes.content}>
            <CssBaseline />
            <Grid container direction='column' justify='center' alignItems='center'>
                <img alt="logo" src={Logo} width={160}/>
                <br/>
                <Typography style={{padding: 2, fontWeight: 1000, fontSize: 50}}>
                        Log in to Lorelines
                </Typography>
                <TextField
                    required
                    name="email"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    autoComplete="off"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.65 29.65" width={30}>
                                    <title>icon_email</title>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path className="cls-1" d="M21,16.72a4.94,4.94,0,0,1-6.31,0L1.22,5.54A.75.75,0,0,0,0,6.12V25.47a4.18,4.18,0,0,0,4.18,4.18H31.47a4.18,4.18,0,0,0,4.18-4.18V6.12a.75.75,0,0,0-1.23-.58Z"/>
                                            <path className="cls-1" d="M16.58,14.42a2,2,0,0,0,2.48,0L34,2A.73.73,0,0,0,34,.88,4.09,4.09,0,0,0,31.47,0H4.18A4.09,4.09,0,0,0,1.64.88.72.72,0,0,0,1.65,2Z"/>
                                        </g>
                                    </g>
                                </svg>
                            </InputAdornment>
                        )
                    }}
                    value={email}
                    onChange={onEmailChange}
                    
                />
                <TextField
                    required
                    name="password"
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    type="password"
                    autoComplete="off"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.65 36.56" width={30}>
                                    <title>icon_lock</title>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path className="cls-1" d="M33.76,16.32a1.88,1.88,0,0,1-1.88-1.88V13.08C31.88,5.87,25.57,0,17.82,0s-14,5.87-14,13.08v1.36a1.89,1.89,0,0,1-1.89,1.88h0A1.89,1.89,0,0,0,0,18.21V32.38a4.18,4.18,0,0,0,4.18,4.18H31.47a4.18,4.18,0,0,0,4.18-4.18V18.21a1.89,1.89,0,0,0-1.89-1.89Zm-14,11.46v4a.74.74,0,0,1-.74.74H16.63a.74.74,0,0,1-.75-.74v-4a1.72,1.72,0,0,0-.55-1.24,3.61,3.61,0,1,1,5,0A1.7,1.7,0,0,0,19.76,27.78ZM25,16.32H10.65a1.88,1.88,0,0,1-1.88-1.88V13.08C8.77,8.62,12.83,5,17.82,5s9.06,3.62,9.06,8.08v1.36A1.88,1.88,0,0,1,25,16.32Z"/>
                                        </g>
                                    </g>
                                </svg>
                            </InputAdornment>
                        )
                    }}
                    value={password}
                    onChange={onPasswordChange}
                />
                <Button style={{padding:5, fontSize:22, borderRadius:"50px", width:"260px"}} color="primary" variant="contained" onClick={onSubmit}>
                    Log in
                </Button>
                <Typography style={{padding:5, fontSize:16}}>
                    I forgot <a href="localhost:3000">my password</a>
                </Typography>
                <Typography style={{padding:30, fontSize:20}}>
                    Don't have a Lorelines account? <a href="localhost:3000">Click here</a>
                </Typography>
            </Grid>
        </main>
    );
}