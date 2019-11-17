import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import {
  Button as MaterialButton,
  Grid,
  Typography
} from '@material-ui/core'

import { useAuth } from 'hooks'
import { singularOrPlural } from 'utils'

function FooterWithOrderAndButtons ({ buttons, history, location }) {
  const { userInfo } = useAuth()
  const { pizzaSize, pizzaFlavours } = location.state
  const { name, slices, flavours } = pizzaSize

  return (
    <Grid container>
      <OrderContainer>
        <Typography>
          <b>{userInfo.user.firstName}, your order is:</b>
        </Typography>
        <Typography>
          <b>{name.toUpperCase()}</b> pizza {'- '}
          ({slices} {singularOrPlural(slices, 'slice', 'slices')}, {' '}
          {flavours} {singularOrPlural(flavours, 'flavour', 'flavours')})
        </Typography>
        {pizzaFlavours && (
          <Typography>
            {singularOrPlural(pizzaFlavours.length, 'in the flavour', 'in the flavours')}{' '}
            <b>{pizzaFlavours.map(({ name }) => name).join(', ')}</b>
          </Typography>
        )}
      </OrderContainer>
      <ButtonsContainer>
        <Button
          {...buttons.back}
          component='a'
          onClick={(e) => {
            e.preventDefault()
            history.goBack()
          }}
        />
        <Button
          {...buttons.action}
          component={Link}
          color='primary'
        />
      </ButtonsContainer>
    </Grid>
  )
}

FooterWithOrderAndButtons.propTypes = {
  buttons: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

const OrderContainer = styled(Grid).attrs({
  item: true
})`
  && {
    flex-grow: 1;
  }
`

const ButtonsContainer = styled(Grid).attrs({
  item: true
})`
  && {
    align-items: center;
    display: flex;
  }
`

const Button = styled(MaterialButton).attrs({
  variant: 'contained'
})`
  && {
    margin-left: ${({ theme }) => theme.spacing(2)}px;
  }
`

export default withRouter(FooterWithOrderAndButtons)
