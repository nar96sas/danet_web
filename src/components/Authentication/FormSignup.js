import React from 'react';
import Input from './Input.js';

export default class FormSignup extends React.Component {
    render() {
        return (
            <div className='form'>
                <div className='form-signup'>
                    <Input type='phone'/>
                    <Input type='password'/>
                    <Input type='firstname'/>
                    <Input type='lastname'/>
                    <Input type='username'/>
                </div>
            </div>
        )
    }
}