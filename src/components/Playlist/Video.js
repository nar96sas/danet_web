import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image/Image.js';
import Description from '../Description/Description.js';

export default class Video extends React.Component {
    render() {
        const { banner, title, sub, slug, isMain } = this.props;

        return (
            <div className={isMain ? 'obj main' : 'obj'}>
                <div className='obj-inside'>
                    <Link to={'/video/' + slug } className='link-obj'> </Link>
                    <Image image={banner} size='210x120'/>
                    <Description title={title} sub={sub} />
                </div>
            </div>
        )
    }
}


