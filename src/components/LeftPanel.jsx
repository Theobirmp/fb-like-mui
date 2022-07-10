import React from 'react'
import {Stack,List,ListItem,ListItemIcon, Typography, IconButton, Switch, FormControlLabel} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { styled } from '@material-ui/styles';
import { useContext } from 'react';
import { useState } from 'react';
// import DarkModeContext from '../theme/DarkModeContext'
const LinkItem=styled(Typography)({
    '&:hover':{
        textDecoration:'underline',
        cursor:'pointer'
    }
})

const LeftPanel = ({mode,setMode,panels}) => {
    function toggleLightTheme(){
        setMode(mode=>mode==='light'?'dark':'light')
    }
    const [switchChecked,setSwitchChecked]=useState(false)
   
    // const {mode,setMode}=useContext(DarkModeContext)
    console.log('left panel re render')
  return (
    <Stack sx={{display:{
        xs:panels.LeftPanel==='inherit'?'inherit':'none',lg:'block'
      },position:{
          xs:'relative',lg:'fixed'
      },left:{
          xs:'0px',lg:'20px'
      }}} top='0px' mt={20}>
        <List>
            <ListItem>
                <ListItemIcon>
                    <IconButton >
                    <HomeIcon color='primary'/>
                    </IconButton>
                </ListItemIcon>
                <LinkItem>Homepage</LinkItem>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <IconButton>
                    <LayersIcon color='primary'/>
                    </IconButton>
                </ListItemIcon>
                <LinkItem>Pages</LinkItem>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <IconButton>
                    <PeopleIcon color='primary'/>
                    </IconButton>
                </ListItemIcon>
                <LinkItem>Groups</LinkItem>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <IconButton>
                    <StoreIcon color='primary'/>
                    </IconButton>
                </ListItemIcon>
                <LinkItem>MarketPlace</LinkItem>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <IconButton>
                    <GroupAddIcon color='primary'/>
                    </IconButton>
                </ListItemIcon>
                <LinkItem>Friends</LinkItem>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <IconButton>
                    <SettingsIcon color='primary'/>
                    </IconButton>
                </ListItemIcon>
                <LinkItem>Settings</LinkItem>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <IconButton>
                    <AccountBoxIcon color='primary'/>
                    </IconButton>
                </ListItemIcon>
                <LinkItem>Profile</LinkItem>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <IconButton>
                    <DarkModeIcon color='primary'/>
                    </IconButton>
                </ListItemIcon>
                <Switch color='primary' onClick={toggleLightTheme} checked={mode=='light'?false:true}/>
            </ListItem>
        </List>
    </Stack>
  )
}

export default LeftPanel