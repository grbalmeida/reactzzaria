import React from 'react'
import {
  Card,
  Grid,
  Typography
} from '@material-ui/core'
import styled from 'styled-components'

import { singularOrPlural } from 'utils'
import {
  CardLink,
  Content,
  Divider,
  H3,
  H4,
  HeaderContent,
  PizzasGrid
} from 'ui'
import { useAuth } from 'hooks'
import { CHOOSE_PIZZA_FLAVOURS } from 'routes'
import pizzaSizes from 'fake-data/pizza-sizes'

const ChoosePizzaSize = () => {
  const { userInfo } = useAuth()

  return (
    <Content>
      <HeaderContent>
        <H3>
          What do you want to eat today, {userInfo.user.firstName}? =)
        </H3>
        <H4>
          Choose the size of the pizza:
        </H4>
      </HeaderContent>

      <PizzasGrid>
        {pizzaSizes.map((pizza) => (
          <Grid item key={pizza.id}>
            <Card>
              <CardLink to={{
                pathname: CHOOSE_PIZZA_FLAVOURS,
                state: pizza
              }}>
                <Pizza>
                  <PizzaText>{pizza.size}cm</PizzaText>
                </Pizza>
                <Divider />
                <Typography variant='h5'>{pizza.name}</Typography>
                <Typography>
                  {pizza.slices} slices, {' '}
                  {pizza.flavours} {' '}
                  {singularOrPlural(pizza.flavours, 'flavour', 'flavours')}
                </Typography>
              </CardLink>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </Content>
  )
}

const Pizza = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.grey.A100};
  border-radius: 50%;
  display: flex;
  height: 200px;
  justify-content: center;
  position: relative;
  width: 200px;
  z-index: 1;

  &::before,
  &::after {
    background: #ccc;
    content: '';
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    height: 1px;
    width: 160px;
  }

  &::after {
    height: 160px;
    width: 1px;
  }
`

const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
  && {
    align-items: center;
    background: ${({ theme }) => theme.palette.common.white};
    border-radius: 50%;
    display: flex;
    height: 80px;
    justify-content: center;
    position: relative;
    width: 80px;
    z-index: 1;
  }
`

export default ChoosePizzaSize
