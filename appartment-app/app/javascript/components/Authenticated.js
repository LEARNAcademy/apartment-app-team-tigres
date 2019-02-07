import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


import Home from "./pages/Home"
import NewUser from "./pages/NewUser"

class Authenticated extends React.Component {
  render () {
    return (
      <div>
      <h1>Authenticated Page</h1>
      </div>

    )
  }
}

export default Authenticated
