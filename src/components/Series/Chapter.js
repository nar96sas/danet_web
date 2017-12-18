import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image/Image.js';
import Description from '../Description/Description.js';

export default class Chapter extends React.Component {
    render() {
        const { link, views, sub, cover, currentChapter, showView } = this.props;

        return (
            <div className='obj'>
                <div className='obj-inside'>
                    <Link className='link-obj' to={link}></Link>
                    <Image image={cover} size='210x120'/>
                    <Description title={sub} active={currentChapter} views={showView ? views : null} />
                </div>
            </div>
        )
    }
}
