import React, { Component } from "react";
import axios from "axios";
export default class table extends Component {
    state = {
        coffee: [],
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://api.sampleapis.com/coffee/hot',
            responseType: 'stream'
        })
            .then((coffee) => {
                this.setState({ coffee: coffee.data });
                console.log(this.state.coffee)
            });
    }
    render() {
        return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>ingredients</th>   
                    <th>image</th>
                </tr>
            </thead>
            <tbody>
                {this.state.coffee.map(coffee =>
                    <tr>
                        <td>{coffee.id}</td>
                        <td>{coffee.title}</td>
                        <td>{coffee.ingredients}</td>                       
                        <td><img src={coffee.image} className='bottle' /></td>
                        {/* <td><img src={customer.image} /></td> */}
                    </tr>
                )}
            </tbody>
        </table>
        )
    }
}