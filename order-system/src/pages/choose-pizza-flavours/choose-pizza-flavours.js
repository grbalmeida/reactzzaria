import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Grid,
  Card as MaterialCard,
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
    if (checkboxesChecked(checkboxes).length === flavours && e.target.checked === true) {
      return
    }

    setCheckboxes(checkboxes => {
      return {
        ...checkboxes,
        [pizzaId]: e.target.checked
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
            <Card checked={!!checkboxes[pizza.id]}>
              <Label>
                <Checkbox
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

function checkboxesChecked (checkboxes) {
  return Object.values(checkboxes).filter(Boolean)
}

const Card = styled(MaterialCard)`
  border: 2px solid transparent;
  border-color: ${({ theme, checked }) => checked ? theme.palette.secondary.light : ''};
`

const Label = styled(CardLink).attrs({
  component: 'label'
})``

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`

const Img = styled.img`
  width: 200px;
`

export default ChoosePizzaFlavours
