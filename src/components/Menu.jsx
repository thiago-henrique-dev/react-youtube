import React from "react";
import styled from "styled-components";
import thgTube from '../img/logo.png'
import HomeIcon from '@mui/icons-material/Home'
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";


const Container = styled.div`
  flex: 1.5;
  background-color: ${({theme}) =>  theme.bgLighter};
  height: 140vh;
  color: ${({theme}) =>  theme.text};
  position: sticky;
  top: 0;   
`;
const Wrapper = styled.div`
  padding: 18px 32px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 14px;
`;


const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    padding: 7.5px 0px;
    cursor: pointer;
`
const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px solid${({theme}) =>  theme.soft};  
`
const Login = styled.div`
`
const Button = styled.button`
      padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`
const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-botton: 20px;
`


export default function Menu({darkMode, setDarkMode}) {
  return (
    <Container>
      <Wrapper>
        <Logo>
            <Img src={thgTube}/>
            YouTube 
        </Logo>
        <Item>
            <HomeIcon/> 
            Home
        </Item>
  
        <Item>
            <ExploreOutlinedIcon/> 
            Explore
        </Item>
       
        <Item>
            <SubscriptionsOutlinedIcon/> 
            Subscriptions
        </Item>
        <Hr/>
        <Item>
            <VideoLibraryOutlinedIcon/> 
            Video
        </Item>
        <Hr/>
        <Item>
            <HistoryOutlinedIcon/> 
           History
        </Item>
        <Hr/>
        <Login>
            Sign in to like videos, comment, and subscribe.
            <Button>SIGN IN</Button>
        </Login>
        <Hr/>
        <Title>Best of thg PROJECTS</Title>
        <Item>
            <LibraryMusicOutlinedIcon/> 
           Music
        </Item>
      
        <Item>
            <SportsEsportsOutlinedIcon/> 
          Sports
        </Item>
     
        <Item>
            <MovieOutlinedIcon/> 
           Gaming
        </Item>
   
        <Item>
            <ArticleOutlinedIcon /> 
          News
        </Item>
    
        <Item>
            <AccountCircleOutlinedIcon  /> 
         Live
        </Item>
        <Hr/>
        <Item>
            <SettingsOutlinedIcon /> 
          Sethings
        </Item>
       
        <Item>
            <FlagOutlinedIcon /> 
          Report
        </Item>
    
        <Item>
            <HelpOutlineOutlinedIcon /> 
           Help
        </Item>
    
        <Item onClick={() => setDarkMode(!darkMode)}>
            <SettingsBrightnessOutlinedIcon /> 
         Light Mode
        </Item>

      </Wrapper>
    </Container>
  );
}
