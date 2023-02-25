import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./CSS/SignUp.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, TextField } from '@mui/material';
import InstaLogo from '../Images/instagram-logo.png';


export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleClick =() => {
        this.props.signup(this.state.email, this.state.password);
    }

    handleGoogleClick =() => {
        this.props.signUpWithGoogle();
    }

    render() {
        return (
            <div className='loginWrapper'>
                <div className='loginCard'>
                    <Card variant="outlined">
                        <div className='insta-logo'>
                            <img src={InstaLogo} alt="" />
                        </div>
                        <CardContent>
                            <TextField label="Email" variant='outlined' fullWidth={true} onChange={(e) => this.setState({email: e.target.value})} />
                            <TextField label="Full Name" variant='outlined' fullWidth={true} onChange={(e) => this.setState({username: e.target.value})} />
                            <TextField label="Password" type="password" variant='outlined' fullWidth={true} onChange={(e) => this.setState({password: e.target.value})} />
                        </CardContent>
                        <CardActions>
                            <Button color='primary' variant='contained' fullWidth={true} onClick={this.handleClick}>Sign Up</Button>
                            <Button color='primary' variant='contained' fullWidth={true} onClick={this.handleGoogleClick}>Login with Google</Button>
                        </CardActions>
                        <div>Forgotten your password ?</div>
                    </Card>
                    <Card variant='outlined'>
                        <CardContent>
                            <div className='dont-have-account'>Already have an account ? <Link to='/login'>Login</Link></div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}
