import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'


import Home from "./pages/Home"
import AllApartments from "./pages/AllApartments"
import Apartment from "./pages/Apartment"
import NewUser from "./pages/NewUser"
import NavigationBar from "./pages/NavigationBar"
import PageNotFound from "./pages/PageNotFound"
import UserIn from "./pages/UserIn"




class Unauthenticated extends React.Component {
  render () {
    console.log("out",this.props);
    return (
      <Router>
        <div>
        <NavigationBar userDetails={this.props}/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/users/sign_in" exact component={Home}/>
              <Route path="/apartments" exact component={AllApartments}/>
              <Route path="/users/sign_in" exact component={UserIn}/>
              <Route path="/apartment/:id" exact component={Apartment}/>
              <Route component={PageNotFound}/>
            </Switch>
          </div>
      </Router>
    )
  }
}

export default Unauthenticated
