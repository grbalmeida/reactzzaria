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
          <Typography variant='h3' gutterBottom>
            What do you want to eat today, {userName}? =)
          </Typography>
          <Typography variant='h4' gutterBottom>
            Choose the size of the pizza:
          </Typography>
          <Grid container spacing={16}>
            {pizzaSizes.map((pizza) => (
              <Grid item key={pizza.id} xs={4}>
                <PaperPizza>
                  <div>{pizza.size}cm</div>
                  <Divider />
                  <Typography variant='h5'>{pizza.name}</Typography>
                  <Typography>
                    {pizza.slices} slices, {pizza.flavours} flavours
                  </Typography>
                </PaperPizza>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Content>
    </>
  )
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

const PaperPizza = styled(Paper)`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
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
