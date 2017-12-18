import React from 'react';

export default class BoxSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isDisplay: 'none'
        }
    }

    render() {
        return (
            <div className='box-search' role='search' style={{ display: this.state.isDisplay }}>
                <form>
                    <div className='input-search'>
                        <span className='pe-7s-search'> </span>
                        <input type='text' name='q' placeholder='Nhập từ khoá cần tìm' />
                    </div>
                    <a className='t-close'> Huỷ bỏ </a>
                </form>
            </div>
        )
    }

    componentDidMount() {
        $('.btn-search').click(() => {
            this.setState({isDisplay: 'block'});
            $('.box-header').css('display', 'none');
        });

        $('.t-close').click(() => {
            this.setState({isDisplay: 'none'});
            $('.box-header').css('display', 'block');
        });
    }
}