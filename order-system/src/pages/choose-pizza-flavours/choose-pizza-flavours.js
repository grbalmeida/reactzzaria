import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { HOME } from 'routes'
import { H4, HeaderContent } from 'ui'
import { singularOrPlural } from 'utils'

const ChoosePizzaFlavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours } = location.state
  return (
    <HeaderContent>
      <H4>
        Choose up to {flavours} {' '}
        {singularOrPlural(flavours, 'flavour', 'flavours')}
      </H4>
    </HeaderContent>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.object.isRequired
}

export default ChoosePizzaFlavours
