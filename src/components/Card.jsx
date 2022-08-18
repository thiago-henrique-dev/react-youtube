import React from 'react'
import styled from "styled-components"
import thg from '../img/thg.png'
import { Link } from "react-router-dom";


const Container = styled.div`
    width: 160px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
`
const Image = styled.img`
    width: 130%;
    height: 140px;
    background-color: #999;
 ;
`
const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;

`
const Texts = styled.div`
  

`
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) =>  theme.text};

`
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) =>  theme.textSoft};
  margin: 9px 0;

`
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) =>  theme.textSoft};
  

`
export default function Card({ type}) {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
    <Container type={type}>
        <Image src="https://th.bing.com/th/id/R.daceaff2114c7090e45aa73e527dccf1?rik=9S6NNkwHsWhRdg&pid=ImgRaw&r=0"/>
        <Details>
            <ChannelImage src={thg}/>
            <Texts>
                <Title>Natureza</Title>
                <ChannelName>thiagohenriquedev</ChannelName>
                <Info>660,908 views • 1 day ago</Info>
            </Texts>
        </Details>
    </Container>
    </Link>
  )
}
