import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../../components/Slider/Slider.js';
import CategoryBar from '../../components/CategoryBar/CategoryBar.js';
import ModuleVideo from '../../components/Playlist/ModuleVideo.js';

export default class Home extends React.Component {
  render() {
    return (
      <div className='wrap-content'>
        <Slider />
        <CategoryBar />
        <ModuleVideo title='Video mới nổi bật'/>
        <ModuleVideo title='Tv Show'/>
        <ModuleVideo title='Hình sự tâm lý' />
        <ModuleVideo title='Đặc sắc' />
        <ModuleVideo title='Điện ảnh Việt Nam' />
        <ModuleVideo title='Điện ảnh Châu Á' />
      </div>
    )
  }
}
