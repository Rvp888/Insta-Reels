
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import './App.css';
import SignUp from './Components/SignUp';
import './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Profile from './Components/Profile';
import PrivateRoute from './Components/PrivateRoute';

const auth = getAuth();
const provider = new GoogleAuthProvider();

export default class App extends Component {

  constructor() {
    super() 
  }

  signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        window.location.href = '/login';
      })
      .catch((err) => {
        console.log(err);
      })
  };

  login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        localStorage.setItem("users", JSON.stringify(res.user));
        window.location.href = '/';
      })
      .catch((err) => {
        console.log(err);
      })
  };

  signout = () => {
    signOut(auth).then((res) => {
      localStorage.removeItem("users");
      window.location.href = '/login';
    })
      .catch((err) => {
        console.log(err);
      })
  }

  signUpWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem("users", JSON.stringify(user));
        window.location.href = '/';
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login login={this.login} signUpWithGoogle={this.signUpWithGoogle} />}></Route>
            <Route path='/signup' element={<SignUp signup={this.signup} signUpWithGoogle={this.signUpWithGoogle} />}></Route>
            <Route path='/' element={<PrivateRoute><Header signout={this.signout}/><Main /><Footer/></PrivateRoute>}></Route>
            <Route path='/profile' element={<PrivateRoute><Header signout={this.signout}/><Profile /><Footer/></PrivateRoute>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

