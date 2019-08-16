import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import { Input as MaterialInput } from '@material-ui/core'

import {
  Content,
  HeaderContent,
  H4,
  Footer
} from 'ui'
import { HOME, CHECKOUT } from 'routes'

function ChoosePizzaQuantity ({ location }) {
  const [quantity, setQuantity] = useState(1)

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  function handleChange (e) {
    const { value } = e.target

    if (value >= 1) {
      setQuantity(value)
    }
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

const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
  & input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }
`

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`

export default ChoosePizzaQuantity
