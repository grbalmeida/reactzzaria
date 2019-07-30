import React, { useState } from 'react'
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar as MaterialToolbar,
  Typography
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import styled from 'styled-components'

import { useAuth } from 'hooks'
import { ReactComponent as MainLogo } from 'images/logo.svg'

const Header = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const { userInfo, logout } = useAuth()

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  return (
    <AppBar>
      <Toolbar>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Typography color='inherit'>Hello {userInfo.user.firstName} =)</Typography>
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
  )
}

const Toolbar = styled(MaterialToolbar)`
  && {
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.values.lg};
    width: 100%;
  }
`

const LogoContainer = styled.div`
  flex-grow: 1;
`

const Logo = styled(MainLogo)`
  height: 50px;
  width: 200px;

  & path {
    fill: ${({ theme }) => theme.palette.common.white};
  }

  & line {
    stroke: ${({ theme }) => theme.palette.common.white};
  }
`

export default Header
