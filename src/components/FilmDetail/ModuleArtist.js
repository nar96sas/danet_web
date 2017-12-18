import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image/Image.js';
import Description from '../Description/Description.js';

export default class ModuleArtist extends React.Component {
    render() {
        const { title, rating, genres, release_year, poster } = this.props;

        return (
            <div className='obj'>
                <div className='obj-inside'>
                    <Image image={poster[0].url} size='275x275' />
                    <Description
                        title={title}
                        rating={rating}
                        genres={genres}
                        release={release_year} />
                </div>
            </div>
        )
    }

    componentDidUpdate() {
        $('.category-loading').remove();
    }
}


