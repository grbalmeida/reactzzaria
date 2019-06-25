import React, { useContext } from 'react'
import {
  Divider as MaterialDivider,
  Grid,
  Paper,
  Typography
} from '@material-ui/core'
import styled from 'styled-components'

import { AuthContext } from 'contexts/auth'
import pizzaSizes from 'fake-data/pizza-sizes'

const ChoosePizzaSize = () => {
  const { userInfo } = useContext(AuthContext)

  return (
    <>
      <Grid container direction='column' alignItems='center'>
        <Title variant='h3'>
          What do you want to eat today, {userInfo.user.firstName}? =)
        </Title>
        <Title variant='h4'>
          Choose the size of the pizza:
        </Title>
      </Grid>

      <PizzasGrid>
        {pizzaSizes.map((pizza) => (
          <Grid item key={pizza.id}>
            <PaperPizza>
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
            </PaperPizza>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  )
}

function singularOrPlural (amount, singular, plural) {
  return amount === 1 ? singular : plural
}

const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})``

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

const PaperPizza = styled(Paper)`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 20px 0;
`

const Pizza = styled.div`
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  height: 200px;
  justify-content: center;
  position: relative;
  width: 200px;

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
