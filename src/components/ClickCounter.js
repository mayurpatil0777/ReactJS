import React, { Component } from 'react';

class ClickCounter extends Component {
    
    
    render() {
        let {clickCount,count,name}=this.props;
        return (
            <div>
                <button type="btn btn-primary" onClick={clickCount}>Clicked {count} times</button>
            </div>
        );
    }
}

export default ClickCounter