import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <a href="#default" className="logo">CompanyLogo</a>
                    <div className="header-right">
                        <a className="active" href="#home">Home</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;