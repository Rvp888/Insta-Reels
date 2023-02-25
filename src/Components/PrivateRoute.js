
import React, { Component } from 'react';

export default class PrivateRoute extends Component {

    constructor() {
        super()
        const user = JSON.parse(localStorage.getItem("users")) || {};
        this.state = {
            user: user
        }
    }

    render() {
        if (Object.keys(this.state.user).length == 0) {
            window.location.href = '/login';
        }
        return this.props.children;
    }
}