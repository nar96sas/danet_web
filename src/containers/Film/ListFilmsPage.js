import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../../components/Slider/Slider.js';
import CategoryBar from '../../components/CategoryBar/CategoryBar.js';
import Categories from '../../components/CategoryBar/Categories.js';
import Header from '../../components/Header/Header.js';
import ModuleVideo from '../../components/Playlist/ModuleVideo.js';
import Signin from '../../components/Authentication/Signin.js';

export default class ListFilmsPage extends React.Component {
    render() {
        const categoryId = this.props.match.params.category;

        return (
            <div>
                <Header />
                <div className='wrap-content'>
                    <Categories selectCategory={categoryId}/>
                    <Slider />
                    <CategoryBar selectCategory={categoryId} />
                    <ModuleVideo title='Video phim mới cập nhật' />
                    <ModuleVideo title='Glee việt nam' />
                    <ModuleVideo title='Phim chuyển thể' />
                    <ModuleVideo title='Phim hàn đặc sắc' />
                    <ModuleVideo title='Phim thái lan' />
                    <ModuleVideo title='Phim hoa ngữ' />
                </div>
                <Signin />
            </div>
        )
    }
}
