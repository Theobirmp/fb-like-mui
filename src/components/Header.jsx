import { AppBar, Badge, Stack, IconButton, Toolbar, InputBase, Avatar, MenuItem, Typography, Divider } from '@mui/material'
import { FormControlLabel,Switch,Menu } from '@mui/material';

import React,{useState} from 'react'
import { Box } from '@mui/system';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import styled from '@emotion/styled';
import userImage  from '../img/userLogin.jpg'
import CloseIcon from '@mui/icons-material/Close';

const SearchBar=styled(InputBase)({
    color:'white!important',
    fontSize:'20px!important'
})

const Header = () => {
    // const theme=useTheme();
    //notifications switch
    const [showNotifications,setShowNotifications]=useState(false)
    function handleSwitch(){
        setShowNotifications(showNotifications=>!showNotifications)
    }
    //messages dropdown menu
    const [messages,setMessages]=useState(null)
    const isMessagesOpen=Boolean(messages)
    function handleMessages(e){
        setMessages(e.currentTarget)
    }
    function handleCloseMessages(){
        setMessages(null)
    }//search bar input
    const [SearchBarInput,setSearchBarInput]=useState('')
    function handleSearchBarInput(e){
        setSearchBarInput(e.target.value)
    }
  return (
    <Box>
        <AppBar color='primary' position='fixed' width='100%'>
            <Toolbar sx={{
                display:'flex',flexDirection:'row',justifyContent:'space-between',
            }}>
                {/* LOGO */}
                   <IconButton color='secondary' size='large'><LogoDevIcon color='secondary' sx={{height:'65px',width:'65px'}}/>React</IconButton>
                   {/* SEARCH BAR */}
                    <Box border='solid 5px white' borderRadius='2px'  height='100%' width='30vw' px={2} display='flex' justifyContent='space-between'>
                        <SearchBar value={SearchBarInput} onChange={handleSearchBarInput} width='200px' variant='filled' color='white' placeholder='search...'/>
                        <IconButton  size='large' color='myWhite'>
                            <SearchIcon/>
                        </IconButton>
                    </Box>
                    {/* NOTIFICATIONS - LOGIN */}
                   <Stack sx={{display:{
                       xs:'none',md:'flex'
                   }}} height='100px' width='32vw' direction='row' justifyContent='center' alignItems='center' spacing={{md:1,lg:2,xl:4}} >
                        <FormControlLabel labelPlacement='end' control={<Switch  value={showNotifications} onChange={handleSwitch}/>} label={showNotifications?'Notifications OFF':'Notifications ON'} />
                        <Badge p={2} badgeContent={4} invisible={showNotifications} color='red'>
                            <IconButton  color='secondary' onClick={handleMessages}>
                                <MessageIcon/>
                            </IconButton>
                        </Badge>
                        <Menu open={isMessagesOpen} anchorEl={messages}  
                              onClose={handleCloseMessages}>
                                  <IconButton sx={{position:'absolute',right:'10px',top:'5px',zIndex:'2'}} onClick={handleCloseMessages} >
                                  <CloseIcon/>
                                  </IconButton>
                            <MenuItem>
                                <Avatar src={userImage}></Avatar>
                                <Stack direction='column' ml={2}>
                                    <Typography variant='h6' fontWeight='bold'>Name</Typography>
                                    <Typography variant='p' component='p'>This is a placeholder message...</Typography>
                                </Stack>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <Avatar src={userImage}></Avatar>
                                <Stack direction='column' ml={2}>
                                    <Typography variant='h6' fontWeight='bold'>Name</Typography>
                                    <Typography variant='p' component='p'>This is a placeholder message...</Typography>
                                </Stack>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                            <Avatar src={userImage}></Avatar>
                            <Stack direction='column' ml={2}>
                                <Typography variant='h6' fontWeight='bold'>Name</Typography>
                                <Typography variant='p' component='p'>This is a placeholder message...</Typography>
                            </Stack>
                            </MenuItem>
                        </Menu>
                        
                        <Badge p={2} badgeContent={4} invisible={showNotifications} color='red'>
                            <IconButton  color='secondary' onClick={handleMessages}>
                                <EmailIcon/>
                            </IconButton>
                        </Badge>
                        <Badge p={5} badgeContent={4} invisible={showNotifications} color='red'>
                            <IconButton  color='secondary' onClick={handleMessages}>
                                <NotificationsNoneIcon/>
                            </IconButton>
                        </Badge>
                        <Avatar sx={{width:'65px',height:'65px'}} src={userImage}></Avatar>
                   </Stack>
            </Toolbar>
            
        </AppBar>
    </Box>

  )
}

export default Header