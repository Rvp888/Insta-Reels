import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import backgroundImage from '../Images/home-phones.png';
import './CSS/Login.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import Img1 from '../Images/img1.png';
import Img2 from '../Images/img2.png';
import Img3 from '../Images/img3.png';
import Img4 from '../Images/img4.png';
import InstaLogo from '../Images/instagram-logo.png';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Button, CardActions, TextField } from '@mui/material';

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleClick = () => {
        this.props.login(this.state.email, this.state.password);
    }

    handleGoogleClick =() => {
        this.props.signUpWithGoogle();
    }

    render() {
        return (
            <div className='loginWrapper'>
                <div className='imgWrapper' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
                    <div className='img'>
                        <CarouselProvider totalSlides={4} visibleSlides={1} naturalSlideHeight={533} naturalSlideWidth={250} isPlaying={true} interval={2000} dragEnabled={false} infinite={true}>
                            <Slider>
                                <Slide index={0}><Image src={Img1}></Image></Slide>
                                <Slide index={1}><Image src={Img2}></Image></Slide>
                                <Slide index={2}><Image src={Img3}></Image></Slide>
                                <Slide index={3}><Image src={Img4}></Image></Slide>
                            </Slider>
                        </CarouselProvider>
                    </div>
                </div>
                <div className='loginCard'>
                    <Card variant="outlined">
                        <div className='insta-logo'>
                            <img src={InstaLogo} alt=""/>
                        </div>
                        <CardContent>
                            <TextField label="Email" variant='outlined' fullWidth={true} onChange={(e) => this.setState({email: e.target.value})}/>
                            <TextField label="Password" type="password" variant='outlined' fullWidth={true} onChange={(e) => this.setState({password: e.target.value})} />
                        </CardContent>
                        <CardActions>
                            <Button color='primary' variant='contained' fullWidth={true} onClick={this.handleClick}>Log in</Button>
                            <Button color='primary' variant='contained' fullWidth={true} onClick={this.handleGoogleClick}>Login with Google</Button>
                        </CardActions>
                        <div>Forgotten your password ?</div>
                    </Card>
                    <Card variant='outlined'>
                        <CardContent>
                            <div className='dont-have-account'>Don't have an account ? <Link to='/signup'>Sign up</Link></div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}
