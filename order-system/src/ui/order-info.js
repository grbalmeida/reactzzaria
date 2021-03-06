import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  IconButton,
  List,
  ListItem as MaterialListItem,
  Typography
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useOrder } from 'hooks'
import { singularOrPlural } from 'utils'

function OrderInfo ({ showOptions }) {
  const { order, removePizzaFromOrder } = useOrder()

  return (
    <List>
      {order.pizzas.map((pizza) => {
        const { pizzaFlavours, pizzaSize, quantity } = pizza
        const { name, slices, flavours } = pizzaSize

        return (
          <ListItem key={pizza.id}>
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
            {
              showOptions &&
              <IconButton
                title='Remove'
                color='secondary'
                onClick={() => removePizzaFromOrder(pizza.id)}>
                <Close />
              </IconButton>
            }
          </ListItem>
        )
      })}
    </List>
  )
}

OrderInfo.propTypes = {
  showOptions: PropTypes.bool
}

const ListItem = styled(MaterialListItem)`
  && {
    display: flex;
    justify-content: space-between;
  }
`

export default OrderInfo
