import React, { Component } from 'react'
import Header from './header'
import Sidebar from './sidebar'

export default class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <Sidebar />
                {this.props.children}
            </>
        )
    }
}
