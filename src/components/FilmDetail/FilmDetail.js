import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image/Image.js';
import Description from '../Description/Description.js';

export default class FilmDetail extends React.Component {
    render() {
        const { title, description, rating, genres, release_year, poster, starings } = this.props;

        return (
            <div className='module-program multi-collapse collapse' id='film-detail'>
                <div className='module-inside active'>
                    <div className='obj'>
                        <div className='obj-inside'>
                            <Image image={poster[0].url} size='275x275' />
                            <Description
                                title={title}
                                description={description}
                                rating={rating}
                                genres={genres}
                                release={release_year} />
                            {
                                //summary
                                this.props.description != null &&
                                <p className='desc-summary' style={{ display: 'block' }}>
                                    {
                                        this.props.description
                                    }
                                </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


