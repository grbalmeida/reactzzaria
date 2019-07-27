import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Container,
  Grid,
  Card as MaterialCard,
  Typography
} from '@material-ui/core'

import { HOME } from 'routes'
import {
  CardLink,
  Content,
  Divider,
  H4,
  HeaderContent,
  PizzasGrid
} from 'ui'
import { singularOrPlural, toMoney } from 'utils'
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
      <Content>
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
                  <Typography variant='h5'>{toMoney(pizza.value[id])}</Typography>
                </Label>
              </Card>
            </Grid>
          ))}
        </PizzasGrid>
      </Content>
      <Footer>
        <Container>
          <Grid container>
            <OrderContainer>
              Order
            </OrderContainer>
            <Grid item>
              Action buttons
            </Grid>
          </Grid>
        </Container>
      </Footer>
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
  && {
    border: 2px solid transparent;
    border-color: ${({ theme, checked }) => checked ? theme.palette.secondary.light : ''};
  }
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

const Footer = styled.footer`
  box-shadow: 0 0 3px ${({ theme }) => theme.palette.grey['400']}
  padding: ${({ theme }) => theme.spacing(3)}px
  width: 100%
`

const OrderContainer = styled(Grid).attrs({
  item: true
})`
  && {
    flex-grow: 1;
  }
`

export default ChoosePizzaFlavours
