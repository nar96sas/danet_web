import React from 'react';
import ReactModal from 'react-modal';

export default class CustomModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ isOpen: true });
    }

    handleCloseModal() {
        this.setState({ isOpen: false });
    }

    render() {
        ReactModal.setAppElement('#main');
        
        return (
            <div>
                <button id={this.props.triggerId}
                    onClick={this.handleOpenModal}
                    style={{ display: 'none' }} > Trigger Modal </button>
                <ReactModal
                    isOpen={this.state.isOpen}
                    contentLabel={this.props.label}
                    onRequestClose={this.handleCloseModal}
                    className={'modal-content ' + this.props.id}
                    overlayClassName={'z-modal'}>
                    {
                        this.props.children
                    }
                    <button className='close-modal'
                        onClick={this.handleCloseModal}
                        style={{ display: 'none' }}> Close Modal </button>
                </ReactModal>
            </div>
        )
    }
}