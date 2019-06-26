import React from 'react'
import PropTypes from 'prop-types'

const ChoosePizzaFlavours = ({ location }) => {
  console.log(location)
  return (
    <h1>Choose the pizza flavour</h1>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.object.isRequired
}

export default ChoosePizzaFlavours
