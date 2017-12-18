import React from 'react';

export default class Input extends React.Component {
    render() {
        const { type } = this.props;

        return (
            <div className='line-form has-ico'>
                {
                    type == 'phone' &&
                    <input type='tel' id='phone' placeholder='Số điện thoại' name='phone-num' />
                }
                {
                    type == 'password' &&
                    <input type='password' id='password' placeholder='Mật khẩu' name='password' pattern=".{6}"/>
                }
                {
                    type == 'firstname' &&
                    <input type='text' id='firstname' placeholder='Họ' name='firstname' />
                }
                {
                    type == 'lastname' &&
                    <input type='text' id='lastname' placeholder='Tên' name='lastname' />
                }
                {
                    type == 'username' &&
                    <input type='text' id='username' placeholder='Tên ngừoi dùng' name='username' />
                }
            </div>
        )
    }
}