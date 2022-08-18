import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import thg from "../../img/thg.png";
import Comments from "./Comments";
const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.div`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommentation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

export default function Video() {
  return (
    <Container>
      <VideoWrapper>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/watch?v=CUQfurXFrgc&list=RDCUQfurXFrgc&start_radio=1"
          title="Toutube video player"
          frameBorder={0}
          allow="accelerator; autoplay; clipboard-write; encrypted-media; gyroscope; picture-picture"
          allowFullScreen
        ></iframe>
        <Title>Video Test</Title>
        <Details>
          <Info>7,948,154 views • Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
        <ChannelInfo>
          <Image src={thg} />
          <ChannelDetail>
            <ChannelName>thiagohenriquedev</ChannelName>
            <ChannelCounter>300k subscribe</ChannelCounter>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              lacinia erat at augue tincidunt, vitae laoreet sem gravida.
              Maecenas venenatis pulvinar pulvinar.
            </Description>
          </ChannelDetail>
        </ChannelInfo>
        <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments></Comments>
      </VideoWrapper>
      <Content>Content</Content>
      <Recommentation>Recommentation</Recommentation>
    </Container>
  );
}
