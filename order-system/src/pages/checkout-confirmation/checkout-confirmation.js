import React from 'react'
import styled from 'styled-components'
import {
  Button,
  Container,
  Divider as MaterialDivider,
  Paper,
  Typography
} from '@material-ui/core'
import { Content, H4, H6, OrderInfo } from 'ui'
import FooterCheckout from 'pages/checkout/footer-checkout'
import { useAuth } from 'hooks'

function CheckoutConfirmation () {
  const { userInfo } = useAuth()

  return (
    <>
      <Content>
        <Header>
          <H4>Hi {userInfo.user.firstName}</H4>
          <Typography>
          Please check if everything is OK with your order before finalizing
          </Typography>
        </Header>
        <Container maxWidth='small'>
          <PaperContainer>
            <H6>Your order:</H6>
            <OrderInfo />

            <Divider />

            <H6>Order delivery address:</H6>
            <Typography>
            Street, Complement, Zip code, City, State
            </Typography>

            <Divider />

            <H6>Contact phone:</H6>
            <Typography>
            (44) 98888-7777
            </Typography>
          </PaperContainer>
        </Container>
      </Content>
      <FooterCheckout justifyContent='center'>
        <Button variant='contained' color='primary' size='large'>
          Ok
        </Button>
      </FooterCheckout>
    </>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  text-align: center;
`

const PaperContainer = styled(Paper)`
  && {
    padding: ${({ theme }) => theme.spacing(3)}px;
  }
`

const Divider = styled(MaterialDivider)`
  && {
    margin: ${({ theme }) => theme.spacing(3, 0)}
  }
`

export default CheckoutConfirmation
