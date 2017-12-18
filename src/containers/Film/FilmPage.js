import React from 'react';
import Player from '../../components/VideoPlayer/Player_VideoJs.js';
import InfoVideo from '../../components/InfoVideo/InfoVideo.js';
import ModuleChapter from '../../components/Series/ModuleChapter.js';
import product from '../../data/product.js';

export default class FilmPage extends React.Component {
  render() {
    const { src, adTag, sub, episodes, slug } = product;

    return (
      <div className='wrap-content'>
        <div className='player-video'>
          <Player src={src} adTag={adTag} />
          <InfoVideo {...product} />
        </div>
        <div className='space'></div>
        <ModuleChapter sub={sub} slug={slug} {...episodes[0]} />
      </div>
    )
  }
}
