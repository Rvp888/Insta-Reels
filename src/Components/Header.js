import React, { Component } from 'react';
import { Button } from '@mui/material';
import profileImage from '../Images/profile-pic.png';
import InstaLogo from '../Images/instagram-logo.png';
import './CSS/Header.css';
import { Link, useHistory } from 'react-router-dom';



export default class Header extends Component {

    render() {
        return (
            <div className='header'>
                <Link to='/'>
                    <img src={InstaLogo} alt='' className='insta-logo' />
                </Link>
                <div className='header-actions'>
                    <Link to='/profile'>
                        <img src={profileImage} alt="" className='profile-image' />
                    </Link>
                    <Button className='Logout' variant='outlined' color='error' onClick={this.props.signout}>Logout</Button>
                </div>
            </div>
        )
    }
}
