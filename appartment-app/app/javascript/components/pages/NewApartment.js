import React from "react"
import PropTypes from "prop-types"
import {Row, Input, Button} from 'react-materialize'
import {Redirect} from "react-router-dom"

class NewApartment extends React.Component {
  state = {
    responseOk: false,
    apartmentAttributes:{
      listing_name:"",
      address_1:"",
      address_2:"",
      city:"",
      state:"",
      zip_code:"",
      management_company:"",
      management_company_phone:"",
      opening_time:"",
      closing_time:"",
    }
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    fetch('/apartments.json', {
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(this.state.apartmentAttributes)
    })
    .then((response)=>{
      this.setState({responseOk:true})
    })
  }


  handleChange = (event) =>{
    const { apartmentAttributes } = this.state
    apartmentAttributes[event.target.name] = event.target.value
    this.setState({ apartmentAttributes:apartmentAttributes })
  }

  render () {
    const {responseOk} = this.state
    console.log(this.state);
    return (
      <div>
        {responseOk && <Redirect to="/apartments" />}
        <h1>Add an Apartment</h1>
        <Row>
        <form onSubmit={this.handleSubmit}>
          <Input onChange={this.handleChange} s={12} name="listing_name" label="Listing Name" />
          <Input onChange={this.handleChange} s={12} name="address_1" label="Address 1" />
          <Input onChange={this.handleChange} s={12} name="address_2" label="Address 2" />
          <Input onChange={this.handleChange} s={4} name="city" label="City" />
          <Input onChange={this.handleChange} s={4} name="state" label="State" />
          <Input onChange={this.handleChange} s={4} name="zip_code" label="Zip Code" />
          <Input onChange={this.handleChange} s={6} name="management_company" label="Management Company" />
          <Input onChange={this.handleChange} s={6} name="management_company_phone" label="Contact Number" />
          <Input onChange={this.handleChange} s={6} name="opening_time" label="Opening Time" />
          <Input onChange={this.handleChange} s={6} name="closing_time" label="Closing Time" />
          <Button type="submit">Submit</Button>
          </form>
        </Row>
      </div>
    )
  }
}

export default NewApartment
