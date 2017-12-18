import React from 'react';
import search from '../../data/search.js';
import Header from '../../components/Header/Header.js';
import ModuleArtist from '../../components/FilmDetail/ModuleArtist.js';
import Signin from '../../components/Authentication/Signin.js';

export default class ArtistPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastPosition: 5
        }
    }

    render() {
        const artistName = this.props.match.params.name;
        var currentList = search.slice(0, this.state.lastPosition);

        return (
            <div>
                <Header />
                <div className='wrap-content'>
                    <div className='module-program artist-film'>
                        <div className='title-program'> {artistName} </div>
                        <div className='module-inside'>
                            {
                                currentList.map((film, index) => <ModuleArtist key={index} {...film} />)
                            }
                        </div>
                        <span className='to-top pe-7s-angle-up'> </span>
                    </div>
                </div>
                <Signin />
            </div>
        )
    }

    componentDidMount() {
        var listSize = search.length;
        $(window).scroll(() => {
            if ($(window).scrollTop() + $(window).height() == $(document).height()) { //scroll to bottom
                if (this.state.lastPosition <= listSize) {
                    $('.module-program').append("<div class='category-loading'> </div>")
                    this.setState({ lastPosition: this.state.lastPosition + 5 });
                }
            }
        });

        $('.to-top').click(function () {
            window.scrollTo(0, 0);
        })
    }
}
