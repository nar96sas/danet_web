import React from 'react';

export default class Player extends React.Component {
    initPlayer() {
        $('.player-inside').empty();
        $('.player-inside').append("<video id='video' class='video-js vjs-default-skin' controls>"
            + "<source src=" + this.props.src + " type='application/x-mpegURL' />"
            + "</video>");
        
        this.player = videojs('video');

        var options = {
            id: 'video',
            adTagUrl: this.props.adTag
        };

        // This must be called before player.play() below.
        this.player.ima(options);
        this.player.ima.requestAds();
        // On mobile devices, you must call initializeAdDisplayContainer as the result
        // of a user action (e.g. button click). If you do not make this call, the SDK
        // will make it for you, but not as the result of a user action. For more info
        // see our examples, all of which are set up to work on mobile devices.
        //this.player.ima.initializeAdDisplayContainer();

        // This must be called after player.ima(...) above.
        this.player.play();
    }

    render() {
        return (
            <div className='player-inside' data-vjs-player>
                <div className='placeholder-play-button'>
                    <span className='pe-7s-play' onClick={this.initPlayer.bind(this)}> </span>
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
