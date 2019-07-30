import React, { Component } from 'react';

class HoverCounter extends Component {
    render() {
        let {hoverCount,count}=this.props
        return (
            <div>
                <h1 onMouseOver={hoverCount}>hello counter:{count}</h1>
            </div>
        );
    }
}

export default HoverCounter;