import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


import Home from "./pages/Home"
import AllApartments from "./pages/AllApartments"
import Apartment from "./pages/Apartment"
import AllApartments from "./pages/AllApartments"
import Apartment from "./pages/Apartment"
import NewUser from "./pages/NewUser"





class Unauthenticated extends React.Component {
  render () {
    return (
      <h1>Unauthenticated Page</h1>
    )
  }
}

export default Unauthenticated
