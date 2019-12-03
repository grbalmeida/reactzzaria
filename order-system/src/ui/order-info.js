import React from 'react'
import {
  List,
  ListItem,
  Typography
} from '@material-ui/core'
import { useOrder } from 'hooks'
import { singularOrPlural } from 'utils'

function OrderInfo () {
  const { order } = useOrder()

  return (
    <List>
      {order.pizzas.map((pizza, index) => {
        const { pizzaFlavours, pizzaSize, quantity } = pizza
        const { name, slices, flavours } = pizzaSize

        return (
          <ListItem key={index}>
            <Typography>
              <b>{quantity} {' '}</b>
              <b>{name.toUpperCase()}</b> {'- '}
              {singularOrPlural(quantity, 'pizza', 'pizzas')} {' '}
                        ({slices} {singularOrPlural(slices, 'slice', 'slices')}, {' '}
              {flavours} {singularOrPlural(flavours, 'flavour', 'flavours')})

              <br />

              {singularOrPlural(pizzaFlavours.length, 'in flavour', 'in the flavours')}{' '}
              <b>{pizzaFlavours.map(({ name }) => name).join(', ')}</b>
            </Typography>
          </ListItem>
        )
      })}
    </List>
  )
}

export default OrderInfo
