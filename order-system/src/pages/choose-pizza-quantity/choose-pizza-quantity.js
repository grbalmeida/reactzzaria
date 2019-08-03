import React from 'react'
import styled from 'styled-components'
import { Input as MaterialInput } from '@material-ui/core'

import {
  Content,
  HeaderContent,
  H4,
  Footer
} from 'ui'
import { HOME, CHOOSE_PIZZA_FLAVOURS } from 'routes'

function ChoosePizzaQuantity () {
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
            defaultValue='1'
            autoFocus
          />
        </MainContent>
      </Content>
      <Footer
        buttons={[
          {
            to: CHOOSE_PIZZA_FLAVOURS,
            children: 'Change flavours'
          },
          {
            to: HOME,
            children: 'Checkout',
            color: 'primary'
          }
        ]}
      />
    </>
  )
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
