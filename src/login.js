import React, { Component } from "react";
import "./login.css";
import Main from './header'
import Header from "./header";


export default class extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            x: [],
            islogin: true,
            ismain: false,

        }
    }

    onemailchange = (e) => {
        this.setState({ email: e.target.value })
    }

    onepasschange = (e) => {
        this.setState({ password: e.target.value })
    }


    click = (e) => {

        let x = JSON.parse(localStorage.getItem('regis'));

        for (let index = 0; index < x.length; index++) {
            if (x[index].email == this.state.email && x[index].password == this.state.password) {
                localStorage.setItem('logedinuser', this.state.email)
                window.location.href = "add-student"
            } else {
                alert('na')
            }
        }




        // let array = this.state.array;

        // array.push({
        //     email: this.state.email,
        //     password: this.state.password,
        // });

        // localStorage.setItem('local1', JSON.stringify(array))

        // this.setState({ array: array })

        // window.location.href = 'add-student'


    }

    render() {
        return (
            <div>

                <div className="main">
                    <div>
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


            </div>)
    }
}
