import React from 'react'
import styled from 'styled-components'
import { Input as MaterialInput } from '@material-ui/core'
import {
  Content,
  HeaderContent,
  H4
} from 'ui'

function ChoosePizzaQuantity () {
  return (
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
