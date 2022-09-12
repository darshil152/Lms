import React, { Component } from 'react'
import Layout from './layout'

export default class Table extends Component {



    render() {
        return (
            <Layout>
            <div>
                <table>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>profile</th>
                        <th>standard</th>
                        <th>gender</th>
                        <th>Profession</th>
                    </tr>
                    <tbody>
                    {JSON.parse(localStorage.getItem('students')).map((items, i) => {
                        return (
                            <tr>
                                <th>{items.name}</th>
                                <th>{items.email}</th>
                                <th><img src={items.pic} /></th>
                                <th>{items.standard}</th>
                                <th>{items.gender}</th>
                                <th>{items.pro}</th>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            </Layout>
        )
    }
}
