// import { BigNumber } from "../../../node_modules/bignumber.js/bignumber.mjs";
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

const Div = styled.div`
margin-bottom:${(p) => p.theme.spacing.sm};
`;
const Home = (props) => {
  const BN = require('bn.js');
var a = new BN('dead', 16);
var b = new BN('101010', 2);

var res = a.add(b);
console.log(res.toString(10));   

const BigNumber = require('bignumber.js');
let x = new BigNumber(123.4567);
let y = BigNumber('123456.7e-3');
let z = new BigNumber(x);
console.log("x",x);
x.isEqualTo(y) && y.isEqualTo(z) && x.isEqualTo(z);

console.log(new BigNumber(Number.MAX_VALUE.toString(2), 2));
console.log(Math.pow(2,53));
  return (
    <Card >
      <h1>Welcome</h1>
      <Div>{props.currentAccount}</Div>
      <Div>{props.balance} ETH</Div>
      <Div>tokenname : {props.tokenName}</Div>
      <Div>tokensymbol : {props.tokenSymbol}</Div>
      <Div>decimal : {props.decimaloftoken}</Div>
      <Div>Token Blance : {props.balanceOfUserinwei}</Div>
      <Div>TotalSupplyOfTokens : {props.totalSupplyofToken}</Div>
    </Card>
  );
};
export default Home;
