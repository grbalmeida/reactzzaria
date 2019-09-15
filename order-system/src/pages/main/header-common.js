import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import styled from 'styled-components'

import Logo from './logo'
import { useAuth } from 'hooks'
import { HOME } from 'routes'

function HeaderCommon () {
  const [anchorElement, setAnchorElement] = useState(null)
  const { userInfo, logout } = useAuth()

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  return (
    <>
      <LogoContainer>
        <LinkLogo to={HOME}>
          <Logo />
        </LinkLogo>
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
    </>
  )
}

const LogoContainer = styled.div`
  flex-grow: 1;
`

const LinkLogo = styled(Link)`
  display: inline-block;
`

export default HeaderCommon
