import React from "react"
import PropTypes from "prop-types"

import {Navbar, NavItem} from 'react-materialize'
import { Redirect } from "react-router-dom"


class NavigationBar extends React.Component {

  render () {
    const {loggedOut} = this.state
    console.log(this.props);
    const loggedIn = this.props.userDetails.props.logged_in
    return (
      <div>
        <Navbar brand='Apartment App' right>
        {loggedIn &&
          <div>
          <NavItem href='/'>Home</NavItem>
          <NavItem href='/apartments'>Apartments</NavItem>
          <NavItem href='/MyApartments'>My Apartments</NavItem>
          <NavItem href='/apartments/new'>Add Listing</NavItem>
          <NavItem href='/users/sign_out'>Sign Out</NavItem>
          </div>
        }
        {!loggedIn &&
          <div>
          <NavItem href='/'>Home</NavItem>
          <NavItem href='/apartments'>Apartments</NavItem>
          <NavItem href='/users/sign_in'>Sign In</NavItem>
          </div>
        }

        </Navbar>
      </div>
    )
  }
}

export default NavigationBar
