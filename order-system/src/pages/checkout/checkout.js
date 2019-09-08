import React from 'react'
import styled from 'styled-components'
import { Grid, Paper } from '@material-ui/core'

import { Content, Title as UiTitle } from 'ui'

function Checkout () {
  return (
    <Content>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Title>What is the shipping address?</Title>
          <PaperContainer>
            Shipping address
          </PaperContainer>

          <Title>What's your phone number?</Title>
          <PaperContainer>
            Phone number
          </PaperContainer>
        </Grid>
        <Grid container item xs={12} md={6} direction='column'>
          <Title>Order information</Title>
          <PaperContainer>
            Order information
          </PaperContainer>
        </Grid>
      </Grid>
    </Content>
  )
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
