import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image/Image.js';
import Description from '../Description/Description.js';

export default class Type extends React.Component {
    render() {
        const { name, poster, views, tag, episodes, slug, showView } = this.props;

        return (
            <div className='obj'>
                <div className='obj-inside'>
                    <Link className='link-obj' to={'/video/' + slug}>
                        <Image size='275x275' image={poster} />
                    </Link>
                    <Description 
                        title={name} 
                        views={showView ? views : null} 
                        genres={tag} 
                        episodes={episodes} 
                        ellipsis={true} />
                </div>
            </div>
        )
    }
}
