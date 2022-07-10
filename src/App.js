import './App.css'
import { Box } from '@mui/system';
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel"
import { theme } from './theme/Theme';
import { ThemeProvider } from '@mui/material/styles';
import {DarkModeProvider} from './theme/DarkModeContext'
import { useState } from 'react';
import { createTheme, Paper } from '@mui/material';
import styled from '@emotion/styled';
import RightPanel from './components/RightPanel';
import LiveMessages from './components/LiveMessages';
import MiddlePanel from './components/MiddlePanel';
import { useEffect } from 'react';
import MobileBottomNavigation from './components/MobileBottomNavigation';
function App() {
  const [mode,setMode]=useState('light')
  const theme=createTheme({
      breakpoints:{
          values:{
              xs:0,
              sm:600,
              md:1000,
              lg:1200,
              xl:1536
          }
      },
    palette:{
        mode,...(mode==='light')?{
            primary:{
                main:'#1760a5',
                light:'#ffffff',
            },
            myBlue:{
                main:'#cccccc',
                light:'#fff'
            },secondary:{
                main:'#ffffff',
            },myBlack:{
                main:'#000000'
            },gray:{
                main:'#E5E5E5',
                light:'#dedede',
                dark:'#979797'
            },
            mustard:{
                main:'#FCA311'
            },
            red:{
                main:'#A22C29'
            },
            myWhite:{
                main:'#ffffff'
            }
        }:{
            primary:{
                main:'#E5E5E5',
                light:'#ffffff'
            },
            myBlue:{
                main:'#cccccc',
                light:'#fff'
            },secondary:{
                main:'#ffffff',
            },myBlack:{
                main:'#ffffff'
            },gray:{
                main:'#E5E5E5',
                light:'#dedede',
                dark:'#979797'
            },
            mustard:{
                main:'#FCA311'
            },
            red:{
                main:'#A22C29'
            },
            myWhite:{
                main:'#000000'
            }
        }
        
    },
})
const AppContainer=styled(Paper)({
  backgroundColor:'primary',
  height:'100vh',
  width:'100%',
  display:'flex',
  justifyContent:'center',
  alignItems:'flex-start',
  boxShadow:'unset',
  position:'fixed'
})
    const [liveMessages,setLiveMessages]=useState([])
    const [posts,setPosts]=useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setPosts(posts=>json))
    },[])
    //mobile bottom navigation state
    const [panels,setPanels]=useState({LeftPanel:'none',MiddlePanel:'inherit',RightPanel:'none'})
  return (
    // <DarkModeProvider>
          <ThemeProvider theme={theme}>
            <Header/>
          <AppContainer  bgcolor='primary'sx={{overflowY:'scroll',display:'flex',justifyContent:'center',width:'100%'}}>
                <LeftPanel mode={mode} setMode={setMode} panels={panels}/>
                <MiddlePanel posts={posts} panels={panels}/>
                <RightPanel liveMessages={liveMessages} setLiveMessages={setLiveMessages} panels={panels}/>
            <LiveMessages liveMessages={liveMessages} setLiveMessages={setLiveMessages}/>
        </AppContainer>
        <MobileBottomNavigation panels={panels} setPanels={setPanels}/>
      </ThemeProvider>
    // </DarkModeProvider>
  );
}

export default App;
