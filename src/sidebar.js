import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='anchor'>
                    <a href='add-student' className='Addstudent'>Add Student</a>

                </div>
                <div className='anchor'>
                    <a href='view-student' className='Addstudent'>view Student</a>
                </div>
            </div>
        )
    }
}
