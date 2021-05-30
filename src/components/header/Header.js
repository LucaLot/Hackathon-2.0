import React, { Component } from 'react';
import classes from './Header.module.css';


class Header extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <span className={classes.title}>Check Yourself!</span>
                    <span className={classes.subtitle}>Take our self-care survey to help us learn more about mental health</span>
                </div>

            </div>
        );
    }
}

export default Header;