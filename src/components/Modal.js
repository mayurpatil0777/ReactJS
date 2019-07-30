import React from 'react';

const Modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translate(-50%,-50%)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h4>Modal Header</h4>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-continue btn-sm" onClick={props.close}>Save</button>
                    <button className="btn-cancel btn-sm">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;