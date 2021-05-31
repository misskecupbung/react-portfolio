import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Beranda extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="beranda-grid">
                    <Cell col={12}>
                        <img src="https://cdn.dribbble.com/users/458522/screenshots/2375877/the_last_airbender___aang___dribbbler.jpg?compress=1&resize=400x300" alt="avatar" className="avatar-img"/>
                        <div className="banner-txt">
                            <h1>Web 3 Master</h1>
                            <hr/>
                            <p>HTML/CSS | PHP | MySQL | BootStrap | JavaScript | React | React Native | Codeigniter | Laravel</p>
                            <div className="social-links">
                                <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                                </a>
                                <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                                </a>
                                <a href="https://github.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                                </a>
                                <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Beranda;
