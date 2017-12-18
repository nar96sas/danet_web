import React from 'react';
import Artist from './Artist.js';
import { customArtists } from '../../static/js/carousel.js';

export default class ListArtist extends React.Component {
    render() {
        return (
            <div className='module-artists multi-collapse collapse' id='artists'>
                <div className='title-artists title-main'> Nghệ sĩ tham gia </div>
                <div className='module-inside artists'>
                    {
                        this.props.starings.map((artist, index) => <Artist key={index} {...artist} />)
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        customArtists();
    }

    componentWillUnmount() {
        $('.artists').slick('unslick');
    }
}
