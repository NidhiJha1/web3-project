import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import NFTSCard from "./Nft'sCard";

const Root = styled.div`
  color: ${(p) => p.theme.colors.textColor};
  width: 1200px;
  margin: ${(p) => p.theme.spacing.sm} auto;

`;

const Heading = styled.div`
 font-size:${(p) => p.theme.font.size.lg};
 font-weight:${(p) => p.theme.font.weight.bold};

`;
const CollectionCard = () => {
  const [nft, setNft] = useState([]);

  useEffect(() => {
    const getAllNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x252B54c107d109aEBA03bAaD249a0864b33E9A79&order_direction=asc"
      );
      setNft(openSeaData?.data?.assets);
    };
    getAllNfts();
  }, []);

// const BigNumber = require('bignumber.js');
//  const y = new BigNumber('45987349857634085409857349856430985')
// console.log(y.toString());
  return <Root>
    <Heading>NFT's</Heading>
    <NFTSCard nft={nft}/>
  </Root>
};

export default CollectionCard;
