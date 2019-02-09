import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'


import Home from "./pages/Home"
import AllApartments from "./pages/AllApartments"
import NewApartment from "./pages/NewApartment"
import MyApartments from "./pages/MyApartments"
import Apartment from "./pages/Apartment"
import NewUser from "./pages/NewUser"
import PageNotFound from "./pages/PageNotFound"
import NavigationBar from "./pages/NavigationBar"
import UserIn from "./pages/UserIn"

class Authenticated extends React.Component {
  constructor(props) {
   super(props)
 }
  render () {
    return (
      <Router>
        <div>
        <NavigationBar userDetails={this.props}/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/users/sign_in" exact component={UserIn}/>
              <Route path="/apartments" exact component={AllApartments}/>
              <Route path="/myapartments" exact component={MyApartments}/>
              <Route path="/apartment/:id" exact component={Apartment}/>
              <Route path="/apartments/new" exact component={NewApartment}/>
              <Route component={PageNotFound}/>
            </Switch>
          </div>
      </Router>

    )
  }
}

export default Authenticated
