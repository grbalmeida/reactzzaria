import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Divider as MaterialDivider,
  Grid,
  Toolbar as MaterialToolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Paper,
  withStyles
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import styled from 'styled-components'
import { AuthContext } from 'contexts/auth'
import { ReactComponent as MainLogo } from 'images/logo.svg'

const Main = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const { userInfo, logout } = useContext(AuthContext)
  const userName = userInfo.user.displayName.split(' ')[0]

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Typography color='inherit'>Hello {userName} =)</Typography>
          <IconButton color='inherit' onClick={handleOpenMenu}>
            <AccountCircle />
          </IconButton>
          <Menu
            open={!!anchorElement}
            onClose={handleClose}
            anchorEl={anchorElement}
          >
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Spacer />
      <Content>
        <Grid container direction='column' alignItems='center'>
          <Title variant='h3'>
            What do you want to eat today, {userName}? =)
          </Title>
          <Title variant='h4'>
            Choose the size of the pizza:
          </Title>
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
        </Grid>
      </Content>
    </>
  )
}

function singularOrPlural (amount, singular, plural) {
  return amount === 1 ? singular : plural
}

const pizzaSizes = [
  {
    id: 0,
    name: 'Small',
    size: 28,
    slices: 2,
    flavours: 1
  },
  {
    id: 1,
    name: 'Average',
    size: 30,
    slices: 6,
    flavours: 2
  },
  {
    id: 2,
    name: 'Big',
    size: 32,
    slices: 8,
    flavours: 3
  }
]

const Divider = styled(MaterialDivider)`
  width: 100%;
  margin: 20px 0;
`

const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})``

const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 16
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

const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`

const LogoContainer = styled.div`
  flex-grow: 1;
`

const Logo = styled(MainLogo)`
  height: 50px;
  width: 200px;

  & path {
    fill: #fff;
  }

  & line {
    stroke: #fff;
  }
`

const Content = styled.main`
  padding: 20px;
`
const style = (theme) => ({
  main: theme.mixins.toolbar
})

const SpacerWrapper = ({ classes }) => (
  <div className={classes.main} />
)

SpacerWrapper.propTypes = {
  classes: PropTypes.object
}

const Spacer = withStyles(style)(SpacerWrapper)

export default Main
