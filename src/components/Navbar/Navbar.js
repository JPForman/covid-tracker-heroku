import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
          <Link to='/' className='navbar-brand'>ExcerTracker</Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='navbar-item'>
                <Link to='/' className='nav-link'>By Country</Link>
              </li>
              <li className='navbar-item'>
                <Link to='/state' className='nav-link'>By State</Link>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}
