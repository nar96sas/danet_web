import React from 'react';

export default class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    selectTab(tab) {
        this.setState({ activeTab: tab });
    }

    render() {  
        return (
            <ul className='menu-list'>
                {
                    this.props.header.map((item, index) =>
                        <li key={index}
                            className={this.state.activeTab == index ? 'is-active' : ''}>
                                <a  className='tab' 
                                    onClick={this.selectTab.bind(this, index)}>
                                        <span className='tab-txt'> 
                                            {item.title} 
                                        </span>
                                </a>
                        </li>)
                }
            </ul>
        )
    }
}