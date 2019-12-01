import React, {Component} from 'react';
import Logo from '../images/logo.svg';
import EmailIcon from '../images/icon_email.svg'
import LockIcon from '../images/icon_lock.svg'
import { TextField, Typography, Button, Box, InputAdornment } from '@material-ui/core'

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    onChange = (e) => this.setState({[e.target.name] : e.target.value})

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <img alt="logo" src={Logo} width={100}/>
                    <br/>
                    <Typography>
                        <Box fontWeight={1000} fontSize={50}>
                            Log in to Lorelines
                        </Box>
                    </Typography>

                    <div>
                        <TextField
                            required
                            name="email"
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img alt="logo" src={EmailIcon} width={30}/>
                                    </InputAdornment>
                                )
                            }}
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    </div>

                    <div>
                        <TextField
                            required
                            name="password"
                            label="Password"
                            variant="outlined"
                            margin="normal"
                            type="password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img alt="logo" src={LockIcon} width={30}/>
                                    </InputAdornment>
                                )
                            }}
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                    </div>

                    <Box padding={1}>
                        <Button style={{color:"#fff", backgroundColor:"#f78d1e", borderRadius:"50px", width:"200px"}} size="large" variant="contained">Log in</Button>
                        <Typography>
                            <Box padding={1} fontSize={16}>
                                I forgot <a href="localhost:3000">my password</a>
                            </Box>
                        </Typography>
                    </Box>
                    <Typography>
                        <Box padding={3} fontSize={20}>
                            Don't have a Lorelines account? <a href="localhost:3000">Click here</a>
                        </Box>
                    </Typography>
                </form>
            </div>
        );
    }
}

export default LoginForm;
