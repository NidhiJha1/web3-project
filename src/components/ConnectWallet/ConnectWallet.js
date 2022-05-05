import { useState } from "react";
import styled from 'styled-components';

const Card = styled.div`
color:${(p) => p.theme.colors.textColor};
 background-color:${(p) => p.theme.colors.SectionBackgroundColor};
 width:50%;
 margin:${(p) => p.theme.spacing.sm} auto;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;
 border-radius:${(p) => p.theme.radius.xs};
 padding:${(p) => p.theme.spacing.sm};
`;

const Button = styled.button`
  background-color:${(p) => p.theme.colors.skyColor};
  border:none;
  padding:${(p) => p.theme.spacing.sm} ${(p) => p.theme.spacing.lg};
  color:${(p) => p.theme.colors.textColor};
  font-weight:${(p) => p.theme.font.weight.bold};
  border-radius:${(p) => p.theme.radius.xxl};

`;
const ConnectWallet = (props) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      window.alert("No Ethereum browser detected! Check out MetaMask");
    }
    return provider;
  };

  const onLoginHandler = async () => {
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        console.error(
          "Not window.ethereum provider. Do you have multiple wallet installed ?"
        );
      }
      setIsConnecting(true);
      await provider.request({
        method: "eth_requestAccounts",
      });
      setIsConnecting(false);
    }
    props.onLogin(provider);
  };

  return (
    <Card>
      <Button onClick={onLoginHandler}  type="button">
        {!isConnecting && "Connect Wallet"}
        {isConnecting && "Loading..."}
      </Button>
    </Card>
  );
};

export default ConnectWallet;
