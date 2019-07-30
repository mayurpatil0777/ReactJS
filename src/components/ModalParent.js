import React, { Component } from 'react';
import Modal from './Modal'

class ModalParent extends Component {
    constructor() {
        super();

        this.state = {
            isShowing: false,
            one:''
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    a=(e)=>{
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => { console.log(this.state); });
//        console.log("wow",e.target.name)
    }

    render() {
        return (
            <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                        Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                </Modal>

                <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">First Name</span>
                        </div>
                        <input type="text" className="form-control" name="one" value={this.state.one} onChange={this.a} required></input>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">First Name</span>
                        </div>
                        <input type="text" className="form-control" name="b" onChange={this.a} required></input>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">First Name</span>
                        </div>
                        <input type="text" className="form-control" name="c" onChange={this.a} required></input>
                    </div>
            </div>
        );
    }
}

export default ModalParent;