import React, { Component } from 'react';


class WithCounter extends Component {
    constructor(props) {
        super(props);
        this.state={
            clickCount:0,
            hoverCount:0
        }
    }
    
    clickCount=()=>{
        
      this.setState({
         'clickCount':this.state.clickCount + 1
      })  
      console.log("yesss",this.state.count)
    }
    hoverCount=()=>{
        
        this.setState({
           'hoverCount':this.state.hoverCount + 1
        })  
        console.log("yesss",this.state.count)
      }
    
    render() {
        return (
            <div>
                {/* <ClickCounter clickCount={this.clickCount} count={this.state.clickCount}></ClickCounter> */}
                {/* <HoverCounter hoverCount={this.hoverCount} count={this.state.hoverCount}></HoverCounter> */}
            </div>
        );
    }
    
}

export default WithCounter;