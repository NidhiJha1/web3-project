import React from 'react';
import styled from 'styled-components';
import Logo from '../../Images';
import dateFormat from "dateformat";

const Root = styled.div`
height:fit-content;
width:100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap:${(p) => p.theme.spacing.sm};
@media(max-width:${(p) => p.theme.screen.md}){
    grid-template-columns: 1fr 1fr 1fr;
    gap:${(p) => p.theme.spacing.xs};
  }
@media(max-width:${(p) => p.theme.screen.sm}){
    gap:${(p) => p.theme.spacing.xs};
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width:${(p) => p.theme.screen.xs}){
    grid-template-columns: 1fr;
  }

`;

const Card = styled.div`
background-color: ${(p) => p.theme.colors.SectionBackgroundColor};
color: ${(p) => p.theme.colors.textColor};
border-radius: ${(p) => p.theme.radius.xs};
margin-top: ${(p) => p.theme.spacing.sm};
display:flex;
flex-direction:column;
border-radius:${(p) => p.theme.radius.sm};
`;

const Image = styled.img`
width: 100% !important;
height: 250px;
// object-fit: contain;
border-radius:${(p) => p.theme.radius.sm};
&:hover {
  cursor: pointer;
}
`;

const Info = styled.div`
padding:${(p) => p.theme.spacing.sm};
display:flex;
justify-content:space-between;
align-items:center;
`;

const Name = styled.div`
margin-bottom:${(p) => p.theme.spacing.xs};
`;

const Price = styled.div`
display:flex;
align-items:center;
justify-content:right;
margin-top:${(p) => p.theme.spacing.xs};
font-size:${(p) => p.theme.font.size.xxs};
`;

const Date = styled.div`
font-size:${(p) => p.theme.font.size.xxs};
`;

const Address = styled.div`
 color:${(p) => p.theme.colors.orange};
 font-size:${(p) => p.theme.font.size.xs};
`;

const Span = styled.span`
 font-size:${(p) => p.theme.font.size.tiny};
`;

const Icon = styled.img`
width:20px;
`;

const LeftWrapper = styled.div`

`;

const RightWrapper= styled.div`
display:flex;
flex-direction:column;
justify-content:right;
align-items:right;
`;
const NFTSCard = ({nft}) => {
    return(
        <Root>
            {nft.map((nft) =>{
                return (
                    <Card key={nft.id}>
                         <Image src={nft.image_url}/>
                         <Info>
                           <LeftWrapper>
                            <Name>{nft.name}</Name>
                             <Address> <Span>Wallet :</Span> {nft.creator.address.slice(0,4)}....{nft.creator.address.slice(-4)}</Address>
                            </LeftWrapper>
                            <RightWrapper>
                            <Date><Span>created At :</Span> {dateFormat(nft.collection.created_date, "yyyy-mm-dd")}</Date>
                            <Price><Icon src={Logo.EthereumLogo}/>{nft.traits[0].value}</Price>
                            </RightWrapper>
                         </Info>
                    </Card>
                )
            })}
        </Root>
    );
};

export default NFTSCard;