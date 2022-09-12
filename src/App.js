import React, { Component } from 'react'
import Login from './login'
import './notfound.css';
import './headeer.css';
import './table.css'
import './addstudent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addstudent from './addstudent';
import Routercontainer from './router-container';


export default class extends Component {
  render() {
    return (
      <div>
        <Routercontainer />
      </div>
    )
  }
}
