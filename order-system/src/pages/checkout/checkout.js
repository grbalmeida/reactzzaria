import React from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import {
  Button,
  Grid,
  Paper,
  TextField as MaterialTextField
} from '@material-ui/core'

import { CHECKOUT_CONFIRMATION, HOME } from 'routes'
import { Content, OrderInfo, Title as UiTitle } from 'ui'
import FooterCheckout from 'pages/checkout/footer-checkout'
import { useOrder } from 'hooks'

function Checkout () {
  const { order } = useOrder()

  if (!order.pizzas.length) {
    return <Redirect to={HOME} />
  }

  return (
    <>
      <Content>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Title>What is the shipping address?</Title>
            <PaperContainer>
              <Grid container spacing={2}>
                <TextField label='Zip code' xs={4} autoFocus />
                <Grid item xs={8} />
                <TextField label='Street' xs={9} />
                <TextField label='Number' xs={3} />
                <TextField label='Complement' xs={12} />
                <TextField label='City' xs={9} />
                <TextField label='State' xs={3} />
              </Grid>
            </PaperContainer>

            <Title>What's your phone number?</Title>
            <PaperContainer>
              <TextField label='Phone number' xs={4} />
            </PaperContainer>
          </Grid>
          <Grid container item xs={12} md={6} direction='column'>
            <Title>Order information</Title>
            <PaperContainer>
              <OrderInfo showOptions />
            </PaperContainer>
          </Grid>
        </Grid>
      </Content>

      <FooterCheckout>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          to={CHECKOUT_CONFIRMATION}
        >
          Confirm order
        </Button>
      </FooterCheckout>
    </>
  )
}

function TextField ({ xs, autoFocus, ...props }) {
  return (
    <Grid item xs={xs}>
      <MaterialTextField
        fullWidth
        variant='outlined'
        inputProps={{
          autoFocus
        }}
        {...props}
      />
    </Grid>
  )
}

TextField.propTypes = {
  autoFocus: PropTypes.bool,
  xs: PropTypes.number
}

const Title = styled(UiTitle).attrs({
  variant: 'h6'
})`
  && {
    text-align: left;
  }
`

const PaperContainer = styled(Paper)`
  && {
    flex-grow: 1;
    margin-bottom: ${({ theme }) => theme.spacing(5)}px;
    padding: ${({ theme }) => theme.spacing(2)}px;
  }
`

export default Checkout
