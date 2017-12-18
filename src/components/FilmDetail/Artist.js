import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image/Image.js';
import Description from '../Description/Description.js';

export default class Artist extends React.Component {
    render() {
        const { staring_name, avatar_thumbnail } = this.props;

        return (
            <div className='obj'>
                <div className='obj-inside'>
                    <a className='link-obj'> </a>
                    <Link to={'/artist/' + staring_name} >
                        <Image size='210x120' image={avatar_thumbnail} />
                        <Description title={staring_name} normal={true} />
                    </Link>
                </div>
            </div>
        )
    }
}
