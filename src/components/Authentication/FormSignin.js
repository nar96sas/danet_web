import React from 'react';
import Input from './Input.js';

export default class FormSignin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notify: ''
        }
    }

    submit() {
        if ($('#phone').val() == '')
            this.setState({notify: 'Please enter an phone number'});
        else if ($('#password').val() == '')
            this.setState({notify: 'Please enter an password'});
    }

    render() {
        return (
            <div className='form'>
                {
                    this.state.notify != '' &&
                    <WrongInput error={this.state.notify} />
                }
                <div className='form-signin'>
                    <Input type='phone' />
                    <Input type='password' />
                </div>
                <div className='signin-option'>
                    <div className='col-xs-6'> <RememberSignin /> </div>
                    <div className='col-xs-6'> <ForgotPassword /> </div>
                </div>
                <button type='submit' className='btn-signin' onClick={this.submit.bind(this)}> Đăng nhập </button>
            </div>
        )
    }
}

class RememberSignin extends React.Component {
    render() {
        return (
            <div className='checkbox'>
                <label>
                    <input id='rememberMe' type='checkbox' />
                    <span> Ghi nhớ tài khoản </span>
                </label>
            </div>
        )
    }
}

class ForgotPassword extends React.Component {
    render() {
        return (
            <a> Quên mật khẩu? </a>
        )
    }
}

class WrongInput extends React.Component {
    render() {
        return (
            <div className='error'>
                <div className='alert alert-danger'>
                    <span> {this.props.error} </span>
                </div>
            </div>
        )
    }
}