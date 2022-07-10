import React from 'react'
import { Avatar, Card, CardActions, CardContent, IconButton, Stack, Typography } from '@mui/material'
import userImage  from '../img/userImage3.jpg'
import { Box } from '@mui/system'
import CloseIcon from '@mui/icons-material/Close';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import { styled } from '@mui/material/styles';

const LiveMessages = ({liveMessages,setLiveMessages}) => {
    console.log(LiveMessages)

    const StyledCardHeader=styled(Card)(({theme})=>`
        background-color:${theme.palette.primary};
    `,);
    function handleCloseLiveMessage(index){
        let temp=[...liveMessages]
        temp=temp.filter(message=>message!=index)
        setLiveMessages(temp)
    }
    console.log('live messages panel re render')
  return (
    <Stack spacing={4} direction='row'
    sx={{position:'fixed',
    bottom:{xs:'0px',md:'10px'},
    left:'2vw',
    width:{xs:'100vw',md:'50vw'},backgroundColor:'primary',maxWidth:{xs:'unset',md:'15vw'},
    }}>
        {liveMessages.map((message,index)=>{
            return <Box maxWidth='15vw' minWidth='300px' key={message}>
                        <Card elevation={3}>
                            <Box bgcolor="primary.main" p={1} display='flex' flexDirection='row' alignItems='center' justifyContent='center' gap='5px'>
                            <Avatar alt='user' src={userImage}/>
                            <Typography color='textPrimary'>User {message}</Typography>
                            <CardActions>
                                <IconButton color='myWhite'>
                                    <CallIcon/>
                                </IconButton>
                                <IconButton color='myWhite'>
                                    <VideocamIcon/>
                                </IconButton>
                                <IconButton color='myWhite' onClick={()=>handleCloseLiveMessage(message)}>
                                    <CloseIcon/>
                                </IconButton>
                            </CardActions>
                            </Box>
                            <CardContent>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Iste repudiandae aliquid earum tenetur aut aperiam fugit 
                                ab esse laudantium qui deserunt quibusdam repellendus minus 
                                sequi explicabo, quia autem mollitia exercitationem facere 
                                ad praesentium non eveniet totam harum? Saepe, atque quod, 
                                eos aliquid est nemo vero iusto sed dolore repudiandae repellendus.
                                </CardContent>
                        </Card>
                        
                    </Box>
        })}
    </Stack>
  )
}

export default LiveMessages