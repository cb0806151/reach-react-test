import logo from './logo.svg';
import './App.css';
import * as reach from '@reach-sh/stdlib/ALGO';
import { useRef } from 'react';

function App() {
  const account = useRef();
  const balance = useRef();
  const fundAmount = useRef();
  const connectWallet = async () => {
    await getAccount();
    await getBalance();
  }
  const getAccount = async () => {
    account.current = await reach.getDefaultAccount();
    console.log(account.current);
    console.log(account.current.getAddress());
  }
  const getBalance = async () => {
    let rawBalance = await reach.balanceOf(account.current);
    balance.current = reach.formatCurrency(rawBalance, 4);
    console.log(balance.current);
  }
  const fundWallet = async () => {
    let faucet = await reach.getFaucet();
    await reach.transfer(faucet, account.current, reach.parseCurrency(fundAmount.current));
    await getBalance();
  }
  return (
    <div>
      <button onClick={connectWallet}>connect wallet</button>
      <div>
        <input onChange={(e) => fundAmount.current = e.target.value} />
        <button onClick={fundWallet}>fund wallet</button>
      </div>
    </div>
  );
}

export default App;
