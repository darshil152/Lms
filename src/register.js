import React, { Component } from 'react'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'

export default class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            temparray: [],
        }
    }

    onenamechange = (e) => {
        this.setState({ name: e.target.value })
    }

    onemailchange = (e) => {
        this.setState({ email: e.target.value })
    }
    onepasschange = (e) => {
        this.setState({ password: e.target.value })
    }

    click = (e) => {

        let y = localStorage.getItem('regis') ? JSON.parse(localStorage.getItem('regis')) : []

        if (y.length > 0) {
            let alreadexist = false
            for (let index = 0; index < y.length; index++) {
                if (y[index].email == this.state.email) {
                    // alreadexist = true
                    alert('email already registered')
                    window.location.href = 'register'
                }
            }

            if (alreadexist) {
                y.push({
                    email: this.state.email,
                    password: this.state.password
                })
                localStorage.setItem('regis', JSON.stringify(y))
                window.location.href = 'login'
            } 
        } 
        else {
            y.push({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,  
            })
            localStorage.setItem('regis', JSON.stringify(y));
            window.location.href = 'login'
        }
    }

    render() {
        return (
            <div>
                <div>

                    <div className="form-outline mb-4 col-sm-6" >
                        <label className="form-label" htmlFor="form2Example1">Name</label>
                        <input type="text" onChange={this.onenamechange} id="form2Example1" className="form-control" />
                    </div>
                    <div className="form-outline mb-4 col-sm-6" >
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                        <input type="email" onChange={this.onemailchange} id="form2Example1" className="form-control" />
                    </div>


                    <div className="form-outline mb-4 col-sm-6">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input type="password" onChange={this.onepasschange} id="form2Example2" className="form-control" />
                    </div>

                    <div className="button">
                        <button onClick={this.click} className="btn btn-primary btn-block mb-4 text-justify">Sign in</button>
                    </div>

                </div>
            </div>
        )
    }
}
