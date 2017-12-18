import React from 'react';
import Header from '../../components/Header/Header.js';
import ModuleCategory from '../../components/CategoryBar/ModuleCategory.js';
import film_category from '../../data/film_category.js';
import Signin from '../../components/Authentication/Signin.js';

export default class ListFilmsByCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastPosition: 5,
        }
    }

    render() {
        const categoryId = this.props.match.params.type;
        const { category_name, list } = film_category;

        var currentList = list.slice(0, this.state.lastPosition);

        return (
            <div>
                <Header />
                <div className='wrap-content'>
                    <ModuleCategory title={category_name} listFilm={currentList} haveTabBar={true} />
                    <span className='to-top pe-7s-angle-up'> </span>
                </div>
                <Signin />
            </div>
        )
    }

    componentDidMount() {
        var listSize = film_category.list.length;
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
