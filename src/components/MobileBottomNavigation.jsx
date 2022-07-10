import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import React from 'react'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import FeedIcon from '@mui/icons-material/Feed';
import LayersIcon from '@mui/icons-material/Layers';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useEffect } from 'react';
const MobileBottomNavigation = ({panels,setPanels}) => {
    const BottomNavigationContainer=styled(Box)({
        position:'fixed',
        bottom:0,
        width:'100%',
        margin:'0 auto',
    })
    const [currentPanel,setCurrentPanel]=useState('middlePanel')
    useEffect(()=>{
      let temp={...panels}
      if(currentPanel==='leftPanel'){
        temp.LeftPanel='inherit'
        temp.RightPanel='none'
        temp.MiddlePanel='none'
      }else if(currentPanel==='middlePanel'){
        temp.MiddlePanel='inherit'
        temp.RightPanel='none'
        temp.LeftPanel='none'
      }else if(currentPanel==='rightPanel'){
        temp.RightPanel='inherit'
        temp.MiddlePanel='none'
        temp.LeftPanel='none'
      }
      console.log('-----')
      console.log(currentPanel)
      console.log('-----')

      setPanels(temp)
    },[currentPanel])
  return (
    <BottomNavigationContainer sx={{display:{
      xs:'inherit',lg:'none'
    }}}>
        <BottomNavigation
        value={currentPanel}
        onChange={(event, newValue) => {
          setCurrentPanel(newValue);
        }}
      >
        <BottomNavigationAction value='leftPanel' label="Pages" icon={<LayersIcon />}/>
        <BottomNavigationAction value='middlePanel' label="Feed" icon={<FeedIcon />}/>
        <BottomNavigationAction value='rightPanel' label="Friends" icon={<SettingsApplicationsIcon/>} />
      </BottomNavigation>
    </BottomNavigationContainer>
  )
}

export default MobileBottomNavigation