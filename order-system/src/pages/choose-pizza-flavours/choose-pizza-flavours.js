import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Grid,
  Card,
  Typography
} from '@material-ui/core'

import { HOME } from 'routes'
import {
  CardLink,
  Divider,
  H4,
  HeaderContent,
  PizzasGrid
} from 'ui'
import { singularOrPlural } from 'utils'
import pizzaFlavours from 'fake-data/pizza-flavours'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}))

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours, id } = location.state

  const handleChangeCheckBox = pizzaId => e => {
    setCheckboxes(checkboxes => {
      return {
        ...checkboxes,
        [pizzaId]: !checkboxes[pizzaId]
      }
    })
  }

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
              <Label>
                <input
                  type='checkbox'
                  checked={!!checkboxes[pizza.id]}
                  onChange={handleChangeCheckBox(pizza.id)}
                />
                <Img src={pizza.image} />
                <Divider />
                <Typography>{pizza.name}</Typography>
                <Typography variant='h5'>{pizza.value[id]}</Typography>
              </Label>
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

const Label = styled(CardLink).attrs({
  component: 'label'
})``

const Img = styled.img`
  width: 200px;
`

export default ChoosePizzaFlavours
