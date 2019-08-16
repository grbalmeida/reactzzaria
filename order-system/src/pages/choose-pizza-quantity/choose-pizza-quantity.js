import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import { Button, Input as MaterialInput } from '@material-ui/core'

import {
  Content,
  HeaderContent,
  H4,
  Footer
} from 'ui'
import { HOME, CHECKOUT } from 'routes'
import { useOrder } from 'hooks'

function ChoosePizzaQuantity ({ location }) {
  const [quantity, setQuantity] = useState(1)
  const { addPizzaToOrder } = useOrder()

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  function handleChange (e) {
    const { value } = e.target

    if (value >= 1) {
      setQuantity(value)
    }
  }

  function addPizza () {
    addPizzaToOrder({
      size: location.state.pizzaSize.id,
      flavours: location.state.pizzaFlavours.map(flavour => flavour.id),
      quantity: ''
    })
  }

  return (
    <>
      <Content>
        <HeaderContent>
          <H4>
            How many pizzas would you like<br />
            to order with these flavors?
          </H4>
        </HeaderContent>
        <MainContent>
          <Input
            value={quantity}
            onChange={handleChange}
            autoFocus
          />
          <ButtonAddPizza onClick={addPizza}>
            Add and<br />
            assemble another pizza
          </ButtonAddPizza>
        </MainContent>
      </Content>
      <Footer
        buttons={{
          back: {
            children: 'Change flavours'
          },
          action: {
            to: CHECKOUT,
            children: 'Checkout'
          }
        }}
      />
    </>
  )
}

ChoosePizzaQuantity.propTypes = {
  location: PropTypes.object.isRequired
}

const ButtonAddPizza = styled(Button).attrs({
  color: 'secondary',
  component: Link,
  variant: 'contained'
})`
  && {
    text-align: center;
  }
`

const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;  
  }

  & input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }
`

const MainContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`

export default ChoosePizzaQuantity
