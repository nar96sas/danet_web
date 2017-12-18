import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header/Header.js';
import Signin from '../components/Authentication/Signin.js';

export default class Page extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {
                    this.props.children
                }
                <Signin />
            </div>
        )
    }
}
