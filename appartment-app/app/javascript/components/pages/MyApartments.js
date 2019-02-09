import React from "react"
import PropTypes from "prop-types"
import {Table, NavItem, Button} from 'react-materialize'
import {Link} from 'react-router-dom'

class AllApartments extends React.Component {
  state={
    apartments:[],
  }

  componentDidMount(){
    //talk to the end point to get all dvds
      fetch('/apartments.json')
      //when promise is fufilled parse to json
      .then((response) => response.json())
      //then set state of dvds to the json payload
      .then((json) => {
        this.setState({apartments: json})
      })
      .catch((e)=>{
        console.log("Error", e)
      })
  }

  render () {
    return (
      <div>
      <Table>
  <thead>
    <tr>
      <th data-field="name">Name</th>
      <th data-field="city">City</th>
      <th data-field="state">State</th>
      <th data-field="zip">Zip Code</th>
      <th data-field="button"></th>
    </tr>
  </thead>

  <tbody>
  {this.state.apartments.map((apartment, index) => {
    return(
      <tr key={index}>
      <td>{apartment.listing_name}</td>
      <td>{apartment.city}</td>
      <td>{apartment.state}</td>
      <td>{apartment.zip_code}</td>
      <td><Link to={"/apartment/" + apartment.id}><Button waves='light'>View Details</Button></Link></td>
      </tr>
    )
  })}
  </tbody>
</Table>
</div>
    )
  }
}

export default AllApartments
