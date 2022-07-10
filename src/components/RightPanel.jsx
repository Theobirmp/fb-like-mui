import React from 'react'
import { Stack,AvatarGroup,Avatar, Typography, Badge, ImageList, ImageListItem,Box, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import {Menu,Paper,AppBar,Toolbar} from '@mui/material'
// import userImage  from '../img/userLogin.jpg'
// import userImage2  from '../img/userImage2.jpg'
// import userImage3  from '../img/userImage3.jpg'
// import userImage4  from '../img/userImage4.jpg'
// import placeImage  from '../img/placeImage.jpg'
import placeImage2  from '../img/placeImage2.jpg'
import placeImage3  from '../img/placeImage3.jpg'

import userImage  from '../img/userimage3_optimized.jpg'


import { styled } from '@mui/material/styles';
const ActiveUser = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        // animation: 'ripple 1.2s infinite ease-in-out',
        // border: '1px solid currentColor',
        content: '""',
      },
    },
    // '@keyframes ripple': {
    //   '0%': {
    //     transform: 'scale(.8)',
    //     opacity: 1,
    //   },
    //   '100%': {
    //     transform: 'scale(2.4)',
    //     opacity: 0,
    //   },
    // },
  }));
  const InactiveUser = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: 'red',
      color: 'red',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        // animation: 'ripple 1.2s infinite ease-in-out',
        content: '""',
      },
    },
  }));

  const ImageContainer=styled('div')(({theme})=>({
    display:'flex',
    gap:'10px',
    justifyContent:'center',
    [theme.breakpoints.up('md')]:{
      marginRight:'2rem'
    },[theme.breakpoints.down('md')]:{
      marginRight:'0rem',
      marginInline:'Min(10px,Max(10px,10/1920*100vw)'
    },
    '& > img':{
      width:'100%',
      // height:'auto',
      height:'10vh',
      display:'block'
    }
  }))
  const CustomDivider=styled(Divider)({
    backgroundColor:'primary',
    height:'100px'
  })
  
const RightPanel = ({liveMessages,setLiveMessages,panels}) => {
    console.log('right panel re render')
    function addLiveMessage(e){
        if(!liveMessages.includes(e.currentTarget.id)){
            let temp=[...liveMessages]
            temp.push(e.currentTarget.id)
            setLiveMessages(temp)
        }
    }
    return (
    <Stack sx={{display:{
      xs:panels.RightPanel==='inherit'?'inherit':'none',lg:'block'
    },position:{
      xs:'relative',lg:'fixed'
    },top:{
      xs:'10px',lg:'100px'
    },mr:{
      xs:'0px',lg:'16px'
    }}}right='0px' mt={10} height='100%'  justifyContent='center' alignItems='center' spacing={4}>
        <Box display='flex' flexDirection='column' width='100%' alignItems='center' >
          <Typography variant='h4' component='h3' color='primary'>Online Friends</Typography>
          <AvatarGroup max={5}>
          <ActiveUser
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="user" src={userImage} variant='circular' sx={{height:'60px',width:'60px'}}/>
        </ActiveUser>
        <InactiveUser
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="user" src={userImage} sx={{height:'60px',width:'60px'}}/>
        </InactiveUser>
        <ActiveUser
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="user" src={userImage} sx={{height:'60px',width:'60px'}}/>
        </ActiveUser>
        <InactiveUser
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="user" src={userImage} sx={{height:'60px',width:'60px'}}/>
        </InactiveUser>
        <InactiveUser
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="user" src={userImage} sx={{height:'60px',width:'60px'}}/>
        </InactiveUser>
        
        <InactiveUser
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="user" src={userImage} sx={{height:'60px',width:'60px'}}/>
        </InactiveUser>
        <InactiveUser
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="user" src={userImage} sx={{height:'60px',width:'60px'}}/>
        </InactiveUser>
          </AvatarGroup>
        </Box>
        <Divider sx={{backgroundColor:'primary.main',width:'75%'}}/>
        <Box width='100%'>
            <Typography variant='h4' component='h3' color='primary' sx={{textAlign:{xs:'center',lg:'unset'}}}>Latest Photos</Typography>
            <ImageContainer>
               <img src={userImage} alt="" width={90} height={90} loading='lazy'/> 
               <img src={userImage} alt="" width={90} height={90} loading='lazy'/> 
               <img src={userImage} alt="" width={90} height={90} loading='lazy'/> 
            </ImageContainer>
        </Box>
        
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
        <Typography variant='h4' component='h3' color='primary' alignSelf='flex-start' sx={{alignSelf:{xs:'center',lg:'start'}}}>Latest Messages</Typography>
            <List sx={{width:"75%",alignItems:'center',justifyContent:'center'}}>
                <ListItem button id='1' onClick={addLiveMessage}>
                    <ListItemAvatar>
                        <Avatar alt='user' src={userImage}/>
                    </ListItemAvatar>
                    <ListItemText primary="User 1" secondary="Placeholder text..." />
                </ListItem>
                <Divider/>
                <ListItem button id='2' onClick={addLiveMessage}>
                    <ListItemAvatar>
                        <Avatar alt='user' src={userImage}/>
                    </ListItemAvatar>
                    <ListItemText primary="User 2" secondary="Placeholder text..." />
                </ListItem>
                <Divider/>
                <ListItem button id='3' onClick={addLiveMessage}>
                    <ListItemAvatar>
                        <Avatar alt='user' src={userImage}/>
                    </ListItemAvatar>
                    <ListItemText primary="User 3" secondary="Placeholder text..." />
                </ListItem>
                <Divider/>
            </List>
        </Box>
    </Stack>
  )
}

export default RightPanel
{/* this stack contains all the latest messages */}
{/* <Stack direction='column'> 
<Box sx={{display:'flex',flexDirection:'row'}}>
    <Avatar alt='user' src={userImage}/>
    <Box sx={{display:'flex',flexDirection:'column'}}>
        <Typography variant='h4' component='h4'>Name</Typography>
        <Typography variant='span' component='span'>This is a placeholder message</Typography>
    </Box>
</Box>
<Divider/>
<Box sx={{display:'flex',flexDirection:'row'}}>
    <Avatar alt='user' src={userImage}/>
    <Box sx={{display:'flex',flexDirection:'column'}}>
        <Typography variant='h4' component='h4'>Name</Typography>
        <Typography variant='span' component='span'>This is a placeholder message</Typography>
    </Box>
</Box>
<Divider/>
<Box sx={{display:'flex',flexDirection:'row'}}>
    <Avatar alt='user' src={userImage}/>
    <Box sx={{display:'flex',flexDirection:'column'}}>
        <Typography variant='h4' component='h4'>Name</Typography>
        <Typography variant='span' component='span'>This is a placeholder message</Typography>
    </Box>
</Box>
</Stack> */}



 {/* THIS IS REALLY SLOW BTW */}
        {/* <Box>
            <Typography variant='h4' component='h3' color='primary'>Latest Photos</Typography>
        <ImageList cols={3} gap={4}>
            <ImageListItem>
                <img src={placeImage} alt="view" />
            </ImageListItem>
            <ImageListItem>
                <img src={placeImage2} alt="view" />
            </ImageListItem>
            <ImageListItem>
                <img src={placeImage3} alt="view" />
            </ImageListItem>
        </ImageList>  
        </Box> */}