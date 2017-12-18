import React from 'react';
import playlist from '../../data/playlist.js';
import Video from './Video.js';
import { customPlaylist } from '../../static/js/carousel.js';

export default class ModuleVideo extends React.Component {
    render() {
        const { list } = playlist;
        const mainFilm = list[0];
        var remainingFilm = list.slice(0); //clone list film
        remainingFilm.shift(); //get the remaining film

        return (
            <div className='module-video'>
                <h2 className='title-main'> {this.props.title} </h2>
                <div className='module-inside clearfix'>
                    <Video isMain={true} {...mainFilm} />
                    <div className='playlist'>
                        {
                            remainingFilm.map((film, index) => <Video key={index} isMain={false} {...film} />)
                        }
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        customPlaylist();
        $('<div class="clear"></div>').insertAfter('.obj.main');
    }

    componentWillUnmount() {
        $('.playlist').slick('unslick');
    }
}


