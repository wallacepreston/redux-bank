import React, { useState, useEffect } from 'react';
import store, {deposit, withdraw} from './store';

export function App() {
    const [balanceAmount, setBalanceAmount] = useState(0);

    useEffect(() => {
        store.subscribe(() => {
        const storeState = store.getState();
        setBalanceAmount(storeState.balance);
        });
    });

    return (
      <div>
        <header>
          <br />Redux Bank
        </header>
        <br />
        <h1>{balanceAmount}</h1>
        <div className="atm">
          <button onClick={() => {
            store.dispatch(deposit(5));
          }}>Deposit $5</button>
          <button onClick={() => {
            store.dispatch(deposit(25));
          }}>Deposit $25</button>
          <button onClick={() => {
            store.dispatch(withdraw(5));
          }}>Withdraw $5</button>
          <button onClick={() => {
            store.dispatch(withdraw(25));
          }}>Withdraw $25</button>
        </div>
      </div>
    );
  }