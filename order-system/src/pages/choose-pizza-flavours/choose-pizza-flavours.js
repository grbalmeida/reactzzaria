import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Grid,
  Card,
  Typography
} from '@material-ui/core'

import { HOME } from 'routes'
import { H4, HeaderContent, PizzasGrid, Divider } from 'ui'
import { singularOrPlural } from 'utils'
import pizzaFlavours from 'fake-data/pizza-flavours'

const ChoosePizzaFlavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours } = location.state
  return (
    <>
      <HeaderContent>
        <H4>
          Choose up to {flavours} {' '}
          {singularOrPlural(flavours, 'flavour', 'flavours')}
        </H4>
      </HeaderContent>
      <PizzasGrid>
        {pizzaFlavours.map(pizza => (
          <Grid item key={pizza.id} xs>
            <Card>
              <Img src={pizza.image} />
              <Divider />
              <Typography>{pizza.name}</Typography>
              <Typography variant='h5'>{pizza.value[0]}</Typography>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.object.isRequired
}

const Img = styled.img`
  width: 200px;
`

export default ChoosePizzaFlavours
