import React from "react"
import PropTypes from "prop-types"

import {Card, CardTitle} from 'react-materialize'


class Apartment extends React.Component {
  constructor(props){
    super(props)
    //deconstructing props to match
    const { match } = props

    this.state={
      //State is set to the current product ID
      apartmentId: match.params.id,
      apartmentData: [],
    }
  }

componentDidMount(){
  this.getApartment(this.state.apartmentId)
}
  componentDidUpdate(prevProps){
    //assign previous props to a variable
    const prevMatch = prevProps.match
    //deconstructing current props
    const { match } = this.props
    //if current id doesn't match previous id
    if(match.params.id != prevMatch.params.id){
      //set state to new ID
      this.setState({apartmentId: match.params.id})
    }
  }

  getApartment = (apartmentId) => {
    let url = `/apartments/${apartmentId}.json`
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((myJson) =>{
    this.setState({apartmentData: myJson})
    })
  }


  render () {
    const {apartmentData} = this.state

    return (
      <div key={1}>
        <Card key={1}
          className='large'
          header={<CardTitle key={1} image='https://voltaapartments.com/wp/wp-content/uploads/2015/01/vol-50.jpg'>{apartmentData.listing_name}</CardTitle>}
          actions={[<a href=''>Property Details</a>]}>
          <p>{apartmentData.address_1}, {apartmentData.city}, {apartmentData.zip_code}</p>
          <p>{apartmentData.management_company} - {apartmentData.management_company_phone}</p>
        </Card>
      </div>
    )
  }
}

export default Apartment
