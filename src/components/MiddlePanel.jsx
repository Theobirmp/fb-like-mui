import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Stack from '@mui/material/Stack'
import placeImage from '../img/placeImage3.jpg'
import { Divider, Menu, MenuItem } from '@mui/material';
import { useMemo } from 'react';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const ThreeDotsMenu=styled(Menu)({
    boxShadow:'none'
  })
const MiddlePanel = ({posts,panels}) => {

    const postsIsOpen=new Array(posts.length).fill(false)
    console.log(postsIsOpen)
    const [expanded, setExpanded]=useState(postsIsOpen);

  const handleExpandClick = (e) => {
    // setExpanded(!expanded);
    let temp=[...expanded]
    temp[e.currentTarget.value]=!temp[e.currentTarget.value]
    setExpanded(temp)
  };

  console.log('middle panel re render')
  console.log('---EXPANDED---')
  console.log(expanded)
  console.log('---EXPANDED---')

    const [threeDotsMenuOpen,setThreeDotsMenuOpen]=useState()
    const dotsMenuOpen=Boolean(threeDotsMenuOpen)
    function handleThreeDotsMenuOpen(e){
      setThreeDotsMenuOpen(e.currentTarget)
    }
    function handleThreeDotsMenuClose(){
      setThreeDotsMenuOpen(false)
      
    }
  return (
    <Stack sx={{display:{
      xs:panels.MiddlePanel==='inherit'?'inherit':'none',lg:'block'},width:{
      xs:'100%',sm:'80vw',md:'40vw'
    },marginInline:'20px'}}spacing={5} m='150px auto' direction='column' alignItems='center'>{posts.map((post,index)=>(
        
            <Card sx={{width:'100%'}} key={index} value={index}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="user">
            {post.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleThreeDotsMenuOpen}>
            <MoreVertIcon />
          </IconButton>
        }
        title={post.company.name}
        subheader={post.website}
      />
      <ThreeDotsMenu anchorEl={threeDotsMenuOpen} open={dotsMenuOpen} onClose={handleThreeDotsMenuClose}>
        <MenuItem>Profile</MenuItem>
        <Divider/>
        <MenuItem>Settings</MenuItem>
        <Divider/>
        <MenuItem>More...</MenuItem>
      </ThreeDotsMenu>
      <CardMedia
        component="img"
        height="194"
        image={placeImage}
        alt="Paella dish"
        loading='lazy'
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Et inventore quia commodi in aperiam repudiandae aut, 
          accusamus quae soluta. Nulla sunt quae consequatur voluptatem consequuntur hic vero optio facilis corrupti.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded[index]}
          onClick={handleExpandClick}
          aria-expanded={expanded[index]}
          aria-label="show more"
          value={index}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography paragraph>Method:</Typography> */}
          <Typography paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, numquam.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis explicabo optio maxime. 
            Necessitatibus est fugiat, ipsa pariatur laborum quae quod maiores officiis incidunt culpa excepturi 
            illo rem unde molestias dicta accusamus perferendis placeat suscipit velit magnam aliquid sunt molestiae. 
            Porro maxime cupiditate praesentium libero vero magni totam autem provident.
          </Typography>
          <Typography paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Tempore veritatis ipsum quos aut blanditiis, natus tempora et ea atque 
            ipsa numquam autem ratione architecto nesciunt amet, quidem laboriosam 
            ipsam eaque! Incidunt magni in animi esse sint vitae iste illo, sunt 
            reiciendis cupiditate placeat, dolor ea, aliquid minus quaerat cum quos?
          </Typography>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
        
    ))}</Stack>
    
  )
}

export default MiddlePanel