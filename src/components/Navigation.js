import React from "react";
import styled from "styled-components";

const Header = styled.div`
    background-color:${(p) => p.theme.colors.menuBg};
    color:${(p) => p.theme.colors.textColor};
    padding:${(p) => p.theme.newspacing.md} ${(p) => p.theme.spacing.lg}
`;
const Navigation = ({ currentAccount }) => {
  return (
    <>
      <Header>
          Web3 Connect Wallet
          
      </Header>
    </>
  );
};

export default Navigation;
