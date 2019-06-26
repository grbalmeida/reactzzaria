import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardActionArea as MaterialCardActionArea,
  Divider as MaterialDivider,
  Grid,
  Typography
} from '@material-ui/core'
import styled from 'styled-components'

import { singularOrPlural } from 'utils'
import { H3, H4, HeaderContent } from 'ui'
import { AuthContext } from 'contexts/auth'
import { CHOOSE_PIZZA_FLAVOURS } from 'routes'
import pizzaSizes from 'fake-data/pizza-sizes'

const ChoosePizzaSize = () => {
  const { userInfo } = useContext(AuthContext)

  return (
    <>
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
              <CardActionArea to={{
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
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  )
}

const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`

const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  padding: 20px;
`

const CardActionArea = styled(MaterialCardActionArea).attrs({
  component: Link
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 20px 0;
`

const Pizza = styled.div`
  align-items: center;
  background: #fff;
  border: 1px solid #ccc;
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
  align-items: center;
  background: #fff;
  border-radius: 50%;
  display: flex;
  height: 80px;
  justify-content: center;
  position: relative;
  width: 80px;
  z-index: 1;
`

export default ChoosePizzaSize
