import React, { Component } from 'react'
import logo from './logo.png';
export default class Header extends Component {

    state = {
        email: '',
    }

    componentDidMount() {

        this.setState({ email: localStorage.getItem('logedinuser') })

    }



    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between fixed-top">
                    <a class="navbar-brand" href="#"><img src={logo}></img></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <h5 className='abc'>{this.state.email}</h5>

                    </div>
                </nav>
            </>

        )
    }
}
